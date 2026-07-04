"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

import { IslamicPatternBackground } from "@/components/shared/IslamicPatternBackground";
import { OmaniRialSign } from "@/components/shared/OmaniRialSign";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";
import { useWhatsAppDemoUrl } from "@/hooks/useWhatsAppDemoUrl";
import {
  CUSTOM_WHATSAPP_MESSAGES,
  WHATSAPP_LINK_REL,
} from "@/lib/constants";
import { fadeUp } from "@/lib/motion/presets";
import { pricingTiers, type PricingTierConfig } from "@/lib/pricing/tiers";
import { cn } from "@/lib/utils";

function TierPrice({
  tier,
  t,
}: {
  tier: PricingTierConfig;
  t: (key: string, fallback?: string, values?: Record<string, string | number>) => string;
}) {
  if (tier.priceDisplay === "free") {
    return (
      <>
        <span className="text-3xl font-bold text-gold sm:text-4xl">
          {t("free", "Free")}
        </span>
        <p className="mt-1 text-xs text-muted-foreground">
          {t("trialPeriod", "7-day trial")}
        </p>
      </>
    );
  }

  if (tier.priceDisplay === "custom") {
    return (
      <span className="text-3xl font-bold text-gold sm:text-4xl">
        {t("customPrice", "Custom")}
      </span>
    );
  }

  return (
    <>
      <span
        className="inline-flex items-baseline justify-center gap-2 text-3xl font-bold text-gold sm:text-4xl"
        dir="ltr"
        title={t("currencyLabel", "Omani rial")}
      >
        <OmaniRialSign
          className="h-[0.72em] w-auto translate-y-[0.06em]"
          label={t("currencyLabel", "Omani rial")}
        />
        <span>{tier.price!.toFixed(3)}</span>
      </span>
      <p className="mt-1 text-xs text-muted-foreground">
        /{t("period", "month")}
      </p>
    </>
  );
}

function TierCredits({
  tier,
  t,
}: {
  tier: PricingTierConfig;
  t: (key: string, fallback?: string, values?: Record<string, string | number>) => string;
}) {
  if (tier.credits === null) return null;

  return (
    <p className="mt-2 text-sm text-muted-foreground">
      {t("credits", "{{count}} credits", { count: tier.credits })}
    </p>
  );
}

function TierCta({
  tier,
  t,
  customUrl,
}: {
  tier: PricingTierConfig;
  t: (key: string, fallback?: string, values?: Record<string, string | number>) => string;
  customUrl: string;
}) {
  if (tier.ctaType === "checkout" && tier.checkoutUrl) {
    const isTrial = tier.id === "trial";

    return (
      <Button
        asChild
        variant={tier.popular ? "premium" : isTrial ? "secondary" : "outline"}
        size="lg"
        className="w-full rounded-full"
      >
        <a href={tier.checkoutUrl} target="_blank" rel="noopener noreferrer">
          {isTrial
            ? t("startTrial", "Start free trial")
            : t("buyNow", "Subscribe Now")}
        </a>
      </Button>
    );
  }

  if (tier.ctaType === "whatsapp") {
    const href = customUrl;
    const label = t("contactSales", "Contact sales");

    return (
      <Button
        asChild
        variant={tier.id === "custom" ? "outline" : "secondary"}
        size="lg"
        className="w-full rounded-full"
      >
        <a href={href} rel={WHATSAPP_LINK_REL} suppressHydrationWarning>
          {label}
        </a>
      </Button>
    );
  }

  return (
    <Button asChild variant="outline" size="lg" className="w-full rounded-full">
      <a href={tier.ctaAnchor ?? "#demo"}>{t("startTrial", "Start free trial")}</a>
    </Button>
  );
}

function PricingCard({
  tier,
  t,
  customUrl,
  index,
  compact,
}: {
  tier: PricingTierConfig;
  t: (key: string, fallback?: string, values?: Record<string, string | number>) => string;
  customUrl: string;
  index: number;
  compact?: boolean;
}) {
  const isBookend = tier.id === "trial" || tier.id === "custom";

  return (
    <motion.article
      id={tier.id === "trial" ? "trial" : undefined}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className={cn(
        "relative flex h-full flex-col rounded-2xl border p-5 sm:p-6",
        "lg:min-w-0",
        tier.id === "trial" && "scroll-mt-28",
        tier.popular
          ? "border-gold/60 bg-gradient-to-b from-gold/12 via-secondary/30 to-card/60 shadow-[0_0_60px_-12px_rgba(197,160,89,0.35)] ring-1 ring-gold/20 lg:scale-[1.04] lg:z-10"
          : isBookend
            ? "border-border/70 bg-card/30"
            : "border-border bg-secondary/15",
        compact && "opacity-95",
      )}
    >
      {tier.popular && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap border-gold/40 bg-gold px-3 py-0.5 text-xs font-semibold text-primary-foreground shadow-gold">
          {t("popular", "Most Popular")}
        </Badge>
      )}

      <div className="mb-5 text-center">
        <h3 className="text-lg font-semibold text-foreground">
          {t(`${tier.id}.name`, tier.id.charAt(0).toUpperCase() + tier.id.slice(1))}
        </h3>
        <div className="mt-4">
          <TierPrice tier={tier} t={t} />
        </div>
        <TierCredits tier={tier} t={t} />
      </div>

      <ul className="mb-6 flex-1 space-y-2.5 text-start">
        {tier.features.map((feature, featureIndex) => (
          <li
            key={`${tier.id}-${featureIndex}`}
            className="flex items-start gap-2.5 text-sm leading-snug text-foreground/85"
          >
            <Check
              className={cn(
                "mt-0.5 h-4 w-4 shrink-0",
                tier.popular ? "text-gold" : "text-forest dark:text-emerald-400",
              )}
              aria-hidden
            />
            {t(`${tier.id}.f${featureIndex + 1}`, feature)}
          </li>
        ))}
      </ul>

      <TierCta tier={tier} t={t} customUrl={customUrl} />
    </motion.article>
  );
}

export function Pricing() {
  const { t, locale } = useTranslation("pricing");
  const customUrl = useWhatsAppDemoUrl(CUSTOM_WHATSAPP_MESSAGES[locale]);

  const mainTiers = pricingTiers.filter((tier) =>
    ["starter", "growth", "pro"].includes(tier.id),
  );
  const bookendTiers = pricingTiers.filter((tier) =>
    ["trial", "custom"].includes(tier.id),
  );
  const mobileTiers = [...mainTiers, ...bookendTiers];

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-background px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <IslamicPatternBackground variant="pricing" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1B4D3E22,_transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div {...fadeUp} className="mb-12 text-center md:mb-16">
          <SectionLabel className="mb-3 block">
            {t("label", "Pricing")}
          </SectionLabel>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            {t("title", "Simple plans priced in OMR")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
            {t(
              "subtitle",
              "Start free, scale as your WhatsApp volume grows — cancel anytime.",
            )}
          </p>
        </motion.div>

        {/* Mobile / tablet: vertical stack */}
        <div className="flex flex-col gap-4 lg:hidden">
          {mobileTiers.map((tier, i) => (
            <PricingCard
              key={tier.id}
              tier={tier}
              t={t}
              customUrl={customUrl}
              index={i}
            />
          ))}
        </div>

        {/* Desktop: Starter · Growth · Pro, then Trial · Custom */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-3 gap-6 pb-6">
            {mainTiers.map((tier, i) => (
              <PricingCard
                key={tier.id}
                tier={tier}
                t={t}
                customUrl={customUrl}
                index={i}
              />
            ))}
          </div>
          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-6 lg:mt-16">
            {bookendTiers.map((tier, i) => (
              <PricingCard
                key={tier.id}
                tier={tier}
                t={t}
                customUrl={customUrl}
                index={i + 3}
                compact
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
