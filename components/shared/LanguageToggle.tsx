"use client";

import { motion } from "framer-motion";

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
        "relative inline-flex items-center rounded-full border p-1 shadow-sm",
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
            className={cn(
              "relative min-w-[2.5rem] rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wide transition-colors sm:min-w-[2.75rem] sm:px-3.5",
              isActive
                ? "text-[#0B0B0B]"
                : "text-muted-foreground hover:text-foreground dark:text-white/75 dark:hover:text-white",
            )}
          >
            {isActive && (
              <motion.span
                layoutId="language-toggle-indicator"
                className="absolute inset-0 rounded-full bg-gold"
                transition={{ type: "spring", stiffness: 420, damping: 32 }}
              />
            )}
            <span className="relative z-10">{language.label}</span>
          </button>
        );
      })}
    </div>
  );
}
