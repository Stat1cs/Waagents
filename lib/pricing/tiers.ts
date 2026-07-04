export const CHECKOUT_BASE =
  "https://app.dmchamp.com/v1/checkout?id=sDHgSWkA7zaNUPIWq55NnQbLnHv1";

export const TRIAL_CHECKOUT_URL =
  "https://buy.stripe.com/aFa7sLbqd2jy7qp2Vkco003";

export const TRIAL_ANCHOR = "#trial";

export function getCheckoutUrl(tierIndex: number): string {
  return `${CHECKOUT_BASE}&tierIndex=${tierIndex}`;
}

export type PricingTierId = "trial" | "starter" | "growth" | "pro" | "custom";

export type PricingCtaType = "checkout" | "whatsapp" | "anchor";

export type PricingTierConfig = {
  id: PricingTierId;
  tierIndex?: number;
  checkoutUrl?: string;
  /** Numeric monthly price in OMR; null for trial/custom display tiers */
  price: number | null;
  priceDisplay: "free" | "custom" | "amount";
  credits: number | null;
  popular?: boolean;
  orderClass?: string;
  ctaType: PricingCtaType;
  ctaAnchor?: string;
  whatsappIntent?: "trial" | "custom";
  features: readonly string[];
};

export const pricingTiers: readonly PricingTierConfig[] = [
  {
    id: "trial",
    checkoutUrl: TRIAL_CHECKOUT_URL,
    price: null,
    priceDisplay: "free",
    credits: 50,
    orderClass: "order-1",
    ctaType: "checkout",
    features: [
      "7-day free trial",
      "1 Channel (WhatsApp)",
      "50 AI messages total",
      "Arabic + English replies",
      "Basic booking flow",
    ],
  },
  {
    id: "starter",
    tierIndex: 0,
    checkoutUrl: getCheckoutUrl(0),
    price: 9.9,
    priceDisplay: "amount",
    credits: 150,
    orderClass: "order-2 lg:order-2",
    ctaType: "checkout",
    features: [
      "1 Channel",
      "Image Understanding",
      "Contact Tagging",
      "Incoming Campaigns",
      "20 AI Responses / Chat",
      "20K Campaign Context",
    ],
  },
  {
    id: "growth",
    tierIndex: 1,
    checkoutUrl: getCheckoutUrl(1),
    price: 19.9,
    priceDisplay: "amount",
    credits: 300,
    popular: true,
    orderClass: "order-3 lg:order-3",
    ctaType: "checkout",
    features: [
      "3 Channels",
      "Reply to Comments",
      "Image Understanding",
      "Voice Note Understanding",
      "Document Understanding",
      "AI Appointment Booking",
      "Real-Time Web Search",
      "Contact Tagging",
      "Unlimited Contacts",
      "Unlimited Campaigns",
      "Incoming Campaigns",
      "Outgoing Campaigns",
      "Automatic Follow-Ups",
      "50 AI Responses / Chat",
      "Webhooks",
      "50K Campaign Context",
    ],
  },
  {
    id: "pro",
    tierIndex: 2,
    checkoutUrl: getCheckoutUrl(2),
    price: 39.9,
    priceDisplay: "amount",
    credits: 600,
    orderClass: "order-4 lg:order-4",
    ctaType: "checkout",
    features: [
      "Unlimited Channels",
      "Reply to Comments",
      "Image Understanding",
      "Voice Note Understanding",
      "Video Understanding",
      "Document Understanding",
      "AI Appointment Booking",
      "Real-Time Web Search",
      "Advanced Mode",
      "Contact Tagging",
      "Unlimited Contacts",
      "Unlimited Campaigns",
      "Incoming Campaigns",
      "Outgoing Campaigns",
      "Combined Campaigns",
      "Automatic Follow-Ups",
      "Unlimited AI Responses / Chat",
      "Webhooks",
      "API Access",
      "Custom Functions",
      "BYOK",
      "100K Campaign Context",
    ],
  },
  {
    id: "custom",
    price: null,
    priceDisplay: "custom",
    credits: null,
    orderClass: "order-5 lg:order-5",
    ctaType: "whatsapp",
    whatsappIntent: "custom",
    features: [
      "Multi-location rollout",
      "Dedicated account manager",
      "Custom integrations & API",
      "SLA & priority support",
      "Advanced AI training",
      "Volume-based pricing",
    ],
  },
] as const;
