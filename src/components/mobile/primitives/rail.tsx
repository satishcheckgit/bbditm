"use client";

import React, { useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Rail — horizontal snap-scroll container (native app pattern).
 * - snap-x snap-mandatory, touch-pan-x, hidden scrollbar
 * - Optional arrow affordance hidden on mobile (swipe-first)
 * - No external dep, pure CSS snap + scrollBy
 */

export interface RailProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Gap between items, e.g. "gap-3" */
  gapClassName?: string;
  /** Padding inline for edge bleed, e.g. "px-4" */
  bleedClassName?: string;
}

export function Rail({ className, gapClassName = "gap-3", bleedClassName = "px-4", children, ...props }: RailProps) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className={cn(
        "flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth touch-pan-x",
        "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        "-mx-4 px-4 sm:-mx-0 sm:px-0",
        gapClassName,
        bleedClassName,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export interface RailItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Snap alignment per item */
  snap?: "start" | "center";
}

export function RailItem({ className, snap = "start", children, ...props }: RailItemProps) {
  return (
    <div className={cn("shrink-0 snap-start", snap === "center" && "snap-center", className)} {...props}>
      {children}
    </div>
  );
}
