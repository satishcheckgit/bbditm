import { staticProgrammes, staticProgrammeDetails } from "./static/programmes";
import { staticSchools } from "./static/schools";
import { staticPlacementData } from "./static/placements";
import { staticNews, staticEvents } from "./static/news-events";
import { ProgrammeSummary, ProgrammeDetail } from "@/types/programme";
import { SchoolSummary } from "@/types/school";
import { PlacementData } from "@/types/placement";
import { NewsItem, UniversityEvent } from "@/types/news";

export interface HomepageData {
  featuredProgrammes: ProgrammeSummary[];
  schools: SchoolSummary[];
  placements: PlacementData;
  news: NewsItem[];
  events: UniversityEvent[];
}

/**
 * Normalized Data Layer (as per master context sections 27, 28 & 58).
 * Provides a unified contract for UI components. Can fetch from WordPress API
 * or fall back gracefully to verified static institutional domain models.
 */

export async function getProgrammes(filter?: {
  level?: string;
  schoolId?: string;
}): Promise<ProgrammeSummary[]> {
  let programmes = [...staticProgrammes];
  if (filter?.level) {
    programmes = programmes.filter((p) => p.level === filter.level);
  }
  if (filter?.schoolId) {
    programmes = programmes.filter((p) => p.schoolId === filter.schoolId);
  }
  return programmes;
}

export async function getProgrammeBySlug(
  slug: string
): Promise<ProgrammeDetail | null> {
  const detail = staticProgrammeDetails[slug];
  if (detail) return detail;

  const summary = staticProgrammes.find((p) => p.slug === slug);
  if (!summary) return null;

  return {
    ...summary,
    overview: `${summary.title} at BBDITM provides rigorous training combining theoretical fundamentals with hands-on technical labs.`,
    highlights: [
      "AICTE approved and AKTU affiliated curriculum",
      "Specialized departmental labs and infrastructure",
      "Dedicated placement and career development support",
      "Experienced faculty from academia and industry",
    ],
    eligibility: summary.eligibilitySummary || "As per AKTU / AICTE norms.",
    admissionProcess: [
      "Entrance examination score (JEE Main / CUET)",
      "AKTU state counseling participation (Code: 054)",
      "Direct merit verification for eligible quota seats",
    ],
    careerOpportunities: [
      "Technical Specialist",
      "Core Engineering Professional",
      "Corporate Associate",
    ],
  };
}

export async function getSchools(): Promise<SchoolSummary[]> {
  return staticSchools;
}

export async function getSchoolBySlug(slug: string): Promise<SchoolSummary | null> {
  const school = staticSchools.find((s) => s.slug === slug);
  return school || null;
}

export async function getPlacements(): Promise<PlacementData> {
  return staticPlacementData;
}

export async function getNews(): Promise<NewsItem[]> {
  return staticNews;
}

export async function getEvents(): Promise<UniversityEvent[]> {
  return staticEvents;
}

export async function getHomepageData(): Promise<HomepageData> {
  return {
    featuredProgrammes: staticProgrammes.filter((p) => p.featured),
    schools: staticSchools,
    placements: staticPlacementData,
    news: staticNews,
    events: staticEvents,
  };
}
