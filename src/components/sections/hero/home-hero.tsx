import React from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { HeroSlider, HeroSlideItem } from "@/components/ui/hero-slider";

export interface HomeHeroProps {
  slides?: HeroSlideItem[];
}

export function HomeHero({ slides }: HomeHeroProps = {}) {
  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-32">
      {/* Subtle background ambient mesh */}
      <div
        className="pointer-events-none absolute -top-40 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-[var(--color-brand-50)] blur-3xl opacity-70"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 left-0 -z-10 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-blue-50/50 blur-3xl opacity-60"
        aria-hidden="true"
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Confident Editorial Typography */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-semibold text-black tracking-tight leading-[1.12] font-heading">
              Where technical depth meets{" "}
              <span className="text-[#e41d43]">
                real-world leadership.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#6e6e73] leading-relaxed max-w-2xl font-normal">
              Study at Babu Banarasi Das Institute of Technology & Management.
              Empowering engineers and managers with industry-aligned curricula,
              specialized research labs, and an active campus community.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Button
                href="/programmes"
                variant="primary"
                size="lg"
                className="group"
              >
                <span>Explore Programmes</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform ml-1" />
              </Button>

              <Button
                href="/admissions"
                variant="secondary"
                size="lg"
              >
                <span>Admissions 2026-27</span>
              </Button>
            </div>

            {/* Editorial Proof Points */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-6 max-w-xl">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-[#243d77] tracking-tight font-heading">
                  25+
                </p>
                <p className="text-xs text-[#86868b] font-medium mt-0.5">
                  Years of Academic Legacy
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-[#243d77] tracking-tight font-heading">
                  ₹ 44.15L
                </p>
                <p className="text-xs text-[#86868b] font-medium mt-0.5">
                  Highest Salary Package
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-[#243d77] tracking-tight font-heading">
                  100+
                </p>
                <p className="text-xs text-[#86868b] font-medium mt-0.5">
                  Acres Campus City
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Framed Editorial Media Canvas with Reusable Hero Slider */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <HeroSlider slides={slides} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
