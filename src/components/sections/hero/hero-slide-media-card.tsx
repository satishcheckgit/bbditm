import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  Trophy,
  Video,
  Sparkles,
  Image as ImageIcon,
  Play,
  ChevronRight,
  RotateCw,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { FullHeroSlide } from "./hero-data";

export interface HeroSlideMediaCardProps {
  slide: FullHeroSlide;
  slideIndex: number;
  totalSlides: number;
  isActive: boolean;
  onOpenVideoModal?: (videoUrl: string) => void;
  className?: string;
  variant?: "stacked" | "dark";
  themeColor?: string;
}

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

export function HeroSlideMediaCard({
  slide,
  slideIndex,
  totalSlides,
  isActive,
  onOpenVideoModal,
  className,
  variant = "stacked",
  themeColor = "#e41d43",
}: HeroSlideMediaCardProps) {
  const media = slide.media;
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Synchronize initial active card with current slide context
  const isPlacementSlide = slide.id === "career-placements";
  const [activeCardIndex, setActiveCardIndex] = useState(isPlacementSlide ? 1 : 0);

  useEffect(() => {
    setActiveCardIndex(slide.id === "career-placements" ? 1 : 0);
  }, [slide.id]);

  if (!media) return null;

  // Case A: Standalone Natural Image showcase (if specifically configured as image without card)
  if (media.type === "image" && media.imageUrl) {
    return (
      <div
        className={cn(
          "relative lg:col-span-6",
          className
        )}
      >
        <div className="relative mx-auto w-full h-[320px] sm:h-[400px] lg:h-[460px] xl:h-[500px] flex items-center justify-center lg:justify-end group/rightcard">
          <Image
            src={media.imageUrl}
            alt={media.imageAlt || media.title || "Hero showcase"}
            fill
            priority={slideIndex === 0}
            unoptimized
            sizes="(max-width: 1024px) 100vw, 750px"
            className="object-contain object-center lg:object-right transition-transform duration-700 ease-out group-hover/rightcard:scale-[1.02]"
          />
          {media.ctaLink && (
            <Link
              href={media.ctaLink}
              className="absolute inset-0 z-10 cursor-pointer"
              aria-label={media.imageAlt || media.title}
            />
          )}
        </div>
      </div>
    );
  }

  // Case B: 3D INTERACTIVE ROTATING STACKED CARDS VARIANT
  if (variant === "stacked") {
    // Dynamic theme color defaults (easily changeable per-card in cardsData below)
    const defaultThemeRed = themeColor || "#e41d43";
    const defaultButtonClass = "bg-[#e41d43] hover:bg-[#c8102e] text-white";

    // 3 rich highlight cards in the deck with dynamic theme customization
    const cardsData = [
      {
        id: "campus",
        eyebrow: "Campus Experience",
        title: isPlacementSlide ? "Smart Campus Hub" : (media.title || "Smart Campus"),
        description: isPlacementSlide
          ? "100+ acre lush green campus with NVIDIA supercomputing clusters & drone robotics."
          : (media.description || "State-of-the-art supercomputing labs, AC digital central library & Olympic arena."),
        image: media.videoPoster || "/banner/bbditm.webp",
        tag: "Virtual Tour",
        ctaText: media.type === "video" ? "Watch Tour" : "Explore Campus",
        ctaLink: "/campus-life",
        isVideo: media.type === "video",
        videoUrl: media.videoUrl || "https://www.youtube.com/embed/dQw4w9WgXcQ",
        capsuleText: "Explore our 100+ acre smart campus, NVIDIA AI labs & Olympic arena.",
        // Dynamic theme customization (change colors easily here):
        accentColor: defaultThemeRed,
        buttonBgClass: defaultButtonClass,
        playIconClass: "text-[#e41d43]",
      },
      {
        id: "placements",
        eyebrow: "Career Success",
        title: "Record Placements",
        description: "₹44.15 LPA highest package secured, 850+ offers across 180+ Fortune 500 recruiters.",
        image: "/banner/placed.webp",
        tag: "₹44.15 LPA Peak",
        ctaText: "View Records",
        ctaLink: "/placements",
        isVideo: false,
        videoUrl: "",
        capsuleText: "Launching global careers at Google, Amazon, TCS & Fortune 500 recruiters.",
        // Dynamic theme customization (change colors easily here):
        accentColor: defaultThemeRed,
        buttonBgClass: defaultButtonClass,
        playIconClass: "text-[#e41d43]",
      },
      {
        id: "academics",
        eyebrow: "Academic Legacy",
        title: "Academic Hub",
        description: "25+ years of legacy, AICTE approved standards, and NBA accredited curricula under AKTU Code 054.",
        image: "/banner/slideonec.webp",
        tag: "AKTU Code 054",
        ctaText: "Programmes 2026",
        ctaLink: "/programmes",
        isVideo: false,
        videoUrl: "",
        capsuleText: "Admissions open for B.Tech, M.Tech, MBA & MCA programmes 2026-27.",
        // Dynamic theme customization (change colors easily here):
        accentColor: defaultThemeRed,
        buttonBgClass: defaultButtonClass,
        playIconClass: "text-[#e41d43]",
      },
    ];

    const activeCard = cardsData[activeCardIndex];

    const rotateNext = () => {
      setActiveCardIndex((prev) => (prev + 1) % cardsData.length);
    };

    return (
      <div
        className={cn(
          "relative lg:col-span-5 flex flex-col items-center justify-center py-4 select-none",
          className
        )}
      >
        {/* 3D Stacked Cards Stage */}
        <div className="relative w-full max-w-[340px] sm:max-w-[370px] min-h-[440px] flex items-center justify-center">
          {cardsData.map((card, idx) => {
            // Position relative to activeCardIndex: 0 = front, 1 = right, 2 = left
            const position = (idx - activeCardIndex + cardsData.length) % cardsData.length;
            const isFront = position === 0;
            const isRight = position === 1;
            const isLeft = position === 2;

            if (isFront) {
              // ACTIVE FRONT CARD (Apple clean museum tile with subtle frosted glass)
              return (
                <div
                  key={card.id}
                  className="relative z-20 w-full rounded-[26px] bg-white/95 backdrop-blur-2xl border border-black/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04)] ring-1 ring-black/[0.02] p-5 sm:p-5.5 flex flex-col justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] scale-100 rotate-0 translate-x-0 translate-y-0 opacity-100"
                >
                  {/* Card Header: Eyebrow Capsule + Clean Headline + Shuffle Button */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-black/[0.04] text-[10px] font-semibold tracking-wider text-slate-500 uppercase font-sans">
                        {card.eyebrow}
                      </span>
                      <button
                        type="button"
                        onClick={rotateNext}
                        title="Shuffle next card"
                        className="w-6 h-6 rounded-full bg-black/[0.04] hover:bg-black/[0.08] text-slate-500 hover:text-[#1d1d1f] flex items-center justify-center transition-all active:rotate-180 active:scale-90 cursor-pointer"
                        aria-label="Rotate next card"
                      >
                        <RotateCw className="w-3 h-3" />
                      </button>
                    </div>
                    <h3 className="text-[22px] sm:text-[24px] font-semibold text-[#1d1d1f] tracking-tight font-sans leading-tight">
                      {card.title}
                    </h3>
                  </div>

                  {/* Center Media Showcase Window (Clean Apple Rounded Geometry) */}
                  <div className="relative my-3 w-full flex flex-col items-center">
                    <div
                      onClick={() =>
                        card.isVideo
                          ? onOpenVideoModal?.(card.videoUrl)
                          : rotateNext()
                      }
                      className="group/media relative w-full h-[185px] sm:h-[195px] rounded-[18px] overflow-hidden border border-black/[0.08] bg-[#f5f5f7] cursor-pointer shadow-[0_4px_16px_rgba(0,0,0,0.04)]"
                    >
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        priority={idx === 0}
                        unoptimized
                        sizes="(max-width: 640px) 320px, 360px"
                        className="object-cover object-center group-hover/media:scale-[1.03] transition-transform duration-700 ease-out"
                      />

                      {/* Protective vignette for legibility of tags */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />

                      {/* Top-Right Frosted Glass Tag Pill */}
                      <div className="absolute top-2.5 right-2.5 z-10 pointer-events-none">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-[10px] font-medium tracking-wide text-white shadow-xs">
                          {card.id === "placements" ? (
                            <Trophy className="w-3 h-3 text-amber-300" />
                          ) : card.isVideo ? (
                            <Video className="w-3 h-3 text-white" />
                          ) : (
                            <Sparkles className="w-3 h-3 text-white" />
                          )}
                          <span>{card.tag}</span>
                        </span>
                      </div>

                      {/* Video Play Button (Signature Apple Translucent Frosted Glass with Dynamic Theme Red Icon) */}
                      {card.isVideo && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div
                            className={cn(
                              "w-12 h-12 rounded-full bg-white/95 hover:bg-white backdrop-blur-md group-hover/media:scale-110 active:scale-95 flex items-center justify-center shadow-lg border border-white/50 transition-all duration-300",
                              card.playIconClass || "text-[#e41d43]"
                            )}
                          >
                            <Play className="w-5 h-5 fill-current ml-0.5" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Body: Description & Dynamic Theme CTA */}
                  <div className="pt-1 text-center space-y-3">
                    <p className="text-[13px] text-slate-500 leading-relaxed font-normal max-w-[280px] mx-auto line-clamp-2">
                      {card.description}
                    </p>

                    <div>
                      {card.isVideo ? (
                        <button
                          type="button"
                          onClick={() => onOpenVideoModal?.(card.videoUrl)}
                          className={cn(
                            "inline-flex items-center justify-center gap-1.5 px-6 py-2 rounded-full text-[13px] font-medium tracking-tight shadow-xs transition-all active:scale-95 cursor-pointer",
                            card.buttonBgClass || defaultButtonClass
                          )}
                        >
                          <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
                          <span>Watch Tour</span>
                        </button>
                      ) : (
                        <Link
                          href={card.ctaLink}
                          className={cn(
                            "inline-flex items-center justify-center gap-1.5 px-6 py-2 rounded-full text-[13px] font-medium tracking-tight shadow-xs transition-all active:scale-95",
                            card.buttonBgClass || defaultButtonClass
                          )}
                        >
                          <span>{card.ctaText}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              );
            }

            // PEEKING BACKGROUND CARDS (Click to bring to front smoothly)
            return (
              <div
                key={card.id}
                role="button"
                tabIndex={0}
                aria-label={`View ${card.title}`}
                onClick={() => setActiveCardIndex(idx)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setActiveCardIndex(idx);
                }}
                className={cn(
                  "absolute top-5 w-[280px] sm:w-[310px] h-[370px] sm:h-[390px] rounded-[26px] bg-[#fafafc]/95 backdrop-blur-xl border border-black/[0.07] shadow-md transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden flex flex-col justify-between p-4 cursor-pointer hover:shadow-xl",
                  isRight && "z-10 -right-5 sm:-right-8 rotate-6 scale-95 opacity-80 hover:opacity-100 hover:scale-[0.98] hover:rotate-3",
                  isLeft && "z-10 -left-5 sm:-left-8 -rotate-6 scale-95 opacity-80 hover:opacity-100 hover:scale-[0.98] hover:-rotate-3"
                )}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold text-slate-400 tracking-wider uppercase font-sans">
                      {card.eyebrow}
                    </span>
                    <span className="text-[10px] text-slate-400 font-normal">
                      Click to view
                    </span>
                  </div>
                  <h4 className="text-[17px] font-semibold text-[#1d1d1f] tracking-tight font-sans mt-0.5">
                    {card.title}
                  </h4>
                </div>

                {/* Clean preview window */}
                <div className="relative w-full h-[160px] sm:h-[175px] rounded-[16px] overflow-hidden border border-black/[0.06] bg-[#f5f5f7] pointer-events-none">
                  <Image
                    src={card.image}
                    alt=""
                    fill
                    unoptimized
                    sizes="280px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>

                <div className="text-center pt-0.5 pointer-events-none">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/90 border border-black/[0.06] text-[11px] font-medium text-slate-700 shadow-2xs">
                    <span>{card.ctaText}</span>
                    <ChevronRight className="w-3 h-3 text-slate-400" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Rotation Dots Indicator (Apple minimalist pills) */}
        <div className="flex items-center justify-center gap-2 my-2.5 z-20">
          {cardsData.map((c, i) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setActiveCardIndex(i)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300 cursor-pointer",
                i === activeCardIndex
                  ? "w-6 bg-[#1d1d1f]"
                  : "w-1.5 bg-black/20 hover:bg-black/40"
              )}
              aria-label={`Switch to ${c.title}`}
            />
          ))}
        </div>

        {/* Bottom Floating Action Pill (Apple frosted capsule bar) */}
        <div className="relative z-30 w-[94%] max-w-[370px]">
          <div className="w-full rounded-full bg-white/85 backdrop-blur-xl border border-black/[0.08] shadow-[0_8px_30px_rgb(0,0,0,0.06)] px-4 py-2 sm:py-2.5 flex items-center justify-between gap-3 transition-all hover:shadow-md group/bottompill">
            <Link
              href={activeCard.ctaLink}
              className="flex-1 text-xs text-slate-600 hover:text-[#e41d43] font-normal leading-snug line-clamp-1 pl-1 cursor-pointer transition-colors"
            >
              {activeCard.capsuleText}
            </Link>
            <button
              type="button"
              onClick={rotateNext}
              title="Next card"
              className="w-7 h-7 rounded-full bg-[#1d1d1f] hover:bg-[#e41d43] text-white flex items-center justify-center shrink-0 transition-colors shadow-2xs cursor-pointer active:scale-90"
              aria-label="Rotate next card"
            >
              <ChevronRight className="w-4 h-4 group-hover/bottompill:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Case C: Classic Dark Glassmorphic Card (Preserved 100% when variant="dark")
  return (
    <div
      className={cn(
        "relative lg:col-span-5",
        className
      )}
    >
      <div className="relative mx-auto max-w-md md:max-w-lg lg:max-w-none">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-300">
          <div className="relative min-h-[380px] sm:min-h-[420px] lg:min-h-[460px] flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#1c2e59] via-[#152345] to-[#0c162e] border border-white/10 p-5 sm:p-6 lg:p-7 text-white group/rightcard">
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

            {media.videoUrl && (
              <div className="absolute inset-0 z-0 overflow-hidden">
                <video
                  ref={isActive ? videoRef : undefined}
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

            {media.type === "video" && !media.videoUrl && (
              <div className="absolute inset-0 z-0 overflow-hidden opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent animate-pulse" />
                <div className="w-full h-full bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:2rem_2rem]" />
              </div>
            )}

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

            <div className="relative z-10 py-5 space-y-3 flex-1 flex flex-col justify-center">
              {media.description && (
                <p className="text-xs text-slate-200 leading-relaxed font-normal drop-shadow-sm">
                  {media.description}
                </p>
              )}

              {media.type === "video" && (
                <div
                  onClick={() =>
                    onOpenVideoModal?.(
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
                0{slideIndex + 1} / 0{totalSlides}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
