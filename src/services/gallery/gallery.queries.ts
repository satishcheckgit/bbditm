import { useQuery } from "@tanstack/react-query";
import { galleryKeys } from "./gallery.keys";
import { fetchGalleryItems } from "./gallery.api";
import { BentoGalleryItem } from "@/types/gallery";

/**
 * Hook to retrieve gallery items with automatic TanStack Query caching, cancellation & background updates.
 */
export function useGalleryItems(tab: "apple" | "campus" = "apple") {
  return useQuery<BentoGalleryItem[]>({
    queryKey: galleryKeys.list(tab),
    queryFn: ({ signal }) => fetchGalleryItems(tab, signal),
    staleTime: 1000 * 60 * 5, // Fresh for 5 minutes (No redundant refetches)
  });
}
