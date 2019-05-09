using Microsoft.AspNetCore.Http;

namespace JonathanDuncanPro.Web
{
    public static class HttpContextExtensions
    {
        public static string CanonicalUrl(this HttpContext context)
        {
            var host = context.Request.Host.Host;
            var port = context.Request.Host.Port ?? 0;

            var pathBase = context.Request.PathBase.HasValue
                ? context.Request.PathBase.Value
                : string.Empty;

            var path = pathBase + context.Request.Path.Value;

            var query = context.Request.QueryString.HasValue
                ? $"{context.Request.QueryString.Value}"
                : string.Empty;

            return MakeCanonicalUrl(host, port, path, query);
        }

        public static string MakeCanonicalUrl(string host, int port, string path, string query)
        {
            var hostnoprotocol = host.ToLowerInvariant().Replace("https://", "").Replace("http://", "");
            hostnoprotocol = (!hostnoprotocol.StartsWith("localhost") && !hostnoprotocol.StartsWith("www")) ? "www." + hostnoprotocol : hostnoprotocol;
            var portString = port == 80 || port == 443 || port == 0
                ? string.Empty
                : $":{port}";

            var pathLower = path.ToLower();

            if (pathLower != "/" && pathLower.EndsWith('/'))
            {
                pathLower = pathLower.TrimEnd('/');
            }
            var querywithquestion = string.IsNullOrEmpty(query) ? query : (query.StartsWith('?') ? query : "?" + query);

            const string httpsFormat = "https://{0}{1}{2}{3}";
            return string.Format(httpsFormat, hostnoprotocol, portString, pathLower, querywithquestion);
        }
    }
}
