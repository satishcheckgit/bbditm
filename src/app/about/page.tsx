import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { ShieldCheck, Award, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — Babu Banarasi Das Institute of Technology & Management",
  description:
    "Learn about BBDITM Lucknow's academic heritage, leadership vision, AICTE approvals, and AKTU affiliation.",
};

export default function AboutPage() {
  const milestones = [
    { year: "1999", title: "Institutional Inception", desc: "Established under the aegis of Babu Banarasi Das Educational Society to impart technical education." },
    { year: "2004", title: "Management Division Added", desc: "Introduced the Master of Business Administration (MBA) affiliated to AKTU." },
    { year: "2015", title: "High Performance Computing Labs", desc: "Commissioned dedicated modern research labs and university computing clusters." },
    { year: "2020", title: "Emerging Tech Tracks", desc: "Launched specialized AI & Machine Learning branches in Computer Science engineering." },
  ];

  return (
    <>
      {/* Mobile — swipeable pillars + timeline rail */}
      <div className="md:hidden bg-white py-8">
        <div className="px-4 mb-6">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#e41d43]/10 text-[#e41d43] border border-[#e41d43]/20">Our Heritage & Vision</span>
          <h1 className="mt-3 text-[22px] font-bold tracking-tight leading-tight text-[#243d77] font-heading">Academic distinction built on visionary leadership.</h1>
          <p className="mt-2 text-[13px] leading-relaxed text-[#6e6e73]">Flagship of BBD Educational Group — guided by Late Dr. Akhilesh Das Gupta.</p>
        </div>
        <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory touch-pan-x [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-4 scroll-smooth mb-8">
          {[
            { icon: ShieldCheck, title: "Statutory Approvals", desc: "AICTE approved, AKTU affiliated (Code 054)." },
            { icon: Building2, title: "100+ Acre BBD City", desc: "Hi-tech classrooms, hostels, stadium, digital library." },
            { icon: Award, title: "Outcome-Centric", desc: "NBA-aligned curricula for lifelong learning." },
          ].map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.title} className="shrink-0 snap-start w-[72vw] max-w-[300px] rounded-[18px] bg-[#f5f5f7] p-5 border border-black/[0.04]">
                <span className="w-10 h-10 rounded-[12px] bg-white flex items-center justify-center shadow-sm border border-black/[0.04] mb-3"><Icon className="w-5 h-5 text-[#243d77]" /></span>
                <h3 className="text-sm font-bold text-[#243d77] font-heading">{c.title}</h3>
                <p className="mt-1 text-xs text-[#6e6e73] leading-relaxed">{c.desc}</p>
              </div>
            );
          })}
        </div>
        <div className="px-4 mb-3 flex items-center justify-between">
          <h2 className="text-sm font-bold text-[#243d77] font-heading">Chronology of Growth</h2>
        </div>
        <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory touch-pan-x [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-4 scroll-smooth">
          {milestones.map((m) => (
            <div key={m.year} className="shrink-0 snap-start w-[64vw] max-w-[260px] p-4 rounded-[18px] bg-white border border-black/[0.06] shadow-sm">
              <span className="text-xl font-extrabold text-[#e41d43] font-heading">{m.year}</span>
              <h4 className="mt-1 text-sm font-bold text-[#243d77] font-heading">{m.title}</h4>
              <p className="mt-1 text-xs text-[#6e6e73] leading-relaxed line-clamp-3">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block py-16 sm:py-24 bg-white">
        <Container>
          <div className="max-w-3xl mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#e41d43]/10 text-[#e41d43] border border-[#e41d43]/20 mb-3">Our Heritage & Vision</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#243d77] tracking-tight font-heading">Academic distinction built on visionary leadership.</h1>
            <p className="text-sm sm:text-base text-[#6e6e73] mt-4 leading-relaxed">Babu Banarasi Das Institute of Technology & Management (BBDITM), Lucknow, is one of the flagship institutions of the renowned Babu Banarasi Das Educational Group. Guided by the vision of Late Dr. Akhilesh Das Gupta, the institution is dedicated to developing world-class engineers, computer scientists, and business managers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-20">
            <div className="p-8 rounded-2xl bg-[#f5f5f7] border border-black/[0.06] space-y-4 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-xs border border-black/[0.04]"><ShieldCheck className="w-6 h-6 text-[#243d77]" /></div>
              <h3 className="text-lg font-semibold text-[#243d77] tracking-tight font-heading">Statutory Approvals</h3>
              <p className="text-xs sm:text-sm text-[#6e6e73] leading-relaxed">Approved by the All India Council for Technical Education (AICTE), New Delhi, and affiliated to Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow (College Code: 054).</p>
            </div>
            <div className="p-8 rounded-2xl bg-[#f5f5f7] border border-black/[0.06] space-y-4 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-xs border border-black/[0.04]"><Building2 className="w-6 h-6 text-[#243d77]" /></div>
              <h3 className="text-lg font-semibold text-[#243d77] tracking-tight font-heading">100+ Acre BBD City</h3>
              <p className="text-xs sm:text-sm text-[#6e6e73] leading-relaxed">Located on Lucknow-Faizabad National Highway, offering an integrated campus experience with high-tech classrooms, residential hostels, stadium, and digital library.</p>
            </div>
            <div className="p-8 rounded-2xl bg-[#f5f5f7] border border-black/[0.06] space-y-4 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-xs border border-black/[0.04]"><Award className="w-6 h-6 text-[#243d77]" /></div>
              <h3 className="text-lg font-semibold text-[#243d77] tracking-tight font-heading">Outcome-Centric Learning</h3>
              <p className="text-xs sm:text-sm text-[#6e6e73] leading-relaxed">Curricula aligned with National Board of Accreditation (NBA) outcome parameters to ensure competitive technical abilities and lifelong learning.</p>
            </div>
          </div>
          <div className="border-t border-black/[0.06] pt-16">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#243d77] mb-8 font-heading tracking-tight">Chronology of Growth</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {milestones.map((m) => (
                <div key={m.year} className="p-6 rounded-2xl bg-white border border-black/[0.06] shadow-sm hover:shadow-md transition-all duration-300 space-y-2.5">
                  <span className="text-2xl font-extrabold text-[#e41d43] tracking-tight font-heading">{m.year}</span>
                  <h4 className="text-sm font-bold text-[#243d77] tracking-tight font-heading">{m.title}</h4>
                  <p className="text-xs text-[#6e6e73] leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
