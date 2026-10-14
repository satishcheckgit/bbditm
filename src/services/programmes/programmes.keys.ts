/**
 * Query Key Factory for Programmes domain
 */
export const programmesKeys = {
  all: ["programmes"] as const,
  lists: () => [...programmesKeys.all, "list"] as const,
  list: (filters?: { level?: string; schoolId?: string }) =>
    [...programmesKeys.lists(), filters || {}] as const,
  details: () => [...programmesKeys.all, "detail"] as const,
  detail: (slug: string) => [...programmesKeys.details(), slug] as const,
};
