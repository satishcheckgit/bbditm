"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";

/**
 * Smart back navigation — prefers in-app history, falls back to `fallbackHref`.
 * Deep-link safe: if user landed directly, they won't exit the site.
 */
export function useSmartBack(fallbackHref: string = "/") {
  const router = useRouter();

  const goBack = useCallback(() => {
    // window.history.length > 1 indicates navigable history in most browsers.
    // In Next App Router, router.back() is history-aware.
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push(fallbackHref);
    }
  }, [router, fallbackHref]);

  return goBack;
}
