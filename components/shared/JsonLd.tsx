import { WEBSITE_URL } from "@/lib/constants";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Wa-Agents",
  url: WEBSITE_URL,
  logo: `${WEBSITE_URL}/Logo/wa_logo.png`,
  description:
    "Wa-Agents is an AI-powered WhatsApp automation platform for businesses — booking appointments, qualifying leads, and replying in Arabic and English.",
  areaServed: {
    "@type": "Country",
    name: "Oman",
  },
  sameAs: [],
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Wa-Agents",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "OMR",
    lowPrice: "77",
    highPrice: "250",
    offerCount: "3",
  },
  description:
    "WhatsApp AI automation for clinics, real estate, salons, and service businesses in Oman and the GCC. Automate replies, bookings, and lead qualification in Arabic and English.",
  featureList: [
    "WhatsApp AI auto-replies",
    "Arabic and English bilingual support",
    "AI appointment booking",
    "Lead qualification",
    "Instagram DM integration",
    "CRM integrations",
  ],
  provider: {
    "@type": "Organization",
    name: "Wa-Agents",
    url: WEBSITE_URL,
  },
};

export function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
    </>
  );
}
