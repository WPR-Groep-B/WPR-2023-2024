using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;

namespace react_aspcore_app.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DeelnameController : ControllerBase
    {
        private readonly SampleDBContext _context;

        public DeelnameController(SampleDBContext context)
        {
            _context = context;
        }

        // POST: api/deelname
        [Authorize]
        [HttpPost]
        public IActionResult Post([FromBody] deelname nieuweDeelname)
        {
            if (nieuweDeelname == null)
            {
                return BadRequest();
            }

            // _context.deelnames.Add(nieuweDeelname);
            _context.SaveChanges();

            return Ok(nieuweDeelname); // Of return CreatedAtAction met relevante informatie
        }

        // Andere relevante acties (GET, PUT, DELETE) kunnen hier toegevoegd worden indien nodig
    }
}