import * as React from "react";
import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/section-header";
import initTranslations from "@/app/i18n";
import Vector from "~/public/icons/vector.svg";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const { t } = await initTranslations(locale, ["home"]);

  return {
    title: String(t("cookies.metadata.title")),
    description: String(t("cookies.metadata.description")),
  };
}

export default async function CookiesPage({ params }: Props) {
  const { locale } = await params;
  const { t } = await initTranslations(locale, ["home"]);
  
  const lastUpdateDate = new Date().toLocaleDateString(locale === "cs" ? "cs-CZ" : locale === "de" ? "de-DE" : "en-US");

  return (
    <main className="container mx-auto px-6 py-10 md:py-16 xl:px-20">
      <SectionHeader header={t("cookies.header")} />

      <div className="mx-auto mt-8 max-w-3xl space-y-6 text-base leading-relaxed md:mt-10 md:text-lg">
        <p>{t("cookies.intro")}</p>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">{t("cookies.sections.whatAre.title")}</h2>
          <p>{t("cookies.sections.whatAre.content")}</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">{t("cookies.sections.types.title")}</h2>
          <ul className="space-y-2">
            <li className="flex items-center gap-3">
              <Vector width={10} height={10} className="-rotate-90 shrink-0 fill-icon" />
              <span>
                <strong>Nezbytné (technické)</strong> – {t("cookies.sections.types.items.necessary")}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Vector width={10} height={10} className="-rotate-90 shrink-0 fill-icon" />
              <span>
                <strong>Preferenční</strong> – {t("cookies.sections.types.items.preferential")}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Vector width={10} height={10} className="-rotate-90 shrink-0 fill-icon" />
              <span>
                <strong>Analytické</strong> – {t("cookies.sections.types.items.analytical")}
              </span>
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">{t("cookies.sections.management.title")}</h2>
          <p>{t("cookies.sections.management.content")}</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Kontakt</h2>
          <p>
            {t("cookies.contact.text")}{" "}
            <a className="underline" href={`mailto:${t("cookies.contact.email")}`}>
              {t("cookies.contact.email")}
            </a>
            .
          </p>
        </section>

        <p className="text-sm text-muted-foreground">
          {t("cookies.lastUpdate")} {lastUpdateDate}
        </p>
      </div>
    </main>
  );
}
