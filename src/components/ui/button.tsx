import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
}

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      isExternal,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-600)] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none active:scale-[0.98]";

    const variantStyles = {
      primary:
        "bg-[var(--color-brand-600)] text-white hover:bg-[var(--color-brand-700)] shadow-sm shadow-[var(--color-brand-600)]/20",
      secondary:
        "bg-white text-[var(--color-ink)] border border-[var(--color-border-subtle)] hover:bg-[var(--color-surface-soft)] hover:border-gray-300 shadow-[0_1px_2px_rgb(0_0_0/0.04)]",
      outline:
        "bg-transparent text-[var(--color-brand-700)] border border-[var(--color-brand-300)] hover:bg-[var(--color-brand-50)]",
      ghost:
        "bg-transparent text-[var(--color-ink)] hover:bg-[var(--color-surface-soft)]",
      link:
        "bg-transparent text-[var(--color-brand-600)] hover:text-[var(--color-brand-800)] underline-offset-4 hover:underline p-0 h-auto",
    };

    const sizeStyles = {
      sm: "text-xs px-3.5 py-1.5 rounded-[10px] gap-1.5",
      md: "text-sm px-5 py-2.5 rounded-[12px] gap-2",
      lg: "text-base px-6 py-3.5 rounded-[14px] gap-2.5 font-semibold",
    };

    const combinedClassName = cn(
      baseStyles,
      variantStyles[variant],
      variant !== "link" && sizeStyles[size],
      className
    );

    if (href) {
      if (isExternal) {
        return (
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={combinedClassName}
          >
            {children}
          </a>
        );
      }
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={combinedClassName}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={combinedClassName}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
