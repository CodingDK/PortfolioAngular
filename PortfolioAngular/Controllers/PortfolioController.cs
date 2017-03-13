using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PortfolioAngular.Models;

namespace PortfolioAngular.Controllers
{
    [Route("api/[controller]")]
    public class PortfolioController : Controller
        {
        private readonly ApplicationDbContext _context;
                
        public PortfolioController(ApplicationDbContext context) {
            _context = context;
        }

        [HttpGet("[action]")]
        public IEnumerable<PortfolioItem> GetItems()
        {
            return _context.PortfolioItems;
            //return items;
        }

        public static PortfolioItem GenerateTempItem(int id) {
            var idStr = id.ToString();
            return new PortfolioItem() {
                Id = id,
                Title = "Fine Title " + idStr,
                SubTitle = "subTitle " + idStr,
                Slug = "slug" + idStr,
                ImageIndex = 0,
                Images = new[] { "http://placehold.it/700x400", "http://placehold.it/700x400", "http://placehold.it/700x400", "http://placehold.it/700x400" },
                Description = "Fine Description " + idStr,
                Tags = new[] { "ASP", "PHP", "C#" }
            };
        }

        
    }
}
