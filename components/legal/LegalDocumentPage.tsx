"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { privacyPolicy } from "@/lib/legal/privacy";
import { termsOfService } from "@/lib/legal/terms";
import { cn } from "@/lib/utils";

type LegalPageType = "privacy" | "terms";

const documents = {
  privacy: privacyPolicy,
  terms: termsOfService,
} as const;

const relatedPages: Record<
  LegalPageType,
  { href: string; labelKey: string; fallback: string }
> = {
  privacy: {
    href: "/terms",
    labelKey: "termsLink",
    fallback: "Terms and Conditions",
  },
  terms: {
    href: "/privacy",
    labelKey: "privacyLink",
    fallback: "Privacy Policy",
  },
};

type LegalDocumentPageProps = {
  type: LegalPageType;
};

export function LegalDocumentPage({ type }: LegalDocumentPageProps) {
  const { locale } = useLanguage();
  const { t } = useTranslation("legal");
  const document = documents[type][locale];
  const related = relatedPages[type];

  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-12rem)] bg-background px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft
              className={cn("h-4 w-4", locale === "ar" && "rotate-180")}
              aria-hidden
            />
            {t("backToHome", "Back to home")}
          </Link>

          <header className="mb-10 border-b border-border pb-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              {t("label", "Legal")}
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {document.title}
            </h1>
            <p className="mt-4 text-sm text-muted-foreground">
              {t("lastUpdated", "Last updated")}: {document.lastUpdated}
            </p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {document.intro}
            </p>
          </header>

          <article className="space-y-10">
            {document.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-28">
                <h2 className="mb-4 text-xl font-semibold tracking-tight text-foreground">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.blocks.map((block, index) => {
                    if (block.type === "paragraph") {
                      return (
                        <p
                          key={`${section.id}-p-${index}`}
                          className="text-sm leading-7 text-muted-foreground sm:text-base"
                        >
                          {block.text}
                        </p>
                      );
                    }

                    return (
                      <ul
                        key={`${section.id}-l-${index}`}
                        className="list-disc space-y-2 ps-5 text-sm leading-7 text-muted-foreground sm:text-base"
                      >
                        {block.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    );
                  })}
                </div>
              </section>
            ))}
          </article>

          <div className="mt-12 rounded-2xl border border-border bg-secondary/20 px-5 py-4 sm:px-6">
            <p className="text-sm text-muted-foreground">
              {t("relatedPrefix", "See also")}{" "}
              <Link
                href={related.href}
                className="font-medium text-foreground underline-offset-4 hover:underline"
              >
                {t(related.labelKey, related.fallback)}
              </Link>
              .
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
