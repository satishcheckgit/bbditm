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
    <div className="py-16 sm:py-24 bg-white">
      <Container>
        <div className="max-w-3xl mb-14">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#e41d43]/10 text-[#e41d43] border border-[#e41d43]/20 mb-3">
            Innovation Ecosystem
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#243d77] tracking-tight font-heading">
            Research & Technological Inquiry
          </h1>
          <p className="text-sm sm:text-base text-[#6e6e73] mt-4 leading-relaxed">
            Faculty members and students at BBDITM collaborate on publications, applied research, and technology incubation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {areas.map((a) => {
            const Icon = a.icon;
            return (
              <div
                key={a.title}
                className="p-8 rounded-2xl bg-[#f5f5f7] border border-black/[0.06] space-y-4 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white text-[#243d77] border border-black/[0.04] shadow-xs flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-[#243d77] tracking-tight font-heading">{a.title}</h3>
                <p className="text-xs sm:text-sm text-[#6e6e73] leading-relaxed">
                  {a.desc}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
