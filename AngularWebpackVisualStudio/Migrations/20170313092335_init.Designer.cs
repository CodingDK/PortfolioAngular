using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Angular2WebpackVisualStudio.Models;

namespace Angular2WebpackVisualStudio.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20170313092335_init")]
    partial class init
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.1");

            modelBuilder.Entity("PortfolioAngular.Models.PortfolioItem", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Description")
                        .IsRequired();

                    b.Property<int>("ImageIndex");

                    b.Property<JsonObject<String[]>>("Images")
                        .IsRequired();

                    b.Property<string>("Slug")
                        .IsRequired()
                        .HasMaxLength(70);

                    b.Property<string>("SubTitle")
                        .IsRequired()
                        .HasMaxLength(255);

                    b.Property<JsonObject<String[]>>("Tags")
                        .IsRequired();

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasMaxLength(50);

                    b.HasKey("Id");

                    b.HasIndex("Slug")
                        .IsUnique();

                    b.ToTable("Pf_PortfolioItems");
                });
        }
    }
}
