import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { getProgrammeBySlug, getProgrammes } from "@/data";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Users,
  ShieldCheck,
  Briefcase,
} from "lucide-react";
import { siteConfig } from "@/config/site";

interface ProgrammePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const programmes = await getProgrammes();
  return programmes.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: ProgrammePageProps): Promise<Metadata> {
  const { slug } = await params;
  const programme = await getProgrammeBySlug(slug);

  if (!programme) {
    return {
      title: "Programme Not Found",
    };
  }

  return {
    title: `${programme.title} | BBDITM Lucknow`,
    description: programme.overview || programme.tagline,
  };
}

export default async function ProgrammeDetailPage({ params }: ProgrammePageProps) {
  const { slug } = await params;
  const programme = await getProgrammeBySlug(slug);

  if (!programme) {
    notFound();
  }

  return (
    <div className="bg-white">
      {/* Editorial Programme Hero */}
      <div className="bg-gradient-to-b from-[var(--color-surface-soft)] via-white to-white border-b border-gray-100 py-12 sm:py-16">
        <Container>
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-6">
            <Link href="/" className="hover:text-[var(--color-brand-600)]">
              Home
            </Link>
            <span>/</span>
            <Link href="/programmes" className="hover:text-[var(--color-brand-600)]">
              Programmes
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium truncate">
              {programme.shortTitle || programme.title}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-[3px] text-xs font-bold uppercase tracking-wider bg-[#e41d43]/10 text-[#e41d43] border border-[#e41d43]/20">
                  {programme.degree}
                </span>
                <span className="px-3 py-1 rounded-[3px] text-xs font-medium bg-gray-100 text-gray-700">
                  {programme.schoolName}
                </span>
                {programme.accreditation && (
                  <span className="px-3 py-1 rounded-[3px] text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {programme.accreditation}
                  </span>
                )}
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#243d77] tracking-tight font-heading">
                {programme.title}
              </h1>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-3xl">
                {programme.overview}
              </p>

              {/* Fast Metadata Facts */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-gray-100">
                <div className="p-3.5 rounded-[3px] bg-slate-50 border border-slate-200/80">
                  <span className="text-xs text-gray-500 font-medium block">
                    Duration
                  </span>
                  <span className="text-sm font-bold text-[#243d77] mt-0.5 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#243d77]" />
                    {programme.duration}
                  </span>
                </div>

                <div className="p-3.5 rounded-[3px] bg-slate-50 border border-slate-200/80">
                  <span className="text-xs text-gray-500 font-medium block">
                    Affiliation & Code
                  </span>
                  <span className="text-sm font-bold text-[#243d77] mt-0.5 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    AKTU Code: 054
                  </span>
                </div>

                {programme.intake && (
                  <div className="p-3.5 rounded-[3px] bg-slate-50 border border-slate-200/80 col-span-2 sm:col-span-1">
                    <span className="text-xs text-gray-500 font-medium block">
                      Approved Intake
                    </span>
                    <span className="text-sm font-bold text-[#243d77] mt-0.5 flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-[#243d77]" />
                      {programme.intake}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Right Action Card */}
            <div className="lg:col-span-4 bg-slate-50 rounded-[3px] p-6 border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-bold text-[#243d77] text-base font-heading">
                Admissions Session 2026-27
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Direct merit admission counseling and AKTU counseling seats are currently open for eligible candidates.
              </p>

              <Button
                href={siteConfig.links.applyNow}
                variant="default"
                className="w-full justify-center shadow-sm"
              >
                <span>Apply for this Degree</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>

              <Button
                href={`tel:${siteConfig.contact.admissionsPhone}`}
                variant="outline"
                className="w-full justify-center text-xs"
              >
                <span>Call Admissions: {siteConfig.contact.admissionsPhone}</span>
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Content Sections */}
      <Container className="py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Detailed Content Columns (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Programme Highlights */}
            {programme.highlights && programme.highlights.length > 0 && (
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-[#243d77] font-heading">
                  Key Programme Highlights
                </h2>
                <div className="grid grid-cols-1 gap-3">
                  {programme.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 rounded-[3px] bg-slate-50 border border-slate-200/80"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#e41d43] shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 leading-relaxed">
                        {h}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Eligibility Criteria */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#243d77] font-heading">
                Eligibility & Admission Process
              </h2>
              <div className="p-6 rounded-[3px] bg-white border border-gray-200 space-y-4">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Academic Requirement
                  </h4>
                  <p className="text-sm text-gray-700 mt-1 leading-relaxed">
                    {programme.eligibility}
                  </p>
                </div>

                {programme.admissionProcess && (
                  <div className="pt-4 border-t border-gray-100">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                      Application Steps
                    </h4>
                    <ol className="list-decimal pl-5 space-y-1.5 text-sm text-gray-700">
                      {programme.admissionProcess.map((step, i) => (
                        <li key={i}>{step}</li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            </section>

            {/* Fee Structure */}
            {programme.annualFee && (
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-[#243d77] font-heading">
                  Tuition & Fee Structure
                </h2>
                <div className="p-5 rounded-[3px] bg-slate-50 border border-slate-200 text-sm flex items-center justify-between">
                  <div>
                    <span className="text-xs text-[#243d77] font-semibold block uppercase">
                      Prescribed Institutional Fee
                    </span>
                    <span className="text-base font-bold text-[#e41d43] mt-0.5 block">
                      {programme.annualFee}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">
                    Govt. scholarships applicable
                  </span>
                </div>
              </section>
            )}

            {/* Career Opportunities */}
            {programme.careerOpportunities && (
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-[#243d77] font-heading">
                  Career Pathways & Opportunities
                </h2>
                <div className="flex flex-wrap gap-2.5">
                  {programme.careerOpportunities.map((c, i) => (
                    <span
                      key={i}
                      className="px-3.5 py-1.5 rounded-[3px] bg-white border border-gray-200 text-xs sm:text-sm font-medium text-gray-800 flex items-center gap-2"
                    >
                      <Briefcase className="w-3.5 h-3.5 text-[#243d77]" />
                      {c}
                    </span>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-[3px] bg-white border border-gray-200 space-y-4">
              <h3 className="font-bold text-[#243d77] text-base font-heading">
                Department Laboratories
              </h3>
              <p className="text-xs text-gray-500">
                Specialized state-of-the-art laboratory facilities available to enrolled students:
              </p>
              <ul className="space-y-2 text-xs text-gray-700">
                {programme.laboratories ? (
                  programme.laboratories.map((lab, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#e41d43]" />
                      <span>{lab}</span>
                    </li>
                  ))
                ) : (
                  <>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#e41d43]" />
                      <span>Advanced Simulation Lab</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#e41d43]" />
                      <span>Systems & Computing Center</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#e41d43]" />
                      <span>Departmental Project Lab</span>
                    </li>
                  </>
                )}
              </ul>
            </div>

            <div className="p-6 rounded-[3px] bg-slate-50 border border-slate-200 space-y-3">
              <h4 className="font-bold text-sm text-[#243d77] font-heading">
                Need Help with AKTU Code 054 Choice Filling?
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Connect directly with our counseling advisors for AKTU choice code assistance and fee guidance.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#243d77] hover:text-[#e41d43] transition-colors"
              >
                <span>Contact Guidance Desk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
