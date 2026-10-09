import React from "react";
import { Container } from "@/components/ui/container";
import { Cpu, Building2, Briefcase, Award } from "lucide-react";

export function UniversityProof() {
  const points = [
    {
      icon: Award,
      accentColor: "#0071e3",
      accentBg: "bg-[#eef5fd]",
      accentText: "text-[#0071e3]",
      highlight: "Official AKTU Code: 054.",
      title: "AICTE Approved Curriculum",
      description:
        "Curriculum structured around university examinations and accredited academic standards.",
    },
    {
      icon: Cpu,
      accentColor: "#e41d43",
      accentBg: "bg-[#fff1f3]",
      accentText: "text-[#e41d43]",
      highlight: "Advanced Computing & AI Labs.",
      title: "Modern Departmental Facilities",
      description:
        "Equipped with modern high-performance computing centers, robotics rigs, VLSI simulators, and core civil/mechanical testing workshops.",
    },
    {
      icon: Briefcase,
      accentColor: "#00875a",
      accentBg: "bg-[#eaf7ee]",
      accentText: "text-[#00875a]",
      highlight: "250+ Corporate Partners.",
      title: "Dedicated Training & Placements",
      description:
        "Year-round technical training, aptitude grooming, alumni mentorship panels, and recruitment drives with leading industry recruiters.",
    },
    {
      icon: Building2,
      accentColor: "#8944ab",
      accentBg: "bg-[#f8f0fc]",
      accentText: "text-[#8944ab]",
      highlight: "Sprawling 100+ Acre Campus.",
      title: "Comprehensive BBD City Life",
      description:
        "Faizabad Road, Lucknow, with modern hostels, sports stadium, digital central library, and banking facilities.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#F5F5F7]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Editorial Statement */}
          <div className="lg:col-span-5 space-y-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#e41d43]">
              Institutional Foundation
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-semibold text-black tracking-tight leading-[1.2] font-heading">
              Education built around what comes next.
            </h2>
            <p className="text-sm sm:text-base text-[#6e6e73] leading-relaxed">
              At BBDITM, we balance theoretical rigor with practical problem-solving.
              Our faculty members guide undergraduates and postgraduates through real-world projects,
              technical competitions, and interdisciplinary learning.
            </p>

            <div className="pt-2">
              <div className="apple-card-3d p-6 rounded-[22px] bg-white">
                <p className="text-xs font-semibold text-[#0071e3] uppercase tracking-wider">
                  Commitment to Quality Learning
                </p>
                <p className="text-xs sm:text-sm text-[#1d1d1f] mt-2 leading-relaxed">
                  <span className="font-semibold text-[#0071e3]">Regular curriculum updates</span>{" "}
                  <span className="text-[#6e6e73]">
                    aligned with industry certifications in Cloud Computing, AI, Full-Stack Development, and Business Intelligence.
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Proof Points Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {points.map((pt) => {
              const Icon = pt.icon;
              return (
                <div
                  key={pt.title}
                  className="group apple-card-3d relative z-10 hover:z-20 p-6 sm:p-7 rounded-[22px] bg-white space-y-3"
                >
                  <div
                    className={`w-11 h-11 rounded-[14px] ${pt.accentBg} ${pt.accentText} flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-[#1d1d1f] font-heading tracking-tight leading-snug">
                    <span className={pt.accentText}>{pt.highlight}</span>{" "}
                    <span>{pt.title}.</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6e6e73] leading-relaxed">
                    {pt.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
