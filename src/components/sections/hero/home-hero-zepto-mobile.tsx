"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { defaultFullHeroSlides, type FullHeroSlide } from "./hero-data";

/**
 * HomeHeroZeptoMobile — Zepto/Blinkit style mobile hero (md:hidden only).
 *
 * Design goals:
 * - Single clean white card (no stacked 3D wings) — looks like Zepto category card
 * - Large headline + readable subtitle — not cramped
 * - Pill CTAs with active:scale-95 haptics
 * - Minimal 3-stat row with thin divider
 * - Image window: 16:9-ish, rounded-xl, no dark overlay
 * - Indicators: centered pills, tappable 44px hit area
 * - Autoplay with pause/resume, swipe support
 *
 * Desktop is 100% untouched — used via md:hidden wrapper in page.tsx
 */

export interface HomeHeroZeptoMobileProps {
  slides?: FullHeroSlide[];
  autoPlayInterval?: number;
  className?: string;
}

// Fallback image when slide has no banner/image
const FALLBACK_IMAGE = "/banner/slideonec.webp";

function getSlideImage(slide: FullHeroSlide): string {
  return (
    slide.bannerImage ||
    slide.backgroundImage ||
    slide.media?.imageUrl ||
    slide.media?.videoPoster ||
    FALLBACK_IMAGE
  );
}

export function HomeHeroZeptoMobile({
  slides = defaultFullHeroSlides,
  autoPlayInterval = 6000,
  className,
}: HomeHeroZeptoMobileProps) {
  const totalSlides = slides.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const goToNext = useCallback(() => {
    setCurrentIndex((p) => (p + 1) % totalSlides);
    setProgress(0);
  }, [totalSlides]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((p) => (p - 1 + totalSlides) % totalSlides);
    setProgress(0);
  }, [totalSlides]);

  const goToSlide = (idx: number) => {
    setCurrentIndex(idx);
    setProgress(0);
  };

  // Autoplay with progress
  useEffect(() => {
    if (!isPlaying || totalSlides <= 1) return;
    const stepMs = 40;
    const stepPct = (stepMs / autoPlayInterval) * 100;
    const t = setInterval(() => {
      setProgress((prev) => {
        if (prev + stepPct >= 100) {
          goToNext();
          return 0;
        }
        return prev + stepPct;
      });
    }, stepMs);
    return () => clearInterval(t);
  }, [isPlaying, autoPlayInterval, goToNext, totalSlides]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 44) {
      if (diff > 0) goToNext();
      else goToPrev();
    }
    touchStartX.current = null;
  };

  return (
    <section
      aria-label="Hero"
      className={cn("md:hidden bg-[#f5f5f7] pt-4 pb-5", className)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="px-4">
        {/* Single Zepto-style card */}
        <div className="overflow-hidden rounded-[22px] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-black/[0.04]">
          {/* Swipe track */}
          <div
            className="flex transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide) => {
              const img = getSlideImage(slide);
              return (
                <div key={slide.id} className="min-w-full w-full shrink-0">
                  {/* Image window — clean, Zepto-like */}
                  <div className="relative h-[170px] w-full overflow-hidden bg-[#f5f5f7]">
                    <Image
                      src={img}
                      alt={slide.bannerAlt || (typeof slide.headline === "string" ? slide.headline : "Campus")}
                      fill
                      priority
                      sizes="100vw"
                      className="object-cover object-center"
                    />
                    {slide.badge && (
                      <span className="absolute left-3 top-3 inline-flex items-center px-2.5 py-1 rounded-full bg-white/95 backdrop-blur text-[11px] font-bold tracking-wider uppercase text-[#e41d43] shadow-sm border border-black/5">
                        {slide.badge}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    {slide.headline && (
                      <h1 className="text-[20px] font-bold leading-tight tracking-tight text-[#1d1d1f] font-heading">
                        {slide.headline}
                      </h1>
                    )}
                    {slide.subtitle && (
                      <p className="mt-2 text-[13px] leading-relaxed text-[#6e6e73] line-clamp-3">{slide.subtitle}</p>
                    )}

                    {/* Pill CTAs */}
                    {(slide.primaryCta || slide.secondaryCta) && (
                      <div className="mt-3.5 flex flex-wrap items-center gap-2">
                        {slide.primaryCta && (
                          <Link
                            href={slide.primaryCta.href}
                            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#e41d43] px-4 py-2.5 text-[13px] font-semibold text-white shadow-[0_4px_12px_rgba(228,29,67,0.25)] active:scale-95 transition-transform"
                          >
                            {slide.primaryCta.label} <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        )}
                        {slide.secondaryCta && (
                          <Link
                            href={slide.secondaryCta.href}
                            className="inline-flex items-center justify-center rounded-full bg-[#f5f5f7] border border-black/[0.06] px-4 py-2.5 text-[13px] font-semibold text-[#1d1d1f] active:scale-95 transition-transform"
                          >
                            {slide.secondaryCta.label}
                          </Link>
                        )}
                      </div>
                    )}

                    {/* Stats strip — thin, Zepto stats row style */}
                    {slide.stats && slide.stats.length > 0 && (
                      <div className="mt-4 grid grid-cols-3 gap-2 border-t border-black/[0.06] pt-3">
                        {slide.stats.map((s) => (
                          <div key={s.label} className="text-center">
                            <p className="text-[15px] font-bold tracking-tight text-[#243d77] leading-none">{s.value}</p>
                            <p className="mt-1 text-[10px] leading-snug text-[#86868b] font-medium line-clamp-2">{s.label}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Indicators */}
        {totalSlides > 1 && (
          <div className="mt-3 flex items-center justify-center gap-2.5">
            <div className="flex items-center gap-1.5" role="tablist" aria-label="Hero slides">
              {slides.map((s, idx) => {
                const active = idx === currentIndex;
                return (
                  <button
                    key={s.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    aria-label={`Go to slide ${idx + 1}`}
                    onClick={() => goToSlide(idx)}
                    className="relative h-1.5 rounded-full overflow-hidden transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e41d43] before:absolute before:-inset-3 before:content-['']"
                    style={{
                      width: active ? "24px" : "6px",
                      backgroundColor: active ? "rgba(36,61,119,0.14)" : "rgba(0,0,0,0.14)",
                    }}
                  >
                    {active && (
                      <span
                        className="absolute inset-y-0 left-0 bg-[#e41d43] rounded-full"
                        style={{ width: `${progress}%`, transition: isPlaying ? "width 40ms linear" : "none" }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
            <button
              type="button"
              onClick={() => setIsPlaying((p) => !p)}
              className="ml-1 w-7 h-7 rounded-full bg-white border border-black/10 shadow-sm flex items-center justify-center active:scale-95 transition-transform"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause className="w-3 h-3 text-[#1d1d1f]" /> : <Play className="w-3 h-3 text-[#1d1d1f] fill-[#1d1d1f] ml-0.5" />}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
