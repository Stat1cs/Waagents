import type { Metadata } from "next";

import { LegalDocumentPage } from "@/components/legal/LegalDocumentPage";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Read the terms governing use of Wa-Agents, our AI messaging platform for WhatsApp, Instagram, and Messenger.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return <LegalDocumentPage type="terms" />;
}
