-- Supabase Schema for Haoxin Listings
-- Run this in your Supabase SQL Editor

-- =============================================
-- STEP 1: Create Storage Bucket (do this first in Supabase Dashboard)
-- =============================================
-- 1. Go to Storage in your Supabase Dashboard
-- 2. Click "New bucket"
-- 3. Name: "listings"
-- 4. Check "Public bucket" to allow public access
-- 5. Click "Create bucket"

-- Or run this SQL to create the bucket:
INSERT INTO storage.buckets (id, name, public)
VALUES ('listings', 'listings', true)
ON CONFLICT (id) DO NOTHING;

-- Allow public access to the listings bucket
CREATE POLICY "Public Access" ON storage.objects
  FOR SELECT USING (bucket_id = 'listings');

CREATE POLICY "Anyone can upload" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'listings');

CREATE POLICY "Anyone can update" ON storage.objects
  FOR UPDATE USING (bucket_id = 'listings');

CREATE POLICY "Anyone can delete" ON storage.objects
  FOR DELETE USING (bucket_id = 'listings');

-- =============================================
-- STEP 2: Create Listings Table
-- =============================================

-- Create listings table
CREATE TABLE IF NOT EXISTS listings (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('出售', '收購')),
  location TEXT NOT NULL,
  price TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  created_at DATE NOT NULL DEFAULT CURRENT_DATE,
  owner_name TEXT NOT NULL,
  sold BOOLEAN DEFAULT FALSE
);

-- Enable Row Level Security (RLS)
ALTER TABLE listings ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read access" ON listings
  FOR SELECT USING (true);

-- Allow public insert (for admin panel)
CREATE POLICY "Allow public insert" ON listings
  FOR INSERT WITH CHECK (true);

-- Allow public update (for admin panel)
CREATE POLICY "Allow public update" ON listings
  FOR UPDATE USING (true);

-- Allow public delete (for admin panel)
CREATE POLICY "Allow public delete" ON listings
  FOR DELETE USING (true);

-- Enable realtime updates
ALTER PUBLICATION supabase_realtime ADD TABLE listings;

-- Insert initial data (optional - run once)
INSERT INTO listings (id, title, type, location, price, description, image_url, created_at, owner_name, sold) VALUES
  ('1', '國寶中投福座 - 華嚴世界單人位', '出售', '南投縣', '李先生', '龍寶興業股份有限公司發行，永久使用權狀，位置極佳', '/listings/S__83640575_0.jpg', '2026-01-19', '李先生', true),
  ('2', '基隆金寶塔 - 單人骨灰位', '出售', '基隆市', '王太太', '思恩區位置，基隆金寶塔建設開發股份有限公司，永久使用權', '/listings/S__83640574_0.jpg', '2026-01-18', '王太太', false),
  ('3', '福壽園 - 添福專案', '出售', '嘉義縣', '張先生', '添福專區，鼎磊實業有限公司發行，專案使用憑證', '/listings/S__83640573_0.jpg', '2026-01-17', '張先生', true),
  ('4', '北海福座 - 淨緣個人型', '出售', '新北市', '陳小姐', '福座開發股份有限公司，永久使用權狀，環境優美', '/listings/S__83640572_0.jpg', '2026-01-16', '陳小姐', false),
  ('5', '淡水宜城園區 - 火化土葬區個人位', '出售', '新北市淡水區', '林小姐', '私立宜城墓園，永久使用權狀，水源段552地號，殯葬用地', '/listings/S__83640571_0.jpg', '2026-01-15', '林小姐', false),
  ('6', '龍寶山 - 骨灰位', '出售', '新北市金山區', '黃先生', '航源事業股份有限公司，西一區位置，永久使用權', '/listings/S__83640534_0.jpg', '2026-01-14', '黃先生', true),
  ('7', '天璣文化園區 - 認購憑證', '出售', '新北市五股區', '吳太太', '宇垣開發有限公司發行，五股坑位置，含永久管理', '/listings/S__83640533_0.jpg', '2026-01-13', '吳太太', false),
  ('8', '慈雲寶塔 - 骨灰盒位', '出售', '嘉義縣水上鄉', '劉先生', '健鉦國殿納骨堂，4樓西區，塔位永久使用權狀', '/listings/S__83640532_0.jpg', '2026-01-12', '劉先生', false),
  ('9', '法藏山極樂寺 - 骨灰蓮座', '出售', '新北市石門區', '周先生', '信徒蓮座使用憑證，可自由轉讓，環境清幽莊嚴', '/listings/S__83640531_0.jpg', '2026-01-11', '周先生', true),
  ('10', '佛林寺 - 骨灰位', '出售', '台北市北投區', '蔡小姐', '報恩區位置，永久使用權狀，溫泉路150-1號', '/listings/S__83640530_0.jpg', '2026-01-10', '蔡小姐', false)
ON CONFLICT (id) DO NOTHING;
