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
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-brand-600)] hover:text-[var(--color-brand-800)] shrink-0 self-start md:self-end"
          >
            <span>Explore Life at BBD</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Spacious Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="p-7 rounded-2xl bg-[var(--color-surface-soft)] border border-gray-100 hover:border-purple-200 hover:bg-white hover:shadow-[0_12px_30px_rgb(20_20_40/0.06)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-white text-[var(--color-brand-700)] shadow-sm flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                      {f.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[var(--color-ink)] mb-2">
                    {f.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
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
