using Askmethat.Aspnet.JsonLocalizer.Extensions;
using Autofac;
using Autofac.Extensions.DependencyInjection;
using Core;
using Core.Api;
using Core.Data;
using Core.Extensions;
using JonathanDuncanPro.Core.SharedKernel;
using JonathanDuncanPro.Infrastructure.Data;
using JonathanDuncanPro.Web.Code.Extensions;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Localization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
//using Microsoft.Extensions.Logging;
using Serilog;
using Serilog.Events;
using Swashbuckle.AspNetCore.Swagger;
using System;
using System.Globalization;
using System.Reflection;
using AppDbContext = Core.Data.AppDbContext;


using Microsoft.AspNetCore.Mvc.ApplicationParts;

using System.IO;
using Microsoft.Extensions.Logging;

namespace JonathanDuncanPro.Web
{
    public class Startup
    {
        private string _projectRootFolder;

        public Startup(IConfiguration config)
        {
            Configuration = config;

            Log.Logger = new LoggerConfiguration()
             .Enrich.FromLogContext()
             .WriteTo.RollingFile("Logs/{Date}.txt", LogEventLevel.Warning)
             .CreateLogger();
        }

        public IConfiguration Configuration { get; }

        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
            IConfigurationSection section;
            if (Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") == "Production")
            {
                section = Configuration.GetSection("Production");
            }
            else
            {
                section = Configuration.GetSection("Blogifier");
            }

            services.AddAppSettings<AppItem>(section);

            if (section.GetValue<string>("DbProvider") == "SqlServer")
            {
                AppSettings.DbOptions = options => options.UseSqlServer(section.GetValue<string>("ConnString"));
                services.AddDbContext<AppDbContext>(options =>
                 options.UseSqlServer(Configuration.GetConnectionString("jonathanduncanproconn")));
            }
            else if (section.GetValue<string>("DbProvider") == "MySql")
            {
                AppSettings.DbOptions = options => options.UseMySql(section.GetValue<string>("ConnString"));
            }
            else
            {
                AppSettings.DbOptions = options => options.UseSqlite(section.GetValue<string>("ConnString"));
            }

            services.Configure<CookiePolicyOptions>(options =>
            {
                // This lambda determines whether user consent for non-essential cookies is needed for a given request.
                options.CheckConsentNeeded = context => true;
                options.MinimumSameSitePolicy = SameSiteMode.None;
            });
            // TODO: Add DbContext and IOC
            //string dbName = Guid.NewGuid().ToString();
            //services.AddDbContext<AppDbContext>(options =>
            //    options.UseInMemoryDatabase(dbName));
            //services.AddDbContext<AppDbContext>(options =>
            //    options.UseInMemoryDatabase(dbName));
            services.AddDbContext<AppDbContext>(AppSettings.DbOptions, ServiceLifetime.Transient);

            services.AddIdentity<AppUser, IdentityRole>(options => {
                options.Password.RequireDigit = false;
                options.Password.RequiredLength = 4;
                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequireUppercase = false;
                options.Password.RequireLowercase = false;
                options.User.AllowedUserNameCharacters = null;
            })
            .AddEntityFrameworkStores<AppDbContext>()
            .AddDefaultTokenProviders();

            services.AddLogging(loggingBuilder =>
            {
                loggingBuilder.AddConfiguration(Configuration.GetSection("Logging"));
                loggingBuilder.AddConsole();
                loggingBuilder.AddDebug();
            });
            //TODO from Blogifier
            //services.AddLogging(loggingBuilder =>
            //    loggingBuilder.AddSerilog(dispose: true));

            services.AddJsonLocalization();
            services.Configure<RequestLocalizationOptions>(options =>
            {
                var supportedCultures = new[]
                {
                    new CultureInfo("en-US"),
                    new CultureInfo("ru-RU"),
                    new CultureInfo("zh-cn"),
                    new CultureInfo("zh-tw")
                };

                options.DefaultRequestCulture = new RequestCulture(culture: "en-US", uiCulture: "en-US");
                options.SupportedCultures = supportedCultures;
                options.SupportedUICultures = supportedCultures;
            });

            services.AddRouting(options => options.LowercaseUrls = true);

            services.AddMvc()
                 .AddViewLocalization()
                  .ConfigureApplicationPartManager(p =>
                  {
                      foreach (var assembly in AppConfig.GetAssemblies())
                      {
                          p.ApplicationParts.Add(new AssemblyPart(assembly));
                      }
                  })
                  .AddRazorPagesOptions(options =>
                  {
                      options.Conventions.AuthorizeFolder("/Admin");
                  })
                    .AddApplicationPart(typeof(AuthorsController).GetTypeInfo().Assembly).AddControllersAsServices()
                .AddControllersAsServices()
                .SetCompatibilityVersion(CompatibilityVersion.Version_2_2);

            services.AddWebOptimizer();

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Info { Title = "My API", Version = "v1" });
            });

            // TODO from Blogifier
            //services.AddSwaggerGen(setupAction => {
            //    setupAction.SwaggerDoc("spec",
            //        new Microsoft.OpenApi.Models.OpenApiInfo()
            //        {
            //            Title = "Blogifier API",
            //            Version = "1"
            //        });
            //    setupAction.IncludeXmlComments(Path.Combine(AppContext.BaseDirectory, "CoreAPI.xml"));
            //});
            services.AddAppServices();
            return BuildDependencyInjectionProvider(services);
        }

        private static IServiceProvider BuildDependencyInjectionProvider(IServiceCollection services)
        {
            var builder = new ContainerBuilder();

            // Populate the container using the service collection
            builder.Populate(services);

            // TODO: Add Registry Classes to eliminate reference to Infrastructure
            Assembly webAssembly = Assembly.GetExecutingAssembly();
            Assembly coreAssembly = Assembly.GetAssembly(typeof(BaseEntity));
            Assembly infrastructureAssembly = Assembly.GetAssembly(typeof(EfRepository)); // TODO: Move to Infrastucture Registry
            builder.RegisterAssemblyTypes(webAssembly, coreAssembly, infrastructureAssembly).AsImplementedInterfaces();

            IContainer applicationContainer = builder.Build();
            return new AutofacServiceProvider(applicationContainer);
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {

            _projectRootFolder = env.ContentRootPath.Substring(0,
                env.ContentRootPath.LastIndexOf(@"\ProjectRoot\", StringComparison.Ordinal) + @"\ProjectRoot\".Length);

            AppSettings.ContentRootPath = _projectRootFolder;
            Console.Write(_projectRootFolder);
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseBrowserLink();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseWebOptimizer();
           
            app.UseAuthentication();
            app.UseStaticFiles(new StaticFileOptions
            {
                OnPrepareResponse = ctx =>
                {
                    const int durationInSeconds = 60 * 60 * 24 * 366;
                    ctx.Context.Response.Headers[Microsoft.Net.Http.Headers.HeaderNames.CacheControl] =
                        "public,max-age=" + durationInSeconds;
                }
            });
            app.UseCookiePolicy();
            app.UseRequestLocalization();
            // Enable middleware to serve generated Swagger as a JSON endpoint.
            app.UseSwagger();

            // Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.), specifying the Swagger JSON endpoint.
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
            });

            AppSettings.WebRootPath = env.WebRootPath;
            AppSettings.ContentRootPath = env.ContentRootPath;

            app.UseMvc(routes =>
            {
                   routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");

                routes.MapBundledFileAccessForDebug(env);
            });
        }
    }
}

