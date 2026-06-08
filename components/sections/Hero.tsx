"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

import { ChannelPills } from "@/components/shared/ChannelPills";
import { HighlightText } from "@/components/shared/HighlightText";
import { InboxMockup } from "@/components/shared/InboxMockup";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";

export function Hero() {
  const { t } = useTranslation("hero");

  const headline = t(
    "headline",
    "Turn WhatsApp Into Your Best Sales Employee",
  );
  const highlight = t("headlineHighlight", "Best Sales Employee");

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-background pt-[calc(5.5rem+env(safe-area-inset-top))] text-foreground"
    >
      <div className="relative mx-auto max-w-4xl px-4 pb-8 pt-6 text-center sm:px-6 sm:pb-12 sm:pt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <p className="inline-flex items-center rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-medium text-gold">
            {t("eyebrow", "AI inbox for local businesses")}
          </p>

          <h1 className="mx-auto max-w-3xl text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            <HighlightText highlight={highlight}>{headline}</HighlightText>
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t(
              "subheadline",
              "Wa-Agents helps businesses automate replies, qualify leads, and book customers using AI.",
            )}
          </p>

          <div className="flex justify-center">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-11 min-w-[200px] gap-2 rounded-full px-6"
            >
              <a href="#demo">
                <Play className="h-4 w-4" />
                {t("ctaSecondary", "See how it works")}
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <ChannelPills />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="relative mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:pb-24"
      >
        <div
          className="pointer-events-none absolute inset-x-8 top-1/2 h-1/2 -translate-y-1/4 rounded-full bg-gold/10 blur-3xl dark:bg-gold/5"
          aria-hidden
        />
        <InboxMockup className="relative shadow-2xl shadow-black/10 dark:shadow-black/40" />
      </motion.div>
    </section>
  );
}
