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
      "inline-flex items-center justify-center transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e41d43] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none active:scale-[0.99] tracking-normal";

    const variantStyles = {
      default:
        "bg-[#e41d43] text-white hover:bg-[#e5244a] shadow-sm shadow-[#e41d43]/15",
      primary:
        "bg-[#e41d43] text-white hover:bg-[#e5244a] shadow-sm shadow-[#e41d43]/15",
      secondary:
        "bg-white text-[#243d77] border border-[#243d77] hover:bg-[#f0f4fa]",
      outline:
        "bg-white text-[#1c2438] border border-[#cbd5e1] hover:border-[#243d77] hover:text-[#243d77]",
      ghost:
        "bg-transparent text-[#1c2438] hover:bg-[#f1f5f9]",
      link:
        "bg-transparent text-[#243d77] hover:text-[#e41d43] underline-offset-4 hover:underline p-0 h-auto font-semibold",
    };

    const sizeStyles = {
      sm: "text-xs px-3 py-1.5 rounded-[3px] gap-1.5 font-medium",
      md: "text-[13px] px-4 py-2 rounded-[3px] gap-2 font-semibold",
      lg: "text-sm px-5 py-2.5 rounded-[3px] gap-2 font-bold uppercase tracking-wider",
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
