using System.ComponentModel.DataAnnotations;

public class onderzoek {
    [Key]
    public int onderzoekId { get; set;}

    public int GebruikerBedrijfId { get; set; }
    public gebruikerBedrijf gebruikerBedrijf { get; set; }

    public string onderzoekNaam { get; set;}

    public string onderzoekBeschrijving { get; set;}

    public DateTime onderzoekStartDatum { get; set;}

    public DateTime onderzoekEindDatum { get; set;}

    public string onderzoekStatus { get; set;}

    public string onderzoekSoort { get; set;}

    public int? gebruikerDeskundigeId { get; set; }
    public gebruikerDeskundige? gebruikerDeskundige { get; set; }

    public int? GoedgekeurdDoorId { get; set; }
    public gebruikerBeheerder? goedgekeurdDoor { get; set; }

     public string onderzoekLink { get; set;}

      public string onderzoekForm { get; set;}
}
