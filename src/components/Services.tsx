import service1 from "@/assets/service-1.jpg";
import service2 from "@/assets/service-2.jpg";
import service3 from "@/assets/service-3.jpg";

const services = [
  {
    number: "01",
    title: "告別式規劃",
    description: "依據家屬需求與逝者信仰，規劃傳統或現代化的告別式典禮，讓每一場送別都充滿溫情。",
    image: service1,
  },
  {
    number: "02",
    title: "靈堂佈置",
    description: "精心設計靈堂空間，以莊嚴典雅的花藝與燈光，營造溫馨肅穆的追思環境。",
    image: service2,
  },
  {
    number: "03",
    title: "全程服務",
    description: "從接體、冰存、入殮、出殯到安葬或進塔，提供完整的禮儀服務流程，讓家屬無後顧之憂。",
    image: service3,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <p className="section-title">OUR SERVICES</p>
          <h2 className="section-heading">服 務 項 目</h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={service.number}
              className="group bg-background p-8 card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Number */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xs tracking-wider text-muted-foreground">
                  {service.number}
                </span>
                <div className="flex-1 h-px bg-border" />
              </div>

              {/* Image */}
              <div className="image-reveal aspect-square mb-6 bg-muted">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-heading font-medium mb-4 tracking-wide">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-16 lg:mt-24 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "🕯️", title: "法事誦經" },
            { icon: "🌸", title: "花籃訂製" },
            { icon: "📜", title: "禮儀用品" },
            { icon: "🏛️", title: "塔位諮詢" },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-4 p-6 bg-background border border-border hover:border-warm-gold/50 transition-colors duration-300"
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="font-heading text-lg tracking-wide">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
