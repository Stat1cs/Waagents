/** Shared Framer Motion presets for marketing sections */
export const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" as const },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
} as const;

export const fadeUpLarge = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" as const },
} as const;

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
} as const;

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
} as const;

/** Standard horizontal padding + vertical rhythm for landing sections */
export const sectionClassName =
  "relative px-4 py-16 sm:px-6 lg:px-8 lg:py-24";

/** Hero entrance — staggered, cinematic */
export const heroStaggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
} as const;

export const heroStaggerItem = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
} as const;

export const heroMockupReveal = {
  hidden: { opacity: 0, y: 48, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      delay: 0.3,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
} as const;
