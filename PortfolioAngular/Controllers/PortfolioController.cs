using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace PortfolioAngular.Controllers
{
    [Route("api/[controller]")]
    public class PortfolioController : Controller
    {
        private List<PortfolioItem> items = new List<PortfolioItem>() {
            GenerateTempItem(1),
            GenerateTempItem(2),
            GenerateTempItem(3),
            GenerateTempItem(4),
            GenerateTempItem(5),
            GenerateTempItem(6),
            GenerateTempItem(7)
        };


        [HttpGet("[action]")]
        public IEnumerable<PortfolioItem> GetItems()
        {
            return items;
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

        public class PortfolioItem
        {
            public int Id { get; set; }
            public string Title { get; set; }
            public string SubTitle { get; set; }
            public string Slug { get; set; }

            public int ImageIndex { get; set; } = -1;

            public string[] Images { get; set; }

            public string Description { get; set; }
            public string[] Tags { get; set; }          
        }
    }
}
