using Microsoft.EntityFrameworkCore;


    public class SampleDBContext : DbContext
    {
        public SampleDBContext(DbContextOptions<SampleDBContext> options)
            : base(options)
        {
        }

        public DbSet<gebruiker> gebruikers { get; set; }
        public DbSet<gebruikerBedrijf> gebruikerBedrijven { get; set; }
        public DbSet<gebruikerDeskundige> gebruikerDeskundigen { get; set; }
        public DbSet<gebruikerBeheerder> gebruikerBeheerders { get; set; }
        public DbSet<onderzoek> onderzoeken { get; set; }
        public DbSet<deelname> deelnames { get; set; }
        public DbSet<rol> rollen { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
 
            modelBuilder.Entity<rol>()
                .ToTable("rollen");

            modelBuilder.Entity<beperking>()
                .ToTable("beperkingen");

            modelBuilder.Entity<gebruiker>()
                .ToTable("gebruikers");

            modelBuilder.Entity<gebruikerBedrijf>()
                .ToTable("gebruikerBedrijven");

            modelBuilder.Entity<gebruikerDeskundige>()
                .ToTable("gebruikerDeskundigen");

            modelBuilder.Entity<gebruikerBeheerder>()
                .ToTable("gebruikerBeheerders");

            modelBuilder.Entity<onderzoek>()
                .ToTable("onderzoek");

            modelBuilder.Entity<deelname>()
                .ToTable("deelname");

            modelBuilder.Entity<gebruikerDeskundige>()
                .HasOne(o => o.beperking)
                .WithMany()
                .HasForeignKey(o => o.beperkingId)
                .OnDelete(DeleteBehavior.NoAction);

            modelBuilder.Entity<gebruiker>()
                .HasOne(o => o.Rol)
                .WithMany()
                .HasForeignKey(o => o.rolId)
                .OnDelete(DeleteBehavior.NoAction);

            modelBuilder.Entity<onderzoek>()
                .HasOne(o => o.gebruikerBedrijf)
                .WithMany()
                .HasForeignKey(o => o.GebruikerBedrijfId)
                .OnDelete(DeleteBehavior.NoAction);

            modelBuilder.Entity<onderzoek>()
                .HasOne(o => o.goedgekeurdDoor)
                .WithMany()
                .HasForeignKey(o => o.GoedgekeurdDoorId)
                .OnDelete(DeleteBehavior.NoAction);

            modelBuilder.Entity<deelname>()
                .HasOne(o => o.gebruikerDeskundige)
                .WithMany()
                .HasForeignKey(o => o.GebruikerDeskundigeId)
                .OnDelete(DeleteBehavior.NoAction);

            modelBuilder.Entity<deelname>()
                .HasOne(o => o.onderzoek)
                .WithMany()
                .HasForeignKey(o => o.OnderzoekId)
                .OnDelete(DeleteBehavior.NoAction);

            // Do the same for other relationships that could cause multiple cascade paths
        }
    }
