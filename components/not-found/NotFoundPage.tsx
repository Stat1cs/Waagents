"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCheck, Home } from "lucide-react";

import { BrandLogo } from "@/components/shared/BrandLogo";
import { ChatBubbleContent } from "@/components/shared/ChatBubbleStyles";
import { IslamicPatternBackground } from "@/components/shared/IslamicPatternBackground";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";
import { WHATSAPP_CHAT } from "@/lib/constants";
import { STARTER_TRIAL_CHECKOUT_URL } from "@/lib/pricing/tiers";
import { cn } from "@/lib/utils";

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
};

export function NotFoundPage() {
  const { t, dir } = useTranslation("notFound");

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-background">
      <IslamicPatternBackground variant="hero" />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(197,160,89,0.18),transparent_55%),radial-gradient(ellipse_at_90%_80%,rgba(27,77,62,0.12),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_20%_0%,rgba(197,160,89,0.12),transparent_55%),radial-gradient(ellipse_at_90%_80%,rgba(27,77,62,0.18),transparent_50%)]"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <motion.header
          className="flex items-center"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <BrandLogo asLink size="md" priority />
        </motion.header>

        <div className="grid flex-1 items-center gap-10 py-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14 lg:py-14">
          <div className="relative order-2 lg:order-1">
            <motion.p
              className={cn(
                "pointer-events-none absolute -top-6 select-none font-semibold leading-none text-forest/[0.07] dark:text-gold/[0.08]",
                "text-[clamp(6rem,22vw,12rem)]",
                dir === "rtl" ? "-right-2" : "-left-2",
              )}
              aria-hidden
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {t("code", "404")}
            </motion.p>

            <motion.p
              className="relative mb-3 text-xs font-semibold tracking-[0.2em] text-gold uppercase"
              {...fadeUp}
              transition={{ duration: 0.45, delay: 0.08 }}
            >
              {t("eyebrow", "Message undelivered")}
            </motion.p>

            <motion.h1
              className="relative max-w-xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.14 }}
            >
              {t("title", "This page never reached the inbox")}
            </motion.h1>

            <motion.p
              className="relative mt-4 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg"
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {t(
                "description",
                "The link you followed is missing, moved, or was never sent. Let’s get you back to something that replies.",
              )}
            </motion.p>

            <motion.div
              className="relative mt-8 flex flex-wrap items-center gap-3"
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.28 }}
            >
              <Button
                asChild
                variant="premium"
                size="lg"
                className="min-h-11 gap-2 rounded-full px-6"
              >
                <Link href="/">
                  <Home className="h-4 w-4" />
                  {t("home", "Back to home")}
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="min-h-11 gap-2 rounded-full border-forest/25 px-6"
              >
                <a
                  href={STARTER_TRIAL_CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("startTrial", "Start free trial")}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="order-1 mx-auto w-full max-w-sm lg:order-2 lg:mx-0 lg:justify-self-end"
            initial={{ opacity: 0, y: 28, rotate: dir === "rtl" ? 1.5 : -1.5 }}
            animate={{ opacity: 1, y: 0, rotate: dir === "rtl" ? -1 : 1 }}
            transition={{ duration: 0.65, delay: 0.18, ease: "easeOut" }}
          >
            <div
              className="overflow-hidden rounded-[1.75rem] border border-white/10 shadow-[0_28px_60px_-24px_rgba(11,11,11,0.55)] ring-1 ring-forest/15"
              style={{ backgroundColor: WHATSAPP_CHAT.panel }}
            >
              <div
                className="flex items-center gap-3 border-b border-white/5 px-4 py-3"
                style={{ backgroundColor: WHATSAPP_CHAT.header }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-sm font-semibold text-gold">
                  WA
                </div>
                <div className="min-w-0 flex-1">
                  <p
                    className="truncate text-sm font-medium"
                    style={{ color: WHATSAPP_CHAT.textPrimary }}
                  >
                    {t("chatHeader", "Wa-Agents · Support")}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: WHATSAPP_CHAT.accent }}
                  >
                    {t("chatStatus", "Online")}
                  </p>
                </div>
              </div>

              <div
                className="relative space-y-3 px-3 py-5"
                style={{
                  backgroundColor: WHATSAPP_CHAT.chatBg,
                  backgroundImage:
                    "radial-gradient(circle at 12% 18%, rgba(197,160,89,0.08), transparent 40%), radial-gradient(circle at 88% 72%, rgba(37,211,102,0.06), transparent 35%)",
                }}
              >
                <div className="flex justify-start">
                  <ChatBubbleContent from="incoming">
                    <p>{t("bubbleIncoming", "Hi — looking for that page…")}</p>
                    <span
                      className={cn(
                        "mt-1 block text-[10px]",
                        WHATSAPP_CHAT.timestamp,
                      )}
                    >
                      {t("timestamp", "now")}
                    </span>
                  </ChatBubbleContent>
                </div>

                <div className="flex justify-center">
                  <span
                    className="rounded-full px-3 py-1 text-[11px] font-medium"
                    style={{
                      backgroundColor: WHATSAPP_CHAT.systemBg,
                      color: WHATSAPP_CHAT.textSecondary,
                    }}
                  >
                    {t(
                      "bubbleFailed",
                      "Couldn’t deliver. The conversation doesn’t exist.",
                    )}
                  </span>
                </div>

                <div className="flex justify-end">
                  <ChatBubbleContent from="outgoing">
                    <p>
                      {t(
                        "bubbleOutgoing",
                        "No worries — head home or start a free trial.",
                      )}
                    </p>
                    <span
                      className={cn(
                        "mt-1 flex items-center justify-end gap-0.5 text-[10px]",
                        WHATSAPP_CHAT.timestamp,
                      )}
                    >
                      {t("timestamp", "now")}
                      <CheckCheck className="h-3 w-3 text-[#53bdeb]" />
                    </span>
                  </ChatBubbleContent>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
