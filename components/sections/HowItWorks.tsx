"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Bot,
  Link2,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { useTranslation } from "@/hooks/useTranslation";
import { WHATSAPP_CHAT } from "@/lib/constants";
import { cn } from "@/lib/utils";

type Step = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  preview: ReactNode;
};

function ConnectPreview() {
  const { t } = useTranslation("howItWorks");
  return (
    <div className="mt-4 rounded-xl border border-border bg-background/60 p-3">
      <div className="flex items-center gap-2 rounded-lg bg-secondary/50 px-3 py-2">
        <MessageCircle className="h-4 w-4 text-[#25D366]" />
        <span className="text-[10px] text-foreground">+968 9X XXX XXXX</span>
        <Badge variant="success" className="ml-auto text-[9px]">
          {t("preview.connected", "Connected")}
        </Badge>
      </div>
    </div>
  );
}

function TrainPreview() {
  const { t } = useTranslation("howItWorks");
  const tags = [
    t("preview.tagCleaning", "Cleaning"),
    t("preview.tagWhitening", "Whitening"),
    t("preview.tagAlMouj", "Al Mouj"),
    t("preview.tagAlKhuwair", "Al Khuwair"),
  ];
  return (
    <div className="mt-4 space-y-2 rounded-xl border border-border bg-background/60 p-3">
      <p className="text-[10px] text-muted-foreground">
        {t("preview.trainLabel", "Services · Hours · Branches")}
      </p>
      <div className="flex flex-wrap gap-1">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded bg-gold/15 px-2 py-0.5 text-[9px] text-gold"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function ReplyPreview() {
  const { t } = useTranslation("howItWorks");
  return (
    <div className="mt-4 space-y-2 rounded-xl border border-border bg-background/60 p-3">
      <div
        className={cn(
          "ml-auto max-w-[90%] rounded-lg px-2 py-1.5 text-[10px]",
          WHATSAPP_CHAT.bubbleOutgoing,
        )}
      >
        {t("preview.reply", "Yes! Tomorrow 2 PM or 4:30 PM?")}
      </div>
      <p className="flex items-center gap-1 text-[9px] text-gold">
        <Sparkles className="h-2.5 w-2.5" />
        {t("preview.aiTiming", "AI · 2s")}
      </p>
    </div>
  );
}

function BookPreview() {
  const { t } = useTranslation("howItWorks");
  return (
    <div className="mt-4 rounded-xl border border-border bg-background/60 p-3">
      <p className="text-[10px] font-medium text-foreground">
        {t("preview.booked", "📅 Thu 2:00 PM booked")}
      </p>
      <p className="mt-1 text-[9px] text-muted-foreground">
        {t("preview.synced", "Synced to calendar · Reminder scheduled")}
      </p>
    </div>
  );
}

export function HowItWorks() {
  const { t } = useTranslation("howItWorks");
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const steps: Step[] = [
    {
      id: "connect",
      icon: Link2,
      title: t("step1.title", "Connect WhatsApp"),
      description: t(
        "step1.desc",
        "Link your WhatsApp Business number. Customers keep messaging the same number.",
      ),
      preview: <ConnectPreview />,
    },
    {
      id: "train",
      icon: Bot,
      title: t("step2.title", "Train on your business"),
      description: t(
        "step2.desc",
        "Upload services, prices, branches, and FAQs. AI learns your tone in AR & EN.",
      ),
      preview: <TrainPreview />,
    },
    {
      id: "reply",
      icon: Sparkles,
      title: t("step3.title", "AI replies instantly"),
      description: t(
        "step3.desc",
        "Wa-Agents qualifies leads, answers questions, and routes urgent chats to your team.",
      ),
      preview: <ReplyPreview />,
    },
    {
      id: "book",
      icon: MessageCircle,
      title: t("step4.title", "Book & remind"),
      description: t(
        "step4.desc",
        "Appointments land on your calendar with WhatsApp confirmations and day-before nudges.",
      ),
      preview: <BookPreview />,
    },
  ];

  return (
    <section
      ref={ref}
      id="how-it-works"
      className="bg-secondary/10 py-14 text-foreground sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-12 text-center"
        >
          <SectionLabel className="mb-3 block">
            {t("label", "How it works")}
          </SectionLabel>
          <h2 className="text-2xl font-bold sm:text-3xl">
            {t("title", "How it works")}
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground sm:text-base">
            {t("subtitle", "Live in 24 hours — no new app for your customers.")}
          </p>
        </motion.div>

        <ol className="relative grid gap-8 md:grid-cols-2 md:items-stretch md:gap-10 lg:grid-cols-4">
          <div
            className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-gold/50 via-gold/20 to-transparent md:left-1/2 md:block lg:hidden"
            aria-hidden
          />
          <div
            className="absolute left-5 top-0 bottom-0 w-px bg-gold/30 md:hidden"
            aria-hidden
          />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.li
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  "relative flex h-full flex-col pl-12 md:pl-0",
                  "md:text-center lg:text-left",
                )}
              >
                <span
                  className={cn(
                    "absolute left-0 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-gold bg-background text-sm font-bold text-gold md:static md:mx-auto md:mb-4 lg:mx-0",
                  )}
                >
                  {i + 1}
                </span>

                <div className="flex h-full flex-col rounded-2xl border border-border bg-background/60 p-5">
                  <div className="mb-3 flex items-center gap-2 md:justify-center lg:justify-start">
                    <Icon className="h-5 w-5 shrink-0 text-gold" />
                    <h3 className="font-semibold">{step.title}</h3>
                  </div>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                  <div className="mt-auto min-h-[7.25rem]">{step.preview}</div>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
