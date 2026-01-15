import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CloudReveal from "@/components/CloudReveal";

const Index = () => {
  return (
    <CloudReveal>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </CloudReveal>
  );
};

export default Index;
