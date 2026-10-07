"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  GraduationCap,
  Trophy,
  Video,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface HeroSlideItem {
  id: string;
  type?: "card" | "video" | "image" | "custom";
  badge?: string;
  badgeVariant?: "red" | "blue" | "white" | "emerald";
  title: string;
  subtitle?: string;
  description?: string;
  mediaUrl?: string;
  videoPoster?: string;
  mediaType?: "image" | "video";
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  highlights?: Array<{
    tag?: string;
    title: string;
    desc: string;
  }>;
  customContent?: React.ReactNode;
}

export interface HeroSliderProps {
  slides?: HeroSlideItem[];
  autoPlayInterval?: number;
  showControls?: boolean;
  showIndicators?: boolean;
  showPlayPause?: boolean;
  className?: string;
}

// Default high-impact slides (featuring academic excellence, video/media tour, and placement records)
export const defaultHeroSlides: HeroSlideItem[] = [
  {
    id: "academic-excellence",
    type: "card",
    badge: "AICTE APPROVED",
    badgeVariant: "red",
    title: "Academic Excellence",
    subtitle: "BBDITM Lucknow",
    description: "AKTU College Code: 054 · NBA Accredited Standards",
    highlights: [
      {
        tag: "FLAGSHIP SCHOOL",
        title: "Computer Science & Engineering",
        desc: "With specialized tracks in AI, Machine Learning, and Data Science.",
      },
      {
        tag: "INDUSTRY PARTNERSHIPS",
        title: "Top Corporate Recruiters",
        desc: "TCS, Infosys, Wipro, Capgemini, Cognizant, and Samsung R&D.",
      },
    ],
    ctaText: "Talk to Admission Team",
    ctaLink: "/contact",
  },
  {
    id: "campus-experience",
    type: "video",
    badge: "CAMPUS TOUR",
    badgeVariant: "white",
    title: "100+ Acre Smart Campus",
    subtitle: "Faizabad Road, Lucknow",
    description:
      "State-of-the-art supercomputing labs, AC digital library, Olympic-standard sports arena, and modern residential student hostels.",
    mediaUrl: "", // Ready for custom MP4 URL (e.g. /videos/campus-tour.mp4)
    videoPoster: "",
    highlights: [
      {
        tag: "RESEARCH & LABS",
        title: "Advanced Computing & IoT Hub",
        desc: "NVIDIA-powered GPU clusters for deep learning research and drone robotics.",
      },
      {
        tag: "STUDENT LIFE",
        title: "Integrated Campus City",
        desc: "24/7 banking, medical center, cafeteria, and national stadium facilities.",
      },
    ],
    ctaText: "Explore Campus Facilities",
    ctaLink: "/campus-life",
  },
  {
    id: "placements-spotlight",
    type: "card",
    badge: "SESSION 2026-27",
    badgeVariant: "emerald",
    title: "Career Development Cell",
    subtitle: "Transforming Potential into Leadership",
    description: "₹44.15 LPA Highest Package · 850+ Offers Across 180+ Recruiters",
    highlights: [
      {
        tag: "TOP HIGHEST PACKAGE",
        title: "₹ 44.15 Lakhs / Annum",
        desc: "Record-breaking software engineering offer secured at global tech leader.",
      },
      {
        tag: "PRE-PLACEMENT GROOMING",
        title: "Technical Mock Interviews",
        desc: "Corporate mentorship by alumni working at Amazon, Google, and Microsoft.",
      },
    ],
    ctaText: "View Placements Report",
    ctaLink: "/placements",
  },
];

export function HeroSlider({
  slides = defaultHeroSlides,
  autoPlayInterval = 6000,
  showControls = true,
  showIndicators = true,
  showPlayPause = true,
  className,
}: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const totalSlides = slides.length;

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Autoplay timer
  useEffect(() => {
    if (!isPlaying || totalSlides <= 1) return;

    const interval = setInterval(() => {
      goToNext();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isPlaying, autoPlayInterval, goToNext, totalSlides]);

  // Touch gesture support (swipe on mobile/tablet)
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
    setTouchStartX(null);
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      goToPrev();
    } else if (e.key === "ArrowRight") {
      goToNext();
    }
  };

  const currentSlide = slides[currentIndex];

  const getBadgeClass = (variant?: string) => {
    switch (variant) {
      case "red":
        return "bg-[#e41d43] text-white";
      case "emerald":
        return "bg-emerald-600 text-white";
      case "blue":
        return "bg-[#243d77] text-white";
      case "white":
      default:
        return "bg-white/20 backdrop-blur-md text-white border border-white/30";
    }
  };

  return (
    <div
      role="region"
      aria-label="Campus and academic showcase slider"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
      className={cn(
        "relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 select-none outline-none focus-visible:ring-2 focus-visible:ring-[#e41d43]",
        className
      )}
    >
      {/* Background Frame with layered gradients */}
      <div className="relative min-h-[440px] sm:min-h-[460px] flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#1c2e59] via-[#152345] to-[#0c162e] border border-white/10 p-6 sm:p-7 text-white">
        
        {/* Ambient background glow */}
        <div
          className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#e41d43]/15 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#243d77]/40 blur-3xl"
          aria-hidden="true"
        />

        {/* Video Background Layer (if current slide has video mediaUrl) */}
        {currentSlide.mediaUrl && currentSlide.mediaType === "video" && (
          <div className="absolute inset-0 z-0 overflow-hidden">
            <video
              ref={videoRef}
              src={currentSlide.mediaUrl}
              poster={currentSlide.videoPoster}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c162e] via-[#152345]/80 to-transparent" />
          </div>
        )}

        {/* Decorative video backdrop mock if video type but no mediaUrl provided yet */}
        {currentSlide.type === "video" && !currentSlide.mediaUrl && (
          <div className="absolute inset-0 z-0 overflow-hidden opacity-15 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent animate-pulse" />
            <div className="w-full h-full bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:2rem_2rem]" />
          </div>
        )}

        {/* Top Header Row: Identity & Badge */}
        <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white shrink-0 shadow-sm">
              {currentSlide.type === "video" ? (
                <Video className="w-5 h-5 text-[#f87171]" />
              ) : currentSlide.id === "placements-spotlight" ? (
                <Trophy className="w-5 h-5 text-amber-400" />
              ) : (
                <GraduationCap className="w-5 h-5 text-[#f87171]" />
              )}
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-white truncate font-heading tracking-tight">
                {currentSlide.title}
              </p>
              {currentSlide.subtitle && (
                <p className="text-xs text-slate-300 truncate">
                  {currentSlide.subtitle}
                </p>
              )}
            </div>
          </div>

          {currentSlide.badge && (
            <span
              className={cn(
                "text-xs font-semibold tracking-tight px-3 py-1 rounded-full uppercase shadow-xs shrink-0",
                getBadgeClass(currentSlide.badgeVariant)
              )}
            >
              {currentSlide.badge}
            </span>
          )}
        </div>

        {/* Main Content Area (Key Highlights or Custom Node) */}
        <div className="relative z-10 py-5 space-y-3 flex-1 flex flex-col justify-center">
          {currentSlide.description && (
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              {currentSlide.description}
            </p>
          )}

          {currentSlide.customContent ? (
            currentSlide.customContent
          ) : currentSlide.highlights && currentSlide.highlights.length > 0 ? (
            <div className="space-y-2.5">
              {currentSlide.highlights.map((h, i) => (
                <div
                  key={i}
                  className="p-3.5 sm:p-4 rounded-xl bg-white/5 hover:bg-white/[0.08] border border-white/10 space-y-1 transition-colors"
                >
                  {h.tag && (
                    <span className="text-xs font-semibold text-[#f87171] uppercase tracking-wider block">
                      {h.tag}
                    </span>
                  )}
                  <h4 className="text-sm font-semibold text-white tracking-tight font-heading">
                    {h.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {h.desc}
                  </p>
                </div>
              ))}
            </div>
          ) : null}
        </div>

        {/* Bottom Interactive Row: CTA & Controls */}
        <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
          {/* Action Link */}
          {currentSlide.ctaLink && currentSlide.ctaText ? (
            <Link
              href={currentSlide.ctaLink}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#f87171] hover:text-white transition-colors group"
            >
              <span>{currentSlide.ctaText}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : (
            <span className="text-xs text-slate-300">
              Slide {currentIndex + 1} of {totalSlides}
            </span>
          )}

          {/* Slider Navigation Controls */}
          <div className="flex items-center gap-2">
            {/* Play/Pause Button */}
            {showPlayPause && (
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all border border-white/10 focus:outline-none focus:ring-1 focus:ring-white"
                aria-label={isPlaying ? "Pause slider" : "Play slider"}
                title={isPlaying ? "Pause autoplay" : "Start autoplay"}
              >
                {isPlaying ? (
                  <Pause className="w-3 h-3 text-white" />
                ) : (
                  <Play className="w-3 h-3 text-white fill-white ml-0.5" />
                )}
              </button>
            )}

            {/* Prev / Next Arrows */}
            {showControls && (
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={goToPrev}
                  className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all border border-white/10 active:scale-95 focus:outline-none focus:ring-1 focus:ring-white"
                  aria-label="Previous slide"
                  title="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4 text-white" />
                </button>
                <button
                  type="button"
                  onClick={goToNext}
                  className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all border border-white/10 active:scale-95 focus:outline-none focus:ring-1 focus:ring-white"
                  aria-label="Next slide"
                  title="Next slide"
                >
                  <ChevronRight className="w-4 h-4 text-white" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Slide Progress / Indicators Bar */}
        {showIndicators && totalSlides > 1 && (
          <div
            className="absolute bottom-1.5 left-0 right-0 flex items-center justify-center gap-1.5 px-6 pointer-events-auto"
            aria-label="Slide indicators"
          >
            {slides.map((s, idx) => (
              <button
                key={s.id}
                type="button"
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}: ${s.title}`}
                className={cn(
                  "h-1 rounded-full transition-all duration-300 focus:outline-none",
                  idx === currentIndex
                    ? "w-6 bg-[#e41d43]"
                    : "w-1.5 bg-white/30 hover:bg-white/50"
                )}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
