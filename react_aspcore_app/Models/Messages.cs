public class Message
{
    public int Id { get; set; }
    public required string Room { get; set; }
    public int GebruikerId { get; set; }
    public Gebruiker gebruiker { get; set; }
    public required string Text { get; set; }
    public DateTime Timestamp { get; set; }
}