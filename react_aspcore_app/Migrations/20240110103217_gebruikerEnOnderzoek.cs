using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace react_aspcore_app.Migrations
{
    /// <inheritdoc />
    public partial class gebruikerEnOnderzoek : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "gebruikers",
                columns: table => new
                {
                    GebruikerId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Voornaam = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Achternaam = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    email = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_gebruikers", x => x.GebruikerId);
                });

            migrationBuilder.CreateTable(
                name: "gebruikerBedrijven",
                columns: table => new
                {
                    GebruikerId = table.Column<int>(type: "int", nullable: false),
                    bedrijfsnaam = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_gebruikerBedrijven", x => x.GebruikerId);
                    table.ForeignKey(
                        name: "FK_gebruikerBedrijven_gebruikers_GebruikerId",
                        column: x => x.GebruikerId,
                        principalTable: "gebruikers",
                        principalColumn: "GebruikerId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "gebruikerBeheerders",
                columns: table => new
                {
                    GebruikerId = table.Column<int>(type: "int", nullable: false),
                    functie = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_gebruikerBeheerders", x => x.GebruikerId);
                    table.ForeignKey(
                        name: "FK_gebruikerBeheerders_gebruikers_GebruikerId",
                        column: x => x.GebruikerId,
                        principalTable: "gebruikers",
                        principalColumn: "GebruikerId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "gebruikerDeskundigen",
                columns: table => new
                {
                    GebruikerId = table.Column<int>(type: "int", nullable: false),
                    beperking = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_gebruikerDeskundigen", x => x.GebruikerId);
                    table.ForeignKey(
                        name: "FK_gebruikerDeskundigen_gebruikers_GebruikerId",
                        column: x => x.GebruikerId,
                        principalTable: "gebruikers",
                        principalColumn: "GebruikerId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "onderzoeken",
                columns: table => new
                {
                    onderzoekId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    onderzoekNaam = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    onderzoekBeschrijving = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    onderzoekStartDatum = table.Column<DateTime>(type: "datetime2", nullable: false),
                    onderzoekEindDatum = table.Column<DateTime>(type: "datetime2", nullable: false),
                    GoedgekeurdDoorId = table.Column<int>(type: "int", nullable: false),
                    GebruikerBedrijfId = table.Column<int>(type: "int", nullable: false),
                    GebruikerDeskundigeId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_onderzoeken", x => x.onderzoekId);
                    table.ForeignKey(
                        name: "FK_onderzoeken_gebruikerBedrijven_GebruikerBedrijfId",
                        column: x => x.GebruikerBedrijfId,
                        principalTable: "gebruikerBedrijven",
                        principalColumn: "GebruikerId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_onderzoeken_gebruikerBeheerders_GoedgekeurdDoorId",
                        column: x => x.GoedgekeurdDoorId,
                        principalTable: "gebruikerBeheerders",
                        principalColumn: "GebruikerId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_onderzoeken_gebruikerDeskundigen_GebruikerDeskundigeId",
                        column: x => x.GebruikerDeskundigeId,
                        principalTable: "gebruikerDeskundigen",
                        principalColumn: "GebruikerId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_onderzoeken_GebruikerBedrijfId",
                table: "onderzoeken",
                column: "GebruikerBedrijfId");

            migrationBuilder.CreateIndex(
                name: "IX_onderzoeken_GebruikerDeskundigeId",
                table: "onderzoeken",
                column: "GebruikerDeskundigeId");

            migrationBuilder.CreateIndex(
                name: "IX_onderzoeken_GoedgekeurdDoorId",
                table: "onderzoeken",
                column: "GoedgekeurdDoorId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "onderzoeken");

            migrationBuilder.DropTable(
                name: "gebruikerBedrijven");

            migrationBuilder.DropTable(
                name: "gebruikerBeheerders");

            migrationBuilder.DropTable(
                name: "gebruikerDeskundigen");

            migrationBuilder.DropTable(
                name: "gebruikers");
        }
    }
}
