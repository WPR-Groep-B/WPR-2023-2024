using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Google.Apis.Auth;
using Microsoft.AspNetCore.Identity;

public class LoginModel
{
    public required string Email { get; set; }
    public required string Wachtwoord { get; set; }
}

public class RegisterModel
{
    //Eigenschappen voor Elke gebruiker
    public required string Email { get; set; }
    public required string Wachtwoord { get; set; }
    public required string Voornaam { get; set; }
    public required string Achternaam { get; set; }
    public DateTime Geboortedatum { get; set; }

    public required string AccountType { get; set; }

    //Eigenschappen voor gebruikerBedrijf
    public string? BedrijfsNaam { get; set; }
    public string? Locatie { get; set; }
    public string? ContactInformatie { get; set; }
    //Eigenschappen voor gebruikerDeskundige
    public string? Postcode { get; set; }
    public string? Telefoonnummer { get; set; }
    public string? BeperkingsType { get; set; }
    public string? Aandoening { get; set; }
    public string? Beschikbaarheid { get; set; }
    public string? Voorkeur { get; set; }
    public string? Hulpmiddelen { get; set; }
    //Eigenschappen voor gebruikerBeheerder
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
        var gebruiker = _context.gebruikers.FirstOrDefault(g => g.email == login.Email);

        if (gebruiker == null) return NotFound();
        if (gebruiker.wachtwoord == null) return Unauthorized();

        // Create a PasswordHasher
        var passwordHasher = new PasswordHasher<gebruiker>();

        // Verify the hashed password
        var result = passwordHasher.VerifyHashedPassword(gebruiker, gebruiker.wachtwoord, login.Wachtwoord);

        if (result == PasswordVerificationResult.Failed)
        {
            // Password verification failed
            return Unauthorized();
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
        if (nieuwGebruiker == null)
        {
            return BadRequest("Empty user data.");
        }
        if (_context.gebruikers.FirstOrDefault(g => g.email == nieuwGebruiker.Email) != null)
        {
            return BadRequest("Email already exists.");
        }
        if (nieuwGebruiker.Wachtwoord == null)
        {
            return BadRequest("Password is required.");
        }
        if (nieuwGebruiker.Voornaam == null)
        {
            return BadRequest("First name is required.");
        }
        if (nieuwGebruiker.Achternaam == null)
        {
            return BadRequest("Last name is required.");
        }
        if (nieuwGebruiker.Email == null)
        {
            return BadRequest("Email is required.");
        }
        if (nieuwGebruiker.AccountType == null)
        {
            return BadRequest("Account type is required.");
        }

        gebruiker gebruiker;

        switch (nieuwGebruiker.AccountType)
        {
            case "Bedrijf":
                gebruiker = new gebruikerBedrijf
                {
                    bedrijfsnaam = nieuwGebruiker.BedrijfsNaam,
                    locatie = nieuwGebruiker.Locatie,
                    contactInformatie = nieuwGebruiker.ContactInformatie
                };
                break;
            case "Ervaring":
                gebruiker = new gebruikerDeskundige
                {

                    postcode = nieuwGebruiker.Postcode,
                    telefoonnummer = nieuwGebruiker.Telefoonnummer,
                    aandoening = nieuwGebruiker.Aandoening,
                    beperkingId = _context.beperkingen.First(b => b.beperkingType == nieuwGebruiker.BeperkingsType).beperkingId,
                    beschikbaarheid = nieuwGebruiker.Beschikbaarheid,
                    voorkeur = "test",
                    hulpmiddelen = nieuwGebruiker.Hulpmiddelen
                };
                break;
            case "beheerder":
                gebruiker = new gebruikerBeheerder
                {
                    functie = nieuwGebruiker.Functie
                };
                break;
            default:
                return BadRequest("Invalid account type.");
        }

        gebruiker.Voornaam = nieuwGebruiker.Voornaam;
        gebruiker.Achternaam = nieuwGebruiker.Achternaam;
        gebruiker.email = nieuwGebruiker.Email;
        gebruiker.geboortedatum = nieuwGebruiker.Geboortedatum;

        var Hasher = new PasswordHasher<gebruiker>();
        // Hash the password
        gebruiker.wachtwoord = Hasher.HashPassword(gebruiker, nieuwGebruiker.Wachtwoord);

        _context.gebruikers.Add(gebruiker);
        _context.SaveChanges();
        var token = GenerateJwtToken(gebruiker);
        return CreatedAtAction(nameof(Get), new
        {
            id = gebruiker.GebruikerId
        }, new { user = gebruiker, token = token });
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