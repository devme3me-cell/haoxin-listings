import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Phone, Mail, Search, Grid3X3, List, RefreshCw, FileText } from "lucide-react";

// Listing type definition
interface Listing {
  id: string;
  title: string;
  type: "出售" | "收購";
  location: string;
  price: string;
  description: string;
  imageUrl?: string;
  createdAt: string;
  ownerName: string;
}

// Real listings data with uploaded images
const mockListings: Listing[] = [
  {
    id: "1",
    title: "國寶中投福座 - 華嚴世界單人位",
    type: "出售",
    location: "南投縣",
    price: "李先生",
    description: "龍寶興業股份有限公司發行，永久使用權狀，位置極佳",
    imageUrl: "/listings/S__83640575_0.jpg",
    createdAt: "2026-01-19",
    ownerName: "李先生",
  },
  {
    id: "2",
    title: "基隆金寶塔 - 單人骨灰位",
    type: "出售",
    location: "基隆市",
    price: "王太太",
    description: "思恩區位置，基隆金寶塔建設開發股份有限公司，永久使用權",
    imageUrl: "/listings/S__83640574_0.jpg",
    createdAt: "2026-01-18",
    ownerName: "王太太",
  },
  {
    id: "3",
    title: "福壽園 - 添福專案",
    type: "出售",
    location: "嘉義縣",
    price: "張先生",
    description: "添福專區，鼎磊實業有限公司發行，專案使用憑證",
    imageUrl: "/listings/S__83640573_0.jpg",
    createdAt: "2026-01-17",
    ownerName: "張先生",
  },
  {
    id: "4",
    title: "北海福座 - 淨緣個人型",
    type: "出售",
    location: "新北市",
    price: "陳小姐",
    description: "福座開發股份有限公司，永久使用權狀，環境優美",
    imageUrl: "/listings/S__83640572_0.jpg",
    createdAt: "2026-01-16",
    ownerName: "陳小姐",
  },
  {
    id: "5",
    title: "淡水宜城園區 - 火化土葬區個人位",
    type: "出售",
    location: "新北市淡水區",
    price: "林小姐",
    description: "私立宜城墓園，永久使用權狀，水源段552地號，殯葬用地",
    imageUrl: "/listings/S__83640571_0.jpg",
    createdAt: "2026-01-15",
    ownerName: "林小姐",
  },
  {
    id: "6",
    title: "龍寶山 - 骨灰位",
    type: "出售",
    location: "新北市金山區",
    price: "黃先生",
    description: "航源事業股份有限公司，西一區位置，永久使用權",
    imageUrl: "/listings/S__83640534_0.jpg",
    createdAt: "2026-01-14",
    ownerName: "黃先生",
  },
  {
    id: "7",
    title: "天璣文化園區 - 認購憑證",
    type: "出售",
    location: "新北市五股區",
    price: "吳太太",
    description: "宇垣開發有限公司發行，五股坑位置，含永久管理",
    imageUrl: "/listings/S__83640533_0.jpg",
    createdAt: "2026-01-13",
    ownerName: "吳太太",
  },
  {
    id: "8",
    title: "慈雲寶塔 - 骨灰盒位",
    type: "出售",
    location: "嘉義縣水上鄉",
    price: "劉先生",
    description: "健鉦國殿納骨堂，4樓西區，塔位永久使用權狀",
    imageUrl: "/listings/S__83640532_0.jpg",
    createdAt: "2026-01-12",
    ownerName: "劉先生",
  },
  {
    id: "9",
    title: "法藏山極樂寺 - 骨灰蓮座",
    type: "出售",
    location: "新北市石門區",
    price: "周先生",
    description: "信徒蓮座使用憑證，可自由轉讓，環境清幽莊嚴",
    imageUrl: "/listings/S__83640531_0.jpg",
    createdAt: "2026-01-11",
    ownerName: "周先生",
  },
  {
    id: "10",
    title: "佛林寺 - 骨灰位",
    type: "出售",
    location: "台北市北投區",
    price: "蔡小姐",
    description: "報恩區位置，永久使用權狀，溫泉路150-1號",
    imageUrl: "/listings/S__83640530_0.jpg",
    createdAt: "2026-01-10",
    ownerName: "蔡小姐",
  },
];

type FilterType = "全部" | "出售" | "收購";
type ViewType = "grid" | "list";

const Listings = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<FilterType>("全部");
  const [viewType, setViewType] = useState<ViewType>("grid");
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = useCallback(() => {
    setIsRefreshing(true);
    // Simulate refresh
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  }, []);

  // Filter listings based on search query and filter type
  const filteredListings = mockListings.filter((listing) => {
    const matchesSearch = listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      listing.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      listing.ownerName.includes(searchQuery);
    const matchesFilter = activeFilter === "全部" || listing.type === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="hidden sm:inline">返回首頁</span>
              </Link>
              <div className="h-6 w-px bg-border" />
              <div>
                <h1 className="text-xl md:text-2xl font-heading font-bold text-warm-gold">
                  物件列表
                </h1>
                <p className="text-xs text-muted-foreground">
                  共 {filteredListings.length} 筆資料
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm">
              <a
                href="tel:02-22425697"
                className="flex items-center gap-2 text-muted-foreground hover:text-warm-gold transition-colors"
              >
                <Phone className="w-4 h-4" />
                02-22425697
              </a>
              <a
                href="mailto:sam0292@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-warm-gold transition-colors"
              >
                <Mail className="w-4 h-4" />
                sam0292@gmail.com
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Search and Filters */}
        <div className="bg-white rounded-2xl border border-border p-4 mb-8 shadow-sm">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1 min-w-[200px] max-w-[320px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="搜尋物件..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-secondary/30 border border-border rounded-xl text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-warm-gold/30 focus:border-warm-gold transition-all"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex gap-2">
              {(["全部", "出售", "收購"] as FilterType[]).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    activeFilter === filter
                      ? "bg-warm-gold/15 text-warm-gold border border-warm-gold"
                      : "bg-transparent text-muted-foreground border border-border hover:border-warm-gold/50"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* View Toggle and Refresh */}
            <div className="flex items-center gap-2">
              <div className="flex gap-1 p-1 bg-secondary/30 rounded-xl border border-border">
                <button
                  onClick={() => setViewType("grid")}
                  className={`p-2 rounded-lg transition-all ${
                    viewType === "grid"
                      ? "bg-warm-gold/20 text-warm-gold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewType("list")}
                  className={`p-2 rounded-lg transition-all ${
                    viewType === "list"
                      ? "bg-warm-gold/20 text-warm-gold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
              <button
                onClick={handleRefresh}
                disabled={isRefreshing}
                className="p-2.5 bg-secondary/30 border border-border rounded-xl text-muted-foreground hover:text-warm-gold hover:border-warm-gold/50 transition-all disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${isRefreshing ? "animate-spin" : ""}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Listings Content */}
        {filteredListings.length === 0 ? (
          /* Empty State */
          <div className="text-center py-20">
            <div className="w-20 h-20 mx-auto mb-5 bg-secondary/50 rounded-2xl flex items-center justify-center">
              <FileText className="w-10 h-10 text-muted-foreground/50" />
            </div>
            <p className="text-foreground text-lg font-medium mb-2">尚無物件資料</p>
            <p className="text-muted-foreground text-sm">請稍後再回來查看</p>
          </div>
        ) : (
          /* Listings Grid/List */
          <div
            className={
              viewType === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                : "flex flex-col gap-4"
            }
          >
            {filteredListings.map((listing) => (
              <div
                key={listing.id}
                className={`bg-white rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow ${
                  viewType === "list" ? "flex" : ""
                }`}
              >
                {listing.imageUrl && (
                  <div
                    className={`bg-secondary/30 overflow-hidden ${
                      viewType === "list" ? "w-48 flex-shrink-0" : "aspect-[4/3]"
                    }`}
                  >
                    <img
                      src={listing.imageUrl}
                      alt={listing.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-4 flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                        listing.type === "出售"
                          ? "bg-warm-gold/15 text-warm-gold"
                          : "bg-blue-500/15 text-blue-600"
                      }`}
                    >
                      {listing.type}
                    </span>
                    <span className="text-xs text-muted-foreground">{listing.location}</span>
                  </div>
                  <h3 className="font-medium text-foreground mb-1 line-clamp-2">{listing.title}</h3>
                  <p className="text-xs text-muted-foreground mb-2 line-clamp-2">{listing.description}</p>
                  <p className="text-warm-gold font-semibold">{listing.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        <p className="text-center text-muted-foreground/50 text-xs mt-12">
          © 2026 壕芯實業（統一編號：61225527）新北市. All rights reserved.
        </p>
      </main>
    </div>
  );
};

export default Listings;
