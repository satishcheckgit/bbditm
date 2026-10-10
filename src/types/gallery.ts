export interface SwatchOption {
  id: string;
  name: string;
  colorHex: string;
  image?: string;
  price?: string;
}

export interface BentoGalleryItem {
  id: string;
  type?: "product" | "banner";
  colSpan?: 1 | 2;
  title: string;
  eyebrow?: string;
  subtitle?: string;
  price?: string;
  monthlyPrice?: string;
  finePrint?: string;
  badge?: string;
  image: string;
  images?: string[];
  swatches?: SwatchOption[];
  href?: string;
  theme?: "light" | "dark" | "blue" | "purple" | "custom";
  customBgClass?: string;
  ctaText?: string;
  ctaHref?: string;
  details?: {
    description?: string;
    highlights?: string[];
    specs?: Record<string, string>;
    rating?: number;
    inStock?: boolean;
  };
}

export interface BentoGalleryProps {
  title?: string;
  eyebrow?: string;
  description?: string;
  items?: BentoGalleryItem[];
  className?: string;
  enableQuickView?: boolean;
  viewAllHref?: string;
  viewAllText?: string;
}
