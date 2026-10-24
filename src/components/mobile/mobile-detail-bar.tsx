"use client";

import { ArrowLeft } from "lucide-react";
import { useSmartBack } from "./hooks/use-smart-back";

/**
 * MobileDetailBar — sticky detail/funnel header.
 * Left back + title only — search & location removed per requirement.
 */

export interface MobileDetailBarProps {
  title: string;
  backHref?: string;
  /** @deprecated search removed — kept for compat */
  searchHref?: string;
}

export function MobileDetailBar({ title, backHref = "/", searchHref: _searchHref }: MobileDetailBarProps) {
  const goBack = useSmartBack(backHref);

  return (
    <header
      className="sticky top-0 z-30 border-b border-black/[0.06] bg-white/80 backdrop-blur-xl md:hidden"
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="mx-auto flex w-full max-w-2xl items-center gap-3 px-4 py-2.5">
        <button
          type="button"
          onClick={goBack}
          aria-label="Go back"
          className="flex size-9 items-center justify-center rounded-full border border-black/10 bg-white text-[#1d1d1f] active:-translate-x-0.5 active:scale-95 transition-transform"
        >
          <ArrowLeft className="size-4" />
        </button>

        <p className="min-w-0 flex-1 truncate text-sm font-bold tracking-tight text-[#1d1d1f]">{title}</p>
      </div>
    </header>
  );
}
