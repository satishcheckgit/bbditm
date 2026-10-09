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
    <section className="py-20 sm:py-28 bg-[#f5f5f7]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Academic Schools"
            title="Schools and Specialized Departments"
            description="Our academic framework brings together core sciences, computational technologies, and executive management."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {schools.map((school) => {
            const Icon = iconMap[school.id] || GraduationCap;
            return (
              <div
                key={school.id}
                className="group relative bg-white rounded-[22px] p-7 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.07)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-[14px] bg-[#f5f5f7] text-[#243d77] shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex items-center justify-center mb-5 group-hover:bg-[#243d77] group-hover:text-white transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className="inline-flex text-[11px] font-semibold text-[#e41d43] uppercase tracking-wider">
                    {school.programmeCount > 0
                      ? `${school.programmeCount} Programmes Offered`
                      : "Foundational Sciences"}
                  </span>

                  <h3 className="text-lg font-semibold text-[#1d1d1f] mt-2 group-hover:text-[#243d77] transition-colors font-heading tracking-tight">
                    {school.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#6e6e73] mt-2.5 leading-relaxed">
                    {school.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#f5f5f7]">
                  <Link
                    href={`/schools/${school.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#e41d43] hover:text-[#c21334] group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Explore Department</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
