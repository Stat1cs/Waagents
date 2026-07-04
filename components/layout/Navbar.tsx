"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";

import { BrandLogo } from "@/components/shared/BrandLogo";
import { LanguageToggle } from "@/components/shared/LanguageToggle";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";
import { APP_URL } from "@/lib/constants";
import { TRIAL_ANCHOR } from "@/lib/pricing/tiers";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#features", key: "features" },
  { href: "#industries", key: "industries" },
  { href: "#pricing", key: "pricing" },
  { href: "#faq", key: "faq" },
] as const;

export function Navbar() {
  const { t } = useTranslation("nav");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-4">
        <header
          className={cn(
            "pointer-events-auto flex w-full max-w-5xl items-center justify-between gap-2 rounded-full border px-3 py-2 transition-[background-color,box-shadow,border-color] duration-300 sm:gap-4 sm:px-4 sm:py-2.5",
            scrolled
              ? "border-border/70 bg-background/85 shadow-lg shadow-black/8 backdrop-blur-xl backdrop-saturate-150 dark:shadow-black/25"
              : "border-border/40 bg-background/55 backdrop-blur-md dark:bg-background/45",
          )}
        >
          <BrandLogo asLink priority onClick={() => setOpen(false)} />

          <ul className="hidden flex-1 items-center justify-center gap-0.5 lg:flex">
            {navLinks.map(({ href, key }) => (
              <li key={key}>
                <a
                  href={href}
                  className="inline-flex min-h-9 items-center rounded-full px-3.5 text-sm text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
                >
                  {t(key, key.charAt(0).toUpperCase() + key.slice(1))}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden shrink-0 items-center gap-1.5 sm:gap-2 lg:flex">
            <div className="flex items-center gap-3">
              <LanguageToggle />
              <ThemeToggle />
            </div>
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="h-9 rounded-full px-4"
            >
              <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                {t("login", "Login")}
              </a>
            </Button>
            <Button
              asChild
              variant="premium"
              size="sm"
              className="h-9 gap-1.5 rounded-full px-4"
            >
              <a href={TRIAL_ANCHOR}>
                {t("startTrial", "Start free trial")}
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </Button>
          </div>

          <div className="flex shrink-0 items-center gap-1 lg:hidden">
            <div className="flex items-center gap-2 sm:gap-3">
              <LanguageToggle />
              <ThemeToggle />
            </div>
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="h-9 shrink-0 rounded-full px-3 sm:px-4"
            >
              <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                {t("login", "Login")}
              </a>
            </Button>
            <button
              type="button"
              className="inline-flex min-h-9 min-w-9 shrink-0 items-center justify-center rounded-full border border-border text-foreground"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-label={t("openMenu", "Open menu")}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </header>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col bg-background/95 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={t("mobileMenu", "Navigation menu")}
          >
            <div className="flex items-center justify-between px-4 pb-4 pt-[max(1rem,env(safe-area-inset-top))]">
              <BrandLogo size="md" />
              <button
                type="button"
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border"
                onClick={() => setOpen(false)}
                aria-label={t("closeMenu", "Close menu")}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col gap-2 px-4 py-4">
              {navLinks.map(({ href, key }) => (
                <a
                  key={key}
                  href={href}
                  className="flex min-h-12 items-center rounded-2xl border border-border/50 bg-secondary/20 px-4 text-lg text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {t(key, key.charAt(0).toUpperCase() + key.slice(1))}
                </a>
              ))}
            </nav>

            <div className="flex flex-col gap-3 border-t border-border px-4 py-6 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
              <Button asChild variant="outline" size="lg" className="min-h-11 w-full rounded-full">
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                >
                  {t("login", "Login")}
                </a>
              </Button>
              <Button asChild variant="premium" size="lg" className="min-h-11 w-full gap-2 rounded-full">
                <a href={TRIAL_ANCHOR} onClick={() => setOpen(false)}>
                  <ArrowRight className="h-4 w-4" />
                  {t("startTrial", "Start free trial")}
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
