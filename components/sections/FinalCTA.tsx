"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

import { IslamicPatternBackground } from "@/components/shared/IslamicPatternBackground";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { fadeUp } from "@/lib/motion/presets";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";
import { WHATSAPP_LINK_REL } from "@/lib/constants";
import { useWhatsAppDemoUrl } from "@/hooks/useWhatsAppDemoUrl";

export function FinalCTA() {
  const { t } = useTranslation("finalCta");
  const tryLiveUrl = useWhatsAppDemoUrl();

  return (
    <section className="relative overflow-hidden bg-background px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <IslamicPatternBackground variant="cta" />

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div {...fadeUp}>
          <SectionLabel className="mb-4 block">
            {t("label", "Ready to start?")}
          </SectionLabel>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {t("title", "Turn every WhatsApp message into a booked appointment")}
          </h2>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild variant="premium" size="lg" className="h-12 rounded-full px-8 text-base">
              <a href={tryLiveUrl} rel={WHATSAPP_LINK_REL} suppressHydrationWarning>
                <MessageCircle className="h-5 w-5" />
                {t("cta", "Try it out live")}
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
