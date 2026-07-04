"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Car,
  Dumbbell,
  Scissors,
  Stethoscope,
  UtensilsCrossed,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { SectionLabel } from "@/components/shared/SectionLabel";
import { useTranslation } from "@/hooks/useTranslation";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion/presets";
import { cn } from "@/lib/utils";

type Industry = {
  id: string;
  icon: LucideIcon;
  name: string;
  useCase: string;
  stat: string;
};

const container = staggerContainer;
const card = staggerItem;

export function Industries() {
  const { t } = useTranslation("industries");

  const industries: Industry[] = [
    {
      id: "clinics",
      icon: Stethoscope,
      name: t("clinics.name", "Clinics"),
      useCase: t(
        "clinics.desc",
        "Book consultations, send prep instructions, reduce no-shows.",
      ),
      stat: t("clinics.stat", "38% more booked appointments"),
    },
    {
      id: "real-estate",
      icon: Building2,
      name: t("realEstate.name", "Real Estate"),
      useCase: t(
        "realEstate.desc",
        "Qualify buyers, schedule viewings, follow up on leads 24/7.",
      ),
      stat: t("realEstate.stat", "2× faster lead response"),
    },
    {
      id: "gyms",
      icon: Dumbbell,
      name: t("gyms.name", "Gyms"),
      useCase: t(
        "gyms.desc",
        "Trial bookings, class reminders, membership follow-ups.",
      ),
      stat: t("gyms.stat", "29% trial-to-member conversion"),
    },
    {
      id: "restaurants",
      icon: UtensilsCrossed,
      name: t("restaurants.name", "Restaurants"),
      useCase: t(
        "restaurants.desc",
        "Table reservations, event inquiries, delivery questions.",
      ),
      stat: t("restaurants.stat", "Fewer no-shows with reminders"),
    },
    {
      id: "car-dealerships",
      icon: Car,
      name: t("carDealerships.name", "Car Dealerships"),
      useCase: t(
        "carDealerships.desc",
        "Test-drive scheduling, trade-in questions, finance handoffs.",
      ),
      stat: t("carDealerships.stat", "47% more qualified test drives"),
    },
    {
      id: "beauty-salons",
      icon: Scissors,
      name: t("beautySalons.name", "Beauty Salons"),
      useCase: t(
        "beautySalons.desc",
        "Service menus, stylist booking, package upsells.",
      ),
      stat: t("beautySalons.stat", "22% higher package upsells"),
    },
  ];

  return (
    <section id="industries" className="bg-background px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div {...fadeUp} className="mb-10 text-center md:mb-14">
          <SectionLabel className="mb-3 block">
            {t("label", "Industries")}
          </SectionLabel>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            {t("title", "Built for businesses that run on WhatsApp")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
            {t(
              "subtitle",
              "Templates and flows tuned for your sector — go live in days, not months.",
            )}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 lg:gap-5"
        >
          {industries.map((industry) => (
            <motion.article
              key={industry.id}
              variants={card}
              whileHover={{ y: -3 }}
              className={cn(
                "group flex flex-col rounded-2xl border border-border bg-secondary/20 p-4 transition-colors",
                "hover:border-gold/35 sm:p-5",
              )}
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gold/12 text-gold transition-colors group-hover:bg-gold/20 sm:h-11 sm:w-11">
                <industry.icon className="h-5 w-5 sm:h-5 sm:w-5" />
              </div>

              <h3 className="text-sm font-semibold text-foreground sm:text-base">{industry.name}</h3>
              <p className="mt-2 flex-1 text-[11px] leading-relaxed text-muted-foreground sm:text-xs">
                {industry.useCase}
              </p>

              <p className="mt-3 border-t border-border pt-3 text-[10px] font-medium text-gold sm:text-xs">
                {industry.stat}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
