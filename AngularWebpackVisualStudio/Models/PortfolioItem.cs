using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Angular2WebpackVisualStudio.Models
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
        [JsonIgnore]
        public JsonObject<string[]> Images { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        [JsonIgnore]
        public JsonObject<string[]> Tags { get; set; } // Json storage (MySQL 5.7 only)

        [NotMapped]
        [JsonProperty("images")]
        public string[] ImagesForJson {
            get {
                return Images?.Object;
            }
            set {
                Images = value;
            }
        }
        [NotMapped]
        [JsonProperty("tags")]
        public string[] TagsForJson {
            get {
                return Tags?.Object;
            }
            set {
                Tags = value;
            }
        }

    }
}
