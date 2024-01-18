using System.ComponentModel.DataAnnotations;

public class gebruiker
{

    [Key]
    public int GebruikerId { get; set; }

    public string Voornaam { get; set; }

    public string Achternaam { get; set; }

    public string email { get; set; }

    public DateTime? geboortedatum { get; set; }

    public string? wachtwoord { get; set; }
    public string? googleId { get; set; }
    public rol? Rol { get; set; }
    public int? rolId { get; set; }
}
public class gebruikerBedrijf : gebruiker
{

    public string bedrijfsnaam { get; set; }

    public string locatie { get; set; }

    public string contactInformatie { get; set; }

}

public class gebruikerDeskundige : gebruiker
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

public class gebruikerBeheerder : gebruiker
{

    public string functie { get; set; }

}