"use client";

import { useCallback, useMemo } from "react";

import { translate, useLanguage } from "@/lib/i18n/LanguageProvider";
import type { TranslationNamespaces } from "@/lib/i18n/translations";

type TranslationValues = Record<string, string | number>;

export function useTranslation<N extends keyof TranslationNamespaces["en"]>(
  namespace: N,
) {
  const { locale, dir } = useLanguage();

  const t = useCallback(
    (key: string, fallback?: string, values?: TranslationValues) =>
      translate(locale, namespace, key, fallback, values),
    [locale, namespace],
  );

  return useMemo(
    () => ({
      t,
      locale,
      dir,
    }),
    [t, locale, dir],
  );
}
