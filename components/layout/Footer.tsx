"use client";

import { Instagram, MessageCircle } from "lucide-react";

import { BrandLogo } from "@/components/shared/BrandLogo";
import { useTranslation } from "@/hooks/useTranslation";
import {
  DBS_URL,
  HELP_URL,
  INSTAGRAM_URL,
  WHATSAPP_LINK_REL,
} from "@/lib/constants";
import { useWhatsAppDemoUrl } from "@/hooks/useWhatsAppDemoUrl";
import { cn } from "@/lib/utils";

const productLinks = [
  { href: "/#features", key: "features" },
  { href: "/#how-it-works", key: "howItWorks" },
  { href: "/#pricing", key: "pricing" },
  { href: "/#faq", key: "faq" },
] as const;

const footerLinkLabels: Record<string, string> = {
  features: "Features",
  howItWorks: "How It Works",
  pricing: "Pricing",
  faq: "FAQ",
  industries: "Industries",
  comparison: "Comparison",
  demo: "See it live",
  whatsappDemo: "Try it out live",
  helpCentre: "Help Centre",
  contact: "Contact",
  terms: "Terms & Conditions",
  privacy: "Privacy Policy",
};

type FooterLink = {
  href: string;
  key: string;
  external?: boolean;
  whatsapp?: boolean;
};

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly FooterLink[];
}) {
  const { t } = useTranslation("footer");

  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold text-foreground">{title}</h3>
      <ul className="space-y-2.5">
        {links.map(({ href, key, external, whatsapp }) => (
          <li key={key}>
            <a
              href={href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              {...(external
                ? whatsapp
                  ? { rel: WHATSAPP_LINK_REL, suppressHydrationWarning: true }
                  : { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {t(key, footerLinkLabels[key] ?? key)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const { t } = useTranslation("footer");
  const year = new Date().getFullYear();
  const demoUrl = useWhatsAppDemoUrl();

  const businessLinks: FooterLink[] = [
    { href: "/#industries", key: "industries" },
    { href: "/#comparison", key: "comparison" },
    { href: "/#demo", key: "demo" },
    { href: demoUrl, key: "whatsappDemo", external: true, whatsapp: true },
  ];

  const companyLinks: FooterLink[] = [
    { href: HELP_URL, key: "helpCentre", external: true },
    { href: demoUrl, key: "contact", external: true, whatsapp: true },
    { href: "/terms", key: "terms" },
    { href: "/privacy", key: "privacy" },
  ];

  const socialLinks: {
    href: string;
    icon: typeof MessageCircle;
    labelKey: string;
    whatsapp?: boolean;
  }[] = [
    {
      href: demoUrl,
      icon: MessageCircle,
      labelKey: "whatsapp",
      whatsapp: true,
    },
    {
      href: INSTAGRAM_URL,
      icon: Instagram,
      labelKey: "instagram",
    },
  ];

  return (
    <section className="relative px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-4 sm:px-6 lg:px-8">
      <footer className="relative mx-auto max-w-6xl">
        <div
          className="pointer-events-none absolute -top-8 left-1/2 h-48 w-[min(100%,36rem)] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(197,160,89,0.12),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(197,160,89,0.08),transparent_70%)]"
          aria-hidden
        />
        <p
          className="footer-watermark absolute start-1/2 top-6 -translate-x-1/2 text-center rtl:translate-x-1/2"
          aria-hidden
        >
          Wa-Agents
        </p>

        <div
          className={cn(
            "relative overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-[0_1px_2px_rgba(27,77,62,0.04),0_12px_40px_rgba(27,77,62,0.06)]",
            "dark:border-white/10 dark:bg-card/90 dark:shadow-[0_12px_40px_rgba(0,0,0,0.35)]",
          )}
        >
          <div className="px-6 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-4">
                <BrandLogo asLink size="lg" />
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {t(
                    "tagline",
                    "The AI WhatsApp sales agent for businesses. Automate replies, qualify leads, and book customers on WhatsApp, Instagram, and Messenger.",
                  )}
                </p>
                <div className="mt-5 flex items-center gap-2">
                  {socialLinks.map(({ href, icon: Icon, labelKey, whatsapp }) => (
                    <a
                      key={labelKey}
                      href={href}
                      aria-label={t(`social.${labelKey}`, labelKey)}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground dark:bg-background/40"
                      {...(whatsapp
                        ? { rel: WHATSAPP_LINK_REL, suppressHydrationWarning: true }
                        : { target: "_blank", rel: "noopener noreferrer" })}
                    >
                      <Icon className="h-4 w-4" aria-hidden />
                    </a>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-2 lg:col-start-6">
                <FooterColumn
                  title={t("product", "Product")}
                  links={productLinks}
                />
              </div>

              <div className="lg:col-span-2">
                <FooterColumn
                  title={t("forBusiness", "For Businesses")}
                  links={businessLinks}
                />
              </div>

              <div className="lg:col-span-2">
                <FooterColumn
                  title={t("company", "Company")}
                  links={companyLinks}
                />
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs leading-relaxed text-muted-foreground">
                © {year} Wa-Agents. {t("productOf", "Product of")}{" "}
                <a
                  href={DBS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-foreground/80 transition-colors hover:text-foreground"
                >
                  DBS.om
                </a>
              </p>
              <p className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                <span
                  className="h-2 w-2 rounded-full bg-[#25D366]"
                  aria-hidden
                />
                {t("operational", "All systems operational")}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
