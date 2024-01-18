using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace react_aspcore_app.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ResearchController : ControllerBase
    {
        private readonly SampleDBContext _context;

        public ResearchController(SampleDBContext context)
        {
            _context = context;
        }

        // GET: api/research
        [HttpGet]
        public ActionResult<IEnumerable<onderzoek>> Get()
        {
            return Ok(_context.onderzoeken.ToList());
        }

        // POST: api/research
        [HttpPost]
        public IActionResult Post([FromBody] onderzoek nieuwOnderzoek)
        {
            if (nieuwOnderzoek == null)
            {
                return BadRequest();
            }

            _context.onderzoeken.Add(nieuwOnderzoek);
            _context.SaveChanges();

            return CreatedAtAction(nameof(Get), new { id = nieuwOnderzoek.onderzoekId }, nieuwOnderzoek);
        }

        // PUT: api/research/{id}
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] onderzoek onderzoekUpdate)
        {
            if (onderzoekUpdate == null || onderzoekUpdate.onderzoekId != id)
            {
                return BadRequest();
            }

            var onderzoek = _context.onderzoeken.FirstOrDefault(o => o.onderzoekId == id);
            if (onderzoek == null)
            {
                return NotFound();
            }
            
            onderzoek.GebruikerBedrijfId = onderzoekUpdate.GebruikerBedrijfId;
            onderzoek.onderzoekNaam = onderzoekUpdate.onderzoekNaam;
            onderzoek.onderzoekBeschrijving = onderzoekUpdate.onderzoekBeschrijving;
            onderzoek.onderzoekStartDatum = onderzoekUpdate.onderzoekStartDatum;
            onderzoek.onderzoekEindDatum = onderzoekUpdate.onderzoekEindDatum;
            onderzoek.onderzoekStatus = onderzoekUpdate.onderzoekStatus;
            onderzoek.onderzoekSoort = onderzoekUpdate.onderzoekSoort;
            onderzoek.GoedgekeurdDoorId = onderzoekUpdate.GoedgekeurdDoorId;
            onderzoek.onderzoekLink = onderzoekUpdate.onderzoekLink;
            onderzoek.onderzoekForm = onderzoekUpdate.onderzoekForm;

            _context.onderzoeken.Update(onderzoek);
            _context.SaveChanges();

            return NoContent();
        }

        // DELETE: api/research/{id}
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var onderzoek = _context.onderzoeken.FirstOrDefault(o => o.onderzoekId == id);
            if (onderzoek == null)
            {
                return NotFound();
            }

            _context.onderzoeken.Remove(onderzoek);
            _context.SaveChanges();

            return NoContent();
        }
    }
}