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
    // 3 rich highlight cards in the deck
    const cardsData = [
      {
        id: "campus",
        monogram: "b b d i t m • c a m p u s",
        title: isPlacementSlide ? "Smart Campus Hub" : (media.title || "Smart Campus"),
        description: isPlacementSlide
          ? "100+ acre lush green campus with NVIDIA supercomputing clusters & drone robotics."
          : (media.description || "State-of-the-art supercomputing labs, AC digital central library & Olympic arena."),
        image: media.videoPoster || "/banner/bbditm.webp",
        bgClass: "bg-[#f0effe] border-indigo-100",
        tag: "RESEARCH & LABS",
        tagBg: "bg-[#c7d2fe] text-indigo-900",
        ctaText: media.type === "video" ? "Watch Tour" : "Explore Campus",
        ctaLink: "/campus-life",
        isVideo: media.type === "video",
        videoUrl: media.videoUrl || "https://www.youtube.com/embed/dQw4w9WgXcQ",
        capsuleText: "Explore our 100+ acre smart campus, NVIDIA AI labs & Olympic arena.",
      },
      {
        id: "placements",
        monogram: "b b d i t m • c a r e e r s",
        title: "Record Placements",
        description: "₹44.15 LPA highest package secured, 850+ offers across 180+ Fortune 500 recruiters.",
        image: "/banner/placed.webp",
        bgClass: "bg-[#fefce8] border-amber-200/80",
        tag: "₹ 44.15L HIGHEST PACKAGE",
        tagBg: "bg-[#fef08a] text-amber-900",
        ctaText: "View Records",
        ctaLink: "/placements",
        isVideo: false,
        videoUrl: "",
        capsuleText: "Launching global careers at Google, Amazon, TCS & Fortune 500 recruiters.",
      },
      {
        id: "academics",
        monogram: "b b d i t m • l e g a c y",
        title: "Academic Hub",
        description: "25+ years of legacy, AICTE approved standards, and NBA accredited curricula under AKTU Code 054.",
        image: "/banner/slideonec.webp",
        bgClass: "bg-[#f1f5f9] border-slate-200",
        tag: "AKTU CODE 054",
        tagBg: "bg-[#e2e8f0] text-slate-800",
        ctaText: "Programmes 2026",
        ctaLink: "/programmes",
        isVideo: false,
        videoUrl: "",
        capsuleText: "Admissions open for B.Tech, M.Tech, MBA & MCA programmes 2026-27.",
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
        {/* Top Floating Meta Capsule (Reference Style: The chain <hello@chain.com>) */}
        <div className="relative z-30 mb-3 animate-in fade-in duration-300">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/95 border border-slate-200/90 shadow-xs backdrop-blur-md text-[11px] font-medium text-slate-700">
            <span className="w-5 h-5 rounded-full bg-[#ecfccb] text-[#3f6212] flex items-center justify-center font-bold text-[10px] shrink-0">
              🔗
            </span>
            <span className="font-semibold text-slate-900 font-heading">bbditm.ac.in</span>
            <span className="text-slate-400 font-normal">&lt;admissions@bbditm.ac.in&gt;</span>
            <div className="flex items-center gap-1 ml-1 text-slate-400">
              <Sparkles className="w-3 h-3 text-amber-500 fill-amber-400" />
            </div>
          </div>
        </div>

        {/* 3D Stacked Cards Stage */}
        <div className="relative w-full max-w-[340px] sm:max-w-[370px] min-h-[440px] flex items-center justify-center">
          {cardsData.map((card, idx) => {
            // Position relative to activeCardIndex: 0 = front, 1 = right, 2 = left
            const position = (idx - activeCardIndex + cardsData.length) % cardsData.length;
            const isFront = position === 0;
            const isRight = position === 1;
            const isLeft = position === 2;

            if (isFront) {
              // ACTIVE FRONT CARD
              return (
                <div
                  key={card.id}
                  className={cn(
                    "relative z-20 w-full rounded-3xl border shadow-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] scale-100 rotate-0 translate-x-0 translate-y-0 opacity-100",
                    card.bgClass
                  )}
                >
                  {/* Card Header: Brand Monogram + Clean Headline */}
                  <div className="text-center space-y-1">
                    <div className="flex items-center justify-center gap-2">
                      <p className="text-[10px] tracking-[0.28em] text-indigo-600 uppercase font-mono font-medium">
                        {card.monogram}
                      </p>
                      <button
                        type="button"
                        onClick={rotateNext}
                        title="Rotate next card"
                        className="w-5 h-5 rounded-full bg-white/70 hover:bg-white text-slate-500 hover:text-indigo-600 flex items-center justify-center shadow-xs transition-transform active:rotate-180"
                      >
                        <RotateCw className="w-2.5 h-2.5" />
                      </button>
                    </div>
                    <h3 className="text-2xl sm:text-[26px] font-bold text-slate-900 tracking-tight font-heading leading-tight">
                      {card.title}
                    </h3>
                  </div>

                  {/* Center Arched Showcase Window */}
                  <div className="relative my-3 mx-auto flex flex-col items-center">
                    <div
                      onClick={() =>
                        card.isVideo
                          ? onOpenVideoModal?.(card.videoUrl)
                          : rotateNext()
                      }
                      className={cn(
                        "relative w-44 sm:w-48 h-44 sm:h-48 rounded-t-full rounded-b-2xl overflow-hidden border-4 border-white shadow-md bg-white group/arch cursor-pointer transition-transform hover:scale-[1.02]"
                      )}
                    >
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        priority={idx === 0}
                        unoptimized
                        sizes="(max-width: 640px) 190px, 210px"
                        className="object-cover object-center group-hover/arch:scale-105 transition-transform duration-500"
                      />

                      {/* Video Play Overlay */}
                      {card.isVideo && (
                        <div className="absolute inset-0 bg-black/25 group-hover/arch:bg-black/35 flex items-center justify-center transition-colors">
                          <div className="w-12 h-12 rounded-full bg-[#e41d43] group-hover/arch:scale-110 flex items-center justify-center text-white shadow-lg transition-transform">
                            <Play className="w-5 h-5 fill-white ml-0.5" />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Decorative Charm / Badge hanging from Arch (Clickable to rotate) */}
                    <button
                      type="button"
                      onClick={rotateNext}
                      title="Click to shuffle card"
                      className="absolute -bottom-3 z-10 flex flex-col items-center cursor-pointer group/charm"
                    >
                      <div className="w-0.5 h-2 bg-indigo-300" />
                      <div className="w-8 h-8 rounded-xl bg-[#c7d2fe] border-2 border-white shadow-sm flex items-center justify-center text-indigo-700 group-hover/charm:scale-110 group-hover/charm:bg-indigo-600 group-hover/charm:text-white transition-all">
                        {card.id === "placements" ? (
                          <Trophy className="w-4 h-4" />
                        ) : card.isVideo ? (
                          <Video className="w-4 h-4" />
                        ) : (
                          <Sparkles className="w-4 h-4 fill-current" />
                        )}
                      </div>
                    </button>
                  </div>

                  {/* Card Body: Description & Action */}
                  <div className="pt-2 text-center space-y-3">
                    <p className="text-xs text-slate-600 leading-relaxed font-normal max-w-[270px] mx-auto line-clamp-2">
                      {card.description}
                    </p>

                    <div>
                      {card.isVideo ? (
                        <button
                          type="button"
                          onClick={() => onOpenVideoModal?.(card.videoUrl)}
                          className="inline-block px-6 py-2 rounded-xl bg-[#fef08a] hover:bg-[#fde047] text-slate-900 text-xs font-semibold shadow-xs transition-transform hover:scale-105 active:scale-95 cursor-pointer"
                        >
                          Watch Tour
                        </button>
                      ) : (
                        <Link
                          href={card.ctaLink}
                          className="inline-block px-6 py-2 rounded-xl bg-[#fef08a] hover:bg-[#fde047] text-slate-900 text-xs font-semibold shadow-xs transition-transform hover:scale-105 active:scale-95"
                        >
                          {card.ctaText}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              );
            }

            // PEEKING BACKGROUND CARDS (Click to bring to front!)
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
                  "absolute top-5 w-[280px] sm:w-[310px] h-[370px] sm:h-[390px] rounded-3xl border shadow-md transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden flex flex-col justify-between p-4 cursor-pointer hover:shadow-xl",
                  isRight && "z-10 -right-5 sm:-right-8 rotate-6 scale-95 opacity-75 hover:opacity-100 hover:scale-[0.98] hover:rotate-3",
                  isLeft && "z-10 -left-5 sm:-left-8 -rotate-6 scale-95 opacity-75 hover:opacity-100 hover:scale-[0.98] hover:-rotate-3",
                  card.bgClass
                )}
              >
                <div className="text-center">
                  <p className="text-[10px] tracking-[0.25em] text-slate-500 uppercase font-mono">
                    {card.monogram}
                  </p>
                  <h4 className="text-lg font-bold text-slate-800 font-heading mt-0.5">
                    {card.title}
                  </h4>
                </div>

                {/* Arched preview window */}
                <div className="relative w-36 h-36 mx-auto rounded-t-full rounded-b-xl overflow-hidden border-2 border-white shadow-xs bg-white/60 pointer-events-none">
                  <Image
                    src={card.image}
                    alt=""
                    fill
                    unoptimized
                    sizes="160px"
                    className="object-cover"
                  />
                </div>

                <div className="text-center pt-1">
                  <span className="inline-block px-3.5 py-1 rounded-lg bg-[#fef08a] text-[10px] font-semibold text-slate-800 shadow-xs pointer-events-none">
                    Click to view
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Rotation Dots Indicator */}
        <div className="flex items-center justify-center gap-1.5 my-2 z-20">
          {cardsData.map((c, i) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setActiveCardIndex(i)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === activeCardIndex
                  ? "w-6 bg-[#243d77]"
                  : "w-1.5 bg-slate-300 hover:bg-slate-400"
              )}
              aria-label={`Switch to ${c.title}`}
            />
          ))}
        </div>

        {/* Bottom Floating Action Pill */}
        <div className="relative z-30 w-[94%] max-w-[370px]">
          <div className="w-full rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl p-3 sm:p-3.5 flex items-center justify-between gap-3 transition-all hover:shadow-2xl group/bottompill">
            <Link
              href={activeCard.ctaLink}
              className="flex-1 text-xs text-slate-700 hover:text-[#243d77] font-medium leading-snug line-clamp-2 pl-1 cursor-pointer transition-colors"
            >
              {activeCard.capsuleText}
            </Link>
            <button
              type="button"
              onClick={rotateNext}
              title="Next card"
              className="w-9 h-9 rounded-xl bg-[#c7d2fe] hover:bg-[#243d77] hover:text-white text-indigo-900 flex items-center justify-center shrink-0 transition-colors shadow-xs cursor-pointer active:scale-95"
            >
              <ChevronRight className="w-5 h-5 group-hover/bottompill:translate-x-0.5 transition-transform" />
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
