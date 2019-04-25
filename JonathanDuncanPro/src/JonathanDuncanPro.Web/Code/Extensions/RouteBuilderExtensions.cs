using JonathanDuncanPro.Web.Code.HtmlHelpers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using System;
using Microsoft.AspNetCore.Hosting;
using System.IO;

namespace JonathanDuncanPro.Web.Code.Extensions
{
    public static class RouteBuilderExtensions
    {
        public static void MapBundledFileAccessForDebug(this IRouteBuilder routeBuilder, IHostingEnvironment env)
        {
#if DEBUG
            foreach (var outputfileName in Bundler.GetOutputFileNames(env.ContentRootPath))
            {
                routeBuilder.MapGet(outputfileName + "/{*filePath}", context =>
                {
                    var filePath = context.GetRouteValue("filePath").ToString();

                    var extension = Path.GetExtension(filePath);
                    if (extension.Equals(".js", StringComparison.CurrentCultureIgnoreCase))
                        context.Response.ContentType = "application/javascript";
                    else if (extension.Equals(".css", StringComparison.CurrentCultureIgnoreCase))
                        context.Response.ContentType = "text/css";
                    else if (extension.Equals(".map", StringComparison.CurrentCultureIgnoreCase))
                        context.Response.ContentType = "application/json";

                    return context.Response.SendFileAsync(filePath);
                });
            }
#endif
        }
    }
}
