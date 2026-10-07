import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { ShieldCheck, Award, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — Babu Banarasi Das Institute of Technology & Management",
  description:
    "Learn about BBDITM Lucknow's academic heritage, leadership vision, AICTE approvals, and AKTU affiliation.",
};

export default function AboutPage() {
  const milestones = [
    { year: "1999", title: "Institutional Inception", desc: "Established under the aegis of Babu Banarasi Das Educational Society to impart technical education." },
    { year: "2004", title: "Management Division Added", desc: "Introduced the Master of Business Administration (MBA) affiliated to AKTU." },
    { year: "2015", title: "High Performance Computing Labs", desc: "Commissioned dedicated modern research labs and university computing clusters." },
    { year: "2020", title: "Emerging Tech Tracks", desc: "Launched specialized AI & Machine Learning branches in Computer Science engineering." },
  ];

  return (
    <div className="py-16 sm:py-24 bg-white">
      <Container>
        {/* Editorial Heading */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#e41d43]">
            Our Heritage & Vision
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#243d77] mt-2 tracking-tight font-heading">
            Academic distinction built on visionary leadership.
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-4 leading-relaxed">
            Babu Banarasi Das Institute of Technology & Management (BBDITM), Lucknow, is one of the flagship institutions of the renowned Babu Banarasi Das Educational Group. Guided by the vision of Late Dr. Akhilesh Das Gupta, the institution is dedicated to developing world-class engineers, computer scientists, and business managers.
          </p>
        </div>

        {/* Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="p-8 rounded-[3px] bg-slate-50 border border-slate-200/80 space-y-3">
            <ShieldCheck className="w-8 h-8 text-[#243d77]" />
            <h3 className="text-lg font-bold text-[#243d77]">Statutory Approvals</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Approved by the All India Council for Technical Education (AICTE), New Delhi, and affiliated to Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow (College Code: 054).
            </p>
          </div>

          <div className="p-8 rounded-[3px] bg-slate-50 border border-slate-200/80 space-y-3">
            <Building2 className="w-8 h-8 text-[#243d77]" />
            <h3 className="text-lg font-bold text-[#243d77]">100+ Acre BBD City</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Located on Lucknow-Faizabad National Highway, offering an integrated campus experience with high-tech classrooms, residential hostels, stadium, and digital library.
            </p>
          </div>

          <div className="p-8 rounded-[3px] bg-slate-50 border border-slate-200/80 space-y-3">
            <Award className="w-8 h-8 text-[#243d77]" />
            <h3 className="text-lg font-bold text-[#243d77]">Outcome-Centric Learning</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Curricula aligned with National Board of Accreditation (NBA) outcome parameters to ensure competitive technical abilities and lifelong learning.
            </p>
          </div>
        </div>

        {/* Milestone Timeline */}
        <div className="border-t border-gray-100 pt-16">
          <h2 className="text-xl sm:text-2xl font-bold text-[#243d77] mb-8 font-heading">
            Chronology of Growth
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m) => (
              <div
                key={m.year}
                className="p-6 rounded-[3px] bg-white border border-gray-200 shadow-sm space-y-2"
              >
                <span className="text-2xl font-black text-[#e41d43]">
                  {m.year}
                </span>
                <h4 className="text-sm font-bold text-[#243d77]">{m.title}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
