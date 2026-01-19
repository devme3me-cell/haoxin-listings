import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

// Listing type definition
export interface Listing {
  id: string;
  title: string;
  type: "出售" | "收購";
  location: string;
  price: string;
  description: string;
  imageUrl?: string;
  createdAt: string;
  ownerName: string;
  sold?: boolean;
}

// Initial listings data
const initialListings: Listing[] = [
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
    sold: true,
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
    sold: false,
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
    sold: true,
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
    sold: false,
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
    sold: false,
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
    sold: true,
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
    sold: false,
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
    sold: false,
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
    sold: true,
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
    sold: false,
  },
];

interface ListingsContextType {
  listings: Listing[];
  addListing: (listing: Omit<Listing, "id" | "createdAt">) => void;
  updateListing: (id: string, listing: Partial<Listing>) => void;
  deleteListing: (id: string) => void;
  toggleSold: (id: string) => void;
  resetListings: () => void;
}

const ListingsContext = createContext<ListingsContextType | undefined>(undefined);

const STORAGE_KEY = "haoxin_listings";

export function ListingsProvider({ children }: { children: ReactNode }) {
  const [listings, setListings] = useState<Listing[]>(() => {
    // Try to load from localStorage
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        try {
          return JSON.parse(stored);
        } catch {
          return initialListings;
        }
      }
    }
    return initialListings;
  });

  // Persist to localStorage whenever listings change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(listings));
  }, [listings]);

  const addListing = (listing: Omit<Listing, "id" | "createdAt">) => {
    const newListing: Listing = {
      ...listing,
      id: String(Date.now()),
      createdAt: new Date().toISOString().split("T")[0],
    };
    setListings((prev) => [newListing, ...prev]);
  };

  const updateListing = (id: string, updates: Partial<Listing>) => {
    setListings((prev) =>
      prev.map((listing) =>
        listing.id === id ? { ...listing, ...updates } : listing
      )
    );
  };

  const deleteListing = (id: string) => {
    setListings((prev) => prev.filter((listing) => listing.id !== id));
  };

  const toggleSold = (id: string) => {
    setListings((prev) =>
      prev.map((listing) =>
        listing.id === id ? { ...listing, sold: !listing.sold } : listing
      )
    );
  };

  const resetListings = () => {
    setListings(initialListings);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialListings));
  };

  return (
    <ListingsContext.Provider
      value={{
        listings,
        addListing,
        updateListing,
        deleteListing,
        toggleSold,
        resetListings,
      }}
    >
      {children}
    </ListingsContext.Provider>
  );
}

export function useListings() {
  const context = useContext(ListingsContext);
  if (context === undefined) {
    throw new Error("useListings must be used within a ListingsProvider");
  }
  return context;
}
