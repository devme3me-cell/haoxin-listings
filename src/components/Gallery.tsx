const serviceItems = [
  "代銷科儀",
  "開運商品",
  "代銷生基罐",
  "代銷牌位",
  "代銷生基",
  "代銷塔位",
  "代銷骨灰罈",
  "代銷内膽",
  "代銷生前契約",
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="section-title">OUR SERVICES</p>
          <h2 className="section-heading mb-8">服務項目</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            誠摯服務，用心至上
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {serviceItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-background border border-border hover:border-primary transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-square flex items-center justify-center p-6 text-center">
                <h4 className="text-lg font-heading group-hover:text-primary transition-colors duration-300">
                  {item}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;