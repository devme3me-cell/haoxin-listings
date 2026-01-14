import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-memorial.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="壕芯實業禮儀服務"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 lg:px-12 pt-24">
        <div className="max-w-2xl">
          <p className="section-title animate-fade-in">中、西、主題式禮儀殯葬服務</p>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-light leading-tight mb-8 animate-slide-up">
            壕芯實業
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-xl animate-slide-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
            代銷塔位、生前契約、骨灰罈、內膽等相關諮詢之代銷服務
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-xl animate-slide-up leading-relaxed" style={{ animationDelay: "0.3s" }}>
            生基、造生基、代銷生基、生基承租、科儀等服務
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm tracking-wider hover:bg-primary/90 transition-all duration-300 group"
            >
              服務項目
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 border border-primary text-primary px-8 py-4 text-sm tracking-wider hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              立即諮詢
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: "0.6s" }}>
        <span className="text-xs tracking-[0.3em] text-muted-foreground">SCROLL</span>
        <div className="w-px h-16 bg-gradient-to-b from-muted-foreground to-transparent" />
      </div>
    </section>
  );
};

export default Hero;