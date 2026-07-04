"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Play } from "lucide-react";

import { ChannelPills } from "@/components/shared/ChannelPills";
import { HighlightText } from "@/components/shared/HighlightText";
import { InboxMockup } from "@/components/shared/InboxMockup";
import { IslamicPatternBackground } from "@/components/shared/IslamicPatternBackground";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";
import { useWhatsAppDemoUrl } from "@/hooks/useWhatsAppDemoUrl";
import { WHATSAPP_LINK_REL } from "@/lib/constants";
import {
  heroMockupReveal,
  heroStaggerContainer,
  heroStaggerItem,
} from "@/lib/motion/presets";

export function Hero() {
  const { t } = useTranslation("hero");
  const tryLiveUrl = useWhatsAppDemoUrl();

  const headline = t(
    "headline",
    "Turn WhatsApp Into Your Best Sales Employee",
  );
  const highlight = t("headlineHighlight", "Best Sales Employee");

  return (
    <section
      id="hero"
      className="hero-grain hero-vignette relative flex min-h-[85svh] flex-col overflow-hidden bg-background dark:bg-[#121212] pt-[calc(5.5rem+env(safe-area-inset-top))] text-foreground"
    >
      <IslamicPatternBackground variant="hero" />

      <div className="relative z-[2] mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-4 pb-6 pt-8 text-center sm:px-6 sm:pb-10 sm:pt-12">
        <motion.div
          variants={heroStaggerContainer}
          initial="hidden"
          animate="show"
          className="space-y-7"
        >
          <motion.p
            variants={heroStaggerItem}
            className="eyebrow-shimmer inline-flex items-center rounded-full border border-gold/25 bg-gold/8 px-4 py-1.5 text-xs font-medium text-gold"
          >
            {t("eyebrow", "AI inbox for local businesses")}
          </motion.p>

          <motion.h1
            variants={heroStaggerItem}
            className="mx-auto max-w-4xl text-[clamp(2.5rem,6vw,4.75rem)] font-bold leading-[1.08] tracking-tight"
          >
            <HighlightText highlight={highlight}>{headline}</HighlightText>
          </motion.h1>

          <motion.p
            variants={heroStaggerItem}
            className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl"
          >
            {t(
              "subheadline",
              "Wa-Agents helps businesses automate replies, qualify leads, and book customers using AI.",
            )}
          </motion.p>

          <motion.div
            variants={heroStaggerItem}
            className="flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button
              asChild
              variant="premium"
              size="lg"
              className="h-12 min-w-[220px] gap-2 rounded-full px-8 text-base"
            >
              <a href={tryLiveUrl} rel={WHATSAPP_LINK_REL} suppressHydrationWarning>
                <MessageCircle className="h-4 w-4" />
                {t("ctaPrimary", "Try it out live")}
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 min-w-[220px] gap-2 rounded-full border-border/80 bg-background/40 px-8 text-base backdrop-blur-sm"
            >
              <a href="#demo">
                <Play className="h-4 w-4" />
                {t("ctaSecondary", "Watch it work")}
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </motion.div>

          <motion.div variants={heroStaggerItem}>
            <ChannelPills />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        variants={heroMockupReveal}
        initial="hidden"
        animate="show"
        className="relative z-[2] mx-auto w-full max-w-6xl flex-shrink-0 px-4 pb-10 sm:px-6 lg:max-w-7xl lg:pb-16"
      >
        <div
          className="pointer-events-none absolute inset-x-4 top-1/2 h-2/3 -translate-y-1/3 rounded-full bg-gold/15 blur-[80px] dark:bg-gold/8"
          aria-hidden
        />
        <InboxMockup className="relative shadow-[0_32px_80px_-16px_rgba(27,77,62,0.18),0_0_60px_-12px_rgba(197,160,89,0.15)] dark:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.65),0_0_80px_-16px_rgba(197,160,89,0.12)]" />
      </motion.div>

      <div
        className="relative z-[2] flex justify-center pb-6"
        aria-hidden
      >
        <div className="scroll-line" />
      </div>
    </section>
  );
}
