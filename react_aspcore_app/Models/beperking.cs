using System.ComponentModel.DataAnnotations;

public class beperking {
    [Key]
    public int beperkingId { get; set;}

    public string beperkingType { get; set;}
}