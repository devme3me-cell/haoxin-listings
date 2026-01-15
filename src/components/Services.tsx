import service1 from "@/assets/service-1.jpg";
import service2 from "@/assets/service-2.jpg";
import service3 from "@/assets/service-3.jpg";
const services = [{
  number: "01",
  title: "專業服務",
  description: "壕芯實業提供專業的代銷服務，涵蓋塔位、生前契約、骨灰罈及內膽等多元產品。我們以豐富的經驗與專業知識，協助您做出最適切的選擇，為摯愛規劃完善的身後安排。",
  image: service1
}, {
  number: "02",
  title: "誠信至上",
  description: "壕芯實業秉持誠信經營的核心理念，所有產品價格公開透明，絕無隱藏費用。我們重視每一位客戶的信任，以真誠的態度提供專業諮詢，讓您安心託付、無後顧之憂。",
  image: service2
}, {
  number: "03",
  title: "用心傾聽",
  description: "提供中式、西式、主題式等多元禮儀殯葬服務，量身打造專屬告別式，讓摯愛走得尊嚴。",
  image: service3
}];
const Services = () => {
  return <section id="services" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <p className="section-title">專業 · 誠信 ·用心 </p>
          <h2 className="section-heading">​壕芯實業 </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => <div key={service.number} className="group bg-background p-8 card-hover" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              {/* Number */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xs tracking-wider text-muted-foreground">
                  {service.number}
                </span>
                <div className="flex-1 h-px bg-border" />
              </div>

              {/* Image */}
              <div className="image-reveal aspect-square mb-6 bg-muted">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-heading font-medium mb-4 tracking-wide">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>)}
        </div>

        {/* Additional Services */}
        <div className="mt-16 lg:mt-24 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[{
          icon: "🏺",
          title: "代銷骨灰罈"
        }, {
          icon: "⚱️",
          title: "代銷內膽"
        }, {
          icon: "🕯️",
          title: "科儀服務"
        }, {
          icon: "💜",
          title: "心靈療癒諮詢"
        }].map(item => <div key={item.title} className="flex items-center gap-4 p-6 bg-background border border-border hover:border-warm-gold/50 transition-colors duration-300">
              <span className="text-2xl">{item.icon}</span>
              <span className="font-heading text-lg tracking-wide">{item.title}</span>
            </div>)}
        </div>

        {/* Additional Service Row */}
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[{
          icon: "🎋",
          title: "奠禮現場"
        }, {
          icon: "📋",
          title: "生前契約"
        }, {
          icon: "🔄",
          title: "轉換專區"
        }].map(item => <div key={item.title} className="flex items-center gap-4 p-6 bg-background border border-border hover:border-warm-gold/50 transition-colors duration-300">
              <span className="text-2xl">{item.icon}</span>
              <span className="font-heading text-lg tracking-wide">{item.title}</span>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Services;