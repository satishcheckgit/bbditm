"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProgrammeSummary } from "@/types/programme";
import { ArrowRight, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProgrammeDiscoveryProps {
  programmes: ProgrammeSummary[];
}

export function ProgrammeDiscovery({ programmes }: ProgrammeDiscoveryProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filterTabs = [
    { id: "all", label: "All Programmes" },
    { id: "cs", label: "Computer Science & IT" },
    { id: "core", label: "Core Engineering" },
    { id: "management", label: "Management Studies (MBA)" },
  ];

  const filtered = programmes.filter((p) => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "cs")
      return p.slug.includes("computer-science") || p.slug.includes("it") || p.slug.includes("artificial-intelligence");
    if (selectedFilter === "core")
      return p.slug.includes("mechanical") || p.slug.includes("civil") || p.slug.includes("electronics");
    if (selectedFilter === "management")
      return p.level === "postgraduate" || p.discipline === "Management";
    return true;
  });

  return (
    <section className="py-10 sm:py-12 lg:py-12 bg-[#F5F5F7]">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-6 sm:mb-10">
          <SectionHeading
            eyebrow=""
            title="Explore our degrees and specialized tracks"
            description="Designed in collaboration with academic bodies and industry advisory councils to build competitive technical depth."
          />
          <Button
            href="/programmes"
            variant="outline"
            className="self-start md:self-end shrink-0 w-full sm:w-auto justify-center min-h-[42px] sm:min-h-0 text-[13px] sm:text-sm font-semibold sm:font-medium active:scale-[0.97] transition-all select-none [-webkit-tap-highlight-color:transparent]"
          >
            <span>View All Degrees</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>

        {/* Filter Pills Bar — Native App Segmented Scroll on Mobile, Compact Pill on Desktop */}
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 mb-6 sm:mb-8 scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] touch-pan-x">
          <div className="inline-flex items-center gap-1.5 sm:gap-1 p-1 sm:p-0.5 rounded-full bg-[#e8e8ed]/90 backdrop-blur-xl border border-black/[0.04] shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)] select-none">
            {filterTabs.map((tab) => {
              const isSelected = selectedFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedFilter(tab.id)}
                  className={`px-3.5 sm:px-4 py-2 sm:py-2 rounded-full text-[12px] sm:text-xs transition-all duration-200 whitespace-nowrap cursor-pointer select-none tracking-tight active:scale-95 [-webkit-tap-highlight-color:transparent] ${isSelected
                    ? "bg-black text-white font-semibold shadow-[0_2px_8px_rgba(0,0,0,0.22),0_1px_2px_rgba(0,0,0,0.12)]"
                    : "text-[#515154] font-medium hover:text-black hover:bg-white/60"
                    }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Programme Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filtered.map((prog) => (
            <div
              key={prog.id}
              className="group apple-card-3d relative z-10 hover:z-20 bg-white rounded-[22px] p-5 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 active:scale-[0.99] sm:active:scale-100 select-none shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_32px_rgba(0,0,0,0.08)]"
            >
              <div>
                {/* Degree & Level Badges */}
                <div className="flex items-center justify-between gap-2 mb-2.5 sm:mb-3">
                  <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold sm:font-semibold text-[#e41d43] bg-[#fff1f3] px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    {prog.degree}
                  </span>
                  <span className="text-[11px] sm:text-xs text-[#86868b] font-medium">
                    {prog.schoolName}
                  </span>
                </div>

                {/* Product Image with Grounded Contact Shadow */}
                {prog.image && (
                  <div className="my-3 sm:my-4 flex items-center justify-center overflow-visible">
                    <img
                      src={prog.image}
                      alt={prog.title}
                      className="max-h-36 sm:max-h-40 w-auto object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.03]"
                      style={{ filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15))" }}
                    />
                  </div>
                )}

                {/* Title */}
                <h3 className="text-[16px] sm:text-lg font-bold sm:font-semibold text-[#1d1d1f] group-hover:text-[#243d77] transition-colors leading-snug font-heading tracking-tight">
                  {prog.title}
                </h3>

                {/* Description / Tagline */}
                {prog.tagline && (
                  <p className="text-[12px] sm:text-sm text-[#515154] sm:text-[#6e6e73] mt-2 line-clamp-2 leading-relaxed">
                    {prog.tagline}
                  </p>
                )}
              </div>

              {/* Metadata & Footer Action */}
              <div className="mt-4 sm:mt-5 pt-3.5 sm:pt-4 border-t border-[#f5f5f7] flex items-center justify-between text-xs text-[#86868b]">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-medium text-[#71717a]">
                    <Clock className="w-3.5 h-3.5 text-[#86868b]" />
                    {prog.duration}
                  </span>
                  {prog.intake && (
                    <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-medium text-[#71717a]">
                      <Users className="w-3.5 h-3.5 text-[#86868b]" />
                      {prog.intake}
                    </span>
                  )}
                </div>

                <Link
                  href={`/programmes/${prog.slug}`}
                  className="group/btn inline-flex items-center justify-center gap-1.5 px-4 py-2 sm:px-3.5 sm:py-1.5 rounded-full text-[12px] sm:text-xs font-semibold bg-[#e41d43] text-white hover:bg-[#c8102e] hover:shadow-[0_4px_12px_rgba(228,29,67,0.25)] transition-all duration-150 active:scale-95 shadow-[0_2px_8px_rgba(228,29,67,0.18)] select-none [-webkit-tap-highlight-color:transparent]"
                >
                  <span>Curriculum</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
