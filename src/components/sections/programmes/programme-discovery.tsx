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
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {filterTabs.map((tab) => {
            const isSelected = selectedFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer select-none ${
                  isSelected
                    ? "bg-[var(--color-brand-600)] text-white shadow-sm"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
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
              className="group bg-white rounded-2xl p-6 border border-[var(--color-border-card)] shadow-[0_2px_8px_rgb(0_0_0/0.03)] hover:shadow-[0_12px_30px_rgb(20_20_40/0.06)] hover:border-purple-200 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Degree & Level Badges */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[var(--color-brand-700)] bg-[var(--color-brand-50)] border border-[var(--color-brand-100)] px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {prog.degree}
                  </span>
                  <span className="text-xs text-gray-500 font-medium">
                    {prog.schoolName}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[var(--color-ink)] group-hover:text-[var(--color-brand-600)] transition-colors leading-snug">
                  {prog.title}
                </h3>

                {/* Description / Tagline */}
                {prog.tagline && (
                  <p className="text-sm text-gray-600 mt-3 line-clamp-2 leading-relaxed">
                    {prog.tagline}
                  </p>
                )}
              </div>

              {/* Metadata & Footer Action */}
              <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center gap-4">
                  <span className="inline-flex items-center gap-1.5 font-medium">
                    <Clock className="w-3.5 h-3.5 text-gray-400" />
                    {prog.duration}
                  </span>
                  {prog.intake && (
                    <span className="inline-flex items-center gap-1.5 font-medium">
                      <Users className="w-3.5 h-3.5 text-gray-400" />
                      {prog.intake}
                    </span>
                  )}
                </div>

                <Link
                  href={`/programmes/${prog.slug}`}
                  className="font-semibold text-[var(--color-brand-600)] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1"
                >
                  <span>Details</span>
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
