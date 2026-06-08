"use client";

import * as React from "react";
import { ToggleGroup as ToggleGroupPrimitive } from "@base-ui/react/toggle-group";

import { cn } from "@/lib/utils";

function ToggleGroup({
  className,
  ...props
}: ToggleGroupPrimitive.Props & { className?: string }) {
  return (
    <ToggleGroupPrimitive
      data-slot="toggle-group"
      className={cn(
        "group/toggle-group inline-flex w-fit items-center rounded-full border border-border bg-background/80 p-0.5 shadow-xs dark:bg-input/30",
        className,
      )}
      {...props}
    />
  );
}

export { ToggleGroup };
