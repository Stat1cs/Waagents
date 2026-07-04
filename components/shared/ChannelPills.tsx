"use client";

import { Instagram, MessageCircle, MessagesSquare } from "lucide-react";

import { useTranslation } from "@/hooks/useTranslation";
import { cn } from "@/lib/utils";

const channels = [
  {
    id: "whatsapp",
    icon: MessageCircle,
    labelKey: "whatsapp",
    iconClass: "text-[#25D366]",
  },
  {
    id: "instagram",
    icon: Instagram,
    labelKey: "instagram",
    iconClass: "text-[#E4405F]",
  },
  {
    id: "messenger",
    icon: MessagesSquare,
    labelKey: "messenger",
    iconClass: "text-[#0084FF]",
  },
] as const;

export function ChannelPills({ className }: { className?: string }) {
  const { t } = useTranslation("hero");

  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-2 sm:gap-2.5",
        className,
      )}
    >
      {channels.map(({ id, icon: Icon, labelKey, iconClass }) => (
        <span
          key={id}
          className="inline-flex min-h-10 items-center gap-2 rounded-full border border-border/70 bg-background/80 px-4 py-2 text-sm text-foreground shadow-sm backdrop-blur-sm dark:bg-white/5"
        >
          <Icon className={cn("h-4 w-4 shrink-0", iconClass)} aria-hidden />
          {t(
            `channel.${labelKey}`,
            labelKey === "whatsapp"
              ? "WhatsApp"
              : labelKey === "instagram"
                ? "Instagram"
                : "Messenger",
          )}
        </span>
      ))}
    </div>
  );
}
