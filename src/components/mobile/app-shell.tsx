"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { TopBar } from "./top-bar";
import { MobileSearchCard } from "./mobile-search-card";
import { MobileDetailBar } from "./mobile-detail-bar";
import { BottomNav } from "./bottom-nav";
import { TrackPill } from "./track-pill";
import { cn } from "@/lib/utils";

/**
 * AppShell — native mobile app scaffold + desktop pass-through.
 *
 * Architecture:
 *  - Single children render (no duplicate mount). Mobile vs desktop chrome is
 *    toggled via Tailwind responsive visibility, NOT by rendering children twice.
 *  - Mobile (<md): sticky glass headers + BottomNav + TrackPill (app shell).
 *  - Desktop (≥md): caller-provided desktopHeader/desktopFooter chrome, no mobile chrome.
 *
 * Header variants:
 *  - "card"   → MobileSearchCard (home only, immersive banner + floating search)
 *  - "bar"    → TopBar (listing/browse)
 *  - "detail" → MobileDetailBar (detail/funnel, hides BottomNav)
 *  - "none"   → no mobile header
 *  - "auto"   → derived from pathname (default)
 *
 * Props are kept minimal for ease of future iteration.
 */

export type MobileHeaderVariant = "auto" | "bar" | "card" | "detail" | "none";

export interface AppShellProps {
  children: React.ReactNode;
  hero?: React.ReactNode;
  mobileHeader?: MobileHeaderVariant;
  title?: string;
  backHref?: string;
  wide?: boolean;
  xwide?: boolean;
  /** Desktop chrome — rendered only at ≥md. Keeps existing Header/Footer intact. */
  desktopHeader?: React.ReactNode;
  desktopFooter?: React.ReactNode;
  /** Optional className for the main content container */
  contentClassName?: string;
}

const DETAIL_PREFIXES = ["/programmes/", "/schools/", "/admissions", "/contact", "/news/", "/about", "/research", "/placements", "/gallery"];

function resolveVariant(pathname: string | null, explicit: MobileHeaderVariant): Exclude<MobileHeaderVariant, "auto"> {
  if (explicit !== "auto") return explicit;
  if (!pathname) return "bar";
  if (pathname === "/") return "card";
  const isDetail = DETAIL_PREFIXES.some((p) => pathname === p || pathname.startsWith(p));
  if (isDetail) return "detail";
  return "bar";
}

function titleFromPath(pathname: string | null, fallback?: string): string {
  if (fallback) return fallback;
  if (!pathname || pathname === "/") return "BBDITM";
  const seg = pathname.split("/").filter(Boolean).pop() ?? "";
  // "btech-computer-science" → "Btech Computer Science"
  return seg
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .slice(0, 48);
}

export function AppShell({
  children,
  hero,
  mobileHeader = "auto",
  title,
  backHref,
  wide,
  xwide,
  desktopHeader,
  desktopFooter,
  contentClassName,
}: AppShellProps) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  // Keep pathname-derived header neutral until hydration to avoid mismatch
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  const effectiveVariant: Exclude<MobileHeaderVariant, "auto"> = mounted
    ? resolveVariant(pathname, mobileHeader)
    : mobileHeader === "auto"
      ? "bar"
      : mobileHeader;

  const isDetail = effectiveVariant === "detail";
  const showBottomNav = !isDetail && effectiveVariant !== "none";
  const detailTitle = isDetail ? titleFromPath(pathname, title) : undefined;

  // Single children render — chrome toggled via responsive visibility (no duplicate mount)
  return (
    <div className="flex min-h-dvh flex-col">
      {/* Desktop header — hidden on mobile */}
      {desktopHeader ? <div className="hidden md:block">{desktopHeader}</div> : null}

      {/* Mobile headers — hidden on desktop */}
      <div className="md:hidden">
        {effectiveVariant === "card" && <MobileSearchCard />}
        {effectiveVariant === "bar" && <TopBar />}
        {isDetail && <MobileDetailBar title={detailTitle ?? "BBDITM"} backHref={backHref} />}
      </div>

      {/* Optional full-bleed hero slot */}
      {hero ? <div className={cn(isDetail && "hidden md:block")}>{hero}</div> : null}

      {/* Single main — mobile: full-bleed (sections handle their own px), desktop: passthrough */}
      <main id="main-content" className="flex-1">
        <div
          className={cn(
            "w-full",
            // keep optional width gate only on desktop if requested
            xwide ? "md:mx-auto md:max-w-7xl" : wide ? "md:mx-auto md:max-w-6xl" : "md:max-w-none md:mx-0",
            contentClassName
          )}
        >
          {children}
        </div>
      </main>

      {/* Desktop footer — hidden on mobile */}
      {desktopFooter ? <div className="hidden md:block">{desktopFooter}</div> : null}

      {/* Mobile floating layers — hidden on desktop via internal md:hidden; keep as direct flex-col children so sticky works */}
      <div className="contents md:hidden">
        <TrackPill />
        {showBottomNav && <BottomNav />}
      </div>
    </div>
  );
}
