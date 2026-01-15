import serviceKeyi from "@/assets/service-keyi.jpg";
import serviceKaiyun from "@/assets/service-kaiyun.jpg";
import serviceShengjiGuan from "@/assets/service-shengji-guan.jpg";
import servicePaiwei from "@/assets/service-paiwei.jpg";
import serviceShengji from "@/assets/service-shengji.jpg";
import serviceTawei from "@/assets/service-tawei.jpg";
import serviceGuhuitan from "@/assets/service-guhuitan.jpg";
import serviceNeidan from "@/assets/service-neidan.jpg";
import serviceContract from "@/assets/service-contract.jpg";

const serviceItems = [
  { name: "代銷科儀", image: serviceKeyi },
  { name: "開運商品", image: serviceKaiyun },
  { name: "代銷生基罐", image: serviceShengjiGuan },
  { name: "代銷牌位", image: servicePaiwei },
  { name: "代銷生基", image: serviceShengji },
  { name: "代銷塔位", image: serviceTawei },
  { name: "代銷骨灰罈", image: serviceGuhuitan },
  { name: "代銷内膽", image: serviceNeidan },
  { name: "代銷生前契約", image: serviceContract },
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

        {/* Services Grid - Centered */}
        <div className="flex flex-wrap justify-center gap-4">
          {serviceItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-background border border-border hover:border-primary transition-all duration-300 cursor-pointer w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.75rem)] lg:w-[calc(20%-0.8rem)]"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 text-center">
                <h4 className="text-lg font-heading group-hover:text-primary transition-colors duration-300">
                  {item.name}
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
