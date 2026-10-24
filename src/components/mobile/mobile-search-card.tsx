"use client";

import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Phone, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";
import { defaultFullHeroSlides, type FullHeroSlide } from "@/components/sections/hero/hero-data";

/**
 * MobileSearchCard — immersive home-only header (native app pattern).
 *
 * Layers:
 *  [Banner h-[23rem]]  full-bleed promo carousel (auto-advance + swipe)
 *
 * Location & search removed per requirement — clean banner only.
 * Theme-color per slide + swipe retained for native feel.
 */

export interface MobileSearchCardProps {
  /** @deprecated search removed — kept for compat */
  searchHref?: string;
  slides?: FullHeroSlide[];
  autoAdvanceMs?: number;
  /** Swipe threshold in px */
  swipeThreshold?: number;
}

const FALLBACK_SLIDE: FullHeroSlide | null = null;

export function MobileSearchCard({
  searchHref: _searchHref,
  slides,
  autoAdvanceMs = 6500,
  swipeThreshold = 40,
}: MobileSearchCardProps) {
  const allSlides = useMemo(() => {
    const src = slides && slides.length > 0 ? slides : defaultFullHeroSlides;
    // Prefer banner/banner-capable slides for the compact mobile hero, but keep any fallback
    return src;
  }, [slides]);

  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const dragStartX = useRef<number | null>(null);
  const dragDeltaX = useRef(0);
  const timerRef = useRef<number | null>(null);

  const total = allSlides.length;
  const active = total > 0 ? allSlides[index % total] ?? FALLBACK_SLIDE : FALLBACK_SLIDE;

  const goNext = useCallback(() => {
    setIndex((p) => (total <= 1 ? p : (p + 1) % total));
  }, [total]);

  const goPrev = useCallback(() => {
    setIndex((p) => (total <= 1 ? p : (p - 1 + total) % total));
  }, [total]);

  // Auto-advance
  useEffect(() => {
    if (isPaused || total <= 1) return;
    timerRef.current = window.setInterval(goNext, autoAdvanceMs);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [isPaused, total, autoAdvanceMs, goNext]);

  // Theme-color per slide (status bar tint on Android)
  useEffect(() => {
    if (!active) return;
    const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
    if (!meta) return;
    const prev = meta.content;
    // Derive tint from slide tone: banner slides use crimson/navy, otherwise default
    const tint = active.layout === "banner" ? "#e41d43" : "#ffffff";
    meta.content = tint;
    return () => {
      meta.content = prev;
    };
  }, [active]);

  const handleTouchStart = (e: React.TouchEvent) => {
    dragStartX.current = e.touches[0].clientX;
    dragDeltaX.current = 0;
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (dragStartX.current === null) return;
    dragDeltaX.current = e.touches[0].clientX - dragStartX.current;
  };

  const handleTouchEnd = () => {
    if (dragStartX.current === null) return;
    const delta = dragDeltaX.current;
    dragStartX.current = null;
    dragDeltaX.current = 0;
    setIsPaused(false);
    if (Math.abs(delta) > swipeThreshold) {
      if (delta < 0) goNext();
      else goPrev();
    }
  };

  if (!active) return null;

  // Pick a cover image for the banner layer
  const coverSrc =
    active.backgroundImage ||
    active.bannerImage ||
    active.media?.imageUrl ||
    active.media?.videoPoster ||
    null;

  const overlayTitle: React.ReactNode = active.headline ?? active.badge ?? "Shape what comes next";
  const overlaySubtitle: string =
    active.subtitle ?? "Admissions 2026-27 open — explore programmes built for tomorrow.";

  return (
    <div className="md:hidden">
      {/* Banner */}
      <div
        className="relative h-[23rem] overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Media layer */}
        <div className="absolute inset-0">
          {coverSrc ? (
            <Image
              src={coverSrc}
              alt={active.bannerAlt || (typeof active.headline === "string" ? active.headline : "Campus showcase")}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-[#243d77] via-[#1a2c56] to-[#0f1a33]" />
          )}
          {/* Gradient overlay — keeps text legible like Zepto banner */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(15,10,30,0.55) 0%, rgba(15,10,30,0.12) 42%, rgba(15,10,30,0.62) 100%)",
            }}
            aria-hidden
          />
          {/* Crimson ambient accent for brand recall */}
          <div
            className="absolute -right-16 -top-16 size-56 rounded-full blur-3xl opacity-25"
            style={{ background: "#e41d43" }}
            aria-hidden
          />
        </div>

        {/* Top bar — logo + call button (location/search removed, these stay) */}
        <div
          className="relative z-10 flex items-center gap-2 px-4 pt-3"
          style={{ paddingTop: "calc(env(safe-area-inset-top) + 0.5rem)" }}
        >
          <Link
            href="/"
            aria-label={`${siteConfig.shortName} Home`}
            className="flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-md border border-white/15 px-2.5 py-1.5 active:scale-[0.98] transition-transform"
          >
            <span className="flex size-7 items-center justify-center rounded-lg bg-white text-[10px] font-extrabold text-[#243d77]">B</span>
            <span className="flex flex-col leading-none">
              <span className="text-[11px] font-extrabold tracking-tight text-white">BBDITM</span>
              <span className="text-[10px] font-medium text-white/80">Lucknow</span>
            </span>
          </Link>
          <a
            href={`tel:${siteConfig.contact.admissionsPhone}`}
            className="ml-auto flex size-9 items-center justify-center rounded-full bg-white/15 backdrop-blur-md border border-white/15 text-white active:scale-95 transition-transform"
            aria-label={`Call ${siteConfig.contact.admissionsPhone}`}
          >
            <Phone className="size-4" />
          </a>
        </div>

        {/* Bottom copy */}
        <div className="absolute inset-x-0 bottom-0 z-10 px-4 pb-10">
          <div className="mx-auto max-w-2xl">
            {active.badge && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 px-3 py-1 text-[11px] font-semibold tracking-wide text-white">
                <Sparkles className="size-3" />
                {active.badge}
              </span>
            )}
            <div className="mt-2 text-[22px] font-extrabold leading-tight tracking-tight text-white font-heading drop-shadow-sm line-clamp-2">
              {overlayTitle}
            </div>
            <p className="mt-1.5 line-clamp-2 text-[13px] font-medium leading-relaxed text-white/90">{overlaySubtitle}</p>
            {active.primaryCta && (
              <Link
                href={active.primaryCta.href}
                className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-bold text-[#243d77] shadow-md active:scale-[0.98] transition-transform"
              >
                {active.primaryCta.label} <ChevronRight className="size-3.5" />
              </Link>
            )}

            {/* Dots */}
            {total > 1 && (
              <div className="mt-3 flex items-center gap-1.5">
                {allSlides.slice(0, 6).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to slide ${i + 1}`}
                    aria-current={i === index}
                    onClick={() => setIndex(i)}
                    className={`h-1.5 rounded-full transition-all ${i === index ? "w-6 bg-white" : "w-1.5 bg-white/50"}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Search pill removed — clean banner only */}
    </div>
  );
}
