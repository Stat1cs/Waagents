export const WHATSAPP_NUMBER = "96893658441";

export const BRAND_NAME = "Wa-Agents";
export const WEBSITE_URL = "https://waagents.ai";
export const APP_URL = "https://app.waagents.ai";
export const HELP_URL = "https://docs.waagents.ai";
export const CONTACT_EMAIL = "hello@waagents.ai";
export const DBS_URL = "https://dbs.om";
export const COMPANY_LOCATION = "Muscat, Sultanate of Oman";
export const LEGAL_EMAIL = "legal@waagents.ai";

export const DMCHAMP_CHAT_WIDGET_URL =
  "https://api.dmchamp.com/v1/chat-widget/rRHuuvUQqA1ErKHNpHp5";

export const DEMO_MESSAGES = {
  en: "Hi, I'd like to see how Wa-Agents handles WhatsApp bookings for my business.",
  ar: "مرحباً، أود معرفة كيف تساعد Wa-Agents في حجز المواعيد عبر واتساب لنشاطي التجاري.",
} as const;

export function getWhatsAppDemoUrl(
  message?: string,
  locale: keyof typeof DEMO_MESSAGES = "en",
): string {
  const text = encodeURIComponent(message ?? DEMO_MESSAGES[locale]);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

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
