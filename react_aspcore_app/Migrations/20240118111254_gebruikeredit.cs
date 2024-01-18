using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace react_aspcore_app.Migrations
{
    /// <inheritdoc />
    public partial class gebruikeredit : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "rolId",
                table: "gebruikers",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<DateTime>(
                name: "geboortedatum",
                table: "gebruikers",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "geboortedatum",
                table: "gebruikers");

            migrationBuilder.AlterColumn<int>(
                name: "rolId",
                table: "gebruikers",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);
        }
    }
}
