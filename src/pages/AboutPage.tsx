import { motion } from "framer-motion";
import { ArrowLeft, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const values = [
  {
    number: "01",
    title: "誠信為本",
    description: "堅持遵循正統、誠信踏實，每一項服務都以最高標準執行。",
  },
  {
    number: "02",
    title: "以客為尊",
    description: "將客戶的需求放在首位，提供最貼心、最專業的服務體驗。",
  },
  {
    number: "03",
    title: "責任擔當",
    description: "每一份託付都是重若千金的信任，我們絕不辜負。",
  },
  {
    number: "04",
    title: "尊重生命",
    description: "對生命懷抱至高敬意，傳承生命的尊榮與福澤。",
  },
];

const stats = [
  { number: "10+", label: "年服務經驗" },
  { number: "1,000+", label: "服務家庭" },
  { number: "24", label: "小時服務" },
  { number: "100%", label: "客戶滿意" },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-foreground">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.05)_75%)] bg-[length:60px_60px]" />
        </div>

        <div className="container px-6 lg:px-12 pt-32 pb-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="text-background">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 text-background/60 hover:text-background transition-colors mb-8 group"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  <span className="text-sm tracking-wider">返回首頁</span>
                </Link>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-warm-gold tracking-[0.3em] text-sm mb-4"
              >
                ABOUT US
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl lg:text-8xl font-heading mb-6 leading-[0.9]"
              >
                {"關於我們".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-xl md:text-2xl text-background/70 font-heading mb-8"
              >
                以誠為本，傳承生命的尊榮與福澤
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-background/60 leading-relaxed max-w-lg"
              >
                壕芯實業深耕生命禮儀與民俗科儀領域多年，每一項服務的背後，都承載著一個家庭的深情託付及對生命的至高敬意。
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-10"
              >
                <a
                  href="tel:0800-000-000"
                  className="inline-flex items-center gap-3 bg-warm-gold text-foreground px-8 py-4 hover:bg-warm-gold/90 transition-colors group"
                >
                  <Phone className="w-5 h-5" />
                  <span className="tracking-wider">立即諮詢</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <motion.img
                  src="/lovable-uploads/31143c30-e9b7-4a65-a841-99cc56880fbb.jpg"
                  alt="壕芯實業"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.5 }}
                />
                {/* Decorative Frame */}
                <div className="absolute inset-4 border border-warm-gold/30 pointer-events-none" />
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-warm-gold text-foreground p-6"
              >
                <p className="text-4xl font-heading">10+</p>
                <p className="text-xs tracking-wider mt-1">年專業經驗</p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-background/50"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs tracking-widest">SCROLL</span>
            <div className="w-px h-12 bg-background/30" />
          </motion.div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-24 lg:py-32 bg-secondary/30">
        <div className="container px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="section-title">OUR MISSION</p>
              <h2 className="section-heading mb-8">壕芯初衷</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                每一份託付，都是重若千金的信任
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                壕芯實業深耕生命禮儀與民俗科儀領域多年。我們深知，每一項服務的背後，都承載著一個家庭的深情託付及對生命的至高敬意。憑藉深厚的實務經驗與專業底蘊，壕芯在業界建立了卓越口碑，並深獲廣大客群的長期信賴。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={gallery1}
                  alt="專業服務"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-1/2 aspect-square border-8 border-background overflow-hidden shadow-2xl hidden md:block">
                <img
                  src={gallery4}
                  alt="接待服務"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <p className="section-title">PROFESSIONAL</p>
            <h2 className="section-heading mb-8">專業領航</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              嚴謹守護每一處細節
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-secondary/50 p-8 lg:p-12 max-w-4xl mx-auto"
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              作為殯葬商品代銷與生基科儀的專家，我們始終秉持「以客為尊」的核心精神。無論是預先規劃的未雨綢繆，或是人生圓滿終點的臨終服務，壕芯皆以最高規格的品質控管，確保每一處細節皆能盡善盡美。
            </p>
            <p className="text-muted-foreground leading-relaxed">
              我們堅持遵循正統、誠信踏實，致力於推廣優質的殯葬周邊商品與專業科儀，成為客戶在面對生命重要時刻時，最堅實且溫暖的後盾。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 lg:py-32 bg-foreground text-background">
        <div className="container px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-warm-gold tracking-[0.3em] text-sm mb-4">CORE VALUES</p>
            <h2 className="text-4xl md:text-5xl font-heading mb-6">核心價值</h2>
            <p className="text-background/60 max-w-2xl mx-auto">
              責任與尊重的核心價值
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-background/5 p-8 border border-background/10 hover:border-warm-gold/50 transition-all duration-300"
              >
                <div className="text-4xl font-heading text-warm-gold/50 mb-4">
                  {value.number}
                </div>
                <h3 className="text-xl font-heading mb-3 group-hover:text-warm-gold transition-colors">
                  {value.title}
                </h3>
                <p className="text-background/60 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Section */}
      <section className="py-24 lg:py-32 bg-secondary/30">
        <div className="container px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={gallery4}
                  alt="卓越管理"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <p className="section-title">MANAGEMENT</p>
              <h2 className="section-heading mb-8">卓越管理</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                我們對內實施嚴謹管理，高度重視員工素質與專業培訓；對外則嚴守「責任與尊重」的核心價值。
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                壕芯實業對未來抱持著宏大的願景，我們不滿足於現狀，將持續優化服務流程，期望以品質與誠信成為業界首屈一指的領袖企業。
              </p>
              <ul className="space-y-4">
                {["嚴謹內部管理制度", "高標準員工培訓", "持續優化服務流程", "追求業界領袖地位"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-warm-gold rounded-full" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl lg:text-6xl font-heading font-light text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm tracking-wider text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-foreground text-background">
        <div className="container px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-heading mb-6">
              讓我們為您服務
            </h2>
            <p className="text-background/60 mb-10 leading-relaxed">
              壕芯實業的專業團隊隨時為您服務，歡迎來電諮詢或親臨門市了解更多詳情。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0800-000-000"
                className="inline-flex items-center justify-center gap-3 bg-warm-gold text-foreground px-8 py-4 hover:bg-warm-gold/90 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="tracking-wider">撥打電話</span>
              </a>
              <Link
                to="/#contact"
                className="inline-flex items-center justify-center gap-3 border border-background/30 px-8 py-4 hover:bg-background/10 transition-colors"
              >
                <span className="tracking-wider">線上諮詢</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
