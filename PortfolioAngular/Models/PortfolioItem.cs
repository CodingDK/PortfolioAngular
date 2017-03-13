using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PortfolioAngular.Models
{
    public class PortfolioItem {
        [Key]
        public int Id { get; set; }
        [Required, MaxLength(70)]
        public string Slug { get; set; }
        [Required, MaxLength(50)]
        public string Title { get; set; }
        [Required, MaxLength(255)]
        public string SubTitle { get; set; }
        public int ImageIndex { get; set; } = -1;
        [Required]
        public JsonObject<string[]> Images { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public JsonObject<string[]> Tags { get; set; } // Json storage (MySQL 5.7 only)
    }
}
