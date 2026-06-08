"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

import { IslamicPatternBackground } from "@/components/shared/IslamicPatternBackground";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";
import { pricingTiers } from "@/lib/pricing/tiers";
import { cn } from "@/lib/utils";

export function Pricing() {
  const { t } = useTranslation("pricing");

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-background px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <IslamicPatternBackground variant="pricing" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1B4D3E33,_transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center md:mb-14"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            {t("label", "Pricing")}
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            {t("title", "Simple plans priced in OMR")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
            {t(
              "subtitle",
              "No hidden fees. Scale as your WhatsApp volume grows — cancel anytime.",
            )}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:items-stretch lg:gap-6">
          {pricingTiers.map((tier, i) => (
            <motion.article
              key={tier.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={cn(
                "relative flex h-full w-full min-w-0 flex-col rounded-2xl border p-5 sm:p-6",
                tier.popular
                  ? "border-gold/50 bg-secondary/40 shadow-[0_0_40px_-12px_#C5A05940]"
                  : "border-border bg-secondary/20",
                tier.orderClass,
              )}
            >
              {tier.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  {t("popular", "Most Popular")}
                </Badge>
              )}

              <div className="mb-5 text-center">
                <h3 className="text-lg font-semibold text-foreground">
                  {t(`${tier.id}.name`, tier.id.charAt(0).toUpperCase() + tier.id.slice(1))}
                </h3>
                <div className="mt-4 flex items-baseline justify-center gap-1">
                  <span className="text-3xl font-bold text-gold sm:text-4xl">
                    {tier.price}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {t("currency", "OMR")}
                  </span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  /{t("period", "month")}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {t("credits", "{{count}} credits", { count: tier.credits })}
                </p>
              </div>

              <ul className="mb-6 flex-1 space-y-2 text-start">
                {tier.features.map((feature, featureIndex) => (
                  <li
                    key={`${tier.id}-${featureIndex}`}
                    className="flex items-start gap-2.5 text-sm text-foreground/80"
                  >
                    <Check
                      className={cn(
                        "mt-0.5 h-4 w-4 shrink-0",
                        tier.popular ? "text-gold" : "text-[#1B4D3E] dark:text-emerald-400",
                      )}
                      aria-hidden
                    />
                    {t(
                      `${tier.id}.f${featureIndex + 1}`,
                      feature,
                    )}
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant={tier.popular ? "default" : "outline"}
                size="lg"
                className="w-full"
              >
                <a
                  href={tier.checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("subscribe", "Subscribe")}
                </a>
              </Button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
