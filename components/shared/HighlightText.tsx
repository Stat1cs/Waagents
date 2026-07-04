"use client";

import { cn } from "@/lib/utils";

type HighlightTextProps = {
  children: string;
  highlight?: string;
  className?: string;
  highlightClassName?: string;
};

export function HighlightText({
  children,
  highlight,
  className,
  highlightClassName,
}: HighlightTextProps) {
  const needle = highlight ?? "";
  if (!needle || !children.includes(needle)) {
    return <span className={className}>{children}</span>;
  }

  const parts = children.split(needle);

  return (
    <span className={className}>
      {parts.map((part, i) => (
        <span key={`${part}-${i}`}>
          {part}
          {i < parts.length - 1 && (
            <span
              className={cn("text-highlight", highlightClassName)}
            >
              {needle}
            </span>
          )}
        </span>
      ))}
    </span>
  );
}
