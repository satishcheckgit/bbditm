import { useQuery } from "@tanstack/react-query";
import { programmesKeys } from "./programmes.keys";
import {
  fetchProgrammes,
  fetchProgrammeBySlug,
  ProgrammeFilters,
} from "./programmes.api";
import { ProgrammeSummary, ProgrammeDetail } from "@/types/programme";

/**
 * Hook to retrieve filtered programmes with TanStack Query caching & cancellation
 */
export function useProgrammes(filters?: ProgrammeFilters) {
  return useQuery<ProgrammeSummary[]>({
    queryKey: programmesKeys.list(filters),
    queryFn: ({ signal }) => fetchProgrammes(filters, signal),
    staleTime: 1000 * 60 * 5, // 5 minutes cache fresh
  });
}

/**
 * Hook to retrieve a single programme detail with TanStack Query caching & cancellation
 */
export function useProgrammeDetail(slug: string) {
  return useQuery<ProgrammeDetail | null>({
    queryKey: programmesKeys.detail(slug),
    queryFn: ({ signal }) => fetchProgrammeBySlug(slug, signal),
    enabled: Boolean(slug),
    staleTime: 1000 * 60 * 10, // 10 minutes cache fresh for detail pages
  });
}
