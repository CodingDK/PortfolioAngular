using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Angular2WebpackVisualStudio.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.Extensions.Caching.Memory;

namespace Angular2WebpackVisualStudio.Controllers {
    [Route("api/[controller]/[action]")]
    public class PortfolioController : Microsoft.AspNetCore.Mvc.Controller {
        private readonly ApplicationDbContext _context;
        private readonly string baseImgUrl;
        private IMemoryCache _cache;

        public PortfolioController(IMemoryCache memoryCache, ApplicationDbContext context, IOptions<ApplicationSettings> appSettings)
        {
            _context = context;
            _cache = memoryCache;
            baseImgUrl = appSettings.Value.PortfolioImgBaseUrl;
        }

        [HttpGet()]
        public async Task<object> GetItems()
        {
            List<PortfolioItem> cachedItems;
            string cacheKey = "PfItems";
            // Look for cache key.
            
            if (!_cache.TryGetValue(cacheKey, out cachedItems))
            {
                // Key not in cache, so get data.
                cachedItems = await _context.PortfolioItems.ToListAsync();

                // Set cache options.
                var cacheEntryOptions = new MemoryCacheEntryOptions()
                    // Keep in cache for this time, reset time if accessed.
                    .SetSlidingExpiration(TimeSpan.FromDays(10));

                // Save data in cache.
                _cache.Set(cacheKey, cachedItems, cacheEntryOptions);
            }


            //var items = await _context.PortfolioItems.ToListAsync();
            return new {
                items = cachedItems,
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
