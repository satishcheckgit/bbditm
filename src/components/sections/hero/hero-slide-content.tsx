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

  return (
    <div
      className={cn(
        "space-y-4 sm:space-y-6 md:space-y-7",
        media?.type === "image" && media?.imageUrl
          ? "lg:col-span-6"
          : "lg:col-span-7",
        className
      )}
    >
      {/* Badge */}
      {slide.badge && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-slate-100 text-[#243d77] border border-slate-200/70">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e41d43]" />
          <span>{slide.badge}</span>
        </div>
      )}

      {/* Main Headline */}
      {slide.headline && (
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-semibold text-black tracking-tight leading-[1.12] font-heading">
          {slide.headline}
        </h1>
      )}

      {/* Subtitle */}
      {slide.subtitle && (
        <p className="text-base sm:text-lg text-[#6e6e73] leading-relaxed max-w-2xl font-normal">
          {slide.subtitle}
        </p>
      )}

      {/* Primary & Secondary Call-to-actions */}
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

      {/* Key Proof Points / Stats Grid */}
      {slide.stats && slide.stats.length > 0 && (
        <div className="pt-4 sm:pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-3 sm:gap-6 max-w-xl">
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
  );
}
