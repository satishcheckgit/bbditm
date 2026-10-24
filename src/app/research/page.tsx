import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Cpu, Award, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "Research & Innovation — BBDITM Lucknow",
  description: "Research publications, student innovations, and laboratories at BBDITM Lucknow.",
};

export default function ResearchPage() {
  const areas = [
    {
      title: "Artificial Intelligence & Edge Computing",
      desc: "Investigating deep learning model optimization on resource-constrained embedded edge devices.",
      icon: Cpu,
    },
    {
      title: "IoT & Smart Infrastructure",
      desc: "Sensor array networks for precision environmental tracking and urban mobility.",
      icon: Lightbulb,
    },
    {
      title: "Renewable Energy Systems",
      desc: "Grid stabilization, hybrid photovoltaic systems, and power efficiency analysis.",
      icon: Award,
    },
  ];

  return (
    <>
      <div className="md:hidden bg-white py-8">
        <div className="px-4 mb-6">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#e41d43]/10 text-[#e41d43] border border-[#e41d43]/20">Innovation Ecosystem</span>
          <h1 className="mt-3 text-[22px] font-bold tracking-tight leading-tight text-[#243d77] font-heading">Research & Technological Inquiry</h1>
          <p className="mt-2 text-[13px] leading-relaxed text-[#6e6e73]">Faculty + students · publications, applied research & incubation.</p>
        </div>
        <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory touch-pan-x [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-4 scroll-smooth">
          {areas.map((a) => {
            const Icon = a.icon;
            return (
              <div key={a.title} className="shrink-0 snap-start w-[72vw] max-w-[300px] rounded-[18px] bg-[#f5f5f7] p-5 border border-black/[0.04]">
                <span className="w-10 h-10 rounded-[12px] bg-white flex items-center justify-center shadow-sm border border-black/[0.04] mb-3"><Icon className="w-5 h-5 text-[#243d77]" /></span>
                <h3 className="text-sm font-bold text-[#243d77] font-heading leading-snug">{a.title}</h3>
                <p className="mt-1.5 text-xs text-[#6e6e73] leading-relaxed line-clamp-3">{a.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="hidden md:block py-16 sm:py-24 bg-white">
        <Container>
          <div className="max-w-3xl mb-14">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#e41d43]/10 text-[#e41d43] border border-[#e41d43]/20 mb-3">Innovation Ecosystem</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#243d77] tracking-tight font-heading">Research & Technological Inquiry</h1>
            <p className="text-sm sm:text-base text-[#6e6e73] mt-4 leading-relaxed">Faculty members and students at BBDITM collaborate on publications, applied research, and technology incubation.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {areas.map((a) => {
              const Icon = a.icon;
              return (
                <div key={a.title} className="p-8 rounded-2xl bg-[#f5f5f7] border border-black/[0.06] space-y-4 hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-white text-[#243d77] border border-black/[0.04] shadow-xs flex items-center justify-center"><Icon className="w-6 h-6" /></div>
                  <h3 className="text-base sm:text-lg font-semibold text-[#243d77] tracking-tight font-heading">{a.title}</h3>
                  <p className="text-xs sm:text-sm text-[#6e6e73] leading-relaxed">{a.desc}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    </>
  );
}
