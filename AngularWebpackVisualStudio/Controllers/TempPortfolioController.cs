using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Angular2WebpackVisualStudio.Models;
using Microsoft.AspNetCore.Authorization;

namespace Angular2WebpackVisualStudio.Controllers
{
    //[Route("localhost/[action]")]
    [Authorize(Policy = "IsLocalhost")]
    public class TempPortfolioController : Microsoft.AspNetCore.Mvc.Controller
    {
        private readonly ApplicationDbContext _context;

        public TempPortfolioController(ApplicationDbContext context)
        {
            _context = context;    
        }

        // GET: TempPortfolio
        public async Task<IActionResult> Index()
        {
            return View(await _context.PortfolioItems.ToListAsync());
        }

        // GET: TempPortfolio/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var portfolioItem = await _context.PortfolioItems
                .SingleOrDefaultAsync(m => m.Id == id);
            if (portfolioItem == null)
            {
                return NotFound();
            }

            return View(portfolioItem);
        }

        // GET: TempPortfolio/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: TempPortfolio/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Slug,Title,SubTitle,ImageIndex,Images,Description,Tags")] PortfolioItem portfolioItem, string images, string tags)
        {
            images = images ?? "";
            portfolioItem.Images = images.Split(new string[] { Environment.NewLine }, StringSplitOptions.RemoveEmptyEntries)
                .Where(x => x.Length != 0).ToArray();
            tags = tags ?? "";
            portfolioItem.Tags = tags.Split(new string[] { Environment.NewLine }, StringSplitOptions.RemoveEmptyEntries)
                .Where(x => x.Length != 0).ToArray();
            ModelState.Clear();
            TryValidateModel(portfolioItem);
            if (ModelState.IsValid)
            {
                _context.Add(portfolioItem);
                await _context.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            return View(portfolioItem);
        }

        // GET: TempPortfolio/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var portfolioItem = await _context.PortfolioItems.SingleOrDefaultAsync(m => m.Id == id);
            if (portfolioItem == null)
            {
                return NotFound();
            }
            return View(portfolioItem);
        }

        // POST: TempPortfolio/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Slug,Title,SubTitle,ImageIndex,Images,Description,Tags")] PortfolioItem portfolioItem, string images, string tags)
        {
            if (id != portfolioItem.Id)
            {
                return NotFound();
            }
            images = images ?? "";
            portfolioItem.Images = images.Split(new string[] { Environment.NewLine }, StringSplitOptions.RemoveEmptyEntries)
                .Where(x => x.Length != 0).ToArray();
            tags = tags ?? "";
            portfolioItem.Tags = tags.Split(new string[] { Environment.NewLine }, StringSplitOptions.RemoveEmptyEntries)
                .Where(x => x.Length != 0).ToArray();
            ModelState.Clear();
            TryValidateModel(portfolioItem);
            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(portfolioItem);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!PortfolioItemExists(portfolioItem.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction("Index");
            }
            return View(portfolioItem);
        }

        // GET: TempPortfolio/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var portfolioItem = await _context.PortfolioItems
                .SingleOrDefaultAsync(m => m.Id == id);
            if (portfolioItem == null)
            {
                return NotFound();
            }

            return View(portfolioItem);
        }

        // POST: TempPortfolio/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var portfolioItem = await _context.PortfolioItems.SingleOrDefaultAsync(m => m.Id == id);
            _context.PortfolioItems.Remove(portfolioItem);
            await _context.SaveChangesAsync();
            return RedirectToAction("Index");
        }

        private bool PortfolioItemExists(int id)
        {
            return _context.PortfolioItems.Any(e => e.Id == id);
        }
    }
}
