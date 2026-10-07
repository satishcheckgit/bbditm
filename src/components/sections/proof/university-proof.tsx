import React from "react";
import { Container } from "@/components/ui/container";
import { Cpu, Building2, Briefcase, Award } from "lucide-react";

export function UniversityProof() {
  const points = [
    {
      icon: Award,
      title: "AKTU Affiliation & AICTE Approval",
      description:
        "Official AKTU College Code: 054. Curriculum structured around university examinations and accredited standards.",
    },
    {
      icon: Cpu,
      title: "Advanced Departmental Laboratories",
      description:
        "Equipped with modern high-performance computing centers, robotics rigs, VLSI simulators, and core civil/mechanical testing workshops.",
    },
    {
      icon: Briefcase,
      title: "Dedicated Training & Placement Cell",
      description:
        "Year-round technical training, aptitude grooming, alumni mentorship panels, and recruitment drives with 250+ corporate partners.",
    },
    {
      icon: Building2,
      title: "Comprehensive BBD City Campus",
      description:
        "Sprawling over 100+ acres on Faizabad Road, Lucknow, with modern hostels, sports stadium, digital central library, and banking facilities.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Editorial Statement */}
          <div className="lg:col-span-5 space-y-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#e41d43]">
              Institutional Foundation
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#243d77] tracking-tight leading-[1.2] font-heading">
              Education built around what comes next.
            </h2>
            <p className="text-sm sm:text-base text-[#6e6e73] leading-relaxed">
              At BBDITM, we balance theoretical rigor with practical problem-solving.
              Our faculty members guide undergraduates and postgraduates through real-world projects,
              technical competitions, and interdisciplinary learning.
            </p>

            <div className="pt-2">
              <div className="p-5 rounded-2xl bg-[#f5f5f7] border border-[#d2d2d7]/80">
                <p className="text-xs font-semibold text-[#243d77] uppercase tracking-wider">
                  Commitment to Quality Learning
                </p>
                <p className="text-xs text-[#6e6e73] mt-1.5 leading-relaxed">
                  Regular curriculum updates aligned with industry certifications in Cloud Computing, AI, Full-Stack Development, and Business Intelligence.
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
                  className="p-6 rounded-2xl border border-black/[0.06] bg-[#f5f5f7] hover:bg-white hover:border-[#243d77]/30 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-white text-[#243d77] border border-black/[0.06] shadow-sm flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#243d77]" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-[#1d1d1f] font-heading">
                    {pt.title}
                  </h3>
                  <p className="text-xs text-[#6e6e73] leading-relaxed">
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
