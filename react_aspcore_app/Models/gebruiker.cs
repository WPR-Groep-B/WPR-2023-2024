using System.ComponentModel.DataAnnotations;

public class gebruiker
{

    [Key]
    public int GebruikerId { get; set; }

    public string Voornaam { get; set; }

    public string Achternaam { get; set; }

    public string email { get; set; }

    public string? wachtwoord { get; set; }
    public int? googleId { get; set; }

}

public class gebruikerBedrijf : gebruiker
{

    public string bedrijfsnaam { get; set; }

}

public class gebruikerDeskundige : gebruiker
{

    public string beperking { get; set; }

}

public class gebruikerBeheerder : gebruiker
{

    public string functie { get; set; }

}