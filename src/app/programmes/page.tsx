import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { getProgrammes } from "@/data";
import { ArrowRight, Clock, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Academic Programmes & Degrees",
  description:
    "Explore undergraduate B.Tech and postgraduate MBA programmes offered at BBDITM Lucknow with AICTE approval and AKTU affiliation.",
};

export default async function ProgrammesPage() {
  const programmes = await getProgrammes();

  const ugProgrammes = programmes.filter((p) => p.level === "undergraduate");
  const pgProgrammes = programmes.filter((p) => p.level === "postgraduate");

  return (
    <>
      {/* Mobile — swipeable rails per stream */}
      <div className="md:hidden bg-[#f5f5f7] py-8">
        <div className="px-4 mb-4">
          <p className="text-[11px] font-bold uppercase tracking-wider text-[#e41d43]">Academic Offerings</p>
          <h1 className="mt-1 text-[22px] font-bold tracking-tight leading-tight text-[#1d1d1f] font-heading">Degree Programmes</h1>
          <p className="mt-2 text-[13px] leading-relaxed text-[#6e6e73]">AICTE approved · AKTU affiliated (Code 054)</p>
        </div>

        <div className="px-4 mb-3 flex items-center gap-2">
          <span className="text-xs font-semibold text-[#243d77]">B.Tech</span>
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#e41d43]/10 text-[#e41d43] font-bold">4 Years</span>
          <span className="ml-auto text-xs text-[#86868b]">{ugProgrammes.length} programmes</span>
        </div>
        <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory touch-pan-x [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-4 scroll-smooth mb-8">
          {ugProgrammes.map((prog) => (
            <Link key={`m-${prog.id}`} href={`/programmes/${prog.slug}`} className="shrink-0 snap-start w-[78vw] max-w-[320px] bg-white rounded-[18px] p-4 border border-black/[0.06] shadow-sm active:scale-[0.99] transition-transform flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold text-[#e41d43] uppercase tracking-wider">{prog.discipline}</span>
                <span className="text-[11px] text-[#86868b] bg-[#f5f5f7] px-2 py-0.5 rounded-full">AKTU 054</span>
              </div>
              <h3 className="text-[15px] font-bold text-[#1d1d1f] font-heading tracking-tight leading-snug line-clamp-2">{prog.title}</h3>
              {prog.tagline && <p className="mt-1.5 text-xs text-[#6e6e73] line-clamp-2 leading-relaxed">{prog.tagline}</p>}
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#243d77]">
                View Details <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          ))}
        </div>

        <div className="px-4 mb-3 flex items-center gap-2">
          <span className="text-xs font-semibold text-[#243d77]">MBA</span>
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#243d77]/10 text-[#243d77] font-bold">2 Years</span>
          <span className="ml-auto text-xs text-[#86868b]">{pgProgrammes.length} programmes</span>
        </div>
        <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory touch-pan-x [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-4 scroll-smooth">
          {pgProgrammes.map((prog) => (
            <Link key={`m-${prog.id}`} href={`/programmes/${prog.slug}`} className="shrink-0 snap-start w-[78vw] max-w-[320px] bg-white rounded-[18px] p-4 border border-black/[0.06] shadow-sm active:scale-[0.99] transition-transform flex flex-col">
              <span className="text-[11px] font-bold text-[#e41d43] uppercase tracking-wider mb-2">Management</span>
              <h3 className="text-[15px] font-bold text-[#1d1d1f] font-heading tracking-tight leading-snug line-clamp-2">{prog.title}</h3>
              {prog.tagline && <p className="mt-1.5 text-xs text-[#6e6e73] line-clamp-2 leading-relaxed">{prog.tagline}</p>}
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#243d77]">View Details <ArrowRight className="w-3 h-3" /></span>
            </Link>
          ))}
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block py-16 sm:py-24 bg-[var(--color-surface-soft)]/50">
        <Container>
          <div className="mb-14">
            <SectionHeading
              eyebrow="Academic Offerings"
              title="Degree Programmes at BBDITM"
              description="All programmes are approved by the All India Council for Technical Education (AICTE), New Delhi, and affiliated with Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow."
            />
          </div>

        {/* Undergraduate Stream */}
        <div className="space-y-6 mb-16">
          <div className="flex items-center gap-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#243d77] tracking-tight font-heading">
              Undergraduate Engineering (B.Tech)
            </h2>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#e41d43]/10 text-[#e41d43] border border-[#e41d43]/20">
              4 Years Full-Time
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ugProgrammes.map((prog) => (
              <div
                key={prog.id}
                className="bg-white rounded-2xl p-6 border border-black/[0.06] shadow-sm hover:shadow-lg hover:border-[#243d77]/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-[#e41d43] uppercase tracking-wider">
                      {prog.discipline}
                    </span>
                    <span className="text-xs text-[#86868b] font-medium px-2.5 py-0.5 rounded-full bg-[#f5f5f7]">
                      AKTU: 054
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-semibold text-[#243d77] leading-snug tracking-tight font-heading">
                    {prog.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#6e6e73] mt-2.5 line-clamp-2 leading-relaxed">
                    {prog.tagline}
                  </p>

                  {prog.eligibilitySummary && (
                    <div className="mt-4 p-3.5 rounded-xl bg-[#f5f5f7] border border-black/[0.04] text-xs text-[#1d1d1f]">
                      <span className="font-semibold block text-[#243d77] mb-0.5">Eligibility:</span>
                      {prog.eligibilitySummary}
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3 text-[#86868b] font-medium">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#243d77]" />
                      {prog.duration}
                    </span>
                    {prog.intake && (
                      <span className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-[#243d77]" />
                        {prog.intake} seats
                      </span>
                    )}
                  </div>

                  <Link
                    href={`/programmes/${prog.slug}`}
                    className="font-semibold text-[#243d77] hover:text-[#e41d43] inline-flex items-center gap-1 transition-colors"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Postgraduate Stream */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#243d77] tracking-tight font-heading">
              Postgraduate Management (MBA)
            </h2>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#243d77]/10 text-[#243d77] border border-[#243d77]/20">
              2 Years Full-Time
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pgProgrammes.map((prog) => (
              <div
                key={prog.id}
                className="bg-white rounded-2xl p-6 border border-black/[0.06] shadow-sm hover:shadow-lg hover:border-[#243d77]/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-[#e41d43] uppercase tracking-wider">
                      Management
                    </span>
                    <span className="text-xs text-[#86868b] font-medium px-2.5 py-0.5 rounded-full bg-[#f5f5f7]">
                      AKTU: 054
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-semibold text-[#243d77] leading-snug tracking-tight font-heading">
                    {prog.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#6e6e73] mt-2.5 leading-relaxed">
                    {prog.tagline}
                  </p>

                  {prog.eligibilitySummary && (
                    <div className="mt-4 p-3.5 rounded-xl bg-[#f5f5f7] border border-black/[0.04] text-xs text-[#1d1d1f]">
                      <span className="font-semibold block text-[#243d77] mb-0.5">Eligibility:</span>
                      {prog.eligibilitySummary}
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3 text-[#86868b] font-medium">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#243d77]" />
                      {prog.duration}
                    </span>
                    {prog.intake && (
                      <span className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-[#243d77]" />
                        {prog.intake} seats
                      </span>
                    )}
                  </div>

                  <Link
                    href={`/programmes/${prog.slug}`}
                    className="font-semibold text-[#243d77] hover:text-[#e41d43] inline-flex items-center gap-1 transition-colors"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
      </div>
    </>
  );
}
