import { Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 py-16">
      <div className="container px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="text-2xl font-heading font-semibold tracking-wider">
                永恆禮儀
              </span>
              <span className="block text-xs tracking-[0.3em] text-muted-foreground mt-1">
                ETERNAL MEMORIAL
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md mb-6">
              三十年專業禮儀服務經驗，以溫暖、專業、尊重的態度，陪伴每一個家庭走過人生最重要的告別時刻。
            </p>
            <a
              href="tel:0800-888-168"
              className="inline-flex items-center gap-2 text-foreground hover:text-warm-gold transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-heading text-lg">0800-888-168</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-medium mb-6 tracking-wide">
              服務項目
            </h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#services" className="hover:text-foreground transition-colors">告別式規劃</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">靈堂佈置</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">法事誦經</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">塔位諮詢</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-medium mb-6 tracking-wide">
              聯絡資訊
            </h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>台北市中山區民生東路三段168號</li>
              <li>service@eternal-memorial.com.tw</li>
              <li>24小時全年無休</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 永恆禮儀 Eternal Memorial. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">隱私政策</a>
            <a href="#" className="hover:text-foreground transition-colors">服務條款</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
