import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, GraduationCap } from "lucide-react";

export function HomeHero() {
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
            {/* Trust Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fff1f3] border border-[#e41d43]/20 text-xs font-semibold text-[#e41d43] tracking-tight">
              <span className="flex h-2 w-2 rounded-full bg-[#e41d43]" />
              <span>AKTU Affiliated Code: 054 · Admissions Open 2026-27</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold text-[#243d77] tracking-tight leading-[1.12] font-heading">
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

          {/* Right Column: Framed Editorial Media Canvas */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Institutional Canvas Card */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1c2e59] via-[#152345] to-[#0c162e] border border-white/10 p-7 text-white shadow-xl">
                {/* Visual badge */}
                <div className="flex items-center justify-between pb-5 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
                      <GraduationCap className="w-5 h-5 text-[#f87171]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Academic Excellence</p>
                      <p className="text-xs text-slate-300">BBDITM Lucknow</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold tracking-tight px-3 py-1 rounded-full bg-[#e41d43] text-white">
                    AICTE APPROVED
                  </span>
                </div>

                {/* Campus & Innovation Highlights */}
                <div className="py-5 space-y-3">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <span className="text-[11px] font-semibold text-[#f87171] uppercase tracking-wider">
                      Flagship School
                    </span>
                    <h3 className="text-sm font-semibold text-white">
                      Computer Science & Engineering
                    </h3>
                    <p className="text-xs text-slate-300">
                      With specialized tracks in AI, Machine Learning, and Data Science.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <span className="text-[11px] font-semibold text-[#f87171] uppercase tracking-wider">
                      Industry Partnerships
                    </span>
                    <h3 className="text-sm font-semibold text-white">
                      Top Corporate Recruiters
                    </h3>
                    <p className="text-xs text-slate-300">
                      TCS, Infosys, Wipro, Capgemini, Cognizant, and Samsung R&D.
                    </p>
                  </div>
                </div>

                {/* Bottom interactive card action */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-slate-300">Need counseling?</span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#f87171] hover:text-white transition-colors"
                  >
                    <span>Talk to Admission Team</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
