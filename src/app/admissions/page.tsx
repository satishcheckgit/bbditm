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
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand-600)]">
            Enrollment 2026-27
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-ink)] mt-2 tracking-tight">
            Admissions at BBDITM Lucknow
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mt-4 leading-relaxed">
            Transparent admissions process under AKTU Code 054. Explore admission criteria, key dates, fee structures, and scholarship opportunities.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="#steps" variant="primary">
              Admission Walkthrough
            </Button>
            <Button href="#fees" variant="outline">
              Fee Structure
            </Button>
            <Button
              href={`tel:${siteConfig.contact.admissionsPhone}`}
              variant="secondary"
            >
              <PhoneCall className="w-4 h-4 mr-1.5 text-[var(--color-brand-600)]" />
              <span>Call Helpline: {siteConfig.contact.admissionsPhone}</span>
            </Button>
          </div>
        </div>

        {/* 4 Step Process Grid */}
        <div id="steps" className="mb-20 scroll-mt-24">
          <h2 className="text-2xl font-bold text-[var(--color-ink)] mb-8">
            How to Apply — Step-by-Step
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st) => (
              <div
                key={st.step}
                className="p-6 rounded-2xl bg-[var(--color-surface-soft)] border border-gray-100 relative space-y-3"
              >
                <span className="text-2xl font-extrabold text-[var(--color-brand-600)] block">
                  {st.step}
                </span>
                <h3 className="text-lg font-bold text-[var(--color-ink)]">
                  {st.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
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
              <h2 className="text-2xl font-bold text-[var(--color-ink)]">
                Annual Institutional Fee Structure
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Fee regulated and approved by the Fee Regulatory Committee / AKTU Lucknow.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left text-sm text-gray-700">
              <thead className="bg-gray-50 text-xs uppercase font-bold text-gray-600 border-b border-gray-200">
                <tr>
                  <th className="py-4 px-6">Programme</th>
                  <th className="py-4 px-6">Duration</th>
                  <th className="py-4 px-6">Tuition & Institutional Fee</th>
                  <th className="py-4 px-6">Eligibility Requirement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                <tr>
                  <td className="py-4 px-6 font-bold text-gray-900">
                    B.Tech (CSE, AI & ML, IT)
                  </td>
                  <td className="py-4 px-6">4 Years</td>
                  <td className="py-4 px-6 font-semibold text-[var(--color-brand-700)]">
                    ₹ 89,200 / Year
                  </td>
                  <td className="py-4 px-6 text-xs text-gray-600">
                    10+2 with PCM (Min 45% aggregate, 40% SC/ST)
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-gray-900">
                    B.Tech (ECE, ME, Civil)
                  </td>
                  <td className="py-4 px-6">4 Years</td>
                  <td className="py-4 px-6 font-semibold text-[var(--color-brand-700)]">
                    ₹ 89,200 / Year
                  </td>
                  <td className="py-4 px-6 text-xs text-gray-600">
                    10+2 with PCM (Min 45% aggregate, 40% SC/ST)
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-gray-900">
                    B.Tech Lateral Entry
                  </td>
                  <td className="py-4 px-6">3 Years</td>
                  <td className="py-4 px-6 font-semibold text-[var(--color-brand-700)]">
                    ₹ 89,200 / Year
                  </td>
                  <td className="py-4 px-6 text-xs text-gray-600">
                    Diploma in Engg. / B.Sc with Mathematics (Min 45%)
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-gray-900">
                    Master of Business Administration (MBA)
                  </td>
                  <td className="py-4 px-6">2 Years</td>
                  <td className="py-4 px-6 font-semibold text-[var(--color-brand-700)]">
                    ₹ 75,000 / Year
                  </td>
                  <td className="py-4 px-6 text-xs text-gray-600">
                    Recognized Bachelor&apos;s Degree (Min 50%, 45% SC/ST)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Scholarships Information */}
        <div className="p-8 rounded-3xl bg-[var(--color-surface-purple)] border border-[var(--color-brand-100)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand-700)]">
              Financial Assistance & Scholarships
            </span>
            <h3 className="text-xl font-bold text-gray-900">
              UP Government & Social Welfare Scholarships Applicable
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 max-w-2xl leading-relaxed">
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
