import * as React from "react";
import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/section-header";
import initTranslations from "@/app/i18n";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const { t } = await initTranslations(locale, ["home"]);

  return {
    title: t("whistleblower.metadata.title"),
    description: t("whistleblower.metadata.description"),
  };
}

export default async function WhistleblowerProtectionPage({ params }: Props) {
  const { locale } = await params;
  const { t } = await initTranslations(locale, ["home"]);

  return (
    <main className="container mx-auto px-6 py-10 md:py-16 xl:px-20">
      <SectionHeader header={t("whistleblower.header")} />

      <div className="mx-auto mt-8 max-w-3xl space-y-6 text-base leading-relaxed md:mt-10 md:text-lg">
        <p>{t("whistleblower.intro")}</p>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">{t("whistleblower.sections.howToReport.title")}</h2>
          <ul className="list-disc pl-6">
            <li>
              {t("whistleblower.sections.howToReport.methods.email")}{" "}
              <a
                className="underline"
                href={`mailto:${t("whistleblower.sections.howToReport.methods.emailAddress")}`}
              >
                {t("whistleblower.sections.howToReport.methods.emailAddress")}
              </a>
            </li>
            <li>{t("whistleblower.sections.howToReport.methods.mail")}</li>
            <li>{t("whistleblower.sections.howToReport.methods.inPerson")}</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">{t("whistleblower.sections.responsiblePerson.title")}</h2>
          <p>{t("whistleblower.sections.responsiblePerson.content")}</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">{t("whistleblower.sections.externalReporting.title")}</h2>
          <p>
            {t("whistleblower.sections.externalReporting.content")}{" "}
            <a
              className="underline"
              href={t("whistleblower.sections.externalReporting.linkUrl")}
              target="_blank"
              rel="noreferrer noopener"
            >
              {t("whistleblower.sections.externalReporting.linkText")}
            </a>
            .
          </p>
        </section>

        <p className="text-sm text-muted-foreground">{t("whistleblower.disclaimer")}</p>
      </div>
    </main>
  );
}
