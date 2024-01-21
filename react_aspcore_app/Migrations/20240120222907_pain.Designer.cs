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
    [Migration("20240120222907_pain")]
    partial class pain
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.14")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Message", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("GebruikerId")
                        .HasColumnType("int");

                    b.Property<string>("Room")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Text")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("Timestamp")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.HasIndex("GebruikerId");

                    b.ToTable("Messages");
                });

            modelBuilder.Entity("beperking", b =>
                {
                    b.Property<int>("beperkingId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("beperkingId"));

                    b.Property<string>("beperkingType")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("beperkingId");

                    b.ToTable("beperkingen", (string)null);
                });

            modelBuilder.Entity("deelname", b =>
                {
                    b.Property<int>("GebruikerDeskundigeId")
                        .HasColumnType("int");

                    b.Property<int>("OnderzoekId")
                        .HasColumnType("int");

                    b.Property<DateTime>("deelnameDatum")
                        .HasColumnType("datetime2");

                    b.Property<string>("deelnameFeedback")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("GebruikerDeskundigeId");

                    b.HasIndex("OnderzoekId");

                    b.ToTable("deelname", (string)null);
                });

            modelBuilder.Entity("gebruiker", b =>
                {
                    b.Property<int>("GebruikerId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("GebruikerId"));

                    b.Property<string>("Achternaam")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Voornaam")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("geboortedatum")
                        .HasColumnType("datetime2");

                    b.Property<string>("googleId")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("rolId")
                        .HasColumnType("int");

                    b.Property<string>("wachtwoord")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("GebruikerId");

                    b.HasIndex("rolId");

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

                    b.Property<int?>("GoedgekeurdDoorId")
                        .HasColumnType("int");

                    b.Property<int?>("gebruikerDeskundigeId")
                        .HasColumnType("int");

                    b.Property<string>("onderzoekBeschrijving")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("onderzoekEindDatum")
                        .HasColumnType("datetime2");

                    b.Property<string>("onderzoekForm")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("onderzoekLink")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("onderzoekNaam")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("onderzoekSoort")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("onderzoekStartDatum")
                        .HasColumnType("datetime2");

                    b.Property<string>("onderzoekStatus")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("onderzoekId");

                    b.HasIndex("GebruikerBedrijfId");

                    b.HasIndex("GoedgekeurdDoorId");

                    b.HasIndex("gebruikerDeskundigeId");

                    b.ToTable("onderzoek", (string)null);
                });

            modelBuilder.Entity("rol", b =>
                {
                    b.Property<int>("rolId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("rolId"));

                    b.Property<string>("rolNaam")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("rolId");

                    b.ToTable("rollen", (string)null);
                });

            modelBuilder.Entity("gebruikerBedrijf", b =>
                {
                    b.HasBaseType("gebruiker");

                    b.Property<string>("bedrijfsnaam")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("contactInformatie")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("locatie")
                        .HasColumnType("nvarchar(max)");

                    b.ToTable("gebruikerBedrijven", (string)null);
                });

            modelBuilder.Entity("gebruikerBeheerder", b =>
                {
                    b.HasBaseType("gebruiker");

                    b.Property<string>("functie")
                        .HasColumnType("nvarchar(max)");

                    b.ToTable("gebruikerBeheerders", (string)null);
                });

            modelBuilder.Entity("gebruikerDeskundige", b =>
                {
                    b.HasBaseType("gebruiker");

                    b.Property<string>("aandoening")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("beperkingId")
                        .HasColumnType("int");

                    b.Property<string>("beschikbaarheid")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("hulpmiddelen")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("postcode")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("telefoonnummer")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("voorkeur")
                        .HasColumnType("nvarchar(max)");

                    b.HasIndex("beperkingId");

                    b.ToTable("gebruikerDeskundigen", (string)null);
                });

            modelBuilder.Entity("Message", b =>
                {
                    b.HasOne("gebruiker", "gebruiker")
                        .WithMany()
                        .HasForeignKey("GebruikerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("gebruiker");
                });

            modelBuilder.Entity("deelname", b =>
                {
                    b.HasOne("gebruikerDeskundige", "gebruikerDeskundige")
                        .WithMany()
                        .HasForeignKey("GebruikerDeskundigeId")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.HasOne("onderzoek", "onderzoek")
                        .WithMany()
                        .HasForeignKey("OnderzoekId")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.Navigation("gebruikerDeskundige");

                    b.Navigation("onderzoek");
                });

            modelBuilder.Entity("gebruiker", b =>
                {
                    b.HasOne("rol", "Rol")
                        .WithMany()
                        .HasForeignKey("rolId")
                        .OnDelete(DeleteBehavior.NoAction);

                    b.Navigation("Rol");
                });

            modelBuilder.Entity("onderzoek", b =>
                {
                    b.HasOne("gebruikerBedrijf", "gebruikerBedrijf")
                        .WithMany()
                        .HasForeignKey("GebruikerBedrijfId")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.HasOne("gebruikerBeheerder", "goedgekeurdDoor")
                        .WithMany()
                        .HasForeignKey("GoedgekeurdDoorId")
                        .OnDelete(DeleteBehavior.NoAction);

                    b.HasOne("gebruikerDeskundige", "gebruikerDeskundige")
                        .WithMany()
                        .HasForeignKey("gebruikerDeskundigeId");

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

                    b.HasOne("beperking", "beperking")
                        .WithMany()
                        .HasForeignKey("beperkingId")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.Navigation("beperking");
                });
#pragma warning restore 612, 618
        }
    }
}
