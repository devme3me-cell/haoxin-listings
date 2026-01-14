import { useState } from "react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import service1 from "@/assets/service-1.jpg";
import service2 from "@/assets/service-2.jpg";

const categories = ["全部", "告別式", "靈堂佈置", "設施環境"];

const galleryItems = [
  { image: gallery1, category: "告別式", title: "佛教告別式" },
  { image: gallery2, category: "設施環境", title: "納骨塔園區" },
  { image: gallery3, category: "告別式", title: "追思禮堂" },
  { image: gallery4, category: "設施環境", title: "接待大廳" },
  { image: service1, category: "靈堂佈置", title: "鮮花佈置" },
  { image: service2, category: "靈堂佈置", title: "靈堂擺設" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("全部");

  const filteredItems =
    activeCategory === "全部"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="section-title">GALLERY</p>
          <h2 className="section-heading mb-8">服 務 實 績</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            每一場告別式都是獨一無二的，我們用心記錄每一個溫馨的瞬間，見證對摯愛的最後敬意。
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 text-sm tracking-wider transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-transparent border border-border hover:border-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="group relative image-reveal aspect-[4/3] bg-muted cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/80 transition-all duration-500 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center text-primary-foreground">
                  <p className="text-xs tracking-wider mb-2">{item.category}</p>
                  <h4 className="text-xl font-heading">{item.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
