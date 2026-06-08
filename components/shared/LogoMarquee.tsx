"use client";

import { motion } from "framer-motion";

import { useTranslation } from "@/hooks/useTranslation";
import { cn } from "@/lib/utils";

const DEFAULT_INDUSTRIES = [
  "Dental Clinics",
  "Real Estate",
  "Salons & Spas",
  "Fitness Studios",
  "Restaurants",
  "Car Dealerships",
  "Medical Labs",
  "Hotels",
  "Insurance",
  "Education",
];

export function LogoMarquee({
  className,
  label,
}: {
  className?: string;
  label?: string;
}) {
  const { t } = useTranslation("marquee");

  const items = DEFAULT_INDUSTRIES.map((name, i) => t(`item${i}`, name));
  const track = [...items, ...items];

  return (
    <div
      className={cn(
        "relative overflow-hidden border-t border-border/50 bg-secondary/10 py-5",
        className,
      )}
    >
      {label && (
        <p className="mb-4 text-center text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
          {label}
        </p>
      )}
      <div className="relative overflow-hidden" aria-hidden>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent sm:w-16" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent sm:w-16" />

      <motion.div
        className="flex w-max gap-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 35,
          ease: "linear",
        }}
      >
        {track.map((label, i) => (
          <span
            key={`${label}-${i}`}
            className="shrink-0 whitespace-nowrap text-sm font-medium tracking-wide text-muted-foreground/90"
          >
            <span className="mr-2 text-gold">◆</span>
            {label}
          </span>
        ))}
      </motion.div>
      </div>
    </div>
  );
}
