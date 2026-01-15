import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 py-16">
      <div className="container px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="text-2xl font-heading font-semibold tracking-wider">
                壕芯實業
              </span>
              <span className="block text-xs tracking-[0.3em] text-muted-foreground mt-1">
                HAO XIN ENTERPRISE
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md mb-6">
              主要以服務殯葬禮儀、代銷殯葬商品、生基科儀、法會等服務，秉持著「以客為尊」的企業精神服務每一位客戶，提供高規格高品質的優良服務。
            </p>
            <a
              href="tel:02-2233-0000"
              className="inline-flex items-center gap-2 text-foreground hover:text-warm-gold transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-heading text-lg">02-2233-0000</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-medium mb-6 tracking-wide">
              服務項目
            </h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#services" className="hover:text-foreground transition-colors">代銷生基</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">代銷塔位</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">代銷骨灰罈</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">科儀服務</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-medium mb-6 tracking-wide">
              聯絡資訊
            </h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>台灣各地均有服務</li>
              <li>service@haoxin.com.tw</li>
              <li>週一至週日 09:00-18:00</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 壕芯實業 Hao Xin Enterprise. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-foreground transition-colors">隱私政策</Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">服務條款</Link>
            <Link to="/disclaimer" className="hover:text-foreground transition-colors">免責聲明</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;