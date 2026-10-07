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
      "bg-[#fff1f3] text-[#e41d43] border border-[#fecdd3]",
    neutral:
      "bg-[#f8fafc] text-[#64748b] border border-[#e2e8f0]",
    blue:
      "bg-[#f0f4fa] text-[#243d77] border border-[#d2def5]",
    outline:
      "bg-transparent text-[#64748b] border border-[#cbd5e1]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-[3px] text-[11px] font-bold uppercase tracking-wider",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
