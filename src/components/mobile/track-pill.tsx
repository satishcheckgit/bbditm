"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, X, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

/**
 * TrackPill — floating conversion nudge above BottomNav (Zepto/Pronto pattern).
 *
 * - Fixed bottom-[4.5rem] so it sits just above the tab bar (~4rem tall).
 * - Auto-hides on admissions/contact where the CTA would be redundant.
 * - Dismissible (session-scoped); no persistence needed.
 */

import { useState, useMemo } from "react";

const HIDE_ON = ["/admissions", "/contact"];

export function TrackPill() {
  const pathname = usePathname();
  const [dismissed, setDismissed] = useState(false);

  const hidden = useMemo(() => {
    if (dismissed) return true;
    if (!pathname) return false;
    return HIDE_ON.some((p) => pathname.startsWith(p));
  }, [pathname, dismissed]);

  if (hidden) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-[4.5rem] z-40 flex justify-center px-4 pointer-events-none md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      aria-live="polite"
    >
      <div className="pointer-events-auto flex w-full max-w-md items-center gap-3 rounded-full border border-[#e41d43]/20 bg-[#e41d43] px-3 py-2.5 text-white shadow-[0_16px_40px_rgba(228,29,67,0.28),0_4px_12px_rgba(0,0,0,0.12)]">
        <span className="flex size-9 items-center justify-center rounded-full bg-white/20 shrink-0">
          <Phone className="size-4" />
        </span>
        <Link
          href={siteConfig.links.applyNow}
          className="min-w-0 flex-1 text-left active:scale-[0.99] transition-transform"
        >
          <span className="block truncate text-sm font-bold leading-none">Admissions 2026-27 Open</span>
          <span className="block truncate text-xs font-medium text-white/85">Tap to apply · Limited seats</span>
        </Link>
        <Link
          href={siteConfig.links.applyNow}
          aria-label="Apply now"
          className="flex size-8 items-center justify-center rounded-full bg-white text-[#e41d43] active:scale-95 transition-transform shrink-0"
        >
          <ArrowRight className="size-4" />
        </Link>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Dismiss"
          className="flex size-8 items-center justify-center rounded-full bg-white/15 text-white active:scale-95 transition-transform shrink-0"
        >
          <X className="size-4" />
        </button>
      </div>
    </div>
  );
}
