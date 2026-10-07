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
          <span className="text-xs font-bold uppercase tracking-wider text-[#e41d43]">
            Innovation Ecosystem
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#243d77] mt-2 font-heading tracking-tight">
            Research & Technological Inquiry
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-4 leading-relaxed">
            Faculty members and students at BBDITM collaborate on publications, applied research, and technology incubation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {areas.map((a) => {
            const Icon = a.icon;
            return (
              <div
                key={a.title}
                className="p-8 rounded-[3px] bg-slate-50 border border-slate-200/80 space-y-3"
              >
                <div className="w-12 h-12 rounded-[3px] bg-white text-[#243d77] border border-slate-200 shadow-sm flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-[#243d77]">{a.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
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
