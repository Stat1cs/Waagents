export const CHECKOUT_BASE =
  "https://app.dmchamp.com/v1/checkout?id=sDHgSWkA7zaNUPIWq55NnQbLnHv1";

export function getCheckoutUrl(tierIndex: number): string {
  return `${CHECKOUT_BASE}&tierIndex=${tierIndex}`;
}

export type PricingTierConfig = {
  id: "starter" | "growth" | "pro";
  tierIndex: number;
  checkoutUrl: string;
  price: number;
  credits: number;
  popular?: boolean;
  orderClass?: string;
  features: readonly string[];
};

export const pricingTiers: readonly PricingTierConfig[] = [
  {
    id: "starter",
    tierIndex: 0,
    checkoutUrl: getCheckoutUrl(0),
    price: 9.9,
    credits: 150,
    orderClass: "order-2 lg:order-1",
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
    credits: 300,
    popular: true,
    orderClass: "order-1 lg:order-2",
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
    price: 34.5,
    credits: 600,
    orderClass: "order-3",
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
] as const;
