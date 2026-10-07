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
            "text-xs font-semibold tracking-wider uppercase mb-3",
            isDark
              ? "text-[var(--color-brand-300)]"
              : "text-[var(--color-brand-600)]"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15]",
          isDark ? "text-white" : "text-[var(--color-ink)]"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed",
            isDark ? "text-gray-300" : "text-[var(--color-ink-muted)]"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
