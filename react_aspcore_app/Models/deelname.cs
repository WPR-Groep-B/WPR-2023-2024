using System.ComponentModel.DataAnnotations;

public class deelname {

    public int GebruikerDeskundigeId { get; set; }
    public gebruikerDeskundige gebruikerDeskundige { get; set; }

    public int OnderzoekId { get; set; }
    public onderzoek onderzoek { get; set; }

    public DateTime deelnameDatum { get; set;}

    public string deelnameFeedback { get; set;}
}