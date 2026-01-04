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
    title: String(t("whistleblower.metadata.title")),
    description: String(t("whistleblower.metadata.description")),
  };
}

export default async function WhistleblowerProtectionPage({ params }: Props) {
  const { locale } = await params;
  const { t } = await initTranslations(locale, ["home"]);

  return (
    <main className="container mx-auto px-6 pt-24 pb-10 md:pt-28 md:pb-16 xl:px-20">
      <SectionHeader header={t("whistleblower.header")} hideArrow />

      <div className="mx-auto mt-8 max-w-3xl space-y-6 text-base leading-relaxed md:mt-10 md:text-lg">
        <p>{t("whistleblower.intro")}</p>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">{t("whistleblower.whatIs.title")}</h2>
          <p>{t("whistleblower.whatIs.content")}</p>
          <ul className="space-y-2">
            <li className="flex items-start gap-3">
              <Vector width={10} height={10} className="-rotate-90 shrink-0 fill-icon mt-[0.55rem]" />
              <span>{t("whistleblower.whatIs.list1")}</span>
            </li>
            <li className="flex items-start gap-3">
              <Vector width={10} height={10} className="-rotate-90 shrink-0 fill-icon mt-[0.55rem]" />
              <span>{t("whistleblower.whatIs.list2")}</span>
            </li>
          </ul>
          <p>{t("whistleblower.whatIs.priority")}</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">{t("whistleblower.violations.title")}</h2>
          <p>{t("whistleblower.violations.intro")}</p>
          <ul className="space-y-2">
            <li className="flex items-start gap-3">
              <Vector width={10} height={10} className="-rotate-90 shrink-0 fill-icon mt-[0.55rem]" />
              <span>{t("whistleblower.violations.list1")}</span>
            </li>
            <li className="flex items-start gap-3">
              <Vector width={10} height={10} className="-rotate-90 shrink-0 fill-icon mt-[0.55rem]" />
              <span>{t("whistleblower.violations.list2")}</span>
            </li>
            <li className="flex items-start gap-3">
              <Vector width={10} height={10} className="-rotate-90 shrink-0 fill-icon mt-[0.55rem]" />
              <span>{t("whistleblower.violations.list3")}</span>
            </li>
            <li className="flex items-start gap-3">
              <Vector width={10} height={10} className="-rotate-90 shrink-0 fill-icon mt-[0.55rem]" />
              <span>{t("whistleblower.violations.list4")}</span>
            </li>
            <li className="flex items-start gap-3">
              <Vector width={10} height={10} className="-rotate-90 shrink-0 fill-icon mt-[0.55rem]" />
              <span>{t("whistleblower.violations.list5")}</span>
            </li>
            <li className="flex items-start gap-3">
              <Vector width={10} height={10} className="-rotate-90 shrink-0 fill-icon mt-[0.55rem]" />
              <span>{t("whistleblower.violations.list6")}</span>
            </li>
            <li className="flex items-start gap-3">
              <Vector width={10} height={10} className="-rotate-90 shrink-0 fill-icon mt-[0.55rem]" />
              <span>{t("whistleblower.violations.list7")}</span>
            </li>
            <li className="flex items-start gap-3">
              <Vector width={10} height={10} className="-rotate-90 shrink-0 fill-icon mt-[0.55rem]" />
              <span>{t("whistleblower.violations.list8")}</span>
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">{t("whistleblower.howToReport.title")}</h2>
          <p>{t("whistleblower.howToReport.intro")}</p>
          <ul className="space-y-2">
            <li className="flex items-start gap-3">
              <Vector width={10} height={10} className="-rotate-90 shrink-0 fill-icon mt-[0.55rem]" />
              <span><strong>{t("whistleblower.howToReport.labelInPerson")}</strong> {t("whistleblower.howToReport.inPerson")}</span>
            </li>
            <li className="flex items-start gap-3">
              <Vector width={10} height={10} className="-rotate-90 shrink-0 fill-icon mt-[0.55rem]" />
              <span><strong>{t("whistleblower.howToReport.labelPhone")}</strong> {t("whistleblower.howToReport.phone")}</span>
            </li>
            <li className="flex items-start gap-3">
              <Vector width={10} height={10} className="-rotate-90 shrink-0 fill-icon mt-[0.55rem]" />
              <span><strong>{t("whistleblower.howToReport.labelMail")}</strong> {t("whistleblower.howToReport.mail")}</span>
            </li>
            <li className="flex items-start gap-3">
              <Vector width={10} height={10} className="-rotate-90 shrink-0 fill-icon mt-[0.55rem]" />
              <span><strong>{t("whistleblower.howToReport.labelEmail")}</strong> {t("whistleblower.howToReport.email")} <a className="underline" href="mailto:info@brantl.cz">info@brantl.cz</a></span>
            </li>
          </ul>
          <p>{t("whistleblower.howToReport.protection")}</p>
          <p>{t("whistleblower.howToReport.external")}</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">{t("whistleblower.noRetaliation.title")}</h2>
          <p>{t("whistleblower.noRetaliation.content")}</p>
        </section>
      </div>
    </main>
  );
}
