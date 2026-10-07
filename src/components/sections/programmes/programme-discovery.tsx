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
    <section className="py-20 sm:py-24 lg:py-28 bg-[var(--color-surface-soft)]/50 border-t border-b border-gray-100">
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
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {filterTabs.map((tab) => {
            const isSelected = selectedFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-3.5 py-1.5 rounded-[3px] text-xs font-bold transition-all whitespace-nowrap cursor-pointer select-none ${
                  isSelected
                    ? "bg-[#243d77] text-white shadow-sm"
                    : "bg-white text-[#243d77] hover:bg-[#f0f4fa] border border-[#cbd5e1]"
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
              className="group bg-white rounded-[4px] p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-[#243d77] transition-all duration-150 flex flex-col justify-between"
            >
              <div>
                {/* Degree & Level Badges */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#e41d43] bg-[#fff1f3] border border-[#fecdd3] px-2 py-0.5 rounded-[3px] uppercase tracking-wider">
                    {prog.degree}
                  </span>
                  <span className="text-xs text-[#64748b] font-medium">
                    {prog.schoolName}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-[#243d77] group-hover:text-[#e41d43] transition-colors leading-snug">
                  {prog.title}
                </h3>

                {/* Description / Tagline */}
                {prog.tagline && (
                  <p className="text-xs sm:text-[13px] text-[#64748b] mt-2.5 line-clamp-2 leading-[22px]">
                    {prog.tagline}
                  </p>
                )}
              </div>

              {/* Metadata & Footer Action */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-[#64748b]">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1 font-medium">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {prog.duration}
                  </span>
                  {prog.intake && (
                    <span className="inline-flex items-center gap-1 font-medium">
                      <Users className="w-3.5 h-3.5 text-slate-400" />
                      {prog.intake}
                    </span>
                  )}
                </div>

                <Link
                  href={`/programmes/${prog.slug}`}
                  className="font-bold text-[#e41d43] hover:text-[#c21334] group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1"
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
