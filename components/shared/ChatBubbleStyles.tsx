import { cn } from "@/lib/utils";
import { WHATSAPP_CHAT } from "@/lib/constants";

type BubbleProps = {
  from: "incoming" | "outgoing" | "customer" | "ai";
  children: React.ReactNode;
  className?: string;
  dir?: "ltr" | "rtl";
};

/** DM Champ / WhatsApp Web dark-theme bubble styling */
export function ChatBubbleContent({
  from,
  children,
  className,
  dir,
}: BubbleProps) {
  const isOutgoing = from === "outgoing" || from === "ai";

  return (
    <div
      dir={dir}
      className={cn(
        "max-w-[85%] rounded-lg px-3 py-2 text-[13px] leading-relaxed shadow-sm sm:text-sm",
        isOutgoing ? WHATSAPP_CHAT.bubbleOutgoing : WHATSAPP_CHAT.bubbleIncoming,
        className,
      )}
    >
      {children}
    </div>
  );
}
