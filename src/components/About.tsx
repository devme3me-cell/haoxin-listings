import { ArrowRight } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const stats = [
  { number: "30+", label: "年服務經驗" },
  { number: "10,000+", label: "服務家庭" },
  { number: "24", label: "小時服務" },
  { number: "100%", label: "客戶滿意" },
];

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="container px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Images */}
          <div className="relative">
            <div className="image-reveal">
              <img
                src={gallery1}
                alt="禮儀服務"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-2/3 image-reveal hidden md:block">
              <img
                src={gallery4}
                alt="接待大廳"
                className="w-full aspect-square object-cover border-8 border-background shadow-2xl"
              />
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-12">
            <p className="section-title">ABOUT US</p>
            <h2 className="section-heading mb-8">
              關 於 壕 芯 實 業
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              壕芯實業成立至今已有三十餘年歷史，我們深知失去至親的悲痛，因此以最專業、最溫暖的服務態度，陪伴每一個家庭走過人生最艱難的時刻。
            </p>

            <ul className="space-y-4 mb-12">
              {[
                "專業禮儀師全程服務",
                "24小時免費諮詢專線",
                "透明化收費絕無隱藏費用",
                "各式宗教儀式皆可承辦",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-warm-gold rounded-full" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 text-sm tracking-wider font-medium group"
            >
              了解更多
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-24 pt-16 border-t border-border">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl lg:text-5xl font-heading font-light text-foreground mb-2">
                {stat.number}
              </div>
              <div className="text-sm tracking-wider text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
