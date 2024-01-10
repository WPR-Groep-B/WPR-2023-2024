using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using react_aspcore_app.Models;

namespace react_aspcore_app.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ResearchController : ControllerBase
    {
        // Tijdelijke lijst om gegevens op te slaan (vervang dit door database logica)
        private static List<onderzoek> onderzoeken = new List<onderzoek>();

        // GET: api/research
        [HttpGet]
        public ActionResult<IEnumerable<onderzoek>> Get()
        {
            // Retourneer de lijst met onderzoeken
            return Ok(onderzoeken);
        }

        // POST: api/research
        [HttpPost]
        public IActionResult Post([FromBody] onderzoek nieuwOnderzoek)
        {
            if (nieuwOnderzoek == null)
            {
                return BadRequest();
            }

            // Voeg het nieuwe onderzoek toe aan de lijst
            onderzoeken.Add(nieuwOnderzoek);

            // Retourneer een response
            return CreatedAtAction(nameof(Get), new { id = nieuwOnderzoek.Id }, nieuwOnderzoek);
        }

        // Overige methoden (PUT, DELETE) kunnen hier worden toegevoegd
    }
}