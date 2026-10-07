import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { getPlacements } from "@/data";
import { PlacementHighlights } from "@/components/sections/placements/placement-highlights";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Training & Placements Record — BBDITM Lucknow",
  description:
    "Comprehensive placement statistics, highest package, average package, top recruiters, and career training initiatives at BBDITM Lucknow.",
};

export default async function PlacementsPage() {
  const data = await getPlacements();

  const trainingInitiatives = [
    {
      title: "Pre-Placement Aptitude Grooming",
      desc: "Weekly logical reasoning, quantitative analysis, and verbal aptitude sessions integrated directly from 2nd year onwards.",
    },
    {
      title: "Technical Mock Interviews",
      desc: "Conducted by alumni working at Amazon, Google, TCS Digital, and Microsoft to simulate corporate hiring rounds.",
    },
    {
      title: "Full-Stack & Cloud Bootcamps",
      desc: "Hands-on development workshops in React, Python, Java SpringBoot, AWS, and DevOps to build project portfolios.",
    },
    {
      title: "Corporate HR Round Simulation",
      desc: "Personality development, resume critique, group discussions, and body language guidance by experienced HR consultants.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Placements Spotlight (Dark contrast section) */}
      <PlacementHighlights data={data} />

      {/* Training & Placement Cell Details */}
      <section className="py-20 sm:py-28 bg-slate-50 border-t border-slate-200/80">
        <Container>
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#e41d43]">
              Training & Development
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#243d77] mt-2 font-heading tracking-tight">
              Career Development Cell (CDC)
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
              Our placement framework operates year-round to ensure graduates bridge the gap between academic theory and high-productivity corporate demands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trainingInitiatives.map((t) => (
              <div
                key={t.title}
                className="p-7 rounded-[3px] bg-white border border-gray-200 shadow-sm space-y-2.5"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#e41d43] shrink-0" />
                  <h3 className="text-base font-bold text-[#243d77]">{t.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pl-7">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
