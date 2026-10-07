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
      "bg-[#fff1f3] text-[#e41d43] border border-[#e41d43]/20",
    neutral:
      "bg-[#f5f5f7] text-[#1d1d1f] border border-[#d2d2d7]",
    blue:
      "bg-[#f0f4fa] text-[#243d77] border border-[#243d77]/20",
    outline:
      "bg-transparent text-[#6e6e73] border border-[#d2d2d7]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-medium tracking-tight",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
