import * as React from "react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/footer/footer";
import { ScrollProvider } from "@/components/context/scroll-provider";
import { TranslationsProvider } from "~/src/components/context/translations-provider";
import initTranslations from "@/app/i18n";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Brantl - Pragmatické poradenství pro moderní firmy",
  description: "Brantl poskytuje poradenství zaměřené na inovace, růst a efektivitu moderních firem.",
  openGraph: {
    title: "Brantl - Pragmatické poradenství pro moderní firmy",
    description: "Pragmatické poradenství zaměřené na pomoc moderním firmám s růstem a inovacemi.",
    url: "https://brantl.cz",
  },
};

const i18nNamespaces = ["home"];

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <html>
      <body className={`${montserrat.className} antialiased`}>
        <TranslationsProvider namespaces={i18nNamespaces} locale={locale} resources={resources}>
          <ScrollProvider>
            <Header />
            {children}
            <Footer />
          </ScrollProvider>
        </TranslationsProvider>
      </body>
    </html>
  );
}
