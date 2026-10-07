import React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "wide" | "reading" | "full";
  as?: React.ElementType;
}

export function Container({
  size = "default",
  as: Component = "div",
  className,
  children,
  ...props
}: ContainerProps) {
  const sizeClasses = {
    default: "max-w-7xl", // 1280px standard readable width
    wide: "max-w-[1440px]", // 1440px wide media / expansive sections
    reading: "max-w-3xl", // 768px editorial reading width
    full: "max-w-full",
  };

  return (
    <Component
      className={cn(
        "mx-auto w-full px-5 sm:px-8 md:px-10 lg:px-12",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
