"use client";

import { motion } from "framer-motion";
import { Clock, Globe2, MessageCircle, ShieldCheck } from "lucide-react";

import { IslamicPatternBackground } from "@/components/shared/IslamicPatternBackground";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";
import { getWhatsAppDemoUrl } from "@/lib/constants";

const trustBadges = [
  { icon: Clock, key: "setup" },
  { icon: Globe2, key: "languages" },
  { icon: ShieldCheck, key: "contract" },
] as const;

export function FinalCTA() {
  const { t } = useTranslation("finalCta");

  return (
    <section className="relative overflow-hidden bg-background px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <IslamicPatternBackground variant="cta" />

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            {t("label", "Ready to start?")}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {t("title", "Turn every WhatsApp message into a booked appointment")}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
            {t(
              "subtitle",
              "Join clinics, salons, and service brands already using Wa-Agents to reply faster and book more.",
            )}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 px-8 text-base">
              <a
                href={getWhatsAppDemoUrl(
                  "Hi, I'd like to book a Wa-Agents demo on WhatsApp.",
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5" />
                {t("cta", "Book Demo on WhatsApp")}
              </a>
            </Button>
          </div>

          <ul className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
            {trustBadges.map(({ icon: Icon, key }, i) => (
              <motion.li
                key={key}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.06 }}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <Icon className="h-4 w-4" aria-hidden />
                </span>
                {t(key, key === "setup" ? "24-hour setup" : key === "languages" ? "Arabic + English" : "No long-term contract")}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
