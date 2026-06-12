"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import {
  LOCALE_STORAGE_KEY,
  persistLocale,
} from "./locale";
import { translations, type Locale, type TranslationNamespaces } from "./translations";

type LanguageContextValue = {
  locale: Locale;
  initialLocale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  dir: "ltr" | "rtl";
  hydrated: boolean;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getNestedValue(
  obj: TranslationNamespaces[Locale][keyof TranslationNamespaces[Locale]],
  path: string,
): string | undefined {
  const parts = path.split(".");
  let current: unknown = obj;

  for (const part of parts) {
    if (current === null || current === undefined || typeof current !== "object") {
      return undefined;
    }
    current = (current as Record<string, unknown>)[part];
  }

  return typeof current === "string" ? current : undefined;
}

type LanguageProviderProps = {
  children: ReactNode;
  initialLocale?: Locale;
};

export function LanguageProvider({
  children,
  initialLocale = "en",
}: LanguageProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
    const resolved: Locale =
      stored === "en" || stored === "ar" ? stored : initialLocale;

    setLocaleState(resolved);
    persistLocale(resolved);
    setHydrated(true);
  }, [initialLocale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    persistLocale(next);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocaleState((prev) => {
      const next = prev === "en" ? "ar" : "en";
      persistLocale(next);
      return next;
    });
  }, []);

  const dir: "ltr" | "rtl" = locale === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    if (!hydrated) return;
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
  }, [locale, dir, hydrated]);

  const value = useMemo(
    () => ({
      locale,
      initialLocale,
      setLocale,
      toggleLocale,
      dir,
      hydrated,
    }),
    [locale, initialLocale, setLocale, toggleLocale, dir, hydrated],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}

export function translate(
  locale: Locale,
  namespace: keyof TranslationNamespaces[Locale],
  key: string,
  fallback?: string,
  values?: Record<string, string | number>,
): string {
  const ns = translations[locale][namespace];
  let text = getNestedValue(ns, key) ?? fallback ?? key;

  if (values) {
    Object.entries(values).forEach(([k, v]) => {
      text = text.replaceAll(`{{${k}}}`, String(v));
    });
  }

  return text;
}
