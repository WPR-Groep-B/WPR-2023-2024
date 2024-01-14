using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Google.Apis.Auth;

public class LoginModel
{
    public required string Email { get; set; }
    public required string Wachtwoord { get; set; }
}

public class RegisterModel
{
    public required string Email { get; set; }
    public required string Wachtwoord { get; set; }
    public required string Voornaam { get; set; }
    public required string Achternaam { get; set; }

    public string? BedrijfsNaam { get; set; }
    public string? Beperking { get; set; }
    public string? Functie { get; set; }
}
public class GoogleLoginModel
{
    public required string GoogleToken { get; set; }
}

// Path: react_aspcore_app/Controllers/UserController.cs
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
        var gebruiker = _context.gebruikers.FirstOrDefault(g => g.email == login.Email && g.wachtwoord == login.Wachtwoord);

        if (gebruiker == null)
        {
            return NotFound();
        }

        var token = GenerateJwtToken(gebruiker);
        return Ok(new { user = gebruiker, token = token });
    }

    // POST: api/user/googlelogin
    [HttpPost("googlelogin")]
    public async Task<ActionResult<gebruiker>> GoogleLogin([FromBody] GoogleLoginModel GoogleToken)
    {
        // Verify the Google token
        GoogleJsonWebSignature.Payload payload;
        try
        {
            var settings = new GoogleJsonWebSignature.ValidationSettings
            {
                // Replace with your Google web app's client ID
                Audience = new List<string> { "432096940340-mbj1p2us3bgq1t2f89h7ln18me2bn82e.apps.googleusercontent.com" }
            };
            payload = await GoogleJsonWebSignature.ValidateAsync(GoogleToken.GoogleToken, settings);
        }
        catch (InvalidJwtException)
        {
            return BadRequest("Invalid Google token.");
        }


        // Check if the user exists in the database
        var gebruiker = _context.gebruikers.FirstOrDefault(g => g.googleId == payload.Subject);
        if (gebruiker == null)
        {
            // Create a new user if it doesn't exist
            if (_context.gebruikers.FirstOrDefault(g => g.email == payload.Email) != null)
            {
                return BadRequest("Email already exists.");
            }

            gebruiker = new gebruiker
            {
                email = payload.Email,
                googleId = payload.Subject,
                Voornaam = payload.GivenName,
                Achternaam = payload.FamilyName
            };
            _context.gebruikers.Add(gebruiker);
            _context.SaveChanges();
        }

        // Generate your own JWT token
        var token = GenerateJwtToken(gebruiker);
        return Ok(new { user = gebruiker, token = token });
    }

    // POST: api/user/
    [HttpPost]
    public IActionResult Post([FromBody] RegisterModel nieuwGebruiker)
    {
        if (nieuwGebruiker == null || nieuwGebruiker.Wachtwoord == null)
        {
            return BadRequest();
        }

        gebruiker gebruiker;

        if (nieuwGebruiker.BedrijfsNaam != null)
        {
            gebruiker = new gebruikerBedrijf
            {
                bedrijfsnaam = nieuwGebruiker.BedrijfsNaam
            };
        }
        else if (nieuwGebruiker.Beperking != null)
        {
            gebruiker = new gebruikerDeskundige
            {
                beperking = nieuwGebruiker.Beperking
            };
        }
        else if (nieuwGebruiker.Functie != null)
        {
            gebruiker = new gebruikerBeheerder
            {
                functie = nieuwGebruiker.Functie
            };
        }
        else
        {
            gebruiker = new gebruiker();
        }

        gebruiker.Voornaam = nieuwGebruiker.Voornaam;
        gebruiker.Achternaam = nieuwGebruiker.Achternaam;
        gebruiker.email = nieuwGebruiker.Email;
        gebruiker.wachtwoord = nieuwGebruiker.Wachtwoord;

        _context.gebruikers.Add(gebruiker);
        _context.SaveChanges();
        return CreatedAtAction(nameof(Get), new { id = gebruiker.GebruikerId }, gebruiker);
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