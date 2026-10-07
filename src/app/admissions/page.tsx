import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { PhoneCall, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Admissions 2026-27 — BBDITM Lucknow",
  description:
    "Admissions procedure, eligibility criteria, AKTU College Code 054 counseling guidelines, and scholarships for BBDITM Lucknow.",
};

export default function AdmissionsPage() {
  const steps = [
    {
      step: "01",
      title: "Check Eligibility",
      description:
        "Verify your 10+2 marks (minimum 45% aggregate with PCM/CS) for B.Tech or graduation score for MBA as per AKTU/AICTE guidelines.",
    },
    {
      step: "02",
      title: "Entrance Exam / AKTU Counseling",
      description:
        "Participate in AKTU UP-TAC counseling using College Code: 054 (Babu Banarasi Das Institute of Technology & Management).",
    },
    {
      step: "03",
      title: "Direct Merit Verification",
      description:
        "Candidates seeking management quota / direct merit admission can submit their 10+2 scorecard for physical verification at BBD City campus.",
    },
    {
      step: "04",
      title: "Fee Payment & Seat Confirmation",
      description:
        "Complete enrollment by submitting required documents (Mark sheets, Transfer Certificate, Migration) and depositing the semester tuition fee.",
    },
  ];

  return (
    <div className="py-16 sm:py-24 bg-white">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#e41d43]">
            Enrollment 2026-27
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#243d77] mt-2 tracking-tight font-heading">
            Admissions at BBDITM Lucknow
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-4 leading-relaxed">
            Transparent admissions process under AKTU Code 054. Explore admission criteria, key dates, fee structures, and scholarship opportunities.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="#steps" variant="default">
              Admission Walkthrough
            </Button>
            <Button href="#fees" variant="outline">
              Fee Structure
            </Button>
            <Button
              href={`tel:${siteConfig.contact.admissionsPhone}`}
              variant="secondary"
            >
              <PhoneCall className="w-4 h-4 mr-1.5 text-[#243d77]" />
              <span>Call Helpline: {siteConfig.contact.admissionsPhone}</span>
            </Button>
          </div>
        </div>

        {/* 4 Step Process Grid */}
        <div id="steps" className="mb-20 scroll-mt-24">
          <h2 className="text-xl sm:text-2xl font-bold text-[#243d77] mb-8 font-heading">
            How to Apply — Step-by-Step
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st) => (
              <div
                key={st.step}
                className="p-6 rounded-2xl bg-[#f5f5f7] border border-black/[0.06] hover:bg-white hover:border-[#243d77]/25 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 relative space-y-3"
              >
                <span className="text-2xl font-bold text-[#e41d43] font-heading block">
                  {st.step}
                </span>
                <h3 className="text-base font-bold text-[#1d1d1f] font-heading">
                  {st.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#6e6e73] leading-relaxed">
                  {st.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Transparent Fee Table Section */}
        <div id="fees" className="mb-20 scroll-mt-24">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#243d77] font-heading">
                Annual Institutional Fee Structure
              </h2>
              <p className="text-xs sm:text-sm text-[#86868b] mt-1">
                Fee regulated and approved by the Fee Regulatory Committee / AKTU Lucknow.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-black/[0.06] shadow-sm">
            <table className="w-full text-left text-sm text-gray-700">
              <thead className="bg-[#f5f5f7] text-xs uppercase font-semibold text-[#6e6e73] border-b border-black/[0.06]">
                <tr>
                  <th className="py-4 px-6">Programme</th>
                  <th className="py-4 px-6">Duration</th>
                  <th className="py-4 px-6">Tuition & Institutional Fee</th>
                  <th className="py-4 px-6">Eligibility Requirement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/[0.04] bg-white">
                <tr>
                  <td className="py-4 px-6 font-semibold text-[#1d1d1f]">
                    B.Tech (CSE, AI & ML, IT)
                  </td>
                  <td className="py-4 px-6 text-[#6e6e73]">4 Years</td>
                  <td className="py-4 px-6 font-semibold text-[#243d77]">
                    ₹ 89,200 / Year
                  </td>
                  <td className="py-4 px-6 text-xs text-[#6e6e73]">
                    10+2 with PCM (Min 45% aggregate, 40% SC/ST)
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-[#1d1d1f]">
                    B.Tech (ECE, ME, Civil)
                  </td>
                  <td className="py-4 px-6 text-[#6e6e73]">4 Years</td>
                  <td className="py-4 px-6 font-semibold text-[#243d77]">
                    ₹ 89,200 / Year
                  </td>
                  <td className="py-4 px-6 text-xs text-[#6e6e73]">
                    10+2 with PCM (Min 45% aggregate, 40% SC/ST)
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-[#1d1d1f]">
                    B.Tech Lateral Entry
                  </td>
                  <td className="py-4 px-6 text-[#6e6e73]">3 Years</td>
                  <td className="py-4 px-6 font-semibold text-[#243d77]">
                    ₹ 89,200 / Year
                  </td>
                  <td className="py-4 px-6 text-xs text-[#6e6e73]">
                    Diploma in Engg. / B.Sc with Mathematics (Min 45%)
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-[#1d1d1f]">
                    Master of Business Administration (MBA)
                  </td>
                  <td className="py-4 px-6 text-[#6e6e73]">2 Years</td>
                  <td className="py-4 px-6 font-semibold text-[#243d77]">
                    ₹ 75,000 / Year
                  </td>
                  <td className="py-4 px-6 text-xs text-[#6e6e73]">
                    Recognized Bachelor&apos;s Degree (Min 50%, 45% SC/ST)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Scholarships Information */}
        <div className="p-8 rounded-2xl bg-[#f5f5f7] border border-black/[0.06] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#e41d43]">
              Financial Assistance & Scholarships
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-[#243d77] font-heading">
              UP Government & Social Welfare Scholarships Applicable
            </h3>
            <p className="text-xs sm:text-sm text-[#6e6e73] max-w-2xl leading-relaxed">
              Eligible domicile students under SC/ST/OBC and General EWS categories can avail full or partial tuition reimbursement under the Uttar Pradesh Post-Matric Scholarship Scheme.
            </p>
          </div>

          <Button href="/contact" variant="primary" className="shrink-0">
            <span>Enquire for Scholarships</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </Container>
    </div>
  );
}
