import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CloudReveal from "@/components/CloudReveal";
import Preloader from "@/components/Preloader";

const Index = () => {
  return (
    <Preloader duration={3500}>
      <CloudReveal>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Testimonials />
        <Certificates />
        <Contact />
        <Footer />
      </div>
      </CloudReveal>
    </Preloader>
  );
};

export default Index;
