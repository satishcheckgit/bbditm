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
    <section className="py-20 sm:py-28 bg-gradient-to-b from-[#10121a] via-[#141224] to-[#0e1017] text-white">
      <Container>
        {/* Section Heading with Contrast */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {data.heroStats.map((stat) => (
            <div
              key={stat.label}
              className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-brand-300)] tracking-tight">
                {stat.value}
              </p>
              <h4 className="text-sm sm:text-base font-bold text-white mt-2">
                {stat.label}
              </h4>
              <p className="text-xs text-gray-400 mt-1">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>

        {/* Top Recruiters Badges Grid */}
        <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 mb-16">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-6 text-center">
            Prominent Corporate Recruiters Visiting Campus
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {data.topRecruiters.map((recruiter) => (
              <span
                key={recruiter.name}
                className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm font-semibold text-gray-200 hover:border-purple-400/50 hover:bg-white/10 transition-colors"
              >
                {recruiter.name}
              </span>
            ))}
          </div>
        </div>

        {/* Student Testimonial Spotlight */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.studentStories.slice(0, 2).map((story) => (
            <div
              key={story.id}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-[var(--color-brand-400)]/60 mb-4" />
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed italic">
                  &ldquo;{story.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {story.studentName}
                  </h4>
                  <p className="text-xs text-gray-400">
                    {story.programme} · {story.batch}
                  </p>
                </div>
                <span className="text-xs font-bold text-[var(--color-brand-300)] px-3 py-1 rounded-full bg-white/10">
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
