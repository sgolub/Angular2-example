using Nancy;
using Nancy.Conventions;
using Nancy.TinyIoc;
using System;
using System.IO;
using System.Reflection;

namespace Angular2Example.Web
{
    public class NancyBootstrapper : DefaultNancyBootstrapper
    {
        protected override IRootPathProvider RootPathProvider
        {
            get { return new RootPathProvider(); }
        }

        protected override void ConfigureConventions(NancyConventions conventions)
        {
            base.ConfigureConventions(conventions);

            conventions.StaticContentsConventions.Add(
                StaticContentConventionBuilder.AddDirectory("/node_modules", @"node_modules")
            );

            conventions.StaticContentsConventions.Add(
                StaticContentConventionBuilder.AddDirectory("/bower_components", @"bower_components")
            );

            conventions.StaticContentsConventions.Add(
                StaticContentConventionBuilder.AddDirectory("/", @"wwwroot")
            );
        }

        protected override void ApplicationStartup(TinyIoCContainer container, Nancy.Bootstrapper.IPipelines pipelines)
        {
        }
    }

    public class RootPathProvider : IRootPathProvider
    {
        private readonly Lazy<string> rootPath = new Lazy<string>(ExtractRootPath);

        public string GetRootPath()
        {
            return rootPath.Value;
        }

        private static string ExtractRootPath()
        {
            var assembly = Assembly.GetEntryAssembly();

            return Path.Combine(Path.GetDirectoryName(assembly.Location), @"..\..\..\");
        }
    }
}
