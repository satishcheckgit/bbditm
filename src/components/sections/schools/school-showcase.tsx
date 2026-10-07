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
                className="group relative bg-white rounded-[4px] p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-[#243d77] transition-all duration-150 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-[3px] bg-[#f0f4fa] text-[#243d77] flex items-center justify-center mb-5 group-hover:bg-[#243d77] group-hover:text-white transition-colors duration-150">
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className="text-[11px] font-bold text-[#e41d43] uppercase tracking-wider">
                    {school.programmeCount > 0
                      ? `${school.programmeCount} Programmes Offered`
                      : "Foundational Sciences"}
                  </span>

                  <h3 className="text-lg font-bold text-[#243d77] mt-1.5 group-hover:text-[#e41d43] transition-colors">
                    {school.name}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[#64748b] mt-3 leading-[22px]">
                    {school.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href={`/schools/${school.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#e41d43] hover:text-[#c21334]"
                  >
                    <span>Explore Department</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
