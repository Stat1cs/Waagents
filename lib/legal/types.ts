import type { Locale } from "@/lib/i18n/translations";

export type LegalBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

export type LegalSection = {
  id: string;
  title: string;
  blocks: LegalBlock[];
};

export type LegalDocument = {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
};

export type LegalDocuments = Record<Locale, LegalDocument>;
