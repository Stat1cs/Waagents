"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

import { useTranslation } from "@/hooks/useTranslation";
import { cn } from "@/lib/utils";

type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
};

export function Testimonials() {
  const { t } = useTranslation("testimonials");

  const testimonials: Testimonial[] = [
    {
      id: "salma",
      quote: t(
        "salma.quote",
        "We went from missing evening inquiries to fully booked mornings. Arabic replies feel natural — patients don't realize it's AI at first.",
      ),
      name: t("salma.name", "Dr. Salma Al-Hinai"),
      role: t("salma.role", "Clinic Director"),
      company: t("salma.company", "Muscat Dental Studio"),
    },
    {
      id: "khalid",
      quote: t(
        "khalid.quote",
        "Arabic replies feel natural, not robotic. Buyers get instant answers on off-plan units and our team only talks to qualified leads.",
      ),
      name: t("khalid.name", "Khalid Al-Busaidi"),
      role: t("khalid.role", "Sales Manager"),
      company: t("khalid.company", "Horizon Properties"),
    },
    {
      id: "nadia",
      quote: t(
        "nadia.quote",
        "Ramadan campaigns used to take days. Wa-Agents handles follow-ups in both languages and our no-show rate dropped immediately.",
      ),
      name: t("nadia.name", "Nadia Al-Rashdi"),
      role: t("nadia.role", "Owner"),
      company: t("nadia.company", "Lumière Beauty Lounge"),
    },
    {
      id: "ahmed",
      quote: t(
        "ahmed.quote",
        "Setup took one afternoon. Test-drive requests now get qualified automatically and routed to the right salesperson in minutes.",
      ),
      name: t("ahmed.name", "Ahmed Al-Siyabi"),
      role: t("ahmed.role", "General Manager"),
      company: t("ahmed.company", "Al-Najah Motors"),
    },
  ];

  return (
    <section className="relative bg-background px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-12"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            {t("label", "Testimonials")}
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            {t("title", "Trusted by businesses on WhatsApp")}
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
            {t(
              "subtitle",
              "Real teams across Oman and the GCC use Wa-Agents to reply faster, book more, and scale without burnout.",
            )}
          </p>
        </motion.div>

        {/* Mobile: horizontal snap scroll */}
        <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 scrollbar-none md:hidden">
          {testimonials.map((item, i) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={cn(
                "w-[min(85vw,320px)] shrink-0 snap-center",
                "rounded-2xl border border-border bg-secondary/25 p-5",
              )}
            >
              <Quote className="mb-3 h-5 w-5 text-gold/60" aria-hidden />
              <blockquote className="text-sm leading-relaxed text-foreground/85">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <footer className="mt-4 border-t border-border pt-4">
                <p className="text-sm font-semibold text-foreground">{item.name}</p>
                <p className="text-xs text-muted-foreground">
                  {item.role} · {item.company}
                </p>
              </footer>
            </motion.article>
          ))}
        </div>

        {/* Desktop: grid */}
        <div className="hidden gap-5 md:grid md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((item, i) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ y: -4 }}
              className="flex flex-col rounded-2xl border border-border bg-secondary/25 p-5 transition-colors hover:border-gold/30"
            >
              <Quote className="mb-3 h-5 w-5 text-gold/60" aria-hidden />
              <blockquote className="flex-1 text-sm leading-relaxed text-foreground/85">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <footer className="mt-4 border-t border-border pt-4">
                <p className="text-sm font-semibold text-foreground">{item.name}</p>
                <p className="text-xs text-muted-foreground">
                  {item.role} · {item.company}
                </p>
              </footer>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
