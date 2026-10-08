import React, { useRef } from "react";
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
}: HeroSlideMediaCardProps) {
  const media = slide.media;
  const videoRef = useRef<HTMLVideoElement | null>(null);

  if (!media) return null;

  return (
    <div
      className={cn(
        "relative",
        media.type === "image" && media.imageUrl
          ? "lg:col-span-6"
          : "lg:col-span-5",
        className
      )}
    >
      {media.type === "image" && media.imageUrl ? (
        /* Standalone Natural Image Showcase (No card wrap, full image visible) */
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
      ) : (
        <div className="relative mx-auto max-w-md md:max-w-lg lg:max-w-none">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-300">
            {/* Background Frame with layered gradients or Video / Card */}
            <div className="relative min-h-[380px] sm:min-h-[420px] lg:min-h-[460px] flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#1c2e59] via-[#152345] to-[#0c162e] border border-white/10 p-5 sm:p-6 lg:p-7 text-white group/rightcard">
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

              {/* Card Bottom: Link & Counter */}
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
      )}
    </div>
  );
}
