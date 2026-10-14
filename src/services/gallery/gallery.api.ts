import { apiClient } from "@/lib/api-client";
import { BentoGalleryItem } from "@/types/gallery";
import { PayloadCollectionResponse } from "@/types/payload";
import {
  DEFAULT_APPLE_GALLERY_ITEMS,
  BBD_CAMPUS_GALLERY_ITEMS,
} from "@/data/showcase-gallery";

/**
 * Fetches gallery items from Payload CMS with cancellation support.
 * Falls back to curated static items if the backend endpoint is not yet connected.
 */
export async function fetchGalleryItems(
  tab: "apple" | "campus" = "apple",
  signal?: AbortSignal
): Promise<BentoGalleryItem[]> {
  try {
    const res = await apiClient.get<PayloadCollectionResponse<BentoGalleryItem>>(
      "/gallery",
      {
        signal,
        params: {
          limit: 50,
          depth: 1,
          where: {
            preset: { equals: tab },
          },
        },
      }
    );

    if (res && Array.isArray(res.docs) && res.docs.length > 0) {
      return res.docs;
    }
  } catch (error) {
    // If request was explicitly aborted (user switched tabs), rethrow to avoid processing
    if (error instanceof DOMException && error.name === "AbortError") {
      throw error;
    }

    // During development, if Payload endpoint is not yet implemented or unreachable,
    // gracefully fall back to local mock data to prevent UI disruptions.
    if (process.env.NODE_ENV === "development") {
      console.info(
        `[Gallery API] Payload endpoint /gallery not ready yet. Using fallback mock data for preset: "${tab}".`
      );
    }
  }

  return tab === "apple" ? DEFAULT_APPLE_GALLERY_ITEMS : BBD_CAMPUS_GALLERY_ITEMS;
}
