using System;
using Nancy;
using System.Threading.Tasks;

namespace Angular2Example.Web
{
    public class HomeModule : NancyModule
    {
        public HomeModule()
        {
            Func<dynamic, object> index = _ => Negotiate.WithView("Index.html");

            Get("/", index);
            Get(@"/(.*)", index);
        }
    }
}
