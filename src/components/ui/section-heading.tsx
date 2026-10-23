import React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  isDark?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  isDark = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "text-xs font-semibold tracking-wider uppercase mb-2",
            isDark ? "text-[#f87171]" : "text-[#e41d43]"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-[22px] sm:text-4xl font-bold sm:font-semibold tracking-tight leading-snug font-heading",
          isDark ? "text-white" : "text-black"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-2 sm:mt-3 text-[13px] sm:text-base leading-relaxed",
            isDark ? "text-[#86868b]" : "text-[#515154] sm:text-[#6e6e73]"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
