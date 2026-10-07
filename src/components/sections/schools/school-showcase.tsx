import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SchoolSummary } from "@/types/school";
import { ArrowRight, GraduationCap, Building, Compass } from "lucide-react";

interface SchoolShowcaseProps {
  schools: SchoolSummary[];
}

export function SchoolShowcase({ schools }: SchoolShowcaseProps) {
  const iconMap: Record<string, React.ElementType> = {
    engineering: GraduationCap,
    management: Building,
    "applied-sciences": Compass,
  };

  return (
    <section className="py-20 sm:py-28 bg-[var(--color-surface-soft)] border-b border-gray-100">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Academic Schools"
            title="Schools and Specialized Departments"
            description="Our academic framework brings together core sciences, computational technologies, and executive management."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {schools.map((school) => {
            const Icon = iconMap[school.id] || GraduationCap;
            return (
              <div
                key={school.id}
                className="group relative bg-white rounded-2xl p-8 border border-gray-200/80 shadow-[0_2px_8px_rgb(0_0_0/0.03)] hover:shadow-[0_16px_36px_rgb(20_20_40/0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-brand-50)] text-[var(--color-brand-700)] flex items-center justify-center mb-6 group-hover:bg-[var(--color-brand-600)] group-hover:text-white transition-colors duration-200">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    {school.programmeCount > 0
                      ? `${school.programmeCount} Programmes Offered`
                      : "Foundational Sciences"}
                  </span>

                  <h3 className="text-2xl font-bold text-[var(--color-ink)] mt-2 group-hover:text-[var(--color-brand-600)] transition-colors">
                    {school.name}
                  </h3>

                  <p className="text-sm text-gray-600 mt-4 leading-relaxed">
                    {school.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <Link
                    href={`/schools/${school.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-brand-600)] group-hover:text-[var(--color-brand-800)]"
                  >
                    <span>Explore Department</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
