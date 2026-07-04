"use client";

import { getWhatsAppDemoUrl } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

/** Stable WhatsApp try-live URL for SSR + hydration (uses server locale until client is hydrated). */
export function useWhatsAppDemoUrl(message?: string) {
  const { locale, initialLocale, hydrated } = useLanguage();
  const activeLocale = hydrated ? locale : initialLocale;
  return getWhatsAppDemoUrl(message, activeLocale);
}
