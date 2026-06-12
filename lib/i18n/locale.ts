import type { Locale } from "./translations";

export const LOCALE_STORAGE_KEY = "wa-agents-locale";

export function parseLocale(value: string | undefined | null): Locale {
  return value === "ar" ? "ar" : "en";
}

export function persistLocale(locale: Locale) {
  if (typeof window === "undefined") return;
  localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  document.cookie = `${LOCALE_STORAGE_KEY}=${locale};path=/;max-age=31536000;sameSite=lax`;
}

export const localeInitScript = `(function(){try{var k="${LOCALE_STORAGE_KEY}";var m=document.cookie.match(new RegExp("(?:^|; )"+k+"=(en|ar)(?:;|$)"));if(m&&(m[1]==="ar"||m[1]==="en")){document.documentElement.lang=m[1];document.documentElement.dir=m[1]==="ar"?"rtl":"ltr";}}catch(e){}})();`;
