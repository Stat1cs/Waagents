"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";
import { TRIAL_ANCHOR } from "@/lib/pricing/tiers";
import { cn } from "@/lib/utils";

type MobileStickyCTAProps = {
  heroId?: string;
  className?: string;
};

export function MobileStickyCTA({
  heroId = "hero",
  className,
}: MobileStickyCTAProps) {
  const { t } = useTranslation("cta");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById(heroId);
    if (!hero) {
      const onScroll = () => setVisible(window.scrollY > 400);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.15 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, [heroId]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          className={cn(
            "fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-4 py-3 backdrop-blur-lg md:hidden",
            "pb-[max(0.75rem,env(safe-area-inset-bottom))]",
            className,
          )}
        >
          <Button asChild variant="premium" className="min-h-11 w-full gap-2 rounded-full text-base">
            <a href={TRIAL_ANCHOR}>
              <ArrowRight className="h-5 w-5" />
              {t("sticky", "Start free trial")}
            </a>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
