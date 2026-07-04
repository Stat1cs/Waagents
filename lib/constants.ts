export const WHATSAPP_NUMBER = "96893658441";

export const BRAND_NAME = "Wa-Agents";
export const WEBSITE_URL = "https://waagents.ai";
export const APP_URL = "https://app.waagents.ai";
export const HELP_URL = "https://docs.waagents.ai";
export const INSTAGRAM_URL = "https://www.instagram.com/waagents/";
export const CONTACT_EMAIL = "hello@waagents.ai";
export const DBS_URL = "https://dbs.om";
export const COMPANY_LOCATION = "Muscat, Sultanate of Oman";
export const LEGAL_EMAIL = "legal@waagents.ai";

export const DMCHAMP_CHAT_WIDGET_URL =
  "https://api.dmchamp.com/v1/chat-widget/rRHuuvUQqA1ErKHNpHp5";

export const TRY_LIVE_MESSAGES = {
  en: "Hi, I'd like to try Wa-Agents live on WhatsApp for my business.",
  ar: "مرحباً، أود تجربة Wa-Agents مباشرة على واتساب لنشاطي التجاري.",
} as const;

export const TRIAL_WHATSAPP_MESSAGES = {
  en: "Hi, I'd like to start a free Wa-Agents trial for my business.",
  ar: "مرحباً، أود بدء التجربة المجانية لـ Wa-Agents لنشاطي التجاري.",
} as const;

export const CUSTOM_WHATSAPP_MESSAGES = {
  en: "Hi, I'd like to discuss a custom Wa-Agents plan for my business.",
  ar: "مرحباً، أود مناقشة باقة Wa-Agents المخصصة لنشاطي التجاري.",
} as const;

/** @deprecated Use TRY_LIVE_MESSAGES */
export const DEMO_MESSAGES = TRY_LIVE_MESSAGES;

export function normalizeWhatsAppPhone(number: string = WHATSAPP_NUMBER): string {
  return number.replace(/\D/g, "");
}

/**
 * WhatsApp click-to-chat URL.
 * Uses api.whatsapp.com because wa.me is blocked/unresolvable on some networks (NXDOMAIN).
 * @see https://faq.whatsapp.com/5913398998672934
 * Phone: full international format, digits only (e.g. 96893658441).
 */
export function getWhatsAppDemoUrl(
  message?: string,
  locale: keyof typeof DEMO_MESSAGES = "en",
): string {
  const phone = normalizeWhatsAppPhone();
  const text = encodeURIComponent(message ?? DEMO_MESSAGES[locale]);
  return `https://api.whatsapp.com/send?phone=${phone}&text=${text}`;
}

/** Prefer same-tab navigation so mobile OS can open the WhatsApp app. */
export const WHATSAPP_LINK_REL = "noopener noreferrer";

/** Wa-Agents brand palette (from logo) */
export const BRAND = {
  bg: "#F7F3E8",
  foreground: "#0B0B0B",
  muted: "#71717a",
  gold: "#C5A059",
  green: "#1B4D3E",
  cream: "#E8E0C5",
} as const;

export const BRAND_LOGOS = {
  logo: "/Logo/wa_logo.png",
} as const;

/** DM Champ / WhatsApp Web chat UI colors */
export const WHATSAPP_CHAT = {
  accent: "#25D366",
  header: "#202c33",
  panel: "#111b21",
  chatBg: "#0b141a",
  incoming: "#202c33",
  outgoing: "#005c4b",
  bubbleIncoming: "rounded-lg rounded-tl-none bg-[#202c33] text-[#e9edef]",
  bubbleOutgoing: "rounded-lg rounded-tr-none bg-[#005c4b] text-[#e9edef]",
  textPrimary: "#e9edef",
  textSecondary: "#8696a0",
  systemBg: "#182229",
  timestamp: "text-white/45",
} as const;
