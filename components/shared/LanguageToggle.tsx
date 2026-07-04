"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import type { Locale } from "@/lib/i18n/translations";
import { cn } from "@/lib/utils";

const languages: { value: Locale; label: string }[] = [
  { value: "en", label: "EN" },
  { value: "ar", label: "AR" },
];

export function LanguageToggle({ className }: { className?: string }) {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Select language"
      className={cn(
        "inline-flex items-center gap-0.5 rounded-full border p-0.5 shadow-sm",
        "border-border/70 bg-background/95",
        "dark:border-white/15 dark:bg-[#0B0B0B]",
        className,
      )}
    >
      {languages.map((language) => {
        const isActive = locale === language.value;

        return (
          <button
            key={language.value}
            type="button"
            onClick={() => setLocale(language.value)}
            aria-pressed={isActive}
            aria-current={isActive ? "true" : undefined}
            className={cn(
              "min-w-[2.5rem] rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wide transition-colors duration-200 sm:min-w-[2.75rem] sm:px-3.5",
              isActive
                ? "bg-gold text-[#0B0B0B] shadow-[0_0_0_1px_rgba(197,160,89,0.5),0_1px_3px_rgba(197,160,89,0.3)]"
                : "text-muted-foreground/55 hover:bg-foreground/5 hover:text-muted-foreground dark:text-white/35 dark:hover:bg-white/5 dark:hover:text-white/60",
            )}
          >
            {language.label}
          </button>
        );
      })}
    </div>
  );
}
