"use client";

import { motion } from "framer-motion";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { useTranslation } from "@/hooks/useTranslation";
import { fadeUp } from "@/lib/motion/presets";

type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export function FAQ() {
  const { t } = useTranslation("faq");

  const items: FaqItem[] = [
    {
      id: "setup",
      question: t("setup.q", "How long does setup take?"),
      answer: t(
        "setup.a",
        "Most businesses go live within 24 hours. Your WhatsApp Business number gets connected, FAQs are imported, and booking rules are configured. Everything is reviewed before AI replies go live.",
      ),
    },
    {
      id: "whatsapp",
      question: t(
        "whatsapp.q",
        "Does it work with my existing WhatsApp Business account?",
      ),
      answer: t(
        "whatsapp.a",
        "Yes. Wa-Agents works with WhatsApp Business and the WhatsApp Business API. Your customers keep messaging the same number — they just get faster, smarter replies.",
      ),
    },
    {
      id: "arabic",
      question: t("arabic.q", "Does Wa-Agents support Arabic?"),
      answer: t(
        "arabic.a",
        "Absolutely. Wa-Agents handles Arabic and English in the same conversation, with natural tone and local phrasing. You can set preferred language per branch or let the AI detect automatically.",
      ),
    },
    {
      id: "handoff",
      question: t(
        "handoff.q",
        "What happens when the AI can't answer a customer?",
      ),
      answer: t(
        "handoff.a",
        "Wa-Agents hands off to your team instantly with full conversation context. Set escalation rules — keywords, booking edge cases, or high-value leads — so nothing falls through the cracks.",
      ),
    },
    {
      id: "pricing",
      question: t("pricing.q", "Can I switch plans or cancel anytime?"),
      answer: t(
        "pricing.a",
        "Yes. Upgrade, downgrade, or cancel monthly plans with no long-term lock-in. Annual plans include a discount — contact support for details.",
      ),
    },
  ];

  return (
    <section id="faq" className="relative bg-background px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />

      <div className="mx-auto max-w-3xl">
        <motion.div {...fadeUp} className="mb-8 text-center md:mb-12">
          <SectionLabel className="mb-3 block">
            {t("label", "FAQ")}
          </SectionLabel>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            {t("title", "Questions before you start")}
          </h2>
          <p className="mt-4 text-sm text-muted-foreground sm:text-base">
            {t(
              "subtitle",
              "Everything you need to know about getting Wa-Agents running on WhatsApp.",
            )}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="rounded-2xl border border-border bg-secondary/20 px-4 sm:px-6"
        >
          <Accordion type="single" collapsible defaultValue="setup">
            {items.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
