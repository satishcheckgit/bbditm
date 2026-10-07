import React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PlacementData } from "@/types/placement";
import { ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PlacementHighlightsProps {
  data: PlacementData;
}

export function PlacementHighlights({ data }: PlacementHighlightsProps) {
  return (
    <section className="py-16 sm:py-24 bg-[#0b1120] text-white border-t border-b border-[#1e293b]">
      <Container>
        {/* Section Heading with Contrast */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            isDark
            eyebrow="Placement Outcomes"
            title="Industry-tested careers and graduate outcomes"
            description="Our Training and Placement Cell facilitates campus recruitment, pre-placement talks, and industry internships across leading sectors."
          />
          <Button
            href="/placements"
            variant="secondary"
            className="self-start md:self-end shrink-0"
          >
            <span>Full Placement Report</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>

        {/* 4 Large Verified Metric Counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {data.heroStats.map((stat) => (
            <div
              key={stat.label}
              className="p-5 sm:p-6 rounded-[3px] bg-[#111c38] border border-[#243d77]"
            >
              <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#f87171] tracking-tight">
                {stat.value}
              </p>
              <h4 className="text-xs sm:text-sm font-bold text-white mt-1.5">
                {stat.label}
              </h4>
              <p className="text-xs text-[#999999] mt-1">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>

        {/* Top Recruiters Badges Grid */}
        <div className="p-6 rounded-[3px] bg-[#111c38]/50 border border-[#243d77] mb-12">
          <p className="text-xs font-bold uppercase tracking-wider text-[#999999] mb-4 text-center">
            Prominent Corporate Recruiters Visiting Campus
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {data.topRecruiters.map((recruiter) => (
              <span
                key={recruiter.name}
                className="px-3 py-1.5 rounded-[3px] bg-[#1a2c56] border border-[#243d77] text-xs font-semibold text-slate-200 hover:border-[#e41d43] transition-colors"
              >
                {recruiter.name}
              </span>
            ))}
          </div>
        </div>

        {/* Student Testimonial Spotlight */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.studentStories.slice(0, 2).map((story) => (
            <div
              key={story.id}
              className="p-6 rounded-[3px] bg-[#111c38] border border-[#243d77] flex flex-col justify-between"
            >
              <div>
                <Quote className="w-6 h-6 text-[#f87171] mb-3" />
                <p className="text-xs sm:text-[13px] text-slate-200 leading-[22px] italic">
                  &ldquo;{story.quote}&rdquo;
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">
                    {story.studentName}
                  </h4>
                  <p className="text-[11px] text-[#999999]">
                    {story.programme} · {story.batch}
                  </p>
                </div>
                <span className="text-xs font-bold text-[#f87171] px-2.5 py-0.5 rounded-[3px] bg-white/10">
                  {story.company}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
