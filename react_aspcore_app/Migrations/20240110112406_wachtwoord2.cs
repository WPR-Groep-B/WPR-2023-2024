using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace react_aspcore_app.Migrations
{
    /// <inheritdoc />
    public partial class wachtwoord2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "googleId",
                table: "gebruikers",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "wachtwoord",
                table: "gebruikers",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "googleId",
                table: "gebruikers");

            migrationBuilder.DropColumn(
                name: "wachtwoord",
                table: "gebruikers");
        }
    }
}
