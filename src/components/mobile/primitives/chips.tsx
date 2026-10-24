"use client";

import { cn } from "@/lib/utils";

/**
 * Chips — segmented filter pills (native app segmented control).
 * Sticky-friendly: background blur + inset shadow matches desktop pattern.
 */

export type ChipOption = { id: string; label: string };

export interface ChipsProps {
  options: ChipOption[];
  value: string;
  onChange: (id: string) => void;
  className?: string;
}

export function Chips({ options, value, onChange, className }: ChipsProps) {
  return (
    <div
      className={cn(
        "overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] touch-pan-x",
        className
      )}
    >
      <div className="inline-flex items-center gap-1.5 p-1 rounded-full bg-[#e8e8ed]/90 backdrop-blur-xl border border-black/[0.04] shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)] select-none">
        {options.map((opt) => {
          const active = value === opt.id;
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => onChange(opt.id)}
              aria-pressed={active}
              className={cn(
                "px-3.5 py-2 rounded-full text-[12px] whitespace-nowrap tracking-tight active:scale-95 transition-all duration-200 select-none [-webkit-tap-highlight-color:transparent]",
                active
                  ? "bg-black text-white font-semibold shadow-[0_2px_8px_rgba(0,0,0,0.22)]"
                  : "text-[#515154] font-medium hover:text-black hover:bg-white/60"
              )}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
