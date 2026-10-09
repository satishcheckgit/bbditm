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
    <section className="py-20 sm:py-28 bg-[#000000] text-white">
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
              className="p-6 sm:p-7 rounded-[22px] bg-[#1c1c1e] shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:bg-[#242426] hover:-translate-y-0.5 transition-all duration-300"
            >
              <p className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#e41d43] tracking-tight font-heading">
                {stat.value}
              </p>
              <h4 className="text-xs sm:text-sm font-semibold text-white mt-2 font-heading tracking-tight">
                {stat.label}
              </h4>
              <p className="text-xs text-[#86868b] mt-1">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>

        {/* Top Recruiters Badges Grid */}
        <div className="p-7 sm:p-8 rounded-[24px] bg-[#1c1c1e] shadow-[0_8px_30px_rgba(0,0,0,0.4)] mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#86868b] mb-4 text-center">
            Prominent Corporate Recruiters Visiting Campus
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {data.topRecruiters.map((recruiter) => (
              <span
                key={recruiter.name}
                className="px-4 py-1.5 rounded-full bg-[#2c2c2e] text-xs font-medium text-slate-200 hover:text-white hover:bg-[#3a3a3c] transition-colors"
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
              className="p-7 sm:p-8 rounded-[24px] bg-[#1c1c1e] shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:bg-[#242426] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-6 h-6 text-[#e41d43] mb-3" />
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                  &ldquo;{story.quote}&rdquo;
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-white font-heading tracking-tight">
                    {story.studentName}
                  </h4>
                  <p className="text-xs text-[#86868b]">
                    {story.programme} · {story.batch}
                  </p>
                </div>
                <span className="text-xs font-semibold text-[#e41d43] px-3 py-1 rounded-full bg-[#e41d43]/15">
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
