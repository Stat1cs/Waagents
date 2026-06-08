"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AlertCircle, CheckCircle2, X } from "lucide-react";

import { useTranslation } from "@/hooks/useTranslation";
import { cn } from "@/lib/utils";

type Item = { text: string };

export function BeforeAfter() {
  const { t } = useTranslation("beforeAfter");
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const before: Item[] = [
    { text: t("before.1", "Staff reply hours later — hot leads go cold") },
    { text: t("before.2", "Arabic & English chats mixed across personal phones") },
    { text: t("before.3", "No-shows because reminders are manual") },
    { text: t("before.4", "Owners can't see what's booked or lost") },
  ];

  const after: Item[] = [
    { text: t("after.1", "AI answers in ~5 seconds, 24/7") },
    { text: t("after.2", "One team inbox — tagged, qualified, bilingual") },
    { text: t("after.3", "Auto WhatsApp reminders & confirmations") },
    { text: t("after.4", "Dashboard: booked, pending, and missed leads") },
  ];

  return (
    <section
      ref={ref}
      id="before-after"
      className="bg-background py-16 text-foreground sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-10 text-center"
        >
          <h2 className="text-2xl font-bold sm:text-3xl">
            {t("title", "Before vs after Wa-Agents")}
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground sm:text-base">
            {t(
              "subtitle",
              "Same WhatsApp number your customers already use — radically better operations.",
            )}
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border border-red-500/25 bg-red-500/5 p-6 dark:border-red-500/20 dark:bg-red-950/20"
          >
            <div className="mb-5 flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/15">
                <X className="h-5 w-5 text-red-600 dark:text-red-400" />
              </span>
              <h3 className="text-lg font-semibold">
                {t("beforeTitle", "Without Wa-Agents")}
              </h3>
            </div>
            <ul className="space-y-4">
              {before.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-600 dark:text-red-400/80" />
                  {item.text}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.18 }}
            className={cn(
              "rounded-2xl border border-gold/30 bg-secondary/40 p-6",
            )}
          >
            <div className="mb-5 flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/15">
                <CheckCircle2 className="h-5 w-5 text-gold" />
              </span>
              <h3 className="text-lg font-semibold">
                {t("afterTitle", "With Wa-Agents")}
              </h3>
            </div>
            <ul className="space-y-4">
              {after.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-foreground/90">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {item.text}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
