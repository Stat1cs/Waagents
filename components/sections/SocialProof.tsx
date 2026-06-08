"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { LogoMarquee } from "@/components/shared/LogoMarquee";
import { useTranslation } from "@/hooks/useTranslation";

type Stat = {
  id: string;
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
};

function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  active,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  active: boolean;
}) {
  const [display, setDisplay] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!active || hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 1200;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - progress) ** 3;
      setDisplay(Math.round(value * eased));
      if (progress < 1) requestAnimationFrame(tick);
      else setDisplay(value);
    };

    setDisplay(0);
    const frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, value]);

  return (
    <span className="tabular-nums tracking-tight">
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

function useSectionInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [inView]);

  return { ref, inView };
}

export function SocialProof() {
  const { t } = useTranslation("socialProof");
  const { ref, inView } = useSectionInView<HTMLElement>();

  const stats: Stat[] = [
    {
      id: "speed",
      value: 5,
      prefix: "<",
      suffix: " sec",
      label: t("stat3.label", "Avg. reply time"),
    },
    {
      id: "availability",
      value: 24,
      suffix: "/7",
      label: t("stat4.label", "Always-on AI inbox"),
    },
  ];

  return (
    <section
      ref={ref}
      className="border-y border-border/60 bg-background text-foreground"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mx-auto mb-10 max-w-2xl text-center text-base font-medium leading-relaxed text-foreground sm:text-lg md:mb-14"
        >
          {t(
            "headline",
            "From missed WhatsApp messages to booked appointments — zero humans required.",
          )}
        </motion.p>

        <div className="mx-auto grid max-w-lg grid-cols-2 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-center"
            >
              <p className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  active={inView}
                />
              </p>
              <p className="mt-2 text-xs text-muted-foreground sm:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <LogoMarquee />
    </section>
  );
}
