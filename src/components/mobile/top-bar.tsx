"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

/**
 * TopBar — compact glass header for listing/browsing routes (mobile only).
 * Clean brand-only header — location & search removed per requirement.
 * Right side keeps phone CTA for admissions accessibility.
 */

export interface TopBarProps {
  /** @deprecated search removed — kept for backward compat */
  searchHref?: string;
}

export function TopBar({ searchHref: _searchHref }: TopBarProps) {
  return (
    <header
      className="sticky top-0 z-30 border-b border-black/[0.06] bg-white/80 backdrop-blur-xl md:hidden"
      style={{
        paddingTop: "env(safe-area-inset-top)",
      }}
    >
      <div className="mx-auto flex w-full max-w-2xl items-center gap-3 px-4 py-2.5">
        {/* Brand affordance — compact so it doesn't compete with content */}
        <Link
          href="/"
          aria-label={`${siteConfig.shortName} Home`}
          className="inline-flex items-center gap-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e41d43] active:scale-[0.98] transition-transform"
        >
          <span className="flex size-8 items-center justify-center rounded-xl bg-[#243d77] text-[11px] font-extrabold tracking-tight text-white border-b-2 border-[#e41d43]">
            B
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[13px] font-extrabold tracking-tight text-[#1d1d1f] font-heading">
              BBD<span className="text-[#e41d43]">ITM</span>
            </span>
            <span className="text-[10px] font-semibold tracking-wider text-[#86868b]">AKTU 054</span>
          </span>
        </Link>

        {/* Right: phone CTA only — search removed */}
        <a
          href={`tel:${siteConfig.contact.admissionsPhone}`}
          aria-label={`Call ${siteConfig.contact.admissionsPhone}`}
          className="ml-auto flex size-9 items-center justify-center rounded-full border border-black/10 bg-white text-[#243d77] active:scale-95 transition-transform"
        >
          <Phone className="size-4" />
        </a>
      </div>
    </header>
  );
}
