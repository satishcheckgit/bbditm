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
  Video,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  defaultFullHeroSlides,
  type FullHeroSlide,
  type HeroSlideMedia,
} from "./hero-data";
import { HeroSlideContent } from "./hero-slide-content";
import { HeroSlideMediaCard } from "./hero-slide-media-card";

export type { FullHeroSlide, HeroSlideMedia };
export { defaultFullHeroSlides, HeroSlideContent, HeroSlideMediaCard };

export interface HomeHeroProps {
  slides?: FullHeroSlide[];
  autoPlayInterval?: number;
  showControls?: boolean;
  showIndicators?: boolean;
  showPlayPause?: boolean;
  className?: string;
}

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
  const [containerHeight, setContainerHeight] = useState<number | undefined>(700);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Measure and synchronize slider and banner heights so there is ZERO vertical jumping
  useEffect(() => {
    const updateHeight = () => {
      if (typeof window === "undefined") return;
      const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

      if (!isDesktop) {
        // Mobile & Tablet viewport: adapt smoothly to active slide so there is ZERO empty void
        const activeEl = slideRefs.current[currentIndex];
        if (activeEl) {
          const bannerEl = activeEl.querySelector<HTMLElement>("[data-banner-container]");
          const h = bannerEl ? bannerEl.offsetHeight : activeEl.offsetHeight;
          if (h > 0) {
            setContainerHeight(h);
          }
        }
      } else {
        // Desktop / Laptop: equalized height across slider & banner
        // Collect heights of standard split slides to lock a single consistent height
        const standardHeights = slides
          .map((s, idx) => (s.layout !== "banner" ? slideRefs.current[idx]?.offsetHeight || 0 : 0))
          .filter((h) => h > 0);

        const allHeights = slideRefs.current
          .map((el) => el?.offsetHeight || 0)
          .filter((h) => h > 0);

        const targetHeight =
          standardHeights.length > 0
            ? Math.max(...standardHeights)
            : allHeights.length > 0
              ? Math.max(...allHeights)
              : undefined;

        if (targetHeight && targetHeight > 0) {
          setContainerHeight(targetHeight);
        }
      }
    };

    updateHeight();

    const ro = new ResizeObserver(() => {
      updateHeight();
    });

    slideRefs.current.forEach((el) => {
      if (el) {
        ro.observe(el);
        const banner = el.querySelector("[data-banner-container]");
        if (banner) ro.observe(banner);
      }
    });

    window.addEventListener("resize", updateHeight);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateHeight);
    };
  }, [currentIndex, slides]);

  const totalSlides = slides.length;
  const touchStartXRef = useRef<number | null>(null);

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

  return (
    <section
      role="region"
      aria-roledescription="carousel"
      aria-label="Campus Hero Showcase"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className={cn(
        "relative overflow-hidden bg-white select-none outline-none focus-visible:ring-1 focus-visible:ring-[#e41d43]",
        "pt-0 sm:pt-0 md:pt-0 lg:pt-0 pb-0",
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

      {/* Carousel Sliding Track with Synchronized Equalized Height */}
      <div
        className="w-full overflow-hidden transition-[height] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ height: containerHeight ? `${containerHeight}px` : "auto" }}
      >
        <div
          className="flex items-start lg:items-stretch transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, slideIdx) => {
            const isSlideActive = slideIdx === currentIndex;
            const isBannerMode = slide.layout === "banner";

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
                  "relative min-w-full w-full shrink-0 transition-opacity duration-500 lg:h-full flex flex-col justify-center overflow-hidden",
                  isSlideActive ? "opacity-100" : "opacity-30 pointer-events-none"
                )}
              >
                {/* DYNAMIC AMBIENT SLIDE BACKGROUND (Gradient, Video, Image/GIF, Protective Fade) */}
                {!isBannerMode && (
                  <>
                    {/* Layer 1: Custom CSS Class or Inline Gradient (e.g. .bbditm-hero) */}
                    {(slide.backgroundClass || slide.backgroundGradient) && (
                      <div
                        className={cn(
                          "absolute inset-0 pointer-events-none z-0",
                          slide.backgroundClass
                        )}
                        style={
                          slide.backgroundGradient
                            ? { background: slide.backgroundGradient }
                            : undefined
                        }
                      />
                    )}

                    {/* Layer 2: Ambient Looping Background Video (MP4 / WebM with Poster) */}
                    {slide.backgroundVideo && (
                      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                        <video
                          src={slide.backgroundVideo}
                          poster={slide.backgroundVideoPoster || slide.backgroundImage}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover object-center"
                          style={{ opacity: slide.backgroundOpacity ?? 0.85 }}
                        />
                      </div>
                    )}

                    {/* Layer 3: Ambient Background Image / Animated GIF */}
                    {slide.backgroundImage && (
                      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                        <Image
                          src={slide.backgroundImage}
                          alt=""
                          fill
                          unoptimized
                          priority={slideIdx === 0}
                          sizes="100vw"
                          className="object-cover object-right lg:object-[right_center]"
                          style={{ opacity: slide.backgroundOpacity ?? 1 }}
                        />
                      </div>
                    )}

                    {/* Layer 4: Soft protective fade on left side for text readability */}
                    {(slide.showBackgroundOverlay ?? Boolean(slide.backgroundImage && !slide.backgroundClass)) && (
                      <div className="absolute inset-0 pointer-events-none z-0 bg-gradient-to-r from-white via-white/20 via-35% to-transparent" />
                    )}
                  </>
                )}

                {/* OPTION 2: FULL-WIDTH IMAGE BANNER LAYOUT */}
                {isBannerMode ? (
                  <div
                    className={cn(
                      "w-full lg:h-full mx-auto flex items-center justify-center transition-all",
                      slide.fullBleed
                        ? "max-w-none px-0"
                        : "max-w-[1680px] px-2 sm:px-4 md:px-6"
                    )}
                  >
                    <div
                      data-banner-container
                      className={cn(
                        "relative w-full overflow-hidden group/banner shadow-xl transition-all",
                        slide.fullBleed
                          ? "rounded-none"
                          : "rounded-xl sm:rounded-2xl md:rounded-3xl border border-slate-200/80",
                        slide.bannerAspect || "aspect-[2.74/1]",
                        "lg:aspect-auto lg:h-full lg:min-h-[500px]"
                      )}
                    >
                      {/* Custom Banner Media: Video or Image */}
                      {slide.bannerVideo ? (
                        <video
                          src={slide.bannerVideo}
                          poster={slide.bannerImage}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="w-full h-full object-cover object-center"
                        />
                      ) : slide.bannerImage ? (
                        <Image
                          src={slide.bannerImage}
                          alt={slide.bannerAlt || "Banner"}
                          fill
                          priority
                          unoptimized
                          sizes="100vw"
                          className="object-cover object-top transition-transform duration-700 ease-out group-hover/banner:scale-[1.01]"
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
                  <Container className="relative z-10 pb-10 sm:pb-12 md:pb-14">
                    {/* OPTION 1: SPLIT 2-COLUMN LAYOUT (Supporting Text + Card / Video / Image Card) */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-8 items-center min-h-0 lg:min-h-[500px]">
                      {/* Left Column: Headline, Subtitle, CTAs, Proof Points */}
                      <HeroSlideContent slide={slide} />

                      {/* Right Column: Slide Media Canvas (Card / Video Player / Standalone Natural Image) */}
                      <HeroSlideMediaCard
                        slide={slide}
                        slideIndex={slideIdx}
                        totalSlides={totalSlides}
                        isActive={isSlideActive}
                        onOpenVideoModal={(url) => setActiveVideoModal(url)}
                      />
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
        <div className="absolute bottom-3 sm:bottom-4 md:bottom-5 left-0 right-0 z-20 pointer-events-none">
          <Container>
            <div
              className="flex items-center justify-center gap-3.5 pointer-events-auto"
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
                      className="group relative h-2.5 rounded-full overflow-hidden transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#e41d43] before:absolute before:-inset-2 before:content-['']"
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
        </div>
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
