import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FullHeroSlide } from "./hero-data";

export interface HeroSlideContentProps {
  slide: FullHeroSlide;
  className?: string;
}

export function HeroSlideContent({ slide, className }: HeroSlideContentProps) {
  const media = slide.media;
  const hasDualCtas = Boolean(slide.primaryCta && slide.secondaryCta);

  return (
    <div
      className={cn(
        "space-y-2.5 sm:space-y-6 md:space-y-7 text-center sm:text-left",
        media?.type === "image" && media?.imageUrl
          ? "lg:col-span-6"
          : "lg:col-span-7",
        className
      )}
    >
      {/* Badge */}
      {slide.badge && (
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide bg-slate-100 text-[#243d77] border border-slate-200/70">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e41d43]" />
          <span>{slide.badge}</span>
        </div>
      )}

      {/* Main Headline */}
      {slide.headline && (
        <h1 className="text-[25px] sm:text-4xl md:text-5xl lg:text-[46px] font-bold sm:font-semibold text-black tracking-tight leading-[1.2] sm:leading-[1.12] font-heading text-balance">
          {slide.headline}
        </h1>
      )}

      {/* Subtitle */}
      {slide.subtitle && (
        <p className="text-[13.5px] sm:text-lg text-[#48484a] sm:text-[#6e6e73] leading-relaxed max-w-2xl font-normal mx-auto sm:mx-0 line-clamp-3 sm:line-clamp-none">
          {slide.subtitle}
        </p>
      )}

      {/* CTAs — dual: side-by-side on phone (saves height); single: compact centered pill */}
      {slide.primaryCta && (
        <div
          className={cn(
            "flex pt-1",
            hasDualCtas
              ? "flex-row items-stretch gap-2 sm:gap-3 w-full max-w-md mx-auto sm:max-w-none sm:mx-0 sm:flex-row"
              : "flex-row flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3"
          )}
        >
          <Button
            href={slide.primaryCta.href}
            variant="slidecta"
            size="lg"
            className={cn(
              "group font-semibold",
              "min-h-[46px] px-5 py-2.5 text-[13.5px] gap-1.5 shadow-[0_4px_16px_rgba(237,61,21,0.3)] active:scale-[0.97] transition-all duration-150 select-none [-webkit-tap-highlight-color:transparent]",
              "sm:min-h-0 sm:px-6 sm:py-2.5 sm:text-base sm:font-medium sm:gap-2 sm:shadow-[0_1px_3px_rgba(228,29,67,0.3)]",
              hasDualCtas ? "flex-1 sm:flex-none min-w-0" : "w-auto max-w-full"
            )}
          >
            <span className="truncate">{slide.primaryCta.label}</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 group-hover:translate-x-1 transition-transform" />
          </Button>

          {slide.secondaryCta && (
            <Button
              href={slide.secondaryCta.href}
              variant="secondary"
              size="lg"
              className={cn(
                "font-semibold",
                "min-h-[46px] px-5 py-2.5 text-[13.5px] gap-1.5 border border-black/[0.08] bg-white/95 backdrop-blur-sm text-[#243d77] active:scale-[0.97] transition-all duration-150 select-none [-webkit-tap-highlight-color:transparent]",
                "sm:min-h-0 sm:px-6 sm:py-2.5 sm:text-base sm:font-medium sm:gap-2 sm:border-0 sm:bg-[#f5f5f7] sm:backdrop-blur-none",
                "flex-1 sm:flex-none min-w-0"
              )}
            >
              <span className="truncate">{slide.secondaryCta.label}</span>
            </Button>
          )}
        </div>
      )}

      {/* Stats — original simple grid (unchanged look) */}
      {slide.stats && slide.stats.length > 0 && (
        <div className="pt-3.5 sm:pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-2 sm:gap-6 max-w-xl mx-auto sm:mx-0">
          {slide.stats.map((stat, sIdx) => (
            <div key={sIdx} className="px-1 text-center sm:text-left">
              <p className="text-[20px] sm:text-3xl font-bold text-[#243d77] tracking-tight font-heading leading-tight">
                {stat.value}
              </p>
              <p className="text-[10.5px] sm:text-xs text-[#71717a] sm:text-[#86868b] font-medium mt-0.5 leading-snug line-clamp-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
