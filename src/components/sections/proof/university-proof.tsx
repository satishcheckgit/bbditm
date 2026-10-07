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
          <div className="lg:col-span-5 space-y-6">
            <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand-600)]">
              Institutional Foundation
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-ink)] tracking-tight leading-[1.12]">
              Education built around what comes next.
            </h2>
            <p className="text-base sm:text-lg text-[var(--color-ink-muted)] leading-relaxed">
              At BBDITM, we balance theoretical rigor with practical problem-solving.
              Our faculty members guide undergraduates and postgraduates through real-world projects,
              technical competitions, and interdisciplinary learning.
            </p>

            <div className="pt-4">
              <div className="p-5 rounded-2xl bg-[var(--color-surface-purple)] border border-[var(--color-brand-100)]">
                <p className="text-sm font-semibold text-[var(--color-brand-900)]">
                  Commitment to Quality Learning
                </p>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  Regular curriculum updates aligned with industry certifications in Cloud Computing, AI, Full-Stack Development, and Business Intelligence.
                </p>
              </div>
            </div>
          </div>

          {/* Right Proof Points Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {points.map((pt) => {
              const Icon = pt.icon;
              return (
                <div key={pt.title} className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-brand-50)] text-[var(--color-brand-700)] border border-[var(--color-brand-100)] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--color-ink)]">
                    {pt.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
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
