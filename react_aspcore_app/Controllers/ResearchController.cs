using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace react_aspcore_app.Controllers
{
    public class Deelnemen
    {
        public int onderzoekId { get; set; }
        public int gebruikerId { get; set; }
    }


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
        [Authorize]
        [HttpGet]
        public ActionResult<IEnumerable<onderzoek>> Get()
        {
            return Ok(_context.onderzoeken.ToList());
        }


        [HttpGet("valid")]
        public ActionResult<IEnumerable<onderzoek>> valid()
        {
            return Ok(_context.onderzoeken.Where(o => o.gebruikerDeskundigeId == null && o.GoedgekeurdDoorId != null).ToList());
        }

        [HttpGet("valid/{id}")]
        public ActionResult<IEnumerable<onderzoek>> valid(int id)
        {
            return Ok(_context.onderzoeken.Where(o => o.gebruikerDeskundigeId == id).ToList());
        }

        [HttpGet("Bedrijf/valid/{id}")]
        public ActionResult<IEnumerable<onderzoek>> BedrijfValid(int id)
        {
            return Ok(_context.onderzoeken.Where(o => o.GebruikerBedrijfId == id && o.GoedgekeurdDoorId != null).ToList());
        }

        [HttpGet("Bedrijf/unvalid/{id}")]
        public ActionResult<IEnumerable<onderzoek>> BedrijfUnvalid(int id)
        {
            return Ok(_context.onderzoeken.Where(o => o.GebruikerBedrijfId == id && o.GoedgekeurdDoorId == null && o.gebruikerDeskundigeId == null).ToList());
        }

        [HttpGet("Bedrijf/Goed/{id}")]
        public ActionResult<IEnumerable<onderzoek>> BedrijfGoed(int id)
        {
            return Ok(_context.onderzoeken.Where(o => o.GebruikerBedrijfId == id && o.gebruikerDeskundigeId != null).ToList());
        }


        // POST: api/research
        [Authorize]
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

        [HttpPost("Deelnemen")]
        public IActionResult Deelnemen([FromBody] Deelnemen deelnemen)
        {
            if (deelnemen == null)
            {
                return BadRequest();
            }

            var onderzoek = _context.onderzoeken.FirstOrDefault(o => o.onderzoekId == deelnemen.onderzoekId);
            if (onderzoek == null)
            {
                return NotFound();
            }

            onderzoek.gebruikerDeskundigeId = deelnemen.gebruikerId;

            _context.onderzoeken.Update(onderzoek);
            _context.SaveChanges();

            return Ok();
        }


        // PUT: api/research/{id}
        [Authorize]
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
        [Authorize]
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