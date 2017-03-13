using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace PortfolioAngular.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Pf_PortfolioItems",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGeneratedOnAdd", true),
                    Description = table.Column<string>(nullable: false),
                    ImageIndex = table.Column<int>(nullable: false),
                    Images = table.Column<JsonObject<String[]>>(nullable: false),
                    Slug = table.Column<string>(maxLength: 70, nullable: false),
                    SubTitle = table.Column<string>(maxLength: 255, nullable: false),
                    Tags = table.Column<JsonObject<String[]>>(nullable: false),
                    Title = table.Column<string>(maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pf_PortfolioItems", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Pf_PortfolioItems_Slug",
                table: "Pf_PortfolioItems",
                column: "Slug",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Pf_PortfolioItems");
        }
    }
}
