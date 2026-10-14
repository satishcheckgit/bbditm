import { apiClient } from "@/lib/api-client";
import { ProgrammeSummary, ProgrammeDetail } from "@/types/programme";
import { PayloadCollectionResponse } from "@/types/payload";
import { staticProgrammes } from "@/data/static/programmes";

export interface ProgrammeFilters {
  level?: string;
  schoolId?: string;
}

/**
 * Fetches all academic programmes from Payload CMS or static fallback with cancellation support.
 */
export async function fetchProgrammes(
  filters?: ProgrammeFilters,
  signal?: AbortSignal
): Promise<ProgrammeSummary[]> {
  try {
    const where: Record<string, unknown> = {};
    if (filters?.level && filters.level !== "all") {
      where.level = { equals: filters.level };
    }
    if (filters?.schoolId) {
      where.schoolId = { equals: filters.schoolId };
    }

    const res = await apiClient.get<PayloadCollectionResponse<ProgrammeSummary>>(
      "/programmes",
      {
        signal,
        params: {
          limit: 100,
          depth: 1,
          where: Object.keys(where).length > 0 ? where : undefined,
        },
      }
    );

    if (res && Array.isArray(res.docs) && res.docs.length > 0) {
      return res.docs;
    }
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      throw error;
    }

    if (process.env.NODE_ENV === "development") {
      console.info(
        "[Programmes API] Payload endpoint /programmes not yet available. Using static programmes."
      );
    }
  }

  let filtered = [...staticProgrammes];
  if (filters?.level && filters.level !== "all") {
    filtered = filtered.filter((p) => p.level === filters.level);
  }
  if (filters?.schoolId) {
    filtered = filtered.filter((p) => p.schoolId === filters.schoolId);
  }
  return filtered;
}

/**
 * Fetches a single programme by slug with cancellation support.
 */
export async function fetchProgrammeBySlug(
  slug: string,
  signal?: AbortSignal
): Promise<ProgrammeDetail | null> {
  try {
    const res = await apiClient.get<PayloadCollectionResponse<ProgrammeDetail>>(
      "/programmes",
      {
        signal,
        params: {
          limit: 1,
          depth: 2,
          where: {
            slug: { equals: slug },
          },
        },
      }
    );

    if (res && res.docs && res.docs.length > 0) {
      return res.docs[0];
    }
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      throw error;
    }

    if (process.env.NODE_ENV === "development") {
      console.info(
        `[Programmes API] Fetch by slug '${slug}' falling back to static matching.`
      );
    }
  }

  const found = staticProgrammes.find((p) => p.slug === slug);
  if (!found) return null;

  return {
    ...found,
    overview: found.tagline || "",
    highlights: ["NBA Accredited Curriculum", "Top Tier Placements", "Industry standard labs"],
    eligibility: found.eligibilitySummary || "As per AKTU guidelines",
    admissionProcess: [
      "Online Registration on AKTU Portal / College Website",
      "Counseling & Document Verification",
      "Fee Payment & Enrollment Confirmation",
    ],
    careerOpportunities: [
      "Software Development Engineer",
      "Systems Architect",
      "Research Associate",
    ],
  };
}
