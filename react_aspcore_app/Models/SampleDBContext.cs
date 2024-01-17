using Microsoft.EntityFrameworkCore;


    public class SampleDBContext : DbContext
    {
        public SampleDBContext(DbContextOptions<SampleDBContext> options)
            : base(options)
        {
        }

        public DbSet<Customer> Customers { get; set; }
        public DbSet<gebruiker> gebruikers { get; set; }
        public DbSet<gebruikerBedrijf> gebruikerBedrijven { get; set; }
        public DbSet<gebruikerDeskundige> gebruikerDeskundigen { get; set; }
        public DbSet<gebruikerBeheerder> gebruikerBeheerders { get; set; }
        public DbSet<onderzoek> onderzoeken { get; set; }
        public DbSet<Message> Messages { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<onderzoek>()
                .HasOne(o => o.gebruikerBedrijf)
                .WithMany()
                .HasForeignKey(o => o.GebruikerBedrijfId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<onderzoek>()
                .HasOne(o => o.gebruikerDeskundige)
                .WithMany()
                .HasForeignKey(o => o.GebruikerDeskundigeId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<onderzoek>()
                .HasOne(o => o.goedgekeurdDoor)
                .WithMany()
                .HasForeignKey(o => o.GoedgekeurdDoorId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Message>()
                .HasOne(m => m.gebruiker)
                .WithMany()
                .HasForeignKey(m => m.GebruikerId)
                .OnDelete(DeleteBehavior.Cascade);

                modelBuilder.Entity<gebruiker>()
        .ToTable("gebruikers");

            modelBuilder.Entity<gebruikerBedrijf>()
                .ToTable("gebruikerBedrijven");

            modelBuilder.Entity<gebruikerDeskundige>()
                .ToTable("gebruikerDeskundigen");

            modelBuilder.Entity<gebruikerBeheerder>()
                .ToTable("gebruikerBeheerders");

            // Do the same for other relationships that could cause multiple cascade paths
        }
    }
