/**
 * Mobile AppShell — public barrel.
 * Import from "@/components/mobile" only. Do not deep-import internals unless you own the change.
 */

export { AppShell, type AppShellProps, type MobileHeaderVariant } from "./app-shell";
export { TopBar, type TopBarProps } from "./top-bar";
export { MobileSearchCard, type MobileSearchCardProps } from "./mobile-search-card";
export { MobileDetailBar, type MobileDetailBarProps } from "./mobile-detail-bar";
export { BottomNav } from "./bottom-nav";
export { TrackPill } from "./track-pill";
export { MobileSheet, type MobileSheetProps } from "./mobile-sheet";
export { MobileNavSheet, type MobileNavSheetProps } from "./mobile-nav-sheet";
export { useSmartBack } from "./hooks/use-smart-back";
export { useScrollLock } from "./hooks/use-scroll-lock";
export { StickyCTA, type StickyCTAProps } from "./sticky-cta";

// Mobile primitives (md:hidden only — import from "@/components/mobile/primitives")
export * from "./primitives";
