"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { Check, Minus, X } from "lucide-react";

import { useTranslation } from "@/hooks/useTranslation";
import { cn } from "@/lib/utils";

export type ComparisonRow = {
  feature: string;
  waAgents: boolean | "partial";
  chatbot: boolean | "partial";
};

type ComparisonTableProps = {
  rows?: ComparisonRow[];
  className?: string;
};

function StatusCell({
  value,
  compact = false,
}: {
  value: boolean | "partial";
  compact?: boolean;
}) {
  const sizeClass = compact ? "h-6 w-6" : "h-7 w-7";
  const iconClass = compact ? "h-3.5 w-3.5" : "h-4 w-4";

  if (value === true) {
    return (
      <span
        className={cn(
          "inline-flex items-center justify-center rounded-full bg-[#25D366]/15 text-[#25D366]",
          sizeClass,
        )}
      >
        <Check className={iconClass} strokeWidth={2.5} aria-hidden />
        <span className="sr-only">Yes</span>
      </span>
    );
  }
  if (value === "partial") {
    return (
      <span
        className={cn(
          "inline-flex items-center justify-center rounded-full bg-amber-500/10 text-amber-500",
          sizeClass,
        )}
      >
        <Minus className={iconClass} strokeWidth={2.5} aria-hidden />
        <span className="sr-only">Partial</span>
      </span>
    );
  }
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-red-500/10 text-red-500/80",
        sizeClass,
      )}
    >
      <X className={iconClass} strokeWidth={2.5} aria-hidden />
      <span className="sr-only">No</span>
    </span>
  );
}

export function ComparisonTable({ rows, className }: ComparisonTableProps) {
  const { t } = useTranslation("comparison");

  const defaultRows = useMemo<ComparisonRow[]>(
    () => [
      {
        feature: t("rows.r1", "Closes deals in chat"),
        waAgents: true,
        chatbot: false,
      },
      {
        feature: t("rows.r2", "Handles objections"),
        waAgents: true,
        chatbot: false,
      },
      {
        feature: t("rows.r3", "Books appointments inside the conversation"),
        waAgents: true,
        chatbot: false,
      },
      {
        feature: t("rows.r4", "Understands Arabic & English"),
        waAgents: true,
        chatbot: "partial",
      },
      {
        feature: t("rows.r5", "Remembers past conversations"),
        waAgents: true,
        chatbot: false,
      },
      {
        feature: t("rows.r6", "Gets smarter automatically"),
        waAgents: true,
        chatbot: false,
      },
      {
        feature: t("rows.r7", "Instagram DM + website chat"),
        waAgents: true,
        chatbot: "partial",
      },
      {
        feature: t("rows.r8", "CRM sync & campaign automation"),
        waAgents: true,
        chatbot: false,
      },
      {
        feature: t("rows.r9", "Every channel in one inbox"),
        waAgents: true,
        chatbot: "partial",
      },
    ],
    [t],
  );

  const tableRows = rows ?? defaultRows;

  const colWaAgents = t("col.waAgents", "Wa-Agents AI");
  const colChatbot = t("col.chatbot", "Regular chatbots");
  const colWaAgentsShort = t("col.waAgentsShort", "Wa-Agents");
  const colChatbotShort = t("col.chatbotShort", "Chatbots");

  return (
    <div className={cn("w-full", className)}>
      <div className="overflow-hidden rounded-2xl border border-border bg-card/50">
        <table className="w-full table-fixed border-collapse">
          <colgroup>
            <col className="w-[52%] sm:w-[58%]" />
            <col className="w-[24%] sm:w-[21%]" />
            <col className="w-[24%] sm:w-[21%]" />
          </colgroup>
          <thead>
            <tr className="border-b border-border bg-secondary/30">
              <th className="px-2.5 py-2.5 text-left text-[11px] font-medium leading-tight text-muted-foreground sm:px-6 sm:py-4 sm:text-sm">
                <span className="sm:hidden">{t("header.featureShort", "Feature")}</span>
                <span className="hidden sm:inline">
                  {t("header.feature", "Capability")}
                </span>
              </th>
              <th className="bg-gold/5 px-1 py-2.5 text-center text-[10px] font-semibold leading-tight text-foreground sm:px-4 sm:py-4 sm:text-sm">
                <span className="sm:hidden">{colWaAgentsShort}</span>
                <span className="hidden sm:inline">{colWaAgents}</span>
              </th>
              <th className="px-1 py-2.5 text-center text-[10px] font-medium leading-tight text-muted-foreground sm:px-4 sm:py-4 sm:text-sm">
                <span className="sm:hidden">{colChatbotShort}</span>
                <span className="hidden sm:inline">{colChatbot}</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row, i) => (
              <motion.tr
                key={row.feature}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="border-b border-border/50 last:border-0"
              >
                <td className="px-2.5 py-2.5 text-[11px] leading-snug text-foreground sm:px-6 sm:py-4 sm:text-sm sm:leading-normal">
                  {row.feature}
                </td>
                <td className="bg-gold/5 px-1 py-2.5 text-center sm:px-4 sm:py-4">
                  <StatusCell value={row.waAgents} compact />
                </td>
                <td className="px-1 py-2.5 text-center sm:px-4 sm:py-4">
                  <StatusCell value={row.chatbot} compact />
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
