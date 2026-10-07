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
            "text-xs font-bold tracking-wider uppercase mb-2",
            isDark ? "text-[#f87171]" : "text-[#e41d43]"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-2xl sm:text-3xl font-bold tracking-tight leading-snug",
          isDark ? "text-white" : "text-[#243d77]"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-3 text-sm sm:text-base leading-[23.24px]",
            isDark ? "text-[#bcbcbc]" : "text-[#64748b]"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
