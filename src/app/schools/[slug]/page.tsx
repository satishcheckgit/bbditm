import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { getSchoolBySlug, getProgrammes, getSchools } from "@/data";
import { ArrowRight, ShieldCheck } from "lucide-react";

interface SchoolPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const schools = await getSchools();
  return schools.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: SchoolPageProps): Promise<Metadata> {
  const { slug } = await params;
  const school = await getSchoolBySlug(slug);

  if (!school) {
    return { title: "Department Not Found" };
  }

  return {
    title: `${school.name} | BBDITM Lucknow`,
    description: school.description,
  };
}

export default async function SchoolDetailPage({ params }: SchoolPageProps) {
  const { slug } = await params;
  const school = await getSchoolBySlug(slug);

  if (!school) {
    notFound();
  }

  const allProgrammes = await getProgrammes();
  const departmentProgrammes = allProgrammes.filter(
    (p) => p.schoolId === school.id
  );

  return (
    <div className="bg-white py-16 sm:py-24">
      <Container>
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-8">
          <Link href="/" className="hover:text-[var(--color-brand-600)]">
            Home
          </Link>
          <span>/</span>
          <Link href="/academics" className="hover:text-[var(--color-brand-600)]">
            Schools
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">{school.name}</span>
        </div>

        {/* Hero Section */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#e41d43]/10 text-[#e41d43] border border-[#e41d43]/20 mb-1">
            Academic Department
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#243d77] tracking-tight font-heading">
            {school.name}
          </h1>
          <p className="text-sm sm:text-base text-[#6e6e73] leading-relaxed">
            {school.description}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-[#86868b]">
            <span className="flex items-center gap-1.5 font-medium text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              AICTE Approved & AKTU Affiliated
            </span>
            {school.establishedYear && (
              <span className="font-medium px-3 py-1 rounded-full bg-[#f5f5f7] border border-black/[0.04] text-[#1d1d1f]">
                Established {school.establishedYear}
              </span>
            )}
          </div>
        </div>

        {/* Programmes Offered Under This School */}
        <div className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-[#243d77] tracking-tight font-heading">
            Degree Programmes Offered
          </h2>

          {departmentProgrammes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departmentProgrammes.map((prog) => (
                <div
                  key={prog.id}
                  className="p-6 rounded-2xl bg-white border border-black/[0.06] shadow-sm hover:border-[#243d77]/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#e41d43] block mb-2">
                      {prog.degree}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#243d77] leading-snug tracking-tight font-heading">
                      {prog.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6e6e73] mt-2 line-clamp-2 leading-relaxed">
                      {prog.tagline}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs">
                    <span className="text-[#86868b] font-medium">{prog.duration}</span>
                    <Link
                      href={`/programmes/${prog.slug}`}
                      className="font-semibold text-[#243d77] hover:text-[#e41d43] inline-flex items-center gap-1 transition-colors"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-[#6e6e73]">
              Foundational courses and multidisciplinary subjects offered across all engineering branches.
            </p>
          )}
        </div>
      </Container>
    </div>
  );
}
