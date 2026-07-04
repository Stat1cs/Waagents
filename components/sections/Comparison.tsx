"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

import { ComparisonTable } from "@/components/shared/ComparisonTable";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";
import { useWhatsAppDemoUrl } from "@/hooks/useWhatsAppDemoUrl";
import { WHATSAPP_LINK_REL } from "@/lib/constants";
import { fadeUp, fadeUpLarge } from "@/lib/motion/presets";

export function Comparison() {
  const { t } = useTranslation("comparison");
  const tryLiveUrl = useWhatsAppDemoUrl();

  return (
    <section id="comparison" className="bg-background px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div {...fadeUp} className="mb-10 text-center md:mb-14">
          <SectionLabel className="mb-3 block">
            {t("section.label", "Why Wa-Agents")}
          </SectionLabel>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            {t("section.title", "AI Sales Agent vs Regular Chatbot")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
            {t(
              "section.subtitle",
              "Your customers pay for results, not features. Here's why businesses keep Wa-Agents.",
            )}
          </p>
        </motion.div>

        <motion.div {...fadeUpLarge} transition={{ delay: 0.08 }}>
          <ComparisonTable />
        </motion.div>

        <motion.div
          {...fadeUp}
          className="mt-10 flex justify-center"
        >
          <Button asChild variant="premium" size="lg" className="gap-2 rounded-full">
            <a href={tryLiveUrl} rel={WHATSAPP_LINK_REL} suppressHydrationWarning>
              <MessageCircle className="h-4 w-4" />
              {t("section.cta", "Try it out live")}
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
