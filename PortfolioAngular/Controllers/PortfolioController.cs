using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PortfolioAngular.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace PortfolioAngular.Controllers {
    [Route("api/[controller]/[action]")]
    public class PortfolioController : Controller {
        private readonly ApplicationDbContext _context;
        private readonly string baseImgUrl;

        public PortfolioController(ApplicationDbContext context, IOptions<ApplicationSettings> appSettings)
        {
            _context = context;
            baseImgUrl = appSettings.Value.PortfolioImgBaseUrl;
        }

        [HttpGet()]
        public async Task<object> GetItems()
        {
            var items = await _context.PortfolioItems.ToListAsync();
            return new {
                items,
                baseImgUrl
            };
        }

        public static PortfolioItem GenerateTempItem(int id)
        {
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
