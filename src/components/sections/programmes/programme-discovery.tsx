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
    <section className="py-12 sm:py-16 lg:py-16 bg-[var(--color-surface-soft)]/50 border-t border-b border-gray-100">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Academic Discovery"
            title="Explore our degrees and specialized tracks"
            description="Designed in collaboration with academic bodies and industry advisory councils to build competitive technical depth."
          />
          <Button
            href="/programmes"
            variant="outline"
            className="self-start md:self-end shrink-0"
          >
            <span>View All Degrees</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>

        {/* Filter Pills Bar */}
        <div className="flex items-center gap-1 overflow-x-auto p-1 rounded-full bg-[#e5e5ea]/70 border border-black/[0.04] max-w-fit mb-8 no-scrollbar">
          {filterTabs.map((tab) => {
            const isSelected = selectedFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer select-none ${isSelected
                  ? "bg-[#243d77] text-white shadow-sm"
                  : "text-[#1d1d1f] hover:text-[#243d77] hover:bg-white/60"
                  }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Programme Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((prog) => (
            <div
              key={prog.id}
              className="group bg-white rounded-2xl p-6 border border-black/[0.06] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:border-[#243d77]/25 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Degree & Level Badges */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#e41d43] bg-[#fff1f3] border border-[#e41d43]/20 px-2.5 py-0.5 rounded-full uppercase tracking-tight">
                    {prog.degree}
                  </span>
                  <span className="text-xs text-[#86868b] font-medium">
                    {prog.schoolName}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-[#1d1d1f] group-hover:text-[#243d77] transition-colors leading-snug font-heading">
                  {prog.title}
                </h3>

                {/* Description / Tagline */}
                {prog.tagline && (
                  <p className="text-xs sm:text-sm text-[#6e6e73] mt-2.5 line-clamp-2 leading-relaxed">
                    {prog.tagline}
                  </p>
                )}
              </div>

              {/* Metadata & Footer Action */}
              <div className="mt-5 pt-4 border-t border-black/[0.04] flex items-center justify-between text-xs text-[#86868b]">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1 font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#86868b]" />
                    {prog.duration}
                  </span>
                  {prog.intake && (
                    <span className="inline-flex items-center gap-1 font-medium">
                      <Users className="w-3.5 h-3.5 text-[#86868b]" />
                      {prog.intake}
                    </span>
                  )}
                </div>

                <Link
                  href={`/programmes/${prog.slug}`}
                  className="font-semibold text-[#e41d43] hover:text-[#c21334] group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1"
                >
                  <span>Curriculum</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
