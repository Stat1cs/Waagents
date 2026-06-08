import type { Metadata, Viewport } from "next";
import { Cairo, Inter } from "next/font/google";
import { cookies } from "next/headers";

import { JsonLd } from "@/components/shared/JsonLd";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import { localeInitScript, parseLocale } from "@/lib/i18n/locale";
import { WEBSITE_URL } from "@/lib/constants";
import { ThemeProvider, themeInitScript } from "@/lib/theme/ThemeProvider";
import { cn } from "@/lib/utils";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F3E8" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0B0B" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(WEBSITE_URL),
  title: {
    default: "Wa-Agents — WhatsApp AI for Local Businesses",
    template: "%s | Wa-Agents",
  },
  description:
    "Automate WhatsApp replies, bookings, and lead qualification in Arabic and English. Built for clinics, real estate, salons, and service businesses in Oman and the GCC.",
  keywords: [
    "WhatsApp AI",
    "Oman",
    "GCC",
    "appointment booking",
    "Arabic chatbot",
    "business automation",
    "Wa-Agents",
  ],
  authors: [{ name: "Wa-Agents" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ar_OM"],
    url: WEBSITE_URL,
    siteName: "Wa-Agents",
    title: "Wa-Agents — WhatsApp AI for Local Businesses",
    description:
      "Turn WhatsApp messages into booked appointments with AI that speaks Arabic and English.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wa-Agents — WhatsApp AI for Local Businesses",
    description:
      "Automate WhatsApp replies, bookings, and lead qualification in Arabic and English.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const initialLocale = parseLocale(cookieStore.get("wa-agents-locale")?.value);
  const dir = initialLocale === "ar" ? "rtl" : "ltr";

  return (
    <html
      lang={initialLocale}
      dir={dir}
      className={cn(inter.variable, cairo.variable)}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script dangerouslySetInnerHTML={{ __html: localeInitScript }} />
        <JsonLd />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans text-foreground antialiased",
          "rtl:font-arabic",
        )}
      >
        <ThemeProvider>
          <LanguageProvider initialLocale={initialLocale}>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
