using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace react_aspcore_app.Controllers
{
    [Route("api/[controller]/")]
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

        // Overige methoden (PUT, DELETE) kunnen hier worden toegevoegd
    }
}