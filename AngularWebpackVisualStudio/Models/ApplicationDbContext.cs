using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Threading;
using JetBrains.Annotations;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.Extensions.Options;

namespace Angular2WebpackVisualStudio.Models
{
    public class ApplicationDbContext : DbContext { //IdentityDbContext<ApplicationUser> {
        private static string TablePrefix;// = "Pf_";

        public DbSet<PortfolioItem> PortfolioItems { get; set; }
        
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options, IOptions<ApplicationSettings> appSettings)
            : base(options) {
            TablePrefix = appSettings.Value.TablePrefix;
        }

        protected override void OnModelCreating(ModelBuilder builder) {
            base.OnModelCreating(builder);

            // Customize the ASP.NET Identity model and override the defaults if needed.
            // For example, you can rename the ASP.NET Identity table names and more.
            // Add your customizations after calling base.OnModelCreating(builder);
            builder.Entity<PortfolioItem>()
                .ToTable(TablePrefix + "PortfolioItems")
                .HasIndex(x => x.Slug).IsUnique();
            /*builder.Entity<ApplicationUser>().ForMySqlToTable(prefix + "Users");
            builder.Entity<IdentityUserLogin<string>>().ToTable(prefix + "UserLogins");
            builder.Entity<IdentityUserToken<string>>().ToTable(prefix + "UserTokens");
            builder.Entity<IdentityUserClaim<string>>().ToTable(prefix + "UserClaims");
            builder.Entity<IdentityUserRole<string>>().ToTable(prefix + "UserRoles");
            builder.Entity<IdentityRoleClaim<string>>().ToTable(prefix + "RoleClaims");
            builder.Entity<IdentityRole>().ToTable(prefix + "Roles");*/

            //builder.Entity<HistoryRow>().ToTable(prefix + "_EFMigrationsHistory").HasKey(x => x.MigrationId);
        }
    }
}
