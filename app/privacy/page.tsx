import type { Metadata } from "next";

import { LegalDocumentPage } from "@/components/legal/LegalDocumentPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Wa-Agents collects, uses, and protects personal information for businesses using our AI WhatsApp inbox.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return <LegalDocumentPage type="privacy" />;
}
