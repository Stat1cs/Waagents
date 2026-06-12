"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CalendarCheck,
  CheckCheck,
  Pause,
  Play,
  Sparkles,
  Target,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IslamicPatternBackground } from "@/components/shared/IslamicPatternBackground";
import { useTranslation } from "@/hooks/useTranslation";
import { DEMO_CONVERSATIONS, type DemoMessage } from "@/lib/demo-conversation";
import { BRAND_LOGOS, getWhatsAppDemoUrl, WHATSAPP_CHAT, WHATSAPP_LINK_REL } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [breakpoint]);

  return isMobile;
}

function TimelineMarker({
  label,
  variant,
}: {
  label: string;
  variant: "gold" | "success" | "navy";
}) {
  const styles = {
    gold: "border-[#C5A059]/40 bg-[#C5A059]/15 text-[#C5A059]",
    success: "border-[#25D366]/40 bg-[#25D366]/15 text-[#25D366]",
    navy: "border-white/15 bg-white/5 text-[#8696a0]",
  };

  return (
    <div className="flex items-center gap-3 px-3 py-2 sm:px-4">
      <div className="h-px flex-1 bg-white/10" />
      <span
        className={cn(
          "shrink-0 rounded-full border px-3 py-1 text-[10px] font-medium uppercase tracking-wide",
          styles[variant],
        )}
      >
        {label}
      </span>
      <div className="h-px flex-1 bg-white/10" />
    </div>
  );
}

function StatusTag({
  label,
  icon,
}: {
  label: string;
  icon: "qualify" | "book";
}) {
  const Icon = icon === "qualify" ? Target : CalendarCheck;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex justify-center py-1"
    >
      <Badge variant={icon === "book" ? "success" : "default"} className="gap-1.5 px-3 py-1">
        <Icon className="h-3 w-3" />
        {label}
      </Badge>
    </motion.div>
  );
}

function ChatBubble({ message }: { message: DemoMessage }) {
  if (message.kind === "system") {
    return (
      <div className="flex justify-center px-4 py-1">
        <p
          className="rounded-lg px-3 py-1.5 text-center text-[10px]"
          style={{
            backgroundColor: WHATSAPP_CHAT.systemBg,
            color: WHATSAPP_CHAT.textSecondary,
          }}
        >
          {message.text}
        </p>
      </div>
    );
  }

  const isOutgoing = message.kind === "outgoing";

  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.25 }}
      className={cn(
        "flex px-3 sm:px-4",
        isOutgoing ? "justify-end" : "justify-start",
      )}
    >
      <div
        className={cn(
          "relative max-w-[88%] rounded-lg px-3 py-2 shadow-sm sm:max-w-[75%]",
          isOutgoing
            ? WHATSAPP_CHAT.bubbleOutgoing
            : WHATSAPP_CHAT.bubbleIncoming,
        )}
      >
        <p
          className="whitespace-pre-line text-[13px] leading-relaxed sm:text-sm"
          dir={message.dir ?? "ltr"}
        >
          {message.text}
        </p>
        <div className="mt-1 flex items-center justify-end gap-1 text-[10px] text-white/45">
          <span>{message.time}</span>
          {isOutgoing && message.status === "read" && (
            <CheckCheck className="h-3.5 w-3.5 text-sky-400" aria-hidden />
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function DemoChat() {
  const { t, locale } = useTranslation("demoChat");
  const { locale: activeLocale, initialLocale, hydrated } = useLanguage();
  const demoUrl = getWhatsAppDemoUrl(
    "Hi, I'd like to book a demo for my clinic.",
    hydrated ? activeLocale : initialLocale,
  );
  const isMobile = useIsMobile();
  const scrollRef = useRef<HTMLDivElement>(null);

  const conversation = DEMO_CONVERSATIONS[locale];

  const [visibleCount, setVisibleCount] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const visibleMessages = useMemo(
    () => conversation.slice(0, visibleCount),
    [conversation, visibleCount],
  );

  const isComplete = visibleCount >= conversation.length;

  useEffect(() => {
    setVisibleCount(0);
    setIsPlaying(false);
    setHasStarted(false);
  }, [locale]);

  const getTimelineLabel = (key: NonNullable<DemoMessage["timelineKey"]>) =>
    t(`timeline.${key}`, key === "bookingIntent" ? "AI detected booking intent" : "Appointment booked");

  const getTagLabel = (key: NonNullable<DemoMessage["tagKey"]>) =>
    t(`tags.${key}`, key === "qualify" ? "AI qualifies lead" : "Appointment booked");

  const scrollToBottom = useCallback(() => {
    const el = scrollRef.current;
    if (el) {
      el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [visibleCount, scrollToBottom]);

  useEffect(() => {
    if (!isPlaying || isComplete || visibleCount === 0) return;

    const delay = visibleCount === 1 ? 800 : 1400;
    const timer = window.setTimeout(() => {
      setVisibleCount((c) => Math.min(c + 1, conversation.length));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [isPlaying, isComplete, visibleCount, conversation.length]);

  useEffect(() => {
    if (isComplete && isPlaying) {
      setIsPlaying(false);
    }
  }, [isComplete, isPlaying]);

  const startPlayback = useCallback(() => {
    setHasStarted(true);
    setVisibleCount((c) => (c === 0 ? 1 : c));
    setIsPlaying(true);
  }, []);

  const handlePlayPause = () => {
    if (isComplete) {
      setVisibleCount(1);
      setHasStarted(true);
      setIsPlaying(true);
      return;
    }

    if (!hasStarted || visibleCount === 0) {
      startPlayback();
      return;
    }

    setIsPlaying((p) => !p);
  };

  const handleStartDemo = () => {
    startPlayback();
  };

  return (
    <section
      id="demo"
      className="relative overflow-hidden bg-background px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <IslamicPatternBackground variant="demo" />

      <div className="relative mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center md:mb-10"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            {t("label", "Live demo")}
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            {t("title", "Watch a real clinic booking unfold")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
            {t(
              "subtitle",
              locale === "ar"
                ? "من أول رسالة إلى موعد مؤكد — بالكامل بالعربية."
                : "From first message to confirmed appointment — fully in English.",
            )}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl border border-gold/20 shadow-2xl shadow-navy/20"
        >
          {/* WhatsApp header */}
          <div
            className="flex items-center justify-between px-4 py-3"
            style={{ backgroundColor: WHATSAPP_CHAT.header }}
          >
            <div className="flex items-center gap-3">
              <div
                className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full"
                style={{ backgroundColor: WHATSAPP_CHAT.panel }}
              >
                <Image
                  src={BRAND_LOGOS.logo}
                  alt="Wa-Agents"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <p
                  className="text-sm font-medium"
                  style={{ color: WHATSAPP_CHAT.textPrimary }}
                >
                  {t("chat.name", "Wa-Agents Dental · Muscat")}
                </p>
                <p
                  className="flex items-center gap-1 text-xs"
                  style={{ color: WHATSAPP_CHAT.accent }}
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: WHATSAPP_CHAT.accent }}
                  />
                  {t("chat.status", "AI assistant online")}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={handlePlayPause}
                aria-label={
                  isPlaying
                    ? t("controls.pause", "Pause")
                    : isComplete
                      ? t("controls.replay", "Replay")
                      : t("controls.play", "Play")
                }
                className="h-9 w-9 text-[#8696a0] hover:bg-white/5 hover:text-[#e9edef]"
              >
                {isPlaying ? (
                  <Pause className="h-4 w-4" />
                ) : (
                  <Play className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>

          {/* Chat area */}
          <div
            ref={scrollRef}
            className="max-h-[60vh] space-y-1 overflow-y-auto py-4 sm:max-h-[520px] sm:space-y-2"
            style={{
              backgroundColor: WHATSAPP_CHAT.chatBg,
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          >
            <AnimatePresence mode="popLayout">
              {hasStarted &&
                visibleMessages.map((message) => (
                <div key={message.id} className="mb-4 last:mb-2 sm:mb-5">
                  {message.timelineKey && message.timelineVariant && (
                    <TimelineMarker
                      label={getTimelineLabel(message.timelineKey)}
                      variant={message.timelineVariant}
                    />
                  )}
                  {message.tagKey && message.tagIcon && (
                    <StatusTag
                      label={getTagLabel(message.tagKey)}
                      icon={message.tagIcon}
                    />
                  )}
                  <ChatBubble message={message} />
                </div>
              ))}
            </AnimatePresence>

            {!hasStarted && (
              <div className="flex flex-col items-center justify-center gap-4 px-4 py-12">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/20">
                  <Sparkles className="h-7 w-7 text-gold" />
                </div>
                <p
                  className="text-center text-sm"
                  style={{ color: WHATSAPP_CHAT.textSecondary }}
                >
                  {isMobile
                    ? t(
                        "prompt.mobile",
                        "Tap play to watch the conversation — auto-play is off on mobile.",
                      )
                    : t("prompt.desktop", "Press play to watch the full booking flow.")}
                </p>
                <Button onClick={handleStartDemo} size="lg">
                  <Play className="h-4 w-4" />
                  {t("prompt.cta", "Play conversation")}
                </Button>
              </div>
            )}
          </div>

          {/* Footer CTA */}
          <div
            className="flex flex-col items-center justify-between gap-3 border-t border-white/10 px-4 py-4 sm:flex-row"
            style={{ backgroundColor: WHATSAPP_CHAT.header }}
          >
            <p
              className="text-center text-xs sm:text-left"
              style={{ color: WHATSAPP_CHAT.textSecondary }}
            >
              {t(
                "footer.note",
                "This demo mirrors a real Wa-Agents-powered WhatsApp inbox.",
              )}
            </p>
            <Button asChild size="sm">
              <a href={demoUrl} rel={WHATSAPP_LINK_REL} suppressHydrationWarning>
                {t("footer.cta", "Book your demo")}
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
