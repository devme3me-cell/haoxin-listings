import * as React from "react";
import { useState, useCallback, useRef } from "react";
import { Upload, X, Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageUploadProps {
  value?: string;
  onChange: (value: string) => void;
  className?: string;
  disabled?: boolean;
}

const ImageUpload = React.forwardRef<HTMLDivElement, ImageUploadProps>(
  ({ value, onChange, className, disabled }, ref) => {
    const [isDragging, setIsDragging] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFile = useCallback(
      (file: File) => {
        if (!file.type.startsWith("image/")) {
          alert("請上傳圖片檔案");
          return;
        }

        // Max 5MB
        if (file.size > 5 * 1024 * 1024) {
          alert("圖片大小不能超過 5MB");
          return;
        }

        setIsLoading(true);

        const reader = new FileReader();
        reader.onload = (e) => {
          const result = e.target?.result as string;
          onChange(result);
          setIsLoading(false);
        };
        reader.onerror = () => {
          alert("讀取圖片失敗");
          setIsLoading(false);
        };
        reader.readAsDataURL(file);
      },
      [onChange]
    );

    const handleDragOver = useCallback((e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (!disabled) {
        setIsDragging(true);
      }
    }, [disabled]);

    const handleDragLeave = useCallback((e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
    }, []);

    const handleDrop = useCallback(
      (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);

        if (disabled) return;

        const file = e.dataTransfer.files[0];
        if (file) {
          handleFile(file);
        }
      },
      [disabled, handleFile]
    );

    const handleInputChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
          handleFile(file);
        }
      },
      [handleFile]
    );

    const handleClick = useCallback(() => {
      if (!disabled) {
        inputRef.current?.click();
      }
    }, [disabled]);

    const handleRemove = useCallback(
      (e: React.MouseEvent) => {
        e.stopPropagation();
        onChange("");
      },
      [onChange]
    );

    const isExternalUrl = value && !value.startsWith("data:");

    return (
      <div ref={ref} className={cn("relative", className)}>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          onChange={handleInputChange}
          className="hidden"
          disabled={disabled}
        />

        {value ? (
          // Preview
          <div className="relative group">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-border bg-secondary/30">
              <img
                src={value}
                alt="Preview"
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={handleClick}
                  className="p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors"
                  disabled={disabled}
                >
                  <Upload className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleRemove}
                  className="p-2 bg-red-500/80 hover:bg-red-500 rounded-full text-white transition-colors"
                  disabled={disabled}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            {isExternalUrl && (
              <p className="text-xs text-muted-foreground mt-1.5 truncate">
                {value}
              </p>
            )}
          </div>
        ) : (
          // Upload Area
          <div
            onClick={handleClick}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={cn(
              "relative w-full aspect-[4/3] rounded-xl border-2 border-dashed transition-all cursor-pointer",
              "flex flex-col items-center justify-center gap-3",
              isDragging
                ? "border-warm-gold bg-warm-gold/5 scale-[1.02]"
                : "border-border hover:border-warm-gold/50 hover:bg-secondary/30",
              disabled && "opacity-50 cursor-not-allowed",
              isLoading && "pointer-events-none"
            )}
          >
            {isLoading ? (
              <>
                <div className="w-10 h-10 rounded-full border-2 border-warm-gold border-t-transparent animate-spin" />
                <p className="text-sm text-muted-foreground">處理中...</p>
              </>
            ) : (
              <>
                <div
                  className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center transition-colors",
                    isDragging ? "bg-warm-gold/20" : "bg-secondary/50"
                  )}
                >
                  {isDragging ? (
                    <Upload className="w-7 h-7 text-warm-gold" />
                  ) : (
                    <ImageIcon className="w-7 h-7 text-muted-foreground" />
                  )}
                </div>
                <div className="text-center px-4">
                  <p className="text-sm font-medium text-foreground">
                    {isDragging ? "放開以上傳" : "拖曳圖片至此"}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    或點擊選擇檔案（最大 5MB）
                  </p>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    );
  }
);

ImageUpload.displayName = "ImageUpload";

export { ImageUpload };
