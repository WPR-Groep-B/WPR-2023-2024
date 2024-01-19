using System.ComponentModel.DataAnnotations;

public class Gebruiker
{

    [Key]
    public int GebruikerId { get; set; }

    public string Voornaam { get; set; }

    public string Achternaam { get; set; }

    public string email { get; set; }

    public string? wachtwoord { get; set; }
    public int? googleId { get; set; }
    public rol Rol { get; set; }
    public int rolId { get; set; }

}

public class gebruikerBedrijf : Gebruiker
{

    public string bedrijfsnaam { get; set; }

    public string locatie { get; set; }

    public string contactInformatie { get; set; }

}

public class gebruikerDeskundige : Gebruiker
{

    public string postcode { get; set; }

    public string telefoonnummer { get; set; }

    public beperking beperking { get; set; }
    public int beperkingId { get; set; }
    public string aandoening { get; set; }

    public string beschikbaarheid { get; set; }

    public string voorkeur { get; set; }

    public string hulpmiddelen { get; set; }

}

public class gebruikerBeheerder : Gebruiker
{

    public string functie { get; set; }

}