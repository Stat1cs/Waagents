"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CalendarCheck,
  CheckCheck,
  Circle,
  Inbox,
  Search,
  Sparkles,
  Target,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/hooks/useTranslation";
import { WHATSAPP_CHAT } from "@/lib/constants";
import { cn } from "@/lib/utils";

type ChatMessage = {
  id: string;
  from: "customer" | "ai";
  text: string;
  dir?: "ltr" | "rtl";
  time: string;
};

const LOOP_MS = 4200;

export function InboxMockup({ className }: { className?: string }) {
  const { t } = useTranslation("inboxMockup");
  const [visibleCount, setVisibleCount] = useState(1);
  const [phase, setPhase] = useState(0);

  const threads = useMemo(
    () => [
      {
        id: "1",
        name: t("threads.t1.name", "Fatima A."),
        preview: t("threads.t1.preview", "2 PM works"),
        unread: false,
        active: true,
      },
      {
        id: "2",
        name: t("threads.t2.name", "Omar Clinic"),
        preview: t("threads.t2.preview", "Insurance question"),
        unread: true,
        active: false,
      },
      {
        id: "3",
        name: t("threads.t3.name", "Qurum Spa"),
        preview: t("threads.t3.preview", "Friday slot?"),
        unread: false,
        active: false,
      },
    ],
    [t],
  );

  const messages = useMemo<ChatMessage[]>(
    () => [
      {
        id: "a",
        from: "customer",
        text: t(
          "messages.m1",
          "السلام عليكم، أبي موعد تنظيف أسنان غداً",
        ),
        dir: "rtl",
        time: "10:02",
      },
      {
        id: "b",
        from: "ai",
        text: t(
          "messages.m2",
          "وعليكم السلام! عندنا 10 صباحاً أو 4 عصراً — أيهم يناسبك؟",
        ),
        dir: "rtl",
        time: "10:02",
      },
      {
        id: "c",
        from: "customer",
        text: t("messages.m3", "4 PM please"),
        time: "10:03",
      },
      {
        id: "d",
        from: "ai",
        text: t(
          "messages.m4",
          "تم الحجز ✓ Thu 4:00 PM · Dr. Sara · Al Mouj branch",
        ),
        dir: "rtl",
        time: "10:03",
      },
    ],
    [t],
  );

  useEffect(() => {
    const id = window.setInterval(() => {
      setVisibleCount((c) => {
        if (c >= messages.length) {
          setPhase((p) => (p + 1) % 3);
          return 1;
        }
        return c + 1;
      });
    }, LOOP_MS);
    return () => window.clearInterval(id);
  }, [messages.length]);

  const visible = messages.slice(0, visibleCount);
  const showQualify = visibleCount >= 3;
  const showBooked = visibleCount >= 4;
  const showAiReplyHint = visibleCount >= 2 && visibleCount < messages.length;

  return (
    <div
      className={cn(
        "flex h-[340px] flex-col overflow-hidden rounded-2xl border border-border/20 shadow-2xl shadow-black/20 sm:h-[360px] dark:shadow-black/40",
        className,
      )}
      style={{ backgroundColor: WHATSAPP_CHAT.panel }}
    >
      <div
        className="shrink-0 border-b border-white/10 px-3 py-2.5 sm:px-4"
        style={{ backgroundColor: WHATSAPP_CHAT.header }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Inbox className="h-4 w-4 text-[#25D366]" />
            <span
              className="text-xs font-semibold sm:text-sm"
              style={{ color: WHATSAPP_CHAT.textPrimary }}
            >
              {t("title", "Wa-Agents Inbox")}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Badge variant="success" className="hidden text-[10px] sm:inline-flex">
              {t("live", "Live")}
            </Badge>
            <Badge variant="default" className="text-[10px]">
              <Sparkles className="mr-1 h-2.5 w-2.5" />
              {t("aiOn", "AI on")}
            </Badge>
          </div>
        </div>
      </div>

      <div className="flex min-h-0 flex-1">
        <aside
          className="hidden w-[38%] max-w-[140px] flex-col border-r border-white/10 sm:flex sm:max-w-none sm:w-[32%]"
          style={{ backgroundColor: WHATSAPP_CHAT.panel }}
        >
          <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2">
            <Search className="h-3 w-3 text-[#A1A1AA]" />
            <span className="text-[10px] text-[#A1A1AA]">
              {t("searchChats", "Search chats")}
            </span>
          </div>
          <ul className="flex-1 overflow-hidden p-1.5">
            {threads.map((thread) => (
              <li
                key={thread.id}
                className={cn(
                  "mb-1 rounded-lg px-2 py-2",
                  thread.active ? "bg-[#1B4D3E]/80" : "hover:bg-white/5",
                )}
              >
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1B4D3E] text-[10px] font-medium text-[#C5A059]">
                    {thread.name[0]}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[10px] font-medium text-[#F5F5F5]">
                      {thread.name}
                    </p>
                    <p className="truncate text-[9px] text-[#A1A1AA]">
                      {thread.preview}
                    </p>
                  </div>
                  {thread.unread && (
                    <Circle className="h-2 w-2 fill-[#C5A059] text-[#C5A059]" />
                  )}
                </div>
              </li>
            ))}
          </ul>
        </aside>

        <div className="flex min-h-0 min-w-0 flex-1 flex-col">
          <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-3 py-2 sm:px-4">
            <div>
              <p
                className="text-xs font-medium"
                style={{ color: WHATSAPP_CHAT.textPrimary }}
              >
                {t("contactName", "Fatima A.")}
              </p>
              <p className="text-[10px]" style={{ color: WHATSAPP_CHAT.textSecondary }}>
                {t("contactMeta", "WhatsApp · Muscat Dental")}
              </p>
            </div>
            <div className="flex min-h-[22px] flex-wrap justify-end gap-1">
              <AnimatePresence mode="sync">
                {showQualify && (
                  <motion.span
                    key="qualified"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Badge variant="default" className="gap-0.5 px-1.5 py-0 text-[9px]">
                      <Target className="h-2.5 w-2.5" />
                      {t("qualified", "Qualified")}
                    </Badge>
                  </motion.span>
                )}
                {showBooked && (
                  <motion.span
                    key="booked"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Badge variant="success" className="gap-0.5 px-1.5 py-0 text-[9px]">
                      <CalendarCheck className="h-2.5 w-2.5" />
                      {t("booked", "Booked")}
                    </Badge>
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div
            className="relative min-h-0 flex-1 overflow-hidden"
            style={{ backgroundColor: WHATSAPP_CHAT.chatBg }}
          >
            <div className="absolute inset-0 flex flex-col justify-end gap-3 overflow-hidden p-3 sm:gap-3.5 sm:p-4">
              <AnimatePresence mode="sync">
                {visible.map((msg) => (
                  <motion.div
                    key={`${msg.id}-${phase}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={cn(
                      "flex shrink-0",
                      msg.from === "ai" ? "justify-end" : "justify-start",
                    )}
                  >
                    <div
                      className={cn(
                        "max-w-[92%] rounded-lg px-2.5 py-2 sm:max-w-[80%]",
                        msg.from === "ai"
                          ? WHATSAPP_CHAT.bubbleOutgoing
                          : WHATSAPP_CHAT.bubbleIncoming,
                      )}
                    >
                      <p
                        className="whitespace-pre-line text-[11px] leading-relaxed sm:text-xs"
                        dir={msg.dir}
                      >
                        {msg.text}
                      </p>
                      <div
                        className={cn(
                          "mt-1 flex items-center gap-1 text-[9px] text-white/45",
                          msg.from === "ai" && "justify-end",
                        )}
                      >
                        <span>{msg.time}</span>
                        {msg.from === "ai" && (
                          <CheckCheck className="h-3 w-3 text-sky-400/80" />
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {showAiReplyHint && (
              <p className="pointer-events-none absolute inset-x-0 bottom-2 flex items-center justify-center gap-1 text-[10px] text-[#C5A059]">
                <Sparkles className="h-3 w-3" />
                {t("aiReplied", "AI replied in 2s")}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
