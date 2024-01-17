using System.ComponentModel.DataAnnotations;

public class onderzoek {
    [Key]
    public int onderzoekId { get; set;}

    public string onderzoekNaam { get; set;}

    public string onderzoekBeschrijving { get; set;}

    public DateTime onderzoekStartDatum { get; set;}

    public DateTime onderzoekEindDatum { get; set;}

    public string onderzoekStatus { get; set;}

    public int GoedgekeurdDoorId { get; set; }

    public int GebruikerBedrijfId { get; set; }

    // public int GebruikerDeskundigeId { get; set; }
    // public gebruikerDeskundige gebruikerDeskundige { get; set;}

}
