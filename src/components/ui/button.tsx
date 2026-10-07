import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "secondary" | "outline" | "ghost" | "link";
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
      "inline-flex items-center justify-center font-medium transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e41d43] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none active:scale-[0.98] tracking-tight";

    const variantStyles = {
      default:
        "bg-[#e41d43] text-white hover:bg-[#e5244a] shadow-[0_1px_3px_rgba(228,29,67,0.3)] hover:shadow-[0_4px_12px_rgba(228,29,67,0.35)]",
      primary:
        "bg-[#e41d43] text-white hover:bg-[#e5244a] shadow-[0_1px_3px_rgba(228,29,67,0.3)] hover:shadow-[0_4px_12px_rgba(228,29,67,0.35)]",
      secondary:
        "bg-[#f5f5f7] text-[#243d77] border border-[#d2d2d7] hover:bg-white hover:border-[#243d77] hover:shadow-sm",
      outline:
        "bg-white text-[#1d1d1f] border border-[#d2d2d7] hover:border-[#1d1d1f] hover:bg-[#f5f5f7]",
      ghost:
        "bg-transparent text-[#1d1d1f] hover:bg-[#f5f5f7]",
      link:
        "bg-transparent text-[#243d77] hover:text-[#e41d43] underline-offset-4 hover:underline p-0 h-auto font-medium",
    };

    const sizeStyles = {
      sm: "text-[12px] px-3.5 py-1.5 rounded-full gap-1.5 font-medium",
      md: "text-[13px] px-5 py-2 rounded-full gap-2 font-medium",
      lg: "text-[14px] px-6 py-2.5 rounded-full gap-2 font-medium",
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
