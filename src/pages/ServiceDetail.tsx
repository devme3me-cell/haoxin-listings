import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Phone } from "lucide-react";
import { getServiceById, serviceItems } from "@/data/serviceData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const service = getServiceById(id || "");

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading mb-4">服務未找到</h1>
          <Link to="/" className="text-primary hover:underline">
            返回首頁
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = serviceItems.findIndex((item) => item.id === id);
  const prevService = currentIndex > 0 ? serviceItems[currentIndex - 1] : null;
  const nextService =
    currentIndex < serviceItems.length - 1
      ? serviceItems[currentIndex + 1]
      : null;

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
                  to="/#gallery"
                  className="inline-flex items-center gap-2 text-background/60 hover:text-background transition-colors mb-8 group"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  <span className="text-sm tracking-wider">返回服務列表</span>
                </Link>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-warm-gold tracking-[0.3em] text-sm mb-4"
              >
                OUR SERVICES
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl lg:text-8xl font-heading mb-6 leading-[0.9]"
              >
                {service.name.split("").map((char, index) => (
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
                {service.subtitle}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-background/60 leading-relaxed max-w-lg"
              >
                {service.description}
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
                  src={service.image}
                  alt={service.name}
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
                <p className="text-4xl font-heading">
                  {String(currentIndex + 1).padStart(2, "0")}
                </p>
                <p className="text-xs tracking-wider mt-1">/ {String(serviceItems.length).padStart(2, "0")}</p>
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

      {/* Features Section */}
      <section className="py-24 lg:py-32 bg-secondary/30">
        <div className="container px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="section-title">FEATURES</p>
            <h2 className="section-heading">服務特色</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-background p-8 border border-border hover:border-primary transition-all duration-300"
              >
                <div className="text-4xl font-heading text-primary/20 mb-4">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-heading group-hover:text-primary transition-colors">
                  {feature}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="section-title">PROCESS</p>
            <h2 className="section-heading">服務流程</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Connector Line */}
                {index < service.process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-border z-0" />
                )}

              <div className="relative z-10 bg-background text-center flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-heading mb-6"
                  >
                    {step.step}
                  </motion.div>
                  <h3 className="text-xl font-heading mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
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
              準備好開始了嗎？
            </h2>
            <p className="text-background/60 mb-10 leading-relaxed">
              我們的專業團隊隨時為您服務，歡迎來電諮詢或親臨門市了解更多詳情。
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

      {/* Navigation Between Services */}
      <section className="py-16 bg-secondary/30 border-t border-border">
        <div className="container px-6 lg:px-12">
          <div className="flex justify-between items-center">
            {prevService ? (
              <Link
                to={`/service/${prevService.id}`}
                className="group flex items-center gap-4 hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
                <div>
                  <p className="text-xs text-muted-foreground mb-1">上一個服務</p>
                  <p className="font-heading text-lg">{prevService.name}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            <Link
              to="/#gallery"
              className="text-sm tracking-wider text-muted-foreground hover:text-primary transition-colors"
            >
              查看全部服務
            </Link>

            {nextService ? (
              <Link
                to={`/service/${nextService.id}`}
                className="group flex items-center gap-4 text-right hover:text-primary transition-colors"
              >
                <div>
                  <p className="text-xs text-muted-foreground mb-1">下一個服務</p>
                  <p className="font-heading text-lg">{nextService.name}</p>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
