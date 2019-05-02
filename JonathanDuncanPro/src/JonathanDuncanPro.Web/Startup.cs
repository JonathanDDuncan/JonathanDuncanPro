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

        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true);

            Configuration = builder.Build();

            Log.Logger = new LoggerConfiguration()
             .Enrich.FromLogContext()
             .WriteTo.RollingFile("Logs/{Date}.txt", LogEventLevel.Warning)
             .CreateLogger();

            HostingEnvironment = env;
        }

        public IConfiguration Configuration { get; }
        public IHostingEnvironment HostingEnvironment { get; }

        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
            var section = Configuration.GetSection("Settings");

            services.AddAppSettings<AppItem>(section);
            var connectionString = section.GetValue<string>("ConnString");
            if (!connectionString.Contains("app.db".ToLowerInvariant()))
            {
                AppSettings.DbOptions = options => options.UseSqlServer(connectionString);
                services.AddDbContext<AppDbContext>(options =>
                 options.UseSqlServer(connectionString));
            }
            //else if (section.GetValue<string>("DbProvider") == "MySql")
            //{
            //    AppSettings.DbOptions = options => options.UseMySql(section.GetValue<string>("ConnString"));
            //}
            else
            {
                AppSettings.DbOptions = options => options.UseSqlite(connectionString);
            }

            services.Configure<CookiePolicyOptions>(options =>
            {
                // This lambda determines whether user consent for non-essential cookies is needed for a given request.
                options.CheckConsentNeeded = context => true;
                options.MinimumSameSitePolicy = SameSiteMode.None;
            });

            services.AddDbContext<AppDbContext>(AppSettings.DbOptions, ServiceLifetime.Transient);

            services.AddIdentity<AppUser, IdentityRole>(options =>
            {
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

            
            services.AddWebOptimizer( pipeline =>
            {
                pipeline.AddCssBundle("/css/bundle.css",
                    "/lib/bootstrap/dist/css/bootstrap.css",
                    "/classy/revolution/css/settings.css",
                    "/classy/revolution/css/layers.css",
                    "/classy/revolution/css/navigation.css",
                    "/classy/css/others/magnific-popup.css",
                    "/classy/css/others/animate.css",
                    "/classy/css/others/owl.carousel.css",
                    "/classy/css/others/YTPlayer.css",
                    "/classy/css/others/navigation.css",
                    "/classy/css/icon/font-awesome.css",
                    "/classy/css/icon/ionicons.min.css",
                    "/classy/css/icon/pe-icon-7-stroke.css",
                    "/classy/css/icon/wfmi-style.css",
                    "/classy/css/icon/et-line.css",
                    "/classy/css/icon/classy-icon.css",
                    "/classy/css/classy-shortcodes.css",
                    "/classy/css/core-style.css",
                    "/classy/css/responsive/responsive.css",
                    "/classy/css/style.css",
                    "/css/site.css"
                  );

      
               
                pipeline.AddJavaScriptBundle("/js/bundle.js",
                   "lib/jquery/jquery.js",
                   "classy/revolution/js/jquery.themepunch.tools.min.js",
                   "classy/revolution/js/jquery.themepunch.revolution.min.js",
                   "classy/revolution/js/extensions/revolution.extension.actions.min.js",
                   "classy/revolution/js/extensions/revolution.extension.carousel.min.js",
                   "classy/revolution/js/extensions/revolution.extension.kenburn.min.js",
                   "classy/revolution/js/extensions/revolution.extension.layeranimation.min.js",
                   "classy/revolution/js/extensions/revolution.extension.navigation.min.js",
                   "classy/revolution/js/extensions/revolution.extension.navigation.min.js",
                   "classy/revolution/js/extensions/revolution.extension.parallax.min.js",
                   "classy/revolution/js/extensions/revolution.extension.slideanims.js",
                   "classy/revolution/js/extensions/revolution.extension.video.min.js",
                   "classy/js/bootstrap/popper.min.js",
                   "classy/js/bootstrap/bootstrap.min.js",
                   "classy/js/include-all-plugins.js",
                   "classy/js/active.js",
                   "classy/js/revolution-slider-active/creative-slider-active.js"
                   );

                pipeline.MinifyCssFiles();
                pipeline.MinifyJsFiles();

            });

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

            _projectRootFolder = GetRootPath(env);
            AppSettings.ContentRootPath = _projectRootFolder;
            Console.Write(_projectRootFolder);
            app.UseWebOptimizer();
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
          

            app.UseAuthentication();
            app.UseStaticFiles(new StaticFileOptions
            {
                OnPrepareResponse = ctx =>
                {
                    //Browser caching for static files
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

        private static string GetRootPath(IHostingEnvironment env)
        {
            return env.ContentRootPath.Substring(0,
            env.ContentRootPath.LastIndexOf(@"\ProjectRoot\", StringComparison.Ordinal) + @"\ProjectRoot\".Length);
        }
    }
}

