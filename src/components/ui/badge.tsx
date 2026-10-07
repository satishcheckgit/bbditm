import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "brand" | "neutral" | "blue" | "outline";
}

export function Badge({
  className,
  variant = "brand",
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    brand:
      "bg-[var(--color-brand-100)] text-[var(--color-brand-800)] border border-[var(--color-brand-200)]",
    neutral:
      "bg-[var(--color-surface-soft)] text-[var(--color-ink-muted)] border border-[var(--color-border-subtle)]",
    blue:
      "bg-blue-50 text-[var(--color-institutional-blue)] border border-blue-200",
    outline:
      "bg-transparent text-[var(--color-ink-muted)] border border-[var(--color-border-subtle)]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
