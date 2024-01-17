using System.ComponentModel.DataAnnotations;

public class deelname {
    [Key]
    public int GebruikerDeskundigeId { get; set; }
    [Key]
    public gebruikerDeskundige gebruikerDeskundige { get; set; }

    public int OnderzoekId { get; set; }
    public onderzoek onderzoek { get; set; }

    public DateTime deelnameDatum { get; set;}

    public string deelnameFeedback { get; set;}
}