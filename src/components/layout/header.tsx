import * as React from "react";

import Navbar from "@/components/navbar/navbar";
import TranslationsProvider from "@/components/context/translations-provider";
import initTranslations from "@/app/i18n";
import AutoHideHeader from "@/components/layout/auto-hide-header";

const i18nNamespaces = ["home"];

export default async function Header({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider namespaces={i18nNamespaces} locale={locale} resources={resources}>
      <AutoHideHeader>
        <Navbar />
      </AutoHideHeader>
    </TranslationsProvider>
  );
}
