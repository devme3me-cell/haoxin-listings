import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navItems = [{
    name: "關於我們",
    href: "#about"
  }, {
    name: "服務項目",
    href: "#services"
  }, {
    name: "奠禮現場",
    href: "#gallery"
  }, {
    name: "聯絡我們",
    href: "#contact"
  }];
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm py-4" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex flex-col items-start">
            <span className="text-xl md:text-2xl font-heading font-semibold tracking-wider">
              壕芯實業
            </span>
            <span className="text-xs tracking-[0.3em] text-muted-foreground">
              HAO XIN ENTERPRISE
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm tracking-wider hover:text-warm-gold transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Contact & Mobile Menu */}
          <div className="flex items-center gap-6">
            <a href="tel:02-2233-0000" className="hidden md:flex items-center gap-2 text-sm tracking-wider hover:text-warm-gold transition-colors">
              <Phone className="w-4 h-4" />
              <span>02-2233-0000</span>
            </a>
            
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2" aria-label="Toggle menu">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <nav className="lg:hidden absolute top-full left-0 right-0 bg-background/80 backdrop-blur-xl border-t border-border/50 shadow-lg animate-slide-up">
            <div className="container py-8 space-y-6">
              {navItems.map(item => <a key={item.name} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="block text-lg tracking-wider hover:text-warm-gold transition-colors">
                  {item.name}
                </a>)}
              <a href="tel:02-2233-0000" className="flex items-center gap-2 text-lg tracking-wider text-warm-gold">
                <Phone className="w-5 h-5" />
                <span>02-2233-0000</span>
              </a>
            </div>
          </nav>}
      </div>
    </header>;
};
export default Header;