import { supabase, isSupabaseConfigured } from "./supabase";

const BUCKET_NAME = "listings";

export interface UploadResult {
  url: string;
  path: string;
  error?: string;
}

/**
 * Upload an image to Supabase Storage
 * Returns the public URL of the uploaded image
 */
export async function uploadImage(file: File): Promise<UploadResult> {
  if (!isSupabaseConfigured()) {
    return {
      url: "",
      path: "",
      error: "Supabase 尚未設定",
    };
  }

  try {
    // Generate unique filename
    const fileExt = file.name.split(".").pop()?.toLowerCase() || "jpg";
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}.${fileExt}`;
    const filePath = `images/${fileName}`;

    // Upload file
    const { error: uploadError } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(filePath, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (uploadError) {
      console.error("Upload error:", uploadError);
      return {
        url: "",
        path: "",
        error: uploadError.message,
      };
    }

    // Get public URL
    const { data: urlData } = supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(filePath);

    return {
      url: urlData.publicUrl,
      path: filePath,
    };
  } catch (err) {
    console.error("Upload error:", err);
    return {
      url: "",
      path: "",
      error: err instanceof Error ? err.message : "上傳失敗",
    };
  }
}

/**
 * Upload a base64 image to Supabase Storage
 * Converts base64 to File and uploads
 */
export async function uploadBase64Image(base64: string): Promise<UploadResult> {
  if (!isSupabaseConfigured()) {
    return {
      url: "",
      path: "",
      error: "Supabase 尚未設定",
    };
  }

  try {
    // Extract mime type and data
    const matches = base64.match(/^data:(.+);base64,(.+)$/);
    if (!matches) {
      return {
        url: "",
        path: "",
        error: "無效的圖片格式",
      };
    }

    const mimeType = matches[1];
    const base64Data = matches[2];

    // Convert base64 to Blob
    const byteCharacters = atob(base64Data);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: mimeType });

    // Get file extension from mime type
    const ext = mimeType.split("/")[1]?.replace("jpeg", "jpg") || "jpg";
    const fileName = `upload.${ext}`;

    // Create File from Blob
    const file = new File([blob], fileName, { type: mimeType });

    return uploadImage(file);
  } catch (err) {
    console.error("Base64 upload error:", err);
    return {
      url: "",
      path: "",
      error: err instanceof Error ? err.message : "上傳失敗",
    };
  }
}

/**
 * Delete an image from Supabase Storage
 */
export async function deleteImage(path: string): Promise<boolean> {
  if (!isSupabaseConfigured() || !path) {
    return false;
  }

  try {
    const { error } = await supabase.storage
      .from(BUCKET_NAME)
      .remove([path]);

    if (error) {
      console.error("Delete error:", error);
      return false;
    }

    return true;
  } catch (err) {
    console.error("Delete error:", err);
    return false;
  }
}

/**
 * Check if a URL is from Supabase Storage
 */
export function isSupabaseStorageUrl(url: string): boolean {
  if (!url) return false;
  return url.includes("supabase") && url.includes("/storage/");
}

/**
 * Extract path from Supabase Storage URL
 */
export function getPathFromUrl(url: string): string {
  if (!isSupabaseStorageUrl(url)) return "";

  const match = url.match(/\/storage\/v1\/object\/public\/listings\/(.+)$/);
  return match ? match[1] : "";
}
