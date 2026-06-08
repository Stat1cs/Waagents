"use client";

import * as React from "react";
import { Toggle as TogglePrimitive } from "@base-ui/react/toggle";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const toggleVariants = cva(
  "inline-flex shrink-0 items-center justify-center rounded-md border border-transparent text-sm font-medium whitespace-nowrap outline-none transition-all select-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 data-pressed:bg-primary data-pressed:text-primary-foreground hover:bg-muted hover:text-foreground dark:hover:bg-muted/50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border-border bg-transparent shadow-xs hover:bg-muted hover:text-foreground",
      },
      size: {
        default: "h-8 min-w-8 gap-1.5 px-2.5",
        sm: "h-7 min-w-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2 text-xs",
        lg: "h-9 min-w-9 gap-1.5 px-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Toggle({
  className,
  variant = "default",
  size = "default",
  ...props
}: TogglePrimitive.Props &
  VariantProps<typeof toggleVariants> & {
    className?: string;
  }) {
  return (
    <TogglePrimitive
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Toggle, toggleVariants };
