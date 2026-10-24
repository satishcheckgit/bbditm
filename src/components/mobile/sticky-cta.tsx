"use client";

import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

/**
 * StickyCTA — fixed bottom conversion bar for detail/funnel pages.
 * Sits above BottomNav on non-detail, or replaces it on detail (where BottomNav hidden).
 * Only visible on mobile (md:hidden).
 */

export interface StickyCTAProps {
  primaryLabel?: string;
  primaryHref?: string;
  secondaryHref?: string;
  showPhone?: boolean;
}

export function StickyCTA({
  primaryLabel = "Apply Now",
  primaryHref = siteConfig.links.applyNow,
  secondaryHref,
  showPhone = true,
}: StickyCTAProps) {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-30 border-t border-black/10 bg-white/95 backdrop-blur-xl md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="mx-auto flex w-full max-w-2xl items-center gap-2 px-4 py-2.5">
        {showPhone && (
          <a
            href={`tel:${siteConfig.contact.admissionsPhone}`}
            className="flex size-11 items-center justify-center rounded-full border border-black/10 bg-white text-[#243d77] active:scale-95 transition-transform shrink-0"
            aria-label={`Call ${siteConfig.contact.admissionsPhone}`}
          >
            <Phone className="size-4" />
          </a>
        )}
        {secondaryHref && (
          <Link
            href={secondaryHref}
            className="flex-1 inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-[#1d1d1f] active:scale-[0.98] transition-transform"
          >
            Enquire
          </Link>
        )}
        <Link
          href={primaryHref}
          className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-[#e41d43] px-5 py-3 text-sm font-bold text-white shadow-[0_8px_20px_rgba(228,29,67,0.3)] active:scale-[0.98] transition-transform"
        >
          {primaryLabel} <ArrowRight className="size-4" />
        </Link>
      </div>
    </div>
  );
}
