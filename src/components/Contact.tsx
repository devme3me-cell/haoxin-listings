import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useMemo } from "react";

const transactionData = [
  { location: '台北市', name: '李先生', action: 'sell', product: '生前契約', mask: '' },
  { location: '高雄市', name: '王太太', action: 'buy', product: '', mask: '*****' },
  { location: '台中市', name: '陳小姐', action: 'sell', product: '靈骨塔位', mask: '' },
  { location: '新北市', name: '林先生', action: 'buy', product: '生前契約', mask: '' },
  { location: '桃園市', name: '黃太太', action: 'sell', product: '', mask: '****' },
  { location: '台南市', name: '張先生', action: 'buy', product: '家族塔位', mask: '' },
  { location: '新竹市', name: '劉小姐', action: 'sell', product: '生前契約', mask: '' },
  { location: '彰化縣', name: '吳先生', action: 'buy', product: '', mask: '******' },
  { location: '嘉義市', name: '蔡太太', action: 'sell', product: '雙人塔位', mask: '' },
  { location: '屏東縣', name: '許先生', action: 'buy', product: '生前契約', mask: '' },
  { location: '宜蘭縣', name: '鄭小姐', action: 'sell', product: '', mask: '***' },
  { location: '花蓮縣', name: '謝先生', action: 'buy', product: '靈骨塔位', mask: '' },
];

const getRandomTime = () => {
  const hours = Math.floor(Math.random() * 24);
  const minutes = Math.floor(Math.random() * 60);
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
};

interface TransactionCardProps {
  location: string;
  name: string;
  action: 'sell' | 'buy';
  product: string;
  mask: string;
  time: string;
}

const TransactionCard = ({ location, name, action, product, mask, time }: TransactionCardProps) => {
  const actionText = action === 'sell' ? '出售' : '收購';
  const productDisplay = product || mask;

  return (
    <div className="w-full p-6 bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl transition-all duration-400 cursor-pointer relative overflow-hidden hover:translate-x-2 hover:scale-[1.02] hover:bg-white/[0.08] hover:border-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3),0_0_40px_rgba(99,102,241,0.1)] group">
      <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-[left] duration-600 group-hover:left-full" />
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-3">
          <span className={`inline-block w-2 h-2 rounded-full animate-pulse ${action === 'sell' ? 'bg-amber-500 shadow-[0_0_10px_#f59e0b]' : 'bg-emerald-500 shadow-[0_0_10px_#10b981]'}`} />
          <span className="text-sm text-white/50 font-medium tracking-wide">{location}</span>
          <span className="text-base text-white/90 font-semibold">{name}</span>
        </div>
        <span className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase ${action === 'sell' ? 'bg-gradient-to-br from-amber-500 to-amber-600 text-[#1a1a2e] shadow-[0_4px_15px_rgba(245,158,11,0.3)]' : 'bg-gradient-to-br from-emerald-500 to-emerald-600 text-[#1a1a2e] shadow-[0_4px_15px_rgba(16,185,129,0.3)]'}`}>
          {actionText}
        </span>
      </div>
      <div className="flex items-center gap-2.5">
        <span className={mask ? 'text-sm text-white/30 tracking-widest' : 'text-lg text-white/95 font-bold tracking-wide'}>
          {productDisplay}
        </span>
      </div>
      <span className="absolute bottom-3 right-4 text-[11px] text-white/25">{time}</span>
    </div>
  );
};

const Contact = () => {
  const cardsWithTime = useMemo(() => {
    return [...transactionData, ...transactionData].map((data, index) => ({
      ...data,
      time: getRandomTime(),
      key: index,
    }));
  }, []);

  return (
    <section id="contact" className="light py-24 lg:py-32 bg-primary text-primary-foreground">
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

          {/* Carousel */}
          <div className="gallery relative w-full h-[500px] overflow-hidden" style={{ visibility: 'visible' }}>
            <h3 className="text-center mb-6 text-white/90 text-2xl font-light tracking-widest uppercase">
              即時交易動態
            </h3>
            <div className="cards absolute w-[300px] h-[150px] top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2">
              <ul className="relative w-full h-full">
                {cardsWithTime.slice(0, 6).map((data, index) => (
                  <li
                    key={data.key}
                    className="list-none p-0 m-0 w-[300px] h-[150px] text-center leading-[150px] font-sans absolute top-0 left-0 rounded-[0.8rem] flex flex-col justify-center items-center"
                    style={{
                      backgroundColor: data.action === 'sell' ? '#f59e0b' : '#10b981',
                      zIndex: cardsWithTime.length - index,
                      transform: `translateY(${index * 8}px) scale(${1 - index * 0.05})`,
                      opacity: 1 - index * 0.15,
                    }}
                  >
                    <div className="flex flex-col items-center justify-center h-full leading-normal p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm text-white/80 font-medium">{data.location}</span>
                        <span className="text-base text-white font-semibold">{data.name}</span>
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/20 text-white mb-2">
                        {data.action === 'sell' ? '出售' : '收購'}
                      </span>
                      <span className="text-white/90 font-bold text-lg">
                        {data.product || data.mask}
                      </span>
                      <span className="text-[11px] text-white/50 mt-1">{data.time}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;