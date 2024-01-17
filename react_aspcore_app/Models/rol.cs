using System.ComponentModel.DataAnnotations;

public class rol {
    [Key]
    public int rolId { get; set;}

    public string rolNaam { get; set;}
}