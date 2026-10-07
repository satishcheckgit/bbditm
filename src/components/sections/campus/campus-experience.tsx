import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArrowRight, Trophy, Sparkles, Home, Library } from "lucide-react";

export function CampusExperience() {
  const facilities = [
    {
      icon: Trophy,
      title: "World-Class Sports Stadium",
      description: "Floodlit cricket stadium, football ground, basketball and badminton courts hosting university tournaments.",
      tag: "Athletics",
    },
    {
      icon: Home,
      title: "Secure Residential Hostels",
      description: "Separate on-campus residential facilities for boys and girls with 24/7 security, Wi-Fi, and nutritious mess meals.",
      tag: "Living",
    },
    {
      icon: Library,
      title: "Digital Central Library",
      description: "Air-conditioned reading halls, IEEE/ACM digital access, over 100,000 reference volumes, and journals.",
      tag: "Learning",
    },
    {
      icon: Sparkles,
      title: "Student Societies & Fests",
      description: "Year-round technical hackathons, cultural festivals (Utkarsh), robotics competitions, and debate clubs.",
      tag: "Community",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeading
            eyebrow="Campus Life"
            title="Life within 100+ acres of BBD City"
            description="A self-contained campus ecosystem designed to balance high-focus academic preparation with athletics, arts, and vibrant student community."
          />
          <Link
            href="/campus-life"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#e41d43] hover:text-[#c21334] shrink-0 self-start md:self-end"
          >
            <span>Explore Life at BBD</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 4 Spacious Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="p-6 rounded-[4px] bg-[#f8fafc] border border-slate-200 hover:border-[#243d77] hover:bg-white hover:shadow-md transition-all duration-150 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-[3px] bg-white text-[#243d77] border border-slate-200 shadow-sm flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold text-[#e41d43] uppercase tracking-wider">
                      {f.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#243d77] mb-2">
                    {f.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#64748b] leading-[22px]">
                    {f.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
