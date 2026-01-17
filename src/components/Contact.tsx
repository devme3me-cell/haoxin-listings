import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };
  return <section id="contact" className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Content */}
          <div>
            <p className="text-sm tracking-[0.3em] opacity-70 mb-4">CONTACT US</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light tracking-wide mb-8">
              聯 絡 我 們
            </h2>
            <p className="text-lg opacity-80 leading-relaxed mb-12">
              無論何時，我們都在您身邊。若有任何需求或疑問，請隨時與我們聯繫，專業團隊將為您提供最即時的協助。
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 mt-1 opacity-70" />
                <div>
                  <p className="text-sm opacity-70 mb-1">聯絡專線</p>
                  <p className="text-xl font-heading">02-22425697</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 mt-1 opacity-70" />
                <div>
                  <p className="text-sm opacity-70 mb-1">電子郵件</p>
                  <p className="text-lg">sam0292@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 mt-1 opacity-70" />
                <div>
                  <p className="text-sm opacity-70 mb-1">服務據點</p>
                  <p className="text-lg">台灣各地均有服務</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 mt-1 opacity-70" />
                <div>
                  <p className="text-sm opacity-70 mb-1">服務時間</p>
                  <p className="text-lg">週一至週日 09:00-18:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-background text-foreground p-8 lg:p-12 rounded-xl">
            <h3 className="text-2xl font-heading font-medium mb-8">預約諮詢</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm tracking-wider mb-2">
                  姓名 *
                </label>
                <input type="text" required value={formData.name} onChange={e => setFormData({
                ...formData,
                name: e.target.value
              })} className="w-full px-4 py-3 bg-transparent border border-border focus:border-primary outline-none transition-colors" placeholder="請輸入姓名" />
              </div>
              
              <div>
                <label className="block text-sm tracking-wider mb-2">
                  聯絡電話 *
                </label>
                <input type="tel" required value={formData.phone} onChange={e => setFormData({
                ...formData,
                phone: e.target.value
              })} className="w-full px-4 py-3 bg-transparent border border-border focus:border-primary outline-none transition-colors" placeholder="請輸入聯絡電話" />
              </div>
              
              <div>
                <label className="block text-sm tracking-wider mb-2">
                  電子郵件
                </label>
                <input type="email" value={formData.email} onChange={e => setFormData({
                ...formData,
                email: e.target.value
              })} className="w-full px-4 py-3 bg-transparent border border-border focus:border-primary outline-none transition-colors" placeholder="請輸入電子郵件" />
              </div>
              
              <div>
                <label className="block text-sm tracking-wider mb-2">
                  諮詢內容
                </label>
                <textarea rows={4} value={formData.message} onChange={e => setFormData({
                ...formData,
                message: e.target.value
              })} className="w-full px-4 py-3 bg-transparent border border-border focus:border-primary outline-none transition-colors resize-none" placeholder="請描述您的需求或問題" />
              </div>
              
              <button type="submit" className="w-full bg-primary text-primary-foreground py-4 text-sm tracking-wider hover:bg-primary/90 transition-colors flex items-center justify-center gap-3 group">
                送出諮詢
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;