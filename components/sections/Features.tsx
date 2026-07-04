"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  CalendarCheck,
  Globe,
  Instagram,
  MessageCircle,
  MessagesSquare,
  Sparkles,
  Target,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { SectionLabel } from "@/components/shared/SectionLabel";
import { useTranslation } from "@/hooks/useTranslation";
import { WHATSAPP_CHAT } from "@/lib/constants";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion/presets";
import { cn } from "@/lib/utils";

type Feature = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  span: string;
  mockup?: ReactNode;
};

function WhatsAppMockup() {
  const { t } = useTranslation("features");
  return (
    <div
      className="mt-6 space-y-3 rounded-xl border border-border/60 p-4"
      style={{ backgroundColor: WHATSAPP_CHAT.chatBg }}
    >
      <div className="flex justify-start">
        <div
          className={cn(
            "max-w-[85%] rounded-lg px-3 py-2 text-xs",
            WHATSAPP_CHAT.bubbleIncoming,
          )}
        >
          {t("mockups.whatsappIn", "Hi, do you have teeth cleaning slots tomorrow?")}
        </div>
      </div>
      <div className="flex justify-end">
        <div
          className={cn(
            "max-w-[90%] rounded-lg px-3 py-2 text-xs",
            WHATSAPP_CHAT.bubbleOutgoing,
          )}
        >
          {t(
            "mockups.whatsappOut",
            "Yes! Tomorrow at 10 AM or 4 PM — which works for you?",
          )}
        </div>
      </div>
      <div className="flex items-center gap-1.5 text-[11px] text-gold">
        <Sparkles className="h-3 w-3" />
        {t("mockups.aiReplied", "AI replied in 2s")}
      </div>
    </div>
  );
}

function BilingualMockup() {
  const { t } = useTranslation("features");
  return (
    <div
      className="mt-6 space-y-3 rounded-xl border border-border/60 p-4"
      style={{ backgroundColor: WHATSAPP_CHAT.chatBg }}
    >
      <div className="flex justify-end">
        <div
          className={cn(
            "max-w-[90%] rounded-lg px-3 py-2 text-xs leading-relaxed",
            WHATSAPP_CHAT.bubbleOutgoing,
          )}
          dir="rtl"
        >
          {t(
            "mockups.bilingualOut",
            "أهلاً! نقدر نحجز لك موعد اليوم. تفضل العيادة Main أو Al Mouj؟",
          )}
        </div>
      </div>
      <div className="flex justify-start">
        <div
          className={cn(
            "max-w-[85%] rounded-lg px-3 py-2 text-xs",
            WHATSAPP_CHAT.bubbleIncoming,
          )}
        >
          {t("mockups.bilingualIn", "Al Mouj branch please")}
        </div>
      </div>
      <div className="flex gap-1.5">
        <span className="rounded bg-gold/20 px-2 py-0.5 text-[10px] text-gold">AR</span>
        <span className="rounded bg-white/10 px-2 py-0.5 text-[10px] text-muted-foreground">EN</span>
      </div>
    </div>
  );
}

function InstagramMockup() {
  const { t } = useTranslation("features");
  return (
    <div className="mt-6 overflow-hidden rounded-xl border border-purple-500/20 bg-gradient-to-br from-[#833AB4]/25 via-[#FD1D1D]/15 to-[#FCAF45]/15 p-4 shadow-inner">
      <div className="flex items-center gap-2 border-b border-white/10 pb-2.5">
        <div className="rounded-full bg-gradient-to-tr from-[#FCAF45] via-[#FD1D1D] to-[#833AB4] p-[2px]">
          <div className="h-6 w-6 rounded-full bg-[#1a1a2e]" />
        </div>
        <div className="min-w-0 flex-1">
          <span className="block truncate text-xs font-semibold text-foreground/90">
            {t("mockups.instagramHandle", "your_clinic")}
          </span>
          <span className="text-[10px] text-muted-foreground">
            {t("mockups.instagramStatus", "Instagram · Active now")}
          </span>
        </div>
      </div>
      <div className="mt-3 space-y-2">
        <div className="max-w-[88%] rounded-2xl rounded-bl-sm bg-[#262626] px-3 py-2 text-[11px] text-[#efefef]">
          {t("mockups.instagramIn", "Price for laser session?")}
        </div>
        <div className="ms-auto max-w-[88%] rounded-2xl rounded-br-sm bg-gradient-to-r from-[#833AB4]/40 to-[#FD1D1D]/30 px-3 py-2 text-[11px] font-medium text-gold">
          {t("mockups.instagramOut", "OMR 450 — book via DM ✓")}
        </div>
      </div>
    </div>
  );
}

function BookingMockup() {
  const { t } = useTranslation("features");
  return (
    <div className="mt-6 rounded-xl border border-gold/20 bg-background/60 p-4">
      <div className="flex items-center justify-between text-xs">
        <span className="text-muted-foreground">
          {t("mockups.bookingDate", "Thu, 24 May")}
        </span>
        <CalendarCheck className="h-4 w-4 text-gold" />
      </div>
      <div className="mt-3 grid grid-cols-3 gap-1.5">
        {["10:00", "11:30", "14:00"].map((slot, i) => (
          <div
            key={slot}
            className={cn(
              "rounded-md py-1.5 text-center text-[11px]",
              i === 1
                ? "bg-gold font-semibold text-background"
                : "bg-border/50 text-muted-foreground",
            )}
          >
            {slot}
          </div>
        ))}
      </div>
      <p className="mt-2.5 text-[11px] text-emerald-400">
        {t("mockups.bookingConfirmed", "✓ Confirmed — reminder sent")}
      </p>
    </div>
  );
}

function LeadMockup() {
  const { t } = useTranslation("features");
  const fields = [
    {
      label: t("mockups.leadService", "Service"),
      value: t("mockups.leadServiceVal", "Dental implant"),
    },
    {
      label: t("mockups.leadBudget", "Budget"),
      value: t("mockups.leadBudgetVal", "OMR 8–12K"),
    },
    {
      label: t("mockups.leadTimeline", "Timeline"),
      value: t("mockups.leadTimelineVal", "This month"),
    },
  ];

  return (
    <div className="mt-6 space-y-2 rounded-xl border border-border/60 bg-background/60 p-4">
      {fields.map(({ label, value }) => (
        <div
          key={label}
          className="flex items-center justify-between gap-2 rounded-lg bg-secondary/30 px-2.5 py-1.5 text-[10px]"
        >
          <span className="text-muted-foreground">{label}</span>
          <span className="font-medium text-foreground">{value}</span>
        </div>
      ))}
      <div className="flex items-center justify-between rounded-lg border border-gold/25 bg-gold/10 px-2.5 py-1.5 text-[10px]">
        <span className="text-muted-foreground">
          {t("mockups.leadScore", "Score")}
        </span>
        <span className="font-semibold text-gold">
          {t("mockups.leadScoreVal", "Hot lead 🔥")}
        </span>
      </div>
    </div>
  );
}

function CampaignMockup() {
  const { t } = useTranslation("features");
  const stats = [
    { label: t("mockups.campaignSent", "Sent"), value: "248" },
    { label: t("mockups.campaignOpened", "Opened"), value: "91%" },
    { label: t("mockups.campaignReplied", "Replied"), value: "34" },
  ];

  return (
    <div className="mt-6 rounded-xl border border-border/60 bg-background/60 p-4">
      <p className="text-xs font-semibold text-foreground">
        {t("mockups.campaignTitle", "Ramadan follow-up")}
      </p>
      <div className="mt-3 grid grid-cols-3 gap-1.5">
        {stats.map(({ label, value }) => (
          <div
            key={label}
            className="rounded-md bg-secondary/40 px-1.5 py-2 text-center"
          >
            <p className="text-[11px] font-bold text-gold">{value}</p>
            <p className="text-[9px] text-muted-foreground">{label}</p>
          </div>
        ))}
      </div>
      <p className="mt-2.5 text-[10px] text-emerald-400">
        ✓ {t("mockups.aiReplied", "AI replied in 2s")}
      </p>
    </div>
  );
}

function WebsiteMockup() {
  const { t } = useTranslation("features");
  return (
    <div className="mt-6 overflow-hidden rounded-xl border border-border/60 bg-background/60">
      <div className="flex items-center gap-1.5 border-b border-border/60 bg-secondary/20 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-red-400/80" aria-hidden />
        <span className="h-2 w-2 rounded-full bg-amber-400/80" aria-hidden />
        <span className="h-2 w-2 rounded-full bg-emerald-400/80" aria-hidden />
        <span className="ms-1 truncate text-[10px] text-muted-foreground">
          {t("mockups.websiteDomain", "yourclinic.om")}
        </span>
      </div>
      <div className="space-y-2 p-3">
        <div className="rounded-lg bg-secondary/30 px-2.5 py-2 text-[10px] text-muted-foreground">
          {t(
            "mockups.websitePrompt",
            "Ask about services, pricing, or book a visit",
          )}
        </div>
        <div className="inline-flex rounded-full bg-gold/15 px-2.5 py-1 text-[10px] font-medium text-gold">
          {t("mockups.websiteChat", "Live chat")}
        </div>
      </div>
    </div>
  );
}

const container = staggerContainer;
const item = staggerItem;

export function Features() {
  const { t } = useTranslation("features");

  const features: Feature[] = [
    {
      id: "whatsapp",
      icon: MessagesSquare,
      title: t("whatsapp.title", "WhatsApp AI replies"),
      description: t(
        "whatsapp.desc",
        "Instant, on-brand responses on the channel your customers already use.",
      ),
      span: "md:col-span-2",
      mockup: <WhatsAppMockup />,
    },
    {
      id: "bilingual",
      icon: Globe,
      title: t("bilingual.title", "Arabic + English"),
      description: t(
        "bilingual.desc",
        "Detects language per message — natural Arabic tone, not stiff translation.",
      ),
      span: "md:col-span-1",
      mockup: <BilingualMockup />,
    },
    {
      id: "instagram",
      icon: Instagram,
      title: t("instagram.title", "Instagram DM"),
      description: t(
        "instagram.desc",
        "Capture DMs, answer FAQs, and route hot leads without missing a message.",
      ),
      span: "md:col-span-1",
      mockup: <InstagramMockup />,
    },
    {
      id: "booking",
      icon: CalendarCheck,
      title: t("booking.title", "AI appointment booking"),
      description: t(
        "booking.desc",
        "Checks availability, confirms slots, and sends reminders automatically.",
      ),
      span: "md:col-span-2",
      mockup: <BookingMockup />,
    },
    {
      id: "leads",
      icon: Target,
      title: t("leads.title", "Lead qualification"),
      description: t(
        "leads.desc",
        "Asks the right questions and scores intent before your team steps in.",
      ),
      span: "md:col-span-1",
      mockup: <LeadMockup />,
    },
    {
      id: "campaigns",
      icon: Sparkles,
      title: t("campaigns.title", "Campaign automation"),
      description: t(
        "campaigns.desc",
        "Re-engage lists, follow up after promos, and track reply rates.",
      ),
      span: "md:col-span-1",
      mockup: <CampaignMockup />,
    },
    {
      id: "website",
      icon: MessageCircle,
      title: t("website.title", "Website chat"),
      description: t(
        "website.desc",
        "Embed a chat widget that hands off to WhatsApp when they're ready.",
      ),
      span: "md:col-span-1",
      mockup: <WebsiteMockup />,
    },
  ];

  return (
    <section id="features" className="relative bg-background px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="relative mx-auto max-w-6xl">
        <motion.div {...fadeUp} className="mb-12 text-center md:mb-16">
          <SectionLabel className="mb-3 block">
            {t("label", "Platform")}
          </SectionLabel>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            {t("title", "Everything you need to convert chats into bookings")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
            {t(
              "subtitle",
              "One AI inbox for WhatsApp, Instagram DMs, and your website — built for local service businesses.",
            )}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6 md:items-stretch"
        >
          {features.map((feature) => (
            <motion.article
              key={feature.id}
              variants={item}
              className={cn(
                "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/40 p-6 transition-[border-color,background-color,box-shadow] duration-200",
                "hover:border-gold/35 hover:bg-card/70 hover:shadow-lg hover:shadow-gold/5",
                feature.span,
              )}
            >
              <div className="relative flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/12 text-gold transition-colors group-hover:bg-gold/18">
                  <feature.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-semibold text-foreground sm:text-lg">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>

              <div className="mt-auto">{feature.mockup}</div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
