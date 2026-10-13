"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import type { PlacementData } from "@/types/placement";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PlacementHighlightsProps {
  data: PlacementData;
}

const testimonialPlaceholder: PlacementData["studentStories"][number] = {
  id: "story-placeholder",
  studentName: "Student story coming soon",
  programme: "Programme to be updated",
  batch: "Batch details pending",
  company: "Placement outcome pending",
  packageText: "Ai Engineer",
  quote: "A verified student experience will be featured here.",
};

export function PlacementHighlights({ data }: PlacementHighlightsProps) {
  const testimonialTrackRef = React.useRef<HTMLDivElement>(null);
  const testimonialStories = [...data.studentStories, testimonialPlaceholder];
  const recruiterRows = [
    data.topRecruiters.filter((_, index) => index % 2 === 0),
    data.topRecruiters.filter((_, index) => index % 2 !== 0),
  ];

  const scrollTestimonials = (direction: "previous" | "next") => {
    const track = testimonialTrackRef.current;
    if (!track) return;

    track.scrollBy({
      left: direction === "next" ? track.clientWidth * 0.72 : -track.clientWidth * 0.72,
      behavior: "smooth",
    });
  };

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
            <div className="relative flex h-full min-h-[320px] flex-col justify-center gap-5 overflow-hidden rounded-[22px] bg-white py-8 shadow-[0_4px_20px_rgba(0,0,0,0.08),0_2px_6px_rgba(0,0,0,0.04)] [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
              <h4 className="sr-only">Prominent corporate recruiters</h4>
              <ul className="sr-only">
                {data.topRecruiters.map((recruiter) => (
                  <li key={recruiter.name}>
                    {recruiter.name}, {recruiter.sector}
                  </li>
                ))}
              </ul>

              {recruiterRows.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className="recruiter-marquee group flex w-max items-center hover:[animation-play-state:paused]"
                  data-direction={rowIndex === 0 ? "forward" : "reverse"}
                  aria-hidden="true"
                >
                  {[...row, ...row].map((recruiter, index) => (
                    <div
                      key={`${recruiter.name}-${index}`}
                      className="mx-3 flex h-20 min-w-52 items-center justify-center rounded-[14px] bg-[#f5f5f7] px-7 text-center transition-colors duration-300 hover:bg-[#eeeeF1]"
                      title={`${recruiter.name} · ${recruiter.sector}`}
                    >
                      <span className="font-heading text-[17px] font-semibold leading-tight tracking-[-0.025em] text-[#55555a]">
                        {recruiter.name}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full py-8 sm:py-10 lg:py-12">
          <div className="mb-8 flex w-full flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-[#e41d43]">Graduate voices</p>
              <h3 className="mt-3 max-w-2xl font-heading text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-[#1d1d1f] sm:text-4xl">
                Their experience, in their own words.
              </h3>
            </div>

            <div className="flex items-center gap-3 self-start sm:self-auto">
              <div className="flex items-center gap-2" aria-label="Testimonial carousel controls">
                <button
                  type="button"
                  onClick={() => scrollTestimonials("previous")}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f5f5f7] text-[#1d1d1f] transition-[transform,background-color] duration-300 hover:scale-105 hover:bg-[#e8e8ed] active:scale-95"
                  aria-label="Previous student testimonials"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollTestimonials("next")}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f5f5f7] text-[#1d1d1f] transition-[transform,background-color] duration-300 hover:scale-105 hover:bg-[#e8e8ed] active:scale-95"
                  aria-label="Next student testimonials"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              <Button
                href="/placements"
                variant="primary"
                className="group hidden sm:inline-flex"
              >
                <span>Explore placements</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Button>
            </div>
          </div>

          <div className="relative overflow-hidden py-10 sm:py-12">
            <div
              ref={testimonialTrackRef}
              className="relative flex snap-x snap-mandatory gap-7 overflow-x-auto px-4 py-6 [scrollbar-width:none] sm:gap-9 lg:gap-10 [&::-webkit-scrollbar]:hidden"
              aria-label="Student placement testimonials"
            >
              {testimonialStories.map((story, index) => (
                <article
                  key={story.id}
                  tabIndex={0}
                  className={`group relative flex min-h-[200px] w-[74vw] max-w-[330px] shrink-0 snap-center flex-col rounded-[8px] bg-white px-6 pb-5 pt-8 transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:z-10 hover:scale-[1.02] hover:rotate-0 hover:shadow-[0_20px_45px_rgba(77,61,34,0.16)] focus-visible:z-10 focus-visible:scale-[1.02] focus-visible:rotate-0 focus-visible:shadow-[0_20px_45px_rgba(77,61,34,0.16)] sm:w-[46vw] sm:px-6 md:w-[34vw] lg:w-[25vw] xl:w-[22vw] ${index % 2 === 0
                    ? "md:-rotate-[2deg] md:translate-y-2"
                    : "md:rotate-[2deg] md:-translate-y-2"
                    }`}
                >
                  <div
                    aria-hidden="true"
                    className={`absolute left-1/2 top-0 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/60 shadow-[0_4px_5px_rgba(0,0,0,0.24),inset_0_1px_2px_rgba(255,255,255,0.75)] ${index % 2 === 0 ? "bg-[#e41d43]" : "bg-[#8b4df0]"
                      }`}
                  >
                    <span className="absolute left-1/2 top-[90%] h-4 w-1 -translate-x-1/2 bg-black/10 blur-[1px]" />
                  </div>

                  <header className="flex items-center gap-3">
                    <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#f5f5f7] font-heading text-xs font-semibold text-[#243d77] ring-1 ring-black/[0.06] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-focus-visible:scale-105">
                      {story.avatar ? (
                        <Image
                          src={story.avatar}
                          alt={`${story.studentName}, ${story.programme}`}
                          fill
                          sizes="40px"
                          className="object-cover"
                        />
                      ) : (
                        story.studentName
                          .split(" ")
                          .map((name) => name[0])
                          .slice(0, 2)
                          .join("")
                      )}
                    </div>

                    <div className="min-w-0">
                      <h4 className="text-sm font-semibold leading-tight tracking-[-0.01em] text-[#e41d43]">
                        {story.studentName}
                      </h4>
                      <p className="mt-1 text-xs text-[#86868b]">
                        {story.programme} · {story.batch}
                      </p>
                    </div>
                  </header>

                  <div className="flex flex-1 items-center py-4">
                    <blockquote className="max-w-xl font-serif text-lg leading-[1.4] tracking-[-0.018em] text-[#1d1d1f] sm:text-xl">
                      &ldquo;{story.quote}&rdquo;
                    </blockquote>
                  </div>

                  <footer className="flex items-end justify-between gap-4 border-t border-black/[0.08] pt-4">
                    <div>
                      <p className="text-xs font-medium text-[#86868b]">Now at</p>
                      <p className="mt-1 text-sm font-semibold text-[#e41d43]">
                        {story.company}
                      </p>
                    </div>
                    <p className="max-w-[12rem] rounded-full bg-[#e9eef7] px-3 py-1.5 text-right text-xs font-semibold leading-snug text-[#243d77] transition-[transform,background-color] duration-300 group-hover:-translate-x-1 group-hover:bg-[#dfe7f4] group-focus-visible:-translate-x-1 group-focus-visible:bg-[#dfe7f4]">
                      {story.packageText}
                    </p>
                  </footer>
                </article>
              ))}
            </div>

            <div className="relative mt-4 flex justify-center sm:hidden">
              <Button href="/placements" variant="primary" className="group">
                <span>Explore placements</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Button>
            </div>
          </div>
        </div>
      </Container>

      <style jsx global>{`
        @keyframes recruiter-marquee-forward {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes recruiter-marquee-reverse {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }

        .recruiter-marquee[data-direction="forward"] {
          animation: recruiter-marquee-forward 32s linear infinite;
        }

        .recruiter-marquee[data-direction="reverse"] {
          animation: recruiter-marquee-reverse 36s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .recruiter-marquee {
            animation-play-state: paused !important;
          }
        }
      `}</style>
    </section>
  );
}
