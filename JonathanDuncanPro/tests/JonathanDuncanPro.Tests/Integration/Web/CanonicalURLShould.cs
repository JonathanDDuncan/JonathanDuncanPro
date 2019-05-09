using JonathanDuncanPro.Core.Entities;
using JonathanDuncanPro.Web;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Xunit;

namespace JonathanDuncanPro.Tests.Integration.Web
{

    public class CanonicalURL
    {
      
        [Theory]
        [InlineData("https://www.jonathanduncan.pro", 0, @"/home/about", "", "https://www.jonathanduncan.pro/home/about")]
        [InlineData("https://www.jonathanduncan.pro", 0, @"/home/about/", "", "https://www.jonathanduncan.pro/home/about")]
        [InlineData("http://www.jonathanduncan.pro", 0, @"/home/about", "", "https://www.jonathanduncan.pro/home/about")]
        [InlineData("http://jonathanduncan.pro", 0, @"/home/about", "", "https://www.jonathanduncan.pro/home/about")]
        [InlineData("http://www.jonathanduncan.pro", 0, @"/home/about/", "", "https://www.jonathanduncan.pro/home/about")]
        [InlineData("http://jonathanduncan.pro", 0, @"/home/about/", "", "https://www.jonathanduncan.pro/home/about")]
        [InlineData("http://jonathanduncan.pro", 0, @"/home/about/", "abc=12345", "https://www.jonathanduncan.pro/home/about?abc=12345")]
        [InlineData("http://jonathanduncan.pro", 0, @"/home/about/", "?abc=12345", "https://www.jonathanduncan.pro/home/about?abc=12345")]
        [InlineData("http://localhost", 5000, @"/home/about/", "", "https://localhost:5000/home/about")]
        [InlineData("http://localhost", 5000, @"/home/about/", "abc=12345", "https://localhost:5000/home/about?abc=12345")]
        [InlineData("http://localhost", 5000, @"/home/about/", "?abc=12345", "https://localhost:5000/home/about?abc=12345")]
        public async Task CanonicalUrlTest(string host, int port, string path, string query, string expected)
        {
           var result = HttpContextExtensions.MakeCanonicalUrl(host, port, path, query);
            Assert.Equal(expected, result);
        }
    }
}
