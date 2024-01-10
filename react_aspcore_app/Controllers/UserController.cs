using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;


public class LoginModel
{
    public required string Email { get; set; }
    public string? wachtwoord { get; set; }
    public int? googleId { get; set; }
}

[Route("api/[controller]")]
[ApiController]
public class UserController : ControllerBase
{
    

private string GenerateJwtToken(gebruiker user)
{
    var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("VGhpc0lzQVNlY3JldEtleVRoYXRJc0F0TGVhc3RTaXh0ZWVuQnl0ZXNMb25n")); // Replace "Your_Secret_Key" with your actual secret key
    var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

    var claims = new[]
    {
        new Claim(JwtRegisteredClaimNames.Sub, user.email),
        new Claim("id", user.GebruikerId.ToString()),
        new Claim("voornaam", user.Voornaam),
        new Claim("achternaam", user.Achternaam),
        new Claim("accountType", user.GetType().Name)
        // Add more claims if needed
    };

    var token = new JwtSecurityToken(
        issuer: "WPRgroepB", // Replace with your issuer
        audience: "kut kevers", // Replace with your audience
        claims: claims,
        expires: DateTime.Now.AddMinutes(30), // Token expiration time
        signingCredentials: credentials);

    return new JwtSecurityTokenHandler().WriteToken(token);
}

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

    // Post: api/user/login
    [HttpPost("login")]
    public ActionResult<gebruiker> Login([FromBody] LoginModel login)
    {
        var gebruiker = _context.gebruikers.FirstOrDefault(g => g.email == login.Email && (g.wachtwoord == login.wachtwoord || g.googleId == login.googleId));

        if (gebruiker == null)
        {
            return NotFound();
        }

        var token = GenerateJwtToken(gebruiker);
        return Ok(new { user = gebruiker, token = token });
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
    [Authorize]
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
    [Authorize]
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        var gebruiker = _context.gebruikers.First(g => g.GebruikerId == id);

        if (gebruiker == null)
        {
            return NotFound();
        }

        _context.gebruikers.Remove(gebruiker);
        _context.SaveChanges();

        return NoContent();
    }
}