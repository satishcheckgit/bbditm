/**
 * Query Key Factory for Gallery domain.
 * Ensures consistent and type-safe query caching and invalidation across the app.
 */
export const galleryKeys = {
  all: ["gallery"] as const,
  lists: () => [...galleryKeys.all, "list"] as const,
  list: (tab?: string) => [...galleryKeys.lists(), { tab: tab || "all" }] as const,
  details: () => [...galleryKeys.all, "detail"] as const,
  detail: (id: string) => [...galleryKeys.details(), id] as const,
};
