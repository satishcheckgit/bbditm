import React from "react";
import { Container } from "@/components/ui/container";
import type { PlacementData } from "@/types/placement";
import { ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PlacementHighlightsProps {
  data: PlacementData;
}

export function PlacementHighlights({ data }: PlacementHighlightsProps) {
  return (
    <section className="overflow-hidden bg-[#f5f5f7] py-16 text-[#1d1d1f] sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-7 border-b border-black/10 pb-10 lg:grid-cols-12 lg:items-end lg:gap-10 lg:pb-12">
          <div className="lg:col-span-8">
            <p className="mb-4 text-sm font-semibold tracking-[-0.01em] text-[#e41d43]">
              Placement outcomes
            </p>
            <h2 className="max-w-4xl font-heading text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-[#1d1d1f]">
              Ready for the work that shapes what comes next.
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pb-1">
            <p className="max-w-md text-[17px] leading-[1.5] tracking-[-0.015em] text-[#6e6e73]">
              Our Training and Placement Cell connects classroom learning with
              internships, career preparation and opportunities across leading
              sectors.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 border-b border-black/10 sm:grid-cols-2 lg:grid-cols-4">
          {data.heroStats.map((stat, index) => (
            <div
              key={stat.label}
              className={`py-7 sm:px-7 sm:py-9 lg:px-8 lg:py-10 ${index > 0 ? "border-t border-black/10 sm:border-t-0" : ""
                } ${index % 2 !== 0 ? "sm:border-l sm:border-black/10" : ""
                } ${index > 1 ? "sm:border-t sm:border-black/10 lg:border-t-0" : ""
                } ${index > 0 ? "lg:border-l lg:border-black/10" : ""}`}
            >
              <p className="font-heading text-[clamp(2.4rem,3.6vw,4rem)] font-semibold leading-none tracking-[-0.05em] text-[#e41d43]">
                {stat.value}
              </p>
              <h3 className="mt-4 text-[17px] font-semibold leading-tight tracking-[-0.018em] text-[#1d1d1f]">
                {stat.label}
              </h3>
              <p className="mt-2 max-w-[15rem] text-sm leading-relaxed text-[#86868b]">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 py-12 sm:py-14 lg:grid-cols-12 lg:py-16">
          <div className="flex min-h-[320px] flex-col justify-between rounded-[22px]  p-7 sm:p-8 lg:col-span-4 lg:min-h-0 lg:p-9">
            <p className="text-sm font-semibold text-[#e41d43]">Industry network</p>
            <h3 className="my-8 max-w-sm font-heading text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-black sm:text-4xl">
              The{" "}
              <span className="relative isolate inline-block px-1">
                <span
                  aria-hidden="true"
                  className="absolute -inset-x-0.5 bottom-[0.03em] top-[0.12em] -z-10 rounded-[5px] bg-[#ff1e6e]/60 blur-[1px]"
                />
                companies
              </span>{" "}
              our students meet{" "}
              <span className="relative isolate inline-block px-1">
                <span
                  aria-hidden="true"
                  className="absolute -inset-x-0.5 bottom-[0.03em] top-[0.12em] -z-10 rounded-[5px] bg-[#ff1e6e]/60 blur-[1px]"
                />
                on campus.
              </span>
            </h3>
            <p className="max-w-sm border-t border-[#243d77]/15 pt-5 text-[17px] leading-[1.5] text-[#52617e]">
              Recruiters span technology, consulting, engineering, finance and
              infrastructure.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="grid gap-px overflow-hidden rounded-[22px] bg-black/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.08),0_2px_6px_rgba(0,0,0,0.04)] sm:grid-cols-2 xl:grid-cols-3">
              {data.topRecruiters.map((recruiter) => (
                <div
                  key={recruiter.name}
                  className="group flex min-h-24 flex-col justify-center bg-white px-5 py-4 sm:px-6"
                >
                  <p className="text-[16px] font-semibold leading-snug tracking-[-0.018em] text-[#1d1d1f] transition-colors duration-300 group-hover:text-[#e41d43]">
                    {recruiter.name}
                  </p>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#6e6e73]">
                    {recruiter.sector}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-[28px] bg-[#243d77] px-6 py-8 sm:px-9 sm:py-10 lg:px-12 lg:py-12">
          <div className="mb-7 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-[#ffb0be]">Graduate voices</p>
              <h3 className="mt-3 font-heading text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
                Prepared here. Progressing everywhere.
              </h3>
            </div>

            <Button
              href="/placements"
              variant="secondary"
              className="group self-start bg-white text-[#1d1d1f] hover:bg-[#f5f5f7] sm:self-auto"
            >
              <span>Explore placements</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Button>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[22px] bg-white/15 md:grid-cols-2">
            {data.studentStories.slice(0, 2).map((story) => (
              <article
                key={story.id}
                className="flex min-h-[310px] flex-col justify-between bg-[#1a2c56] p-7 sm:p-8 lg:p-9"
              >
                <div>
                  <Quote
                    className="mb-5 h-7 w-7 fill-[#e41d43] text-[#e41d43]"
                    aria-hidden="true"
                  />
                  <blockquote className="max-w-xl font-heading text-xl font-normal leading-[1.38] tracking-[-0.025em] text-[#f5f5f7] sm:text-2xl">
                    &ldquo;{story.quote}&rdquo;
                  </blockquote>
                </div>

                <footer className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-[17px] font-semibold tracking-[-0.018em] text-white">
                      {story.studentName}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-[#86868b]">
                      {story.programme} · {story.batch}
                    </p>
                  </div>
                  <div className="sm:text-right">
                    <p className="text-sm font-semibold text-[#ffb0be]">
                      {story.company}
                    </p>
                    <p className="mt-1 text-xs text-[#86868b]">
                      {story.packageText}
                    </p>
                  </div>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
