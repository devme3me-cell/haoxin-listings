import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "關於我們", href: "/about", isPage: true },
    { name: "服務項目", href: "#services" },
    { name: "奠禮現場", href: "#gallery" },
    { name: "聯絡我們", href: "#contact" },
  ];

  const handleNavClick = (href: string, isPage?: boolean) => {
    if (isPage) return;
    if (!isHomePage && href.startsWith("#")) {
      window.location.href = "/" + href;
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-start">
            <span className="text-xl md:text-2xl font-heading font-semibold tracking-wider">
              壕芯實業
            </span>
            <span className="text-xs tracking-[0.3em] text-muted-foreground">
              HAO XIN ENTERPRISE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) =>
              item.isPage ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm tracking-wider hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={isHomePage ? item.href : "/" + item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-sm tracking-wider hover:text-primary transition-colors"
                >
                  {item.name}
                </a>
              )
            )}
          </nav>

          {/* Contact & Mobile Menu */}
          <div className="flex items-center gap-4">
            <a
              href="tel:02-2233-0000"
              className="hidden md:flex items-center gap-2 text-sm tracking-wider hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>02-2233-0000</span>
            </a>

            <ThemeToggle />

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden absolute top-full left-0 right-0 bg-background/80 backdrop-blur-xl border-t border-border/50 shadow-lg animate-slide-up">
            <div className="container py-8 space-y-6">
              {navItems.map((item) =>
                item.isPage ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-lg tracking-wider hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={isHomePage ? item.href : "/" + item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-lg tracking-wider hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                )
              )}
              <a
                href="tel:02-2233-0000"
                className="flex items-center gap-2 text-lg tracking-wider text-primary"
              >
                <Phone className="w-5 h-5" />
                <span>02-2233-0000</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;