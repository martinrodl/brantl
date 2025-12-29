import * as React from "react";
import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/section-header";
import initTranslations from "@/app/i18n";
import Vector from "~/public/icons/vector.svg";
import { LANGUAGES } from "@/constants/locales";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return Object.keys(LANGUAGES).map((locale) => ({
    locale,
  }));
}

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

  return (
    <main className="container mx-auto px-6 py-10 md:py-16 xl:px-20">
      <SectionHeader header={t("cookies.header")} hideArrow />

      <div className="mx-auto mt-8 max-w-3xl space-y-6 text-base leading-relaxed md:mt-10 md:text-lg">
        <p>{t("cookies.intro")}</p>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">{t("cookies.whatItMeans.title")}</h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-3">
              <Vector width={10} height={10} className="mt-[0.55rem] shrink-0 -rotate-90 fill-icon" />
              <span>
                <strong>Technické cookies</strong> – {t("cookies.whatItMeans.technical")}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Vector width={10} height={10} className="mt-[0.55rem] shrink-0 -rotate-90 fill-icon" />
              <span>
                <strong>Analytické cookies</strong> – {t("cookies.whatItMeans.analytical")}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Vector width={10} height={10} className="mt-[0.55rem] shrink-0 -rotate-90 fill-icon" />
              <span>
                <strong>Marketingové cookies</strong> – {t("cookies.whatItMeans.marketing")}
              </span>
            </li>
          </ul>
        </section>

        <p>{t("cookies.privacy")}</p>

        <p>{t("cookies.noTracking")}</p>
      </div>
    </main>
  );
}
