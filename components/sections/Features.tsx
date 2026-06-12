"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  CalendarCheck,
  Globe,
  Instagram,
  MessageCircle,
  MessagesSquare,
  Plug,
  Sparkles,
  Target,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { useTranslation } from "@/hooks/useTranslation";
import { WHATSAPP_CHAT } from "@/lib/constants";
import { cn } from "@/lib/utils";

type Feature = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  span: string;
  mockup: ReactNode;
};

function WhatsAppMockup() {
  const { t } = useTranslation("features");
  return (
    <div
      className="mt-4 space-y-2.5 rounded-xl border border-border/60 p-3"
      style={{ backgroundColor: WHATSAPP_CHAT.chatBg }}
    >
      <div className="flex justify-start">
        <div
          className={cn(
            "max-w-[85%] rounded-lg px-2.5 py-1.5 text-[10px]",
            WHATSAPP_CHAT.bubbleIncoming,
          )}
        >
          {t("mockups.whatsappIn", "Hi, do you have teeth cleaning slots tomorrow?")}
        </div>
      </div>
      <div className="flex justify-end">
        <div
          className={cn(
            "max-w-[90%] rounded-lg px-2.5 py-1.5 text-[10px]",
            WHATSAPP_CHAT.bubbleOutgoing,
          )}
        >
          {t(
            "mockups.whatsappOut",
            "Yes! Tomorrow at 10 AM or 4 PM — which works for you?",
          )}
        </div>
      </div>
      <div className="flex items-center gap-1 text-[9px] text-gold">
        <Sparkles className="h-2.5 w-2.5" />
        {t("mockups.aiReplied", "AI replied in 2s")}
      </div>
    </div>
  );
}

function BilingualMockup() {
  const { t } = useTranslation("features");
  return (
    <div
      className="mt-4 space-y-2.5 rounded-xl border border-border/60 p-3"
      style={{ backgroundColor: WHATSAPP_CHAT.chatBg }}
    >
      <div className="flex justify-end">
        <div
          className={cn(
            "max-w-[90%] rounded-lg px-2.5 py-1.5 text-[10px] leading-relaxed",
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
            "max-w-[85%] rounded-lg px-2.5 py-1.5 text-[10px]",
            WHATSAPP_CHAT.bubbleIncoming,
          )}
        >
          {t("mockups.bilingualIn", "Al Mouj branch please")}
        </div>
      </div>
      <div className="flex gap-1">
        <span className="rounded bg-gold/20 px-1.5 py-0.5 text-[9px] text-gold">AR</span>
        <span className="rounded bg-white/10 px-1.5 py-0.5 text-[9px] text-muted-foreground">EN</span>
      </div>
    </div>
  );
}

function InstagramMockup() {
  const { t } = useTranslation("features");
  return (
    <div className="mt-4 rounded-xl bg-gradient-to-br from-purple-600/20 via-pink-500/10 to-orange-400/10 p-3">
      <div className="flex items-center gap-2 border-b border-border pb-2">
        <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600" />
        <span className="text-[10px] font-medium text-muted-foreground">
          {t("mockups.instagramHandle", "your_clinic")}
        </span>
      </div>
      <div className="mt-2 space-y-1.5">
        <div className="rounded-lg bg-white/5 px-2 py-1 text-[9px] text-muted-foreground">
          {t("mockups.instagramIn", "Price for laser session?")}
        </div>
        <div className="ml-4 rounded-lg bg-gold/15 px-2 py-1 text-[9px] text-gold">
          {t("mockups.instagramOut", "OMR 450 — book via DM ✓")}
        </div>
      </div>
    </div>
  );
}

function BookingMockup() {
  const { t } = useTranslation("features");
  return (
    <div className="mt-4 rounded-xl border border-gold/20 bg-background/60 p-3">
      <div className="flex items-center justify-between text-[10px]">
        <span className="text-muted-foreground">
          {t("mockups.bookingDate", "Thu, 24 May")}
        </span>
        <CalendarCheck className="h-3.5 w-3.5 text-gold" />
      </div>
      <div className="mt-2 grid grid-cols-3 gap-1">
        {["10:00", "11:30", "14:00"].map((slot, i) => (
          <div
            key={slot}
            className={cn(
              "rounded-md py-1 text-center text-[9px]",
              i === 1
                ? "bg-gold text-background font-semibold"
                : "bg-border/50 text-muted-foreground",
            )}
          >
            {slot}
          </div>
        ))}
      </div>
      <p className="mt-2 text-[9px] text-emerald-400">
        {t("mockups.bookingConfirmed", "✓ Confirmed — reminder sent")}
      </p>
    </div>
  );
}

function LeadMockup() {
  const { t } = useTranslation("features");
  const rows = [
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
    {
      label: t("mockups.leadScore", "Score"),
      value: t("mockups.leadScoreVal", "Hot lead 🔥"),
    },
  ];
  return (
    <div className="mt-4 space-y-1.5 rounded-xl bg-background/60 p-3">
      {rows.map((row) => (
        <div key={row.label} className="flex justify-between text-[9px]">
          <span className="text-muted-foreground">{row.label}</span>
          <span className="text-muted-foreground">{row.value}</span>
        </div>
      ))}
    </div>
  );
}

function CampaignMockup() {
  const { t } = useTranslation("features");
  return (
    <div className="mt-4 rounded-xl bg-background/60 p-3">
      <div className="mb-2 text-[9px] font-medium text-gold">
        {t("mockups.campaignTitle", "Ramadan follow-up")}
      </div>
      <div className="space-y-1">
        {[68, 42, 89].map((pct, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gold"
                style={{ width: `${pct}%` }}
              />
            </div>
            <span className="w-6 text-[8px] text-muted-foreground">{pct}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function WebsiteChatMockup() {
  const { t } = useTranslation("features");
  return (
    <div className="mt-4 overflow-hidden rounded-xl border border-border bg-secondary/40">
      <div className="bg-secondary px-2 py-1 text-[8px] text-muted-foreground">
        {t("mockups.websiteDomain", "yourclinic.om")}
      </div>
      <div className="p-2">
        <div className="rounded-lg bg-background p-2 shadow-lg">
          <div className="mb-1 flex items-center gap-1">
            <MessageCircle className="h-3 w-3 text-gold" />
            <span className="text-[9px] font-medium text-foreground">
              {t("mockups.websiteChat", "Chat with us")}
            </span>
          </div>
          <div className="rounded bg-secondary/60 px-2 py-1 text-[8px] text-muted-foreground">
            {t(
              "mockups.websitePrompt",
              "Ask about services, pricing, or book a visit",
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function CrmMockup() {
  return (
    <div className="mt-4 grid grid-cols-2 gap-1.5">
      {["HubSpot", "Zoho", "Salesforce", "Custom"].map((crm) => (
        <div
          key={crm}
          className="flex items-center gap-1.5 rounded-lg border border-border bg-background/50 px-2 py-1.5"
        >
          <Plug className="h-2.5 w-2.5 text-gold" />
          <span className="text-[9px] text-muted-foreground">{crm}</span>
        </div>
      ))}
    </div>
  );
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

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
        "Embed a smart widget that syncs with WhatsApp and your CRM.",
      ),
      span: "md:col-span-1",
      mockup: <WebsiteChatMockup />,
    },
    {
      id: "crm",
      icon: Plug,
      title: t("crm.title", "CRM integrations"),
      description: t(
        "crm.desc",
        "Push contacts, notes, and bookings into the tools you already run.",
      ),
      span: "md:col-span-2",
      mockup: <CrmMockup />,
    },
  ];

  return (
    <section id="features" className="relative bg-background px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center md:mb-14"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            {t("label", "Platform")}
          </p>
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
          className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5"
        >
          {features.map((feature) => (
            <motion.article
              key={feature.id}
              variants={item}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-border bg-card/50 p-5 transition-[border-color,background-color,box-shadow] duration-200",
                "hover:border-gold/40 hover:bg-card hover:shadow-md hover:shadow-gold/5",
                feature.span,
              )}
            >
              <div className="relative flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold transition-colors group-hover:bg-gold/20">
                  <feature.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>

              {feature.mockup}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
