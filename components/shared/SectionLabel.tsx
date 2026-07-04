import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionLabelProps = {
  children: ReactNode;
  className?: string;
};

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <p
      className={cn(
        "text-xs font-semibold uppercase tracking-[0.2em] text-gold",
        className,
      )}
    >
      {children}
    </p>
  );
}
