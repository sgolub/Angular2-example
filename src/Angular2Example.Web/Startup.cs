using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Nancy.Owin;
using System.IO;

namespace Angular2Example.Web
{
    public class Startup
    {

        public void Configure(IApplicationBuilder app)
        {
            app.UseOwin(x => x.UseNancy());
        }

        public static void Main(string[] args)
        {
            new WebHostBuilder()
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseKestrel()
                .UseStartup<Startup>()
                .Build()
                .Run();
        }
    }
}
