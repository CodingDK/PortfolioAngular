using System;
using System.Linq;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Angular2WebpackVisualStudio.Repositories.Things;
using Angular2WebpackVisualStudio.Models;
using Microsoft.AspNetCore.Authorization;
using Angular2WebpackVisualStudio.Extensions;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Angular2WebpackVisualStudio
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy("AllowAllOrigins",
                    builder =>
                    {
                        builder
                            .AllowAnyOrigin()
                            .AllowAnyHeader()
                            .AllowAnyMethod();
                    });
            });

            // Add framework services.
            services.AddSingleton<IThingsRepository, ThingsRepository>();

            var settings = Configuration.GetSection("AppSettings");
            services.Configure<ApplicationSettings>(settings);


            var historyTableName = settings.GetValue<string>("TablePrefix") + HistoryRepository.DefaultTableName;
            //"TablePrefix"
            // Add framework services.
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseMySql(Configuration.GetConnectionString("DefaultConnection"),
                x => x.MigrationsHistoryTable(historyTableName))
            );

            //services.AddIdentity<ApplicationUser, IdentityRole>()
            //    .AddEntityFrameworkStores<ApplicationDbContext>()
            //    .AddDefaultTokenProviders();
            services.AddMemoryCache();

            services.AddMvc();

            services.AddAuthorization(options => {
                options.AddPolicy("IsLocalhost",
                                  policy => policy.Requirements.Add(new IsLocalhostRequirement()));
            });

            services.AddSingleton<IAuthorizationHandler, IsLocalhostHandler>();

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            var angularRoutes = new[] {
                 "/portfolio"
             };

            app.Use(async (context, next) =>
            {
                if (context.Request.Path.HasValue && null != angularRoutes.FirstOrDefault(
                    (ar) => context.Request.Path.Value.StartsWith(ar, StringComparison.OrdinalIgnoreCase)))
                {
                    context.Request.Path = new PathString("/");
                }

                await next();
            });
            if (env.IsDevelopment()) {
                app.UseDeveloperExceptionPage();
            }
                app.UseCors("AllowAllOrigins");

            app.UseDefaultFiles();
            app.UseStaticFiles();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });
            var logger = loggerFactory.CreateLogger("Startup");
            logger.LogWarning($"Application start in environment: {env.EnvironmentName} (from injected IHostingEnvironment)");

        }
    }
}
