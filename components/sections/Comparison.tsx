"use client";

import { motion } from "framer-motion";

import { ComparisonTable } from "@/components/shared/ComparisonTable";
import { useTranslation } from "@/hooks/useTranslation";

export function Comparison() {
  const { t } = useTranslation("comparison");

  return (
    <section id="comparison" className="bg-background px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center md:mb-14"
        >
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

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
        >
          <ComparisonTable />
        </motion.div>
      </div>
    </section>
  );
}
