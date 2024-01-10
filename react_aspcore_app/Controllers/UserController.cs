using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Identity.Client.Platforms.Features.DesktopOs.Kerberos;

[Microsoft.AspNetCore.Mvc.Route("api/[controller]")]
[ApiController]
public class UserController : ControllerBase
{
    private readonly SampleDBContext _context;

    public UserController(SampleDBContext context)
    {
        _context = context;
    }

    // GET: api/user
    [HttpGet]
    public ActionResult<IEnumerable<gebruiker>> Get()
    {
        return Ok(_context.gebruikers.ToList());
    }

    // Get: api/user/{email}{wachtwoord}
    [HttpGet("{email}/{wachtwoord}/{googleId}")]
    public ActionResult<gebruiker> Get(string email, string wachtwoord, int googleId)
    {
        var gebruiker = _context.gebruikers.FirstOrDefault(g => g.email == email && g.wachtwoord == wachtwoord && g.googleId == googleId);

        if (gebruiker == null)
        {
            return NotFound();
        }
        return gebruiker;
    }

    // POST: api/user/deskundige
    [HttpPost("deskundige")]
    public IActionResult Post([FromBody] gebruikerDeskundige nieuwGebruiker)
    {
        if (nieuwGebruiker == null)
        {
            return BadRequest();
        }

        if (nieuwGebruiker.wachtwoord == null && nieuwGebruiker.googleId == null)
        {
            return BadRequest();
        }

        _context.gebruikers.Add(nieuwGebruiker);
        _context.SaveChanges();

        return CreatedAtAction(nameof(Get), new { id = nieuwGebruiker.GebruikerId }, nieuwGebruiker);
    }
    // POST: api/user/bedrijf
    [HttpPost("bedrijf")]
    public IActionResult Post([FromBody] gebruikerBedrijf nieuwGebruiker)
    {
        if (nieuwGebruiker == null)
        {
            return BadRequest();
        }

        if (nieuwGebruiker.wachtwoord == null && nieuwGebruiker.googleId == null)
        {
            return BadRequest();
        }

        _context.gebruikers.Add(nieuwGebruiker);
        _context.SaveChanges();

        return CreatedAtAction(nameof(Get), new { id = nieuwGebruiker.GebruikerId }, nieuwGebruiker);
    }
    // POST: api/user/beheerder
    [HttpPost("beheerder")]
    public IActionResult Post([FromBody] gebruikerBeheerder nieuwGebruiker)
    {
        if (nieuwGebruiker == null)
        {
            return BadRequest();
        }

        if (nieuwGebruiker.wachtwoord == null && nieuwGebruiker.googleId == null)
        {
            return BadRequest();
        }

        _context.gebruikers.Add(nieuwGebruiker);
        _context.SaveChanges();

        return CreatedAtAction(nameof(Get), new { id = nieuwGebruiker.GebruikerId }, nieuwGebruiker);
    }

    // PUT: api/user/{id}
    [HttpPut("{id}")]
    public IActionResult Put(int id, [FromBody] gebruiker gebruiker)
    {
        if (gebruiker == null || gebruiker.GebruikerId != id)
        {
            return BadRequest();
        }

        var gebruikerToUpdate = _context.gebruikers.FirstOrDefault(g => g.GebruikerId == id);

        if (gebruikerToUpdate == null)
        {
            return NotFound();
        }

        gebruikerToUpdate.Voornaam = gebruiker.Voornaam;
        gebruikerToUpdate.Achternaam = gebruiker.Achternaam;
        gebruikerToUpdate.email = gebruiker.email;
        gebruikerToUpdate.wachtwoord = gebruiker.wachtwoord;
        gebruikerToUpdate.googleId = gebruiker.googleId;

        _context.gebruikers.Update(gebruikerToUpdate);
        _context.SaveChanges();
        return NoContent();
    }

    // Delete: api/user/{id}
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        var gebruiker = _context.gebruikers.FirstOrDefault(g => g.GebruikerId == id);

        if (gebruiker == null)
        {
            return NotFound();
        }

        _context.gebruikers.Remove(gebruiker);
        _context.SaveChanges();

        return NoContent();
    }
}