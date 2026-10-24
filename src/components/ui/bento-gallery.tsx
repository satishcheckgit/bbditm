"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { BentoGalleryItem, BentoGalleryProps, SwatchOption } from "@/types/gallery";
import { DEFAULT_APPLE_GALLERY_ITEMS } from "@/data/showcase-gallery";
import { Plus, X, ChevronLeft, ChevronRight, Check, ExternalLink, Sparkles } from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                        Academic/College Card Themes                        */
/* -------------------------------------------------------------------------- */
interface AcademicTheme {
  category: string;
  badgeBg: string;
  bgImage: string;
  imageBgGradient: string;
  ambientGlow: string;
  beamAngle: string;
  dotsRow1: string[];
  dotsRow2: string[];
}

const ACADEMIC_CARD_THEMES: AcademicTheme[] = [
  // Card 0: Apple TV 4K
  {
    category: "COMPUTING & AI",
    badgeBg: "bg-[#004b87]",
    bgImage: "/academic/sample3.webp",
    imageBgGradient: "",
    ambientGlow: "",
    beamAngle: "",
    dotsRow1: [""],
    dotsRow2: [""]
  },
  // Card 1: HomePod - Midnight
  {
    category: "ACOUSTIC RESEARCH",
    badgeBg: "bg-[#581c87]", // Royal purple
    bgImage: "/academic/sample2.webp",
    imageBgGradient: "",
    ambientGlow: "",
    beamAngle: "",
    dotsRow1: [""],
    dotsRow2: [""]
  },
  // Card 2: Siri Remote
  {
    category: "ROBOTICS & KINEMATICS",
    badgeBg: "bg-[#065f46]", // Deep emerald
    bgImage: "/academic/sample3.webp",
    imageBgGradient: "",
    ambientGlow: "",
    beamAngle: "",
    dotsRow1: [""],
    dotsRow2: [""]
  },
  // Card 3: AirPods Max 2
  {
    category: "ADVANCED SIGNAL LABS",
    badgeBg: "bg-[#1e1b4b]", // Deep midnight
    bgImage: "/academic/sample2.webp",
    imageBgGradient: "",
    ambientGlow: "",
    beamAngle: "",
    dotsRow1: [""],
    dotsRow2: [""]
  },
  // Card 4: HomePod mini (exact middle card from screenshot: DIGITALISING INDIA)
  {
    category: "DIGITALISING INDIA",
    badgeBg: "bg-[#004b87]", // Exact Jio badge color
    bgImage: "/banner/students.webp",
    imageBgGradient: "",
    ambientGlow: "",
    beamAngle: "",
    dotsRow1: [""],
    dotsRow2: [""]
  },
  // Card 5: Beats Studio Pro
  {
    category: "CAMPUS LIFE & ARTS",
    badgeBg: "bg-[#854d0e]", // Warm amber
    bgImage: "/banner/slideone.webp",
    imageBgGradient: "",
    ambientGlow: "",
    beamAngle: "",
    dotsRow1: [""],
    dotsRow2: [""]
  },
  // Card 6: Home Cinema (Banner)
  {
    category: "CENTRAL AUDITORIUM",
    badgeBg: "bg-[#004b87]",
    bgImage: "/showcase/home-cinema.jpg",
    imageBgGradient: "bg-gradient-to-br from-[#030712] via-[#0f172a] to-[#1e1b4b]",
    ambientGlow: "rgba(99, 102, 241, 0.35)",
    beamAngle: "135deg",
    dotsRow1: [],
    dotsRow2: [],
  },
  // Card 7: Apple TV+ (Banner)
  {
    category: "CAMPUS BROADCAST",
    badgeBg: "bg-[#e41d43]", // BBD Crimson
    bgImage: "/showcase/ted-lasso.jpg",
    imageBgGradient: "bg-gradient-to-br from-[#1e40af] via-[#2563eb] to-[#0284c7]",
    ambientGlow: "rgba(14, 165, 233, 0.45)",
    beamAngle: "135deg",
    dotsRow1: [],
    dotsRow2: [],
  },
  // Card 8: Beats Solo 4
  {
    category: "INNOVATION INCUBATOR",
    badgeBg: "bg-[#9f1239]", // BBD Crimson Ruby
    bgImage: "/banner/placed.webp",
    imageBgGradient: "",
    ambientGlow: "",
    beamAngle: "",
    dotsRow1: [""],
    dotsRow2: [""]
  },
  // Card 9: USB-C Digital AV Adapter
  {
    category: "VLSI & EMBEDDED LAB",
    badgeBg: "bg-[#115e59]", // Deep teal
    bgImage: "/study-materials/reference-textbooks.jpg",
    imageBgGradient: "",
    ambientGlow: "",
    beamAngle: "",
    dotsRow1: [""],
    dotsRow2: [""]
  },
];

/* -------------------------------------------------------------------------- */
/*                               Product Card                                 */
/* -------------------------------------------------------------------------- */
interface ProductCardProps {
  item: BentoGalleryItem;
  index: number;
  onOpenQuickView: (item: BentoGalleryItem, activeSwatch?: SwatchOption) => void;
}

function ProductCard({ item, index, onOpenQuickView }: ProductCardProps) {
  const theme = ACADEMIC_CARD_THEMES[index % ACADEMIC_CARD_THEMES.length];
  const [selectedSwatch, setSelectedSwatch] = useState<SwatchOption | null>(
    item.swatches && item.swatches.length > 0 ? item.swatches[0] : null
  );

  // Carousel slide index for items with multiple images
  const allImages = item.images && item.images.length > 0
    ? item.images
    : [selectedSwatch?.image || item.image];

  const [currentSlide, setCurrentSlide] = useState<number>(0);

  // Active displayed image (swatch overrides or carousel)
  const displayedImage = selectedSwatch?.image || allImages[currentSlide] || item.image;

  // Active title (with swatch name if applicable)
  const displayTitle = selectedSwatch && !item.title.toLowerCase().includes(selectedSwatch.name.toLowerCase())
    ? `${item.title} – ${selectedSwatch.name}`
    : item.title;

  const handlePrevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  };

  const handleNextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  };

  const handleSwatchClick = (e: React.MouseEvent, swatch: SwatchOption) => {
    e.stopPropagation();
    setSelectedSwatch(swatch);
    if (swatch.image) {
      setCurrentSlide(0);
    }
  };

  const displayEyebrow = item.eyebrow || item.badge || "NEW";
  const displaySubtitle = item.subtitle || item.details?.highlights?.[0] || item.details?.description;
  const displayPrice = item.price || item.monthlyPrice;

  return (
    <div
      onClick={() => onOpenQuickView(item, selectedSwatch || undefined)}
      className={`group relative flex flex-col ${item.customBgClass || "bg-white"} rounded-[20px] sm:rounded-[22px] overflow-hidden border border-black/[0.04] shadow-[0_2px_12px_rgba(0,0,0,0.04)] sm:shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.12)] hover:-translate-y-1.5 active:scale-[0.98] sm:active:scale-100 transition-all duration-200 sm:duration-300 ease-out cursor-pointer min-h-[320px] sm:min-h-[360px] select-none [-webkit-tap-highlight-color:transparent]`}
      role="article"
      aria-label={displayTitle}
    >
      {/* Top Header: Eyebrow, Title, Subtitle, Price (matching Apple Store reference) */}
      <div className="flex flex-col text-left pt-4.5 px-4.5 sm:pt-6 sm:px-6">
        {/* Eyebrow */}
        {/* <span className="text-[12px] font-semibold text-[#b64400] tracking-wider uppercase mb-1.5">
          {displayEyebrow}
        </span> */}

        {/* Title */}
        <h3 className="text-[15px] sm:text-[18px] font-bold text-[#1d1d1f] tracking-tight leading-snug line-clamp-2 mb-1 group-hover:text-[#004b87] transition-colors">
          {displayTitle}
        </h3>
      </div>

      {/* Bottom Area: Visual Image (flush edge-to-edge, flex-1 eliminates dead whitespace) */}
      <div
        className="relative w-full flex-1 min-h-[180px] sm:min-h-[200px] overflow-hidden mt-2.5 sm:mt-3 group-hover:scale-[1.02] transition-transform duration-300"
      >
        {/* Background Image */}
        <Image
          src={theme.bgImage}
          alt={theme.category || displayTitle}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover"
          priority={false}
        />

        {/* Ambient Radial Lighting Glow */}
        {theme.ambientGlow && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${theme.ambientGlow} 0%, transparent 72%)`,
            }}
          />
        )}

        {/* Diagonal Light Shard Overlays (matching angled beam in Jio screenshot) */}
        {theme.beamAngle && (
          <div
            className="absolute inset-0 pointer-events-none opacity-25"
            style={{
              background: `linear-gradient(${theme.beamAngle}, rgba(255,255,255,0.45) 0%, transparent 40%, transparent 60%, rgba(255,255,255,0.2) 100%)`,
            }}
          />
        )}

        {/* Colorful Dot Matrix Pattern at the bottom (matching Jio card 2 in screenshot) */}
        {theme.dotsRow1?.filter(Boolean).length > 0 && (
          <div className="absolute bottom-2.5 left-3.5 right-3.5 flex flex-col gap-1 pointer-events-none z-10 opacity-80">
            <div className="flex items-center gap-1.5 overflow-hidden">
              {theme.dotsRow1.filter(Boolean).map((c, i) => (
                <span
                  key={i}
                  className="w-1.5 h-1.5 rounded-full shrink-0 shadow-xs"
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
            <div className="flex items-center gap-1.5 overflow-hidden pl-1">
              {theme.dotsRow2?.filter(Boolean).map((c, i) => (
                <span
                  key={i}
                  className="w-1.5 h-1.5 rounded-full shrink-0 shadow-xs"
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Carousel Navigation Arrows */}
        {allImages.length > 1 && (
          <div className="absolute inset-x-2 top-1/2 -translate-y-1/2 flex items-center justify-between pointer-events-none z-20">
            <button
              type="button"
              onClick={handlePrevSlide}
              aria-label="Previous image"
              className="pointer-events-auto w-8 h-8 rounded-full bg-white/95 hover:bg-white text-[#1d1d1f] shadow-lg flex items-center justify-center backdrop-blur-md transition-all active:scale-90 hover:scale-110"
            >
              <ChevronLeft className="w-4 h-4 text-[#1d1d1f]" />
            </button>
            <button
              type="button"
              onClick={handleNextSlide}
              aria-label="Next image"
              className="pointer-events-auto w-8 h-8 rounded-full bg-white/95 hover:bg-white text-[#1d1d1f] shadow-lg flex items-center justify-center backdrop-blur-md transition-all active:scale-90 hover:scale-110"
            >
              <ChevronRight className="w-4 h-4 text-[#1d1d1f]" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                Banner Card                                 */
/* -------------------------------------------------------------------------- */
interface BannerCardProps {
  item: BentoGalleryItem;
  index: number;
  onOpenQuickView: (item: BentoGalleryItem) => void;
}

function BannerCard({ item, index, onOpenQuickView }: BannerCardProps) {
  const theme = ACADEMIC_CARD_THEMES[index % ACADEMIC_CARD_THEMES.length];
  const isDark = item.theme === "dark" || !item.theme;
  const isBlue = item.theme === "blue";

  return (
    <div
      onClick={() => onOpenQuickView(item)}
      className={`group relative flex flex-col justify-between rounded-[20px] sm:rounded-[22px] p-5 sm:p-7 overflow-hidden transition-all duration-200 sm:duration-300 ease-out cursor-pointer min-h-[320px] sm:min-h-[360px] col-span-1 sm:col-span-2 lg:col-span-2 active:scale-[0.98] sm:active:scale-100 select-none [-webkit-tap-highlight-color:transparent] ${isDark
        ? "bg-gradient-to-br from-[#05070e] via-[#091122] to-[#111e3b] text-white shadow-[0_4px_24px_rgba(0,0,0,0.25)] hover:shadow-[0_20px_48px_rgba(0,0,0,0.4)] hover:-translate-y-1.5"
        : isBlue
          ? "bg-gradient-to-br from-[#0c2340] via-[#1d4ed8] to-[#0284c7] text-white shadow-[0_4px_24px_rgba(29,78,216,0.3)] hover:shadow-[0_20px_48px_rgba(29,78,216,0.45)] hover:-translate-y-1.5"
          : "bg-[#1d1d1f] text-white shadow-xl hover:-translate-y-1.5"
        } ${item.customBgClass || ""}`}
      role="article"
      aria-label={item.title}
    >
      {/* Top Header Text with Category Badge */}
      <div className="relative z-10 max-w-md">
        <div className="mb-2">
          <span
            className={`inline-block px-2 sm:px-2.5 py-0.5 rounded-[4px] ${theme.badgeBg} text-white text-[10px] sm:text-[11px] font-bold tracking-wider uppercase shadow-xs`}
          >
            {item.badge || theme.category}
          </span>
        </div>
        <h3 className="text-[17px] sm:text-2xl font-bold tracking-tight text-white leading-snug line-clamp-2">
          {item.title}
        </h3>
        {item.subtitle && (
          <p className="mt-1 sm:mt-1.5 text-[12px] sm:text-sm text-white/80 leading-relaxed line-clamp-2">
            {item.subtitle}
          </p>
        )}
      </div>

      {/* Middle/Bottom Visual Image with Light Ray Accent */}
      <div className="relative w-full h-[175px] sm:h-[210px] my-2 sm:my-2.5 rounded-xl overflow-hidden flex items-center justify-center">

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${theme.ambientGlow} 0%, transparent 75%)`,
          }}
        />
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover sm:object-contain group-hover:scale-103 transition-transform duration-700 ease-out"
        />

        {isDark && (
          <div className="absolute inset-0 bg-gradient-to-t from-[#05070e] via-transparent to-transparent pointer-events-none opacity-40" />
        )}
      </div>

      {/* Bottom Floating Action Plus Button + Action Link */}
      <div className="relative z-10 flex items-center justify-between pt-2 border-t border-white/10">
        <span className="text-[11px] sm:text-xs font-semibold text-white/90 group-hover:text-white transition-colors flex items-center gap-1">
          <span>{item.ctaText || "Explore facility"}</span>
          <ChevronRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </span>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onOpenQuickView(item);
          }}
          aria-label={`View details for ${item.title}`}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 hover:bg-white/30 active:scale-90 text-white flex items-center justify-center backdrop-blur-md shadow-md transition-all hover:scale-105 border border-white/15 select-none [-webkit-tap-highlight-color:transparent]"
        >
          <Plus className="w-4.5 h-4.5 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:rotate-90" />
        </button>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                           Quick View Modal Dialog                          */
/* -------------------------------------------------------------------------- */
interface QuickViewModalProps {
  item: BentoGalleryItem | null;
  initialSwatch?: SwatchOption;
  onClose: () => void;
}

function QuickViewModal({ item, initialSwatch, onClose }: QuickViewModalProps) {
  const [activeSwatch, setActiveSwatch] = useState<SwatchOption | null>(initialSwatch || null);

  useEffect(() => {
    setActiveSwatch(initialSwatch || (item?.swatches && item.swatches[0]) || null);
  }, [item, initialSwatch]);

  // Handle escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!item) return;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, handleKeyDown]);

  if (!item) return null;

  const activeImage = activeSwatch?.image || item.image;
  const isBanner = item.type === "banner";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-2xl border border-black/[0.06] max-h-[90vh] flex flex-col md:flex-row animate-in zoom-in-95 duration-200 select-text"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 text-[#1d1d1f] flex items-center justify-center transition-all active:scale-90 shadow-sm select-none [-webkit-tap-highlight-color:transparent]"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Visual Showcase */}
        <div
          className={`relative w-full md:w-1/2 min-h-[280px] md:min-h-[420px] p-8 flex items-center justify-center ${isBanner
            ? item.theme === "dark"
              ? "bg-[#0a0a0c]"
              : item.theme === "blue"
                ? "bg-gradient-to-br from-[#1f57d6] to-[#12368c]"
                : "bg-neutral-900"
            : "bg-[#f5f5f7]"
            }`}
        >
          <div className="relative w-full h-[260px] md:h-[340px]">
            <Image
              src={activeImage}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Right Side: Details & Specs */}
        <div className="w-full md:w-1/2 p-7 sm:p-9 flex flex-col justify-between overflow-y-auto max-h-[480px] md:max-h-[560px]">
          <div>
            {item.eyebrow && (
              <span className="inline-block text-[11px] font-semibold text-[#0071e3] uppercase tracking-wider mb-1.5">
                {item.eyebrow}
              </span>
            )}
            <h2
              id="modal-title"
              className="text-xl sm:text-2xl font-bold text-[#1d1d1f] tracking-tight leading-snug"
            >
              {item.title}
            </h2>

            {/* Pricing */}
            {(item.price || item.monthlyPrice) && (
              <div className="mt-3 pb-4 border-b border-black/[0.06]">
                {item.price && (
                  <p className="text-lg font-semibold text-[#1d1d1f]">
                    {item.price}
                  </p>
                )}
                {item.monthlyPrice && (
                  <p className="text-xs text-[#6e6e73] mt-0.5">
                    {item.monthlyPrice}
                  </p>
                )}
              </div>
            )}

            {/* Color Swatch Selector in Modal */}
            {item.swatches && item.swatches.length > 0 && (
              <div className="mt-5">
                <p className="text-xs font-semibold text-[#1d1d1f] mb-2.5">
                  Finish:{" "}
                  <span className="text-[#6e6e73] font-normal">
                    {activeSwatch?.name || item.swatches[0].name}
                  </span>
                </p>
                <div className="flex items-center gap-2.5">
                  {item.swatches.map((swatch) => {
                    const isSelected = activeSwatch?.id === swatch.id;
                    return (
                      <button
                        key={swatch.id}
                        type="button"
                        onClick={() => setActiveSwatch(swatch)}
                        className={`w-6 h-6 rounded-full transition-all relative flex items-center justify-center ${isSelected
                          ? "ring-2 ring-offset-2 ring-[#0071e3] scale-105"
                          : "hover:scale-110 opacity-85 hover:opacity-100"
                          }`}
                        style={{
                          backgroundColor: swatch.colorHex,
                          boxShadow: "inset 0 1px 2px rgba(0,0,0,0.25)",
                        }}
                        title={swatch.name}
                      >
                        {isSelected && (
                          <Check className="w-3 h-3 text-white drop-shadow" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Description */}
            {item.details?.description && (
              <p className="text-xs sm:text-sm text-[#515154] leading-relaxed mt-4">
                {item.details.description}
              </p>
            )}

            {/* Highlights */}
            {item.details?.highlights && item.details.highlights.length > 0 && (
              <div className="mt-4">
                <h4 className="text-xs font-semibold text-[#1d1d1f] uppercase tracking-wider mb-2">
                  Highlights
                </h4>
                <ul className="space-y-1.5">
                  {item.details.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="text-xs text-[#6e6e73] flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3] shrink-0 mt-1.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Specs Table */}
            {item.details?.specs && (
              <div className="mt-5 pt-4 border-t border-black/[0.06]">
                <h4 className="text-xs font-semibold text-[#1d1d1f] uppercase tracking-wider mb-2">
                  Technical Specifications
                </h4>
                <dl className="grid grid-cols-2 gap-2 text-xs">
                  {Object.entries(item.details.specs).map(([k, v]) => (
                    <div key={k} className="bg-[#f5f5f7] p-2 rounded-lg">
                      <dt className="text-[#86868b] font-medium">{k}</dt>
                      <dd className="text-[#1d1d1f] font-semibold mt-0.5">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </div>

          {/* Action CTAs */}
          <div className="mt-6 pt-4 border-t border-black/[0.06] flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 min-h-[44px] rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white text-[13px] sm:text-sm font-semibold py-2.5 sm:py-3 px-5 text-center transition-all shadow-sm active:scale-95 select-none [-webkit-tap-highlight-color:transparent]"
            >
              {item.ctaText || "Select & Proceed"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="min-h-[44px] rounded-full bg-neutral-100 hover:bg-neutral-200 text-[#1d1d1f] text-[13px] sm:text-sm font-medium py-2.5 sm:py-3 px-5 text-center transition-all active:scale-95 select-none [-webkit-tap-highlight-color:transparent]"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                          Main Bento Gallery Grid                           */
/* -------------------------------------------------------------------------- */
export function BentoGallery({
  title = "Accessories & Home Entertainment",
  eyebrow = "Curated Showcase",
  description = "Engineered for unmatched acoustic fidelity, immersive visual entertainment, and seamless ecosystem connectivity.",
  items = DEFAULT_APPLE_GALLERY_ITEMS,
  className = "",
  enableQuickView = true,
  viewAllHref,
  viewAllText = "Explore All Accessories",
}: BentoGalleryProps) {

  const [quickViewItem, setQuickViewItem] = useState<BentoGalleryItem | null>(null);
  const [selectedInitialSwatch, setSelectedInitialSwatch] = useState<SwatchOption | undefined>(undefined);

  const handleOpenQuickView = (item: BentoGalleryItem, swatch?: SwatchOption) => {
    if (!enableQuickView) return;
    setQuickViewItem(item);
    setSelectedInitialSwatch(swatch);
  };

  const handleCloseQuickView = () => {
    setQuickViewItem(null);
    setSelectedInitialSwatch(undefined);
  };

  return (
    <>
      {/* Mobile — swipeable showcase rail */}
      <section className="md:hidden bg-[#f5f5f7] pt-5 pb-6">
        <div className="px-4 mb-3 flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#e41d43]">{eyebrow}</p>
            <h2 className="mt-1 text-[22px] font-bold tracking-tight leading-tight text-[#1d1d1f] font-heading line-clamp-2">{title}</h2>
            {description && <p className="mt-2 text-[13px] leading-relaxed text-[#6e6e73] line-clamp-2">{description}</p>}
          </div>
          {viewAllHref && (
            <Link href={viewAllHref} className="shrink-0 inline-flex items-center gap-1 text-xs font-semibold text-[#0071e3] pt-1">
              {viewAllText} <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>
        <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory overscroll-x-contain touch-pan-x [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pl-4 pr-4 scroll-px-4 scroll-smooth">
          {items.map((item, index) => (
            <div
              key={`m-${item.id}`}
              className="shrink-0 snap-start w-[72vw] max-w-[300px]"
              onClick={() => handleOpenQuickView(item)}
            >
              {item.type === "banner" ? (
                <BannerCard item={item} index={index} onOpenQuickView={(it) => handleOpenQuickView(it)} />
              ) : (
                <ProductCard item={item} index={index} onOpenQuickView={(it, sw) => handleOpenQuickView(it, sw)} />
              )}
            </div>
          ))}
        </div>
        {enableQuickView && <QuickViewModal item={quickViewItem} initialSwatch={selectedInitialSwatch} onClose={handleCloseQuickView} />}
      </section>

      {/* Desktop */}
      <section className={`hidden md:block py-8 sm:py-10 lg:py-10 bg-[#f5f5f7] ${className}`}>
        <div className="max-w-[1540px] mx-auto px-4 sm:px-4 lg:px-4">
          {(title || eyebrow || description) && (
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-14">
              <div className="max-w-2xl">
                {title && (
                  <h2 className="text-[22px] sm:text-4xl lg:text-[40px] font-bold sm:font-semibold text-[#1d1d1f] tracking-tight leading-tight font-heading">
                    {title}
                  </h2>
                )}
                {description && <p className="mt-2 sm:mt-3 text-[13px] sm:text-base text-[#6e6e73] leading-relaxed">{description}</p>}
              </div>
              {viewAllHref && (
                <Link href={viewAllHref} className="inline-flex items-center gap-1.5 text-[13px] sm:text-sm font-semibold text-[#0071e3] hover:text-[#0077ed] shrink-0 self-start md:self-end group active:scale-95 transition-all select-none [-webkit-tap-highlight-color:transparent]">
                  <span>{viewAllText}</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              )}
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {items.map((item, index) => {
              if (item.type === "banner") {
                return <BannerCard key={item.id} item={item} index={index} onOpenQuickView={(it) => handleOpenQuickView(it)} />;
              }
              return <ProductCard key={item.id} item={item} index={index} onOpenQuickView={(it, sw) => handleOpenQuickView(it, sw)} />;
            })}
          </div>
        </div>
        {enableQuickView && <QuickViewModal item={quickViewItem} initialSwatch={selectedInitialSwatch} onClose={handleCloseQuickView} />}
      </section>
    </>
  );
}

export default BentoGallery;
