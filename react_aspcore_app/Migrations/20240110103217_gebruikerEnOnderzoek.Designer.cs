﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace react_aspcore_app.Migrations
{
    [DbContext(typeof(SampleDBContext))]
    [Migration("20240110103217_gebruikerEnOnderzoek")]
    partial class gebruikerEnOnderzoek
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.14")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Customer", b =>
                {
                    b.Property<int>("CustomerId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("CustomerId"));

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("CustomerId");

                    b.ToTable("Customers");
                });

            modelBuilder.Entity("gebruiker", b =>
                {
                    b.Property<int>("GebruikerId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("GebruikerId"));

                    b.Property<string>("Achternaam")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Voornaam")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("GebruikerId");

                    b.ToTable("gebruikers", (string)null);

                    b.UseTptMappingStrategy();
                });

            modelBuilder.Entity("onderzoek", b =>
                {
                    b.Property<int>("onderzoekId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("onderzoekId"));

                    b.Property<int>("GebruikerBedrijfId")
                        .HasColumnType("int");

                    b.Property<int>("GebruikerDeskundigeId")
                        .HasColumnType("int");

                    b.Property<int>("GoedgekeurdDoorId")
                        .HasColumnType("int");

                    b.Property<string>("onderzoekBeschrijving")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("onderzoekEindDatum")
                        .HasColumnType("datetime2");

                    b.Property<string>("onderzoekNaam")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("onderzoekStartDatum")
                        .HasColumnType("datetime2");

                    b.HasKey("onderzoekId");

                    b.HasIndex("GebruikerBedrijfId");

                    b.HasIndex("GebruikerDeskundigeId");

                    b.HasIndex("GoedgekeurdDoorId");

                    b.ToTable("onderzoeken");
                });

            modelBuilder.Entity("gebruikerBedrijf", b =>
                {
                    b.HasBaseType("gebruiker");

                    b.Property<string>("bedrijfsnaam")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.ToTable("gebruikerBedrijven", (string)null);
                });

            modelBuilder.Entity("gebruikerBeheerder", b =>
                {
                    b.HasBaseType("gebruiker");

                    b.Property<string>("functie")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.ToTable("gebruikerBeheerders", (string)null);
                });

            modelBuilder.Entity("gebruikerDeskundige", b =>
                {
                    b.HasBaseType("gebruiker");

                    b.Property<string>("beperking")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.ToTable("gebruikerDeskundigen", (string)null);
                });

            modelBuilder.Entity("onderzoek", b =>
                {
                    b.HasOne("gebruikerBedrijf", "gebruikerBedrijf")
                        .WithMany()
                        .HasForeignKey("GebruikerBedrijfId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.HasOne("gebruikerDeskundige", "gebruikerDeskundige")
                        .WithMany()
                        .HasForeignKey("GebruikerDeskundigeId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.HasOne("gebruikerBeheerder", "goedgekeurdDoor")
                        .WithMany()
                        .HasForeignKey("GoedgekeurdDoorId")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.Navigation("gebruikerBedrijf");

                    b.Navigation("gebruikerDeskundige");

                    b.Navigation("goedgekeurdDoor");
                });

            modelBuilder.Entity("gebruikerBedrijf", b =>
                {
                    b.HasOne("gebruiker", null)
                        .WithOne()
                        .HasForeignKey("gebruikerBedrijf", "GebruikerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("gebruikerBeheerder", b =>
                {
                    b.HasOne("gebruiker", null)
                        .WithOne()
                        .HasForeignKey("gebruikerBeheerder", "GebruikerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("gebruikerDeskundige", b =>
                {
                    b.HasOne("gebruiker", null)
                        .WithOne()
                        .HasForeignKey("gebruikerDeskundige", "GebruikerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
