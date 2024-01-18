using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace react_aspcore_app.Migrations
{
    /// <inheritdoc />
    public partial class Migratie11 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "beperkingen",
                columns: table => new
                {
                    beperkingId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    beperkingType = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_beperkingen", x => x.beperkingId);
                });

            migrationBuilder.CreateTable(
                name: "rollen",
                columns: table => new
                {
                    rolId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    rolNaam = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_rollen", x => x.rolId);
                });

            migrationBuilder.CreateTable(
                name: "gebruikers",
                columns: table => new
                {
                    GebruikerId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Voornaam = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Achternaam = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    wachtwoord = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    googleId = table.Column<int>(type: "int", nullable: true),
                    rolId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_gebruikers", x => x.GebruikerId);
                    table.ForeignKey(
                        name: "FK_gebruikers_rollen_rolId",
                        column: x => x.rolId,
                        principalTable: "rollen",
                        principalColumn: "rolId");
                });

            migrationBuilder.CreateTable(
                name: "gebruikerBedrijven",
                columns: table => new
                {
                    GebruikerId = table.Column<int>(type: "int", nullable: false),
                    bedrijfsnaam = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    locatie = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    contactInformatie = table.Column<string>(type: "nvarchar(max)", nullable: false)
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
                    postcode = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    telefoonnummer = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    beperkingId = table.Column<int>(type: "int", nullable: false),
                    aandoening = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    beschikbaarheid = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    voorkeur = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    hulpmiddelen = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_gebruikerDeskundigen", x => x.GebruikerId);
                    table.ForeignKey(
                        name: "FK_gebruikerDeskundigen_beperkingen_beperkingId",
                        column: x => x.beperkingId,
                        principalTable: "beperkingen",
                        principalColumn: "beperkingId");
                    table.ForeignKey(
                        name: "FK_gebruikerDeskundigen_gebruikers_GebruikerId",
                        column: x => x.GebruikerId,
                        principalTable: "gebruikers",
                        principalColumn: "GebruikerId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "onderzoek",
                columns: table => new
                {
                    onderzoekId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    GebruikerBedrijfId = table.Column<int>(type: "int", nullable: false),
                    onderzoekNaam = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    onderzoekBeschrijving = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    onderzoekStartDatum = table.Column<DateTime>(type: "datetime2", nullable: false),
                    onderzoekEindDatum = table.Column<DateTime>(type: "datetime2", nullable: false),
                    onderzoekStatus = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    onderzoekSoort = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    GoedgekeurdDoorId = table.Column<int>(type: "int", nullable: false),
                    onderzoekLink = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    onderzoekForm = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_onderzoek", x => x.onderzoekId);
                    table.ForeignKey(
                        name: "FK_onderzoek_gebruikerBedrijven_GebruikerBedrijfId",
                        column: x => x.GebruikerBedrijfId,
                        principalTable: "gebruikerBedrijven",
                        principalColumn: "GebruikerId");
                    table.ForeignKey(
                        name: "FK_onderzoek_gebruikerBeheerders_GoedgekeurdDoorId",
                        column: x => x.GoedgekeurdDoorId,
                        principalTable: "gebruikerBeheerders",
                        principalColumn: "GebruikerId");
                });

            migrationBuilder.CreateTable(
                name: "deelname",
                columns: table => new
                {
                    GebruikerDeskundigeId = table.Column<int>(type: "int", nullable: false),
                    OnderzoekId = table.Column<int>(type: "int", nullable: false),
                    deelnameDatum = table.Column<DateTime>(type: "datetime2", nullable: false),
                    deelnameFeedback = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_deelname", x => x.GebruikerDeskundigeId);
                    table.ForeignKey(
                        name: "FK_deelname_gebruikerDeskundigen_GebruikerDeskundigeId",
                        column: x => x.GebruikerDeskundigeId,
                        principalTable: "gebruikerDeskundigen",
                        principalColumn: "GebruikerId");
                    table.ForeignKey(
                        name: "FK_deelname_onderzoek_OnderzoekId",
                        column: x => x.OnderzoekId,
                        principalTable: "onderzoek",
                        principalColumn: "onderzoekId");
                });

            migrationBuilder.CreateIndex(
                name: "IX_deelname_OnderzoekId",
                table: "deelname",
                column: "OnderzoekId");

            migrationBuilder.CreateIndex(
                name: "IX_gebruikerDeskundigen_beperkingId",
                table: "gebruikerDeskundigen",
                column: "beperkingId");

            migrationBuilder.CreateIndex(
                name: "IX_gebruikers_rolId",
                table: "gebruikers",
                column: "rolId");

            migrationBuilder.CreateIndex(
                name: "IX_onderzoek_GebruikerBedrijfId",
                table: "onderzoek",
                column: "GebruikerBedrijfId");

            migrationBuilder.CreateIndex(
                name: "IX_onderzoek_GoedgekeurdDoorId",
                table: "onderzoek",
                column: "GoedgekeurdDoorId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "deelname");

            migrationBuilder.DropTable(
                name: "gebruikerDeskundigen");

            migrationBuilder.DropTable(
                name: "onderzoek");

            migrationBuilder.DropTable(
                name: "beperkingen");

            migrationBuilder.DropTable(
                name: "gebruikerBedrijven");

            migrationBuilder.DropTable(
                name: "gebruikerBeheerders");

            migrationBuilder.DropTable(
                name: "gebruikers");

            migrationBuilder.DropTable(
                name: "rollen");
        }
    }
}
