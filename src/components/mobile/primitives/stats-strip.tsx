"use client";

import { cn } from "@/lib/utils";

/**
 * StatsStrip — horizontal swipeable stats (native metric rail).
 * Each stat: large value + label + subtext. Snap-start, min-w for thumb paging.
 */

export interface StatItem {
  value: string;
  label: string;
  subtext?: string;
}

export function StatsStrip({ stats, className }: { stats: StatItem[]; className?: string }) {
  return (
    <div
      className={cn(
        "flex gap-3 overflow-x-auto snap-x snap-mandatory overscroll-x-contain touch-pan-x",
        "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        "-mx-4 px-4 sm:mx-0 sm:px-0",
        className
      )}
    >
      {stats.map((s) => (
        <div
          key={s.label}
          className="shrink-0 snap-start min-w-[68vw] max-w-[300px] rounded-[18px] bg-white border border-black/5 p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
        >
          <p className="font-heading text-3xl font-semibold tracking-tight text-[#e41d43] leading-none">{s.value}</p>
          <p className="mt-3 text-sm font-semibold text-[#1d1d1f] leading-tight">{s.label}</p>
          {s.subtext && <p className="mt-1.5 text-xs leading-relaxed text-[#86868b] line-clamp-2">{s.subtext}</p>}
        </div>
      ))}
    </div>
  );
}
