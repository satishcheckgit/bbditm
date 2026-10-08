"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  GraduationCap,
  Trophy,
  Video,
  X,
  Sparkles,
  Image as ImageIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface HeroSlideMedia {
  type?: "card" | "video" | "image" | "custom";
  badge?: string;
  badgeVariant?: "red" | "blue" | "white" | "emerald";
  title: string;
  subtitle?: string;
  description?: string;
  videoUrl?: string; // Optional direct MP4/WebM or embed URL
  videoPoster?: string;
  videoDuration?: string;
  imageUrl?: string; // Option 1: Right-side image banner URL
  imageAlt?: string;
  highlights?: Array<{
    tag?: string;
    title: string;
    desc: string;
  }>;
  ctaText?: string;
  ctaLink?: string;
  customContent?: React.ReactNode;
}

export interface FullHeroSlide {
  id: string;
  layout?: "split" | "banner"; // "split" = 2-column (default), "banner" = full-width wide banner
  badge?: string;
  badgeVariant?: "red" | "blue" | "emerald" | "outline";
  headline?: React.ReactNode;
  subtitle?: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  stats?: Array<{
    value: string;
    label: string;
  }>;
  media?: HeroSlideMedia;

  // Option 2: Full-Width Image Banner props (used when layout === "banner")
  bannerImage?: string; // Image path or URL for full banner
  bannerAlt?: string;
  bannerLink?: string; // Clickable link for the entire banner
  fullBleed?: boolean; // If true, banner stretches edge-to-edge full width
  showOverlay?: boolean; // If true, renders text overlay & gradient. Default: false for clean graphical banners
}

export interface HomeHeroProps {
  slides?: FullHeroSlide[];
  autoPlayInterval?: number;
  showControls?: boolean;
  showIndicators?: boolean;
  showPlayPause?: boolean;
  className?: string;
}

// Production-grade curated default slides (supporting Cards, Video, Image Card & Full Banner)
export const defaultFullHeroSlides: FullHeroSlide[] = [
  {
    id: "academic-depth",
    layout: "split",
    badge: "ADMISSIONS 2026-27",
    badgeVariant: "red",
    headline: (
      <>
        Where technical depth meets{" "}
        <span className="text-[#e41d43]">real-world leadership.</span>
      </>
    ),
    subtitle:
      "Study at Babu Banarasi Das Institute of Technology & Management. Empowering engineers and managers with industry-aligned curricula, specialized research labs, and an active campus community.",
    primaryCta: {
      label: "Explore Programmes",
      href: "/programmes",
    },
    secondaryCta: {
      label: "Admissions 2026-27",
      href: "/admissions",
    },
    stats: [
      { value: "25+", label: "Years of Academic Legacy" },
      { value: "₹ 44.15L", label: "Highest Salary Package" },
      { value: "100+", label: "Acres Campus City" },
    ],
    media: {
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
  },
  {
    id: "campus-infrastructure",
    layout: "split",
    badge: "100+ ACRE SMART CAMPUS",
    badgeVariant: "blue",
    headline: (
      <>
        A 100+ acre smart campus{" "}
        <span className="text-[#e41d43]">engineered for discovery.</span>
      </>
    ),
    subtitle:
      "Immerse yourself in world-class infrastructure — NVIDIA supercomputing clusters, drone robotics labs, AC digital central library, and Olympic-standard sports arenas on Faizabad Road.",
    primaryCta: {
      label: "Explore Campus Facilities",
      href: "/campus-life",
    },
    secondaryCta: {
      label: "Virtual Campus Tour",
      href: "/contact",
    },
    stats: [
      { value: "100+", label: "Acres Lush Green Campus" },
      { value: "60+", label: "Advanced Labs & Hubs" },
      { value: "24/7", label: "Hostel & Smart Amenities" },
    ],
    media: {
      type: "video",
      badge: "CAMPUS TOUR",
      badgeVariant: "white",
      title: "100+ Acre Smart Campus",
      subtitle: "Faizabad Road, Lucknow",
      videoDuration: "4K Campus Walkthrough",
      description:
        "State-of-the-art supercomputing labs, AC digital library, Olympic-standard sports arena, and modern residential student hostels.",
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
  },
  {
    id: "career-placements",
    layout: "split",
    badge: "RECORD-BREAKING PLACEMENTS",
    badgeVariant: "emerald",
    headline: (
      <>
        Launching global careers with{" "}
        <span className="text-[#e41d43]">record-breaking placements.</span>
      </>
    ),
    subtitle:
      "Our proactive Career Development Cell bridges student ambition with Fortune 500 industry leaders through rigorous tech interview prep, hackathons, and corporate mentorship.",
    primaryCta: {
      label: "View Placement Records",
      href: "/placements",
    },
    secondaryCta: {
      label: "Top Recruiters",
      href: "/placements#recruiters",
    },
    stats: [
      { value: "₹ 44.15L", label: "Highest Salary Package" },
      { value: "850+", label: "Offers in 2024-25" },
      { value: "180+", label: "Corporate Recruiters" },
    ],
    media: {
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
  },
  {
    id: "admissions-wide-banner",
    layout: "banner", // Option 2: Full-Width Image Banner Slide
    fullBleed: true, // Expands full-fledge across the hero section
    showOverlay: false, // Clean graphical banner without text/black gradient clutter
    bannerImage: "/banner/banner.jpg",
    bannerAlt: "BBDITM AKTU Merit List Academic Session 2024-25, 2025-26",
    bannerLink: "/admissions",
  },
  {
    id: "student-wide-banner",
    layout: "banner", // Option 2: Full-Width Image Banner Slide
    fullBleed: true, // Expands full-fledge across the hero section
    showOverlay: false, // Clean graphical banner without text/black gradient clutter
    bannerImage: "/banner/students.webp",
    bannerAlt: "BBDITM AKTU Students",
    bannerLink: "/contact",
  },
];

export function HomeHero({
  slides = defaultFullHeroSlides,
  autoPlayInterval = 6500,
  showControls = true,
  showIndicators = true,
  showPlayPause = true,
  className,
}: HomeHeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [activeVideoModal, setActiveVideoModal] = useState<string | null>(null);
  const [containerHeight, setContainerHeight] = useState<number | undefined>(undefined);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Dynamically adapt carousel height to active slide (eliminates mobile blank void below banner)
  useEffect(() => {
    const activeEl = slideRefs.current[currentIndex];
    if (!activeEl) return;

    setContainerHeight(activeEl.offsetHeight);

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === activeEl) {
          setContainerHeight(activeEl.offsetHeight);
        }
      }
    });

    resizeObserver.observe(activeEl);
    return () => resizeObserver.disconnect();
  }, [currentIndex]);

  const totalSlides = slides.length;
  const isCurrentSlideBanner = slides[currentIndex]?.layout === "banner";
  const touchStartXRef = useRef<number | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    setProgress(0);
  }, [totalSlides]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    setProgress(0);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  // High-smoothness autoplay timer with fine-grained progress bar (Apple TV+ / Store style)
  useEffect(() => {
    if (!isPlaying || totalSlides <= 1) return;

    const stepMs = 50;
    const stepPercent = (stepMs / autoPlayInterval) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev + stepPercent >= 100) {
          goToNext();
          return 0;
        }
        return prev + stepPercent;
      });
    }, stepMs);

    return () => clearInterval(timer);
  }, [isPlaying, autoPlayInterval, goToNext, totalSlides]);

  // Touch gesture support (swipe on mobile/tablet)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
    touchStartXRef.current = null;
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      goToPrev();
    } else if (e.key === "ArrowRight") {
      goToNext();
    } else if (e.key === " ") {
      e.preventDefault();
      setIsPlaying((prev) => !prev);
    }
  };


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
    <section
      role="region"
      aria-roledescription="carousel"
      aria-label="Campus Hero Showcase"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
      className={cn(
        "relative overflow-hidden bg-white select-none outline-none focus-visible:ring-1 focus-visible:ring-[#e41d43] transition-[padding] duration-300",
        isCurrentSlideBanner
          ? "pt-1.5 sm:pt-2.5 md:pt-3 lg:pt-3.5 pb-2.5 sm:pb-3 md:pb-3.5 lg:pb-4"
          : "pt-4 sm:pt-6 md:pt-8 lg:pt-10 pb-5 sm:pb-6 md:pb-8 lg:pb-10",
        className
      )}
    >
      {/* Subtle background ambient mesh */}
      <div
        className="pointer-events-none absolute -top-40 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-[var(--color-brand-50)] blur-3xl opacity-70"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 left-0 -z-10 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-blue-50/50 blur-3xl opacity-60"
        aria-hidden="true"
      />

      {/* Floating Side Arrow Controls (Desktop hover ergonomics) */}
      {showControls && totalSlides > 1 && (
        <>
          <button
            type="button"
            onClick={goToPrev}
            className="hidden xl:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full items-center justify-center bg-white/80 hover:bg-white text-[#1d1d1f] hover:text-[#e41d43] shadow-md border border-slate-200/80 backdrop-blur-md transition-all hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#e41d43]"
            aria-label="Previous slide"
            title="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={goToNext}
            className="hidden xl:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full items-center justify-center bg-white/80 hover:bg-white text-[#1d1d1f] hover:text-[#e41d43] shadow-md border border-slate-200/80 backdrop-blur-md transition-all hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#e41d43]"
            aria-label="Next slide"
            title="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Carousel Sliding Track with Dynamic Height */}
      <div
        className="w-full overflow-hidden transition-[height] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ height: containerHeight ? `${containerHeight}px` : "auto" }}
      >
        <div
          className="flex items-start transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, slideIdx) => {
            const isSlideActive = slideIdx === currentIndex;
            const isBannerMode = slide.layout === "banner";
            const media = slide.media;

            return (
              <div
                key={slide.id}
                ref={(el) => {
                  slideRefs.current[slideIdx] = el;
                }}
                role="group"
                aria-roledescription="slide"
                aria-label={`${slideIdx + 1} of ${totalSlides}: ${slide.id}`}
                aria-hidden={!isSlideActive}
                className={cn(
                  "min-w-full w-full shrink-0 transition-opacity duration-500",
                  isSlideActive ? "opacity-100" : "opacity-30 pointer-events-none"
                )}
              >
                {/* OPTION 2: FULL-WIDTH IMAGE BANNER LAYOUT */}
                {isBannerMode ? (
                  <div
                    className={cn(
                      "w-full mx-auto transition-all",
                      slide.fullBleed
                        ? "max-w-none px-0"
                        : "max-w-[1680px] px-2 sm:px-4 md:px-6"
                    )}
                  >
                    <div
                      className={cn(
                        "relative w-full overflow-hidden group/banner shadow-xl transition-all",
                        slide.fullBleed
                          ? "rounded-none"
                          : "rounded-2xl md:rounded-3xl border border-slate-200/80",
                        "aspect-[2.74/1] w-full"
                      )}
                    >
                      {/* Custom Banner Image */}
                      {slide.bannerImage ? (
                        <Image
                          src={slide.bannerImage}
                          alt={slide.bannerAlt || "Banner"}
                          fill
                          priority
                          unoptimized
                          sizes="100vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover/banner:scale-[1.01]"
                        />
                      ) : (
                        /* Artistic Mesh Backdrop fallback when image is pending */
                        <div className="absolute inset-0 bg-gradient-to-r from-[#1c2e59] via-[#243d77] to-[#122247]" />
                      )}

                      {/* Full-banner clickable link when no overlay */}
                      {slide.bannerLink && !slide.showOverlay && (
                        <Link
                          href={slide.bannerLink}
                          className="absolute inset-0 z-10 cursor-pointer"
                          aria-label={slide.bannerAlt || "Banner link"}
                        />
                      )}

                      {/* Optional Overlay Content (ONLY when showOverlay === true) */}
                      {slide.showOverlay && (
                        <>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />
                          <div className="relative z-20 max-w-2xl space-y-4 md:space-y-5 p-6 sm:p-10 md:p-12 text-white flex flex-col justify-end h-full">
                            {slide.badge && (
                              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-white/20 backdrop-blur-md text-white border border-white/30">
                                <span className="w-2 h-2 rounded-full bg-[#e41d43]" />
                                <span>{slide.badge}</span>
                              </div>
                            )}

                            {slide.headline && (
                              <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight leading-[1.14] font-heading drop-shadow-md">
                                {slide.headline}
                              </h2>
                            )}

                            {slide.subtitle && (
                              <p className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed font-normal max-w-xl drop-shadow-sm">
                                {slide.subtitle}
                              </p>
                            )}

                            {(slide.primaryCta || slide.secondaryCta) && (
                              <div className="flex flex-wrap items-center gap-3 pt-2">
                                {slide.primaryCta && (
                                  <Button
                                    href={slide.primaryCta.href}
                                    variant="primary"
                                    size="lg"
                                    className="group shadow-lg"
                                  >
                                    <span>{slide.primaryCta.label}</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform ml-1" />
                                  </Button>
                                )}

                                {slide.secondaryCta && (
                                  <Button
                                    href={slide.secondaryCta.href}
                                    variant="secondary"
                                    size="lg"
                                    className="bg-white/90 backdrop-blur-md text-[#243d77] hover:bg-white border-0 shadow-lg"
                                  >
                                    <span>{slide.secondaryCta.label}</span>
                                  </Button>
                                )}
                              </div>
                            )}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                ) : (
                  <Container>
                    {/* OPTION 1: SPLIT 2-COLUMN LAYOUT (Supporting Text + Card / Video / Image Card) */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center min-h-[460px] lg:min-h-[500px]">
                      {/* Left Column: Headline, Subtitle, CTAs, Proof Points */}
                      <div className="lg:col-span-7 space-y-6 md:space-y-7">
                        {slide.badge && (
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-slate-100 text-[#243d77] border border-slate-200/70">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#e41d43]" />
                            <span>{slide.badge}</span>
                          </div>
                        )}

                        {slide.headline && (
                          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-semibold text-black tracking-tight leading-[1.12] font-heading">
                            {slide.headline}
                          </h1>
                        )}

                        {slide.subtitle && (
                          <p className="text-base sm:text-lg text-[#6e6e73] leading-relaxed max-w-2xl font-normal">
                            {slide.subtitle}
                          </p>
                        )}

                        {slide.primaryCta && (
                          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                            <Button
                              href={slide.primaryCta.href}
                              variant="primary"
                              size="lg"
                              className="group"
                            >
                              <span>{slide.primaryCta.label}</span>
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform ml-1" />
                            </Button>

                            {slide.secondaryCta && (
                              <Button
                                href={slide.secondaryCta.href}
                                variant="secondary"
                                size="lg"
                              >
                                <span>{slide.secondaryCta.label}</span>
                              </Button>
                            )}
                          </div>
                        )}

                        {slide.stats && slide.stats.length > 0 && (
                          <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-6 max-w-xl">
                            {slide.stats.map((stat, sIdx) => (
                              <div key={sIdx}>
                                <p className="text-2xl sm:text-3xl font-bold text-[#243d77] tracking-tight font-heading">
                                  {stat.value}
                                </p>
                                <p className="text-xs text-[#86868b] font-medium mt-0.5">
                                  {stat.label}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Right Column: Slide Media Canvas (Card / Video Player / Image Banner Card) */}
                      {media && (
                        <div className="lg:col-span-5 relative">
                          <div className="relative mx-auto max-w-md lg:max-w-none">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-300">
                              {/* Background Frame with layered gradients or Image Banner */}
                              <div className="relative min-h-[440px] sm:min-h-[460px] flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#1c2e59] via-[#152345] to-[#0c162e] border border-white/10 p-6 sm:p-7 text-white group/rightcard">

                                {/* Option 1: Right-Column Image Banner (media.type === "image" && media.imageUrl) */}
                                {media.type === "image" && media.imageUrl && (
                                  <>
                                    <Image
                                      src={media.imageUrl}
                                      alt={media.imageAlt || media.title}
                                      fill
                                      unoptimized
                                      sizes="(max-width: 1024px) 100vw, 500px"
                                      className="object-cover transition-transform duration-700 ease-out group-hover/rightcard:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c162e]/90 via-[#152345]/60 to-black/30" />
                                  </>
                                )}

                                {/* Ambient background glow (when no full image background) */}
                                {(!media.imageUrl || media.type !== "image") && (
                                  <>
                                    <div
                                      className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#e41d43]/15 blur-3xl"
                                      aria-hidden="true"
                                    />
                                    <div
                                      className="pointer-events-none absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#243d77]/40 blur-3xl"
                                      aria-hidden="true"
                                    />
                                  </>
                                )}

                                {/* Direct Video Background (if slide provides media.videoUrl) */}
                                {media.videoUrl && (
                                  <div className="absolute inset-0 z-0 overflow-hidden">
                                    <video
                                      ref={isSlideActive ? videoRef : undefined}
                                      src={media.videoUrl}
                                      poster={media.videoPoster}
                                      autoPlay
                                      muted
                                      loop
                                      playsInline
                                      className="w-full h-full object-cover opacity-35"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c162e] via-[#152345]/80 to-transparent" />
                                  </div>
                                )}

                                {/* Video decorative ambient grid (for video-type slide) */}
                                {media.type === "video" && !media.videoUrl && (
                                  <div className="absolute inset-0 z-0 overflow-hidden opacity-20 pointer-events-none">
                                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent animate-pulse" />
                                    <div className="w-full h-full bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:2rem_2rem]" />
                                  </div>
                                )}

                                {/* Card Top Header: Icon + Title + Badge */}
                                <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/10">
                                  <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shrink-0 shadow-sm">
                                      {media.type === "video" ? (
                                        <Video className="w-5 h-5 text-[#f87171]" />
                                      ) : media.type === "image" ? (
                                        <ImageIcon className="w-5 h-5 text-white" />
                                      ) : slide.id === "career-placements" ? (
                                        <Trophy className="w-5 h-5 text-amber-400" />
                                      ) : (
                                        <GraduationCap className="w-5 h-5 text-[#f87171]" />
                                      )}
                                    </div>
                                    <div className="min-w-0">
                                      <p className="text-sm font-semibold text-white truncate font-heading tracking-tight drop-shadow-sm">
                                        {media.title}
                                      </p>
                                      {media.subtitle && (
                                        <p className="text-xs text-slate-300 truncate drop-shadow-sm">
                                          {media.subtitle}
                                        </p>
                                      )}
                                    </div>
                                  </div>

                                  {media.badge && (
                                    <span
                                      className={cn(
                                        "text-xs font-semibold tracking-tight px-3 py-1 rounded-full uppercase shadow-xs shrink-0",
                                        getBadgeClass(media.badgeVariant)
                                      )}
                                    >
                                      {media.badge}
                                    </span>
                                  )}
                                </div>

                                {/* Card Main Body: Highlights or Custom Node */}
                                <div className="relative z-10 py-5 space-y-3 flex-1 flex flex-col justify-center">
                                  {media.description && (
                                    <p className="text-xs text-slate-200 leading-relaxed font-normal drop-shadow-sm">
                                      {media.description}
                                    </p>
                                  )}

                                  {/* Interactive Video Play Banner if video slide */}
                                  {media.type === "video" && (
                                    <div
                                      onClick={() =>
                                        setActiveVideoModal(
                                          media.videoUrl ||
                                          "https://www.youtube.com/embed/dQw4w9WgXcQ"
                                        )
                                      }
                                      className="group/video relative cursor-pointer rounded-xl overflow-hidden border border-white/20 bg-black/30 p-3 sm:p-4 hover:border-[#f87171]/60 transition-all"
                                    >
                                      <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-full bg-[#e41d43] group-hover/video:scale-110 flex items-center justify-center text-white shadow-md transition-transform shrink-0">
                                          <Play className="w-4 h-4 fill-white ml-0.5" />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                          <div className="flex items-center gap-1.5">
                                            <p className="text-xs font-semibold text-white">
                                              Watch Campus Video Tour
                                            </p>
                                            <Sparkles className="w-3 h-3 text-amber-400" />
                                          </div>
                                          <p className="text-[11px] text-slate-300">
                                            {media.videoDuration ||
                                              "360° Aerial View & State-of-the-Art Labs"}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  )}

                                  {media.customContent ? (
                                    media.customContent
                                  ) : media.highlights && media.highlights.length > 0 ? (
                                    <div className="space-y-2.5">
                                      {media.highlights.map((h, i) => (
                                        <div
                                          key={i}
                                          className="p-3.5 sm:p-4 rounded-xl bg-white/5 hover:bg-white/[0.08] backdrop-blur-xs border border-white/10 space-y-1 transition-colors"
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

                                {/* Card Bottom: Link */}
                                <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                                  {media.ctaLink && media.ctaText ? (
                                    <Link
                                      href={media.ctaLink}
                                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#f87171] hover:text-white transition-colors group"
                                    >
                                      <span>{media.ctaText}</span>
                                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                  ) : (
                                    <span className="text-xs text-slate-400">
                                      BBDITM Academic Showcase
                                    </span>
                                  )}

                                  <span className="text-xs text-slate-400 font-mono">
                                    0{slideIdx + 1} / 0{totalSlides}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </Container>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Apple-grade Master Bottom Navigation Bar (Centered Dots with Play/Pause) */}
      {showIndicators && totalSlides > 1 && (
        <Container>
          <div
            className={cn(
              "flex items-center justify-center gap-3.5 transition-all duration-300",
              isCurrentSlideBanner
                ? "mt-2 sm:mt-2.5 md:mt-3 pt-0.5"
                : "mt-3 sm:mt-5 md:mt-6 pt-1"
            )}
          >
            {/* Center Apple-style Indicator Progress Pills */}
            <div
              className="flex items-center gap-2.5"
              role="tablist"
              aria-label="Hero slide selection"
            >
              {slides.map((s, idx) => {
                const isActive = idx === currentIndex;
                const slideLabel = s.media?.title || s.badge || s.id;
                return (
                  <button
                    key={s.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-label={`Go to slide ${idx + 1}: ${slideLabel}`}
                    onClick={() => goToSlide(idx)}
                    className="group relative h-2.5 rounded-full overflow-hidden transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#e41d43]"
                    style={{
                      width: isActive ? "52px" : "14px",
                      backgroundColor: isActive
                        ? "rgba(36, 61, 119, 0.15)"
                        : "rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    {isActive && (
                      <span
                        className="absolute inset-y-0 left-0 bg-[#e41d43] rounded-full transition-all"
                        style={{
                          width: `${progress}%`,
                          transition: isPlaying ? "width 50ms linear" : "none",
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Play/Pause Control right beside the dots */}
            {showPlayPause && (
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-7 h-7 rounded-full border border-slate-200 bg-white/90 hover:bg-white text-[#1d1d1f] hover:text-[#e41d43] shadow-xs flex items-center justify-center transition-all hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#e41d43]"
                aria-label={isPlaying ? "Pause hero slider" : "Play hero slider"}
                title={isPlaying ? "Pause autoplay" : "Start autoplay"}
              >
                {isPlaying ? (
                  <Pause className="w-3 h-3 text-slate-700" />
                ) : (
                  <Play className="w-3 h-3 text-slate-700 fill-slate-700 ml-0.5" />
                )}
              </button>
            )}
          </div>
        </Container>
      )}

      {/* Video Modal Overlay (Triggered by Watch Campus Tour) */}
      {activeVideoModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Campus Video Player"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={() => setActiveVideoModal(null)}
        >
          <div
            className="relative w-full max-w-4xl rounded-2xl overflow-hidden bg-black shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-neutral-900 border-b border-white/10 text-white">
              <div className="flex items-center gap-2">
                <Video className="w-4 h-4 text-[#e41d43]" />
                <span className="text-sm font-semibold tracking-tight">
                  BBDITM 100+ Acre Campus Experience
                </span>
              </div>
              <button
                type="button"
                onClick={() => setActiveVideoModal(null)}
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none"
                aria-label="Close video player"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Video Player Content */}
            <div className="relative aspect-video w-full bg-black flex items-center justify-center">
              {activeVideoModal.includes("youtube.com") ||
                activeVideoModal.includes("youtu.be") ? (
                <iframe
                  src={activeVideoModal}
                  title="Campus Tour"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video
                  src={activeVideoModal}
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
