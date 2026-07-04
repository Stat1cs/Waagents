"use client";

import { Moon, Sun } from "lucide-react";

import { useTranslation } from "@/hooks/useTranslation";
import { useTheme } from "@/lib/theme/ThemeProvider";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation("nav");
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "inline-flex min-h-9 min-w-9 items-center justify-center rounded-full border border-border bg-secondary/30 p-0 text-foreground transition-colors hover:border-gold/40 hover:bg-gold/10",
        className,
      )}
      aria-label={
        isDark
          ? t("themeLight", "Switch to light mode")
          : t("themeDark", "Switch to dark mode")
      }
      aria-pressed={isDark}
    >
      {isDark ? (
        <Sun className="h-4 w-4 text-gold" aria-hidden />
      ) : (
        <Moon className="h-4 w-4 text-gold" aria-hidden />
      )}
    </button>
  );
}
