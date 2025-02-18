import Image from "next/image";

import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/context/translations-provider";
import { navLinks } from "@/components/navbar/utils/constants";
import LanguageSwitcher from "@/components/ui/language-switcher";
import footerBackground from "~/public/images/footer/footer-bg.webp";
import Logo from "~/public/logos/brantl-partners-logo.svg";
import { NavbarVerticalButton } from "@/components/navbar/navbar-vertical-button";
import * as React from "react";

const i18nNamespaces = ["home"];

export default async function Footer({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider namespaces={i18nNamespaces} locale={locale} resources={resources}>
      <footer className="container relative flex min-h-[292px] flex-col items-center justify-between gap-6 p-9 pt-16 md:h-[367px] md:gap-10 md:p-16">
        <Image
          src={footerBackground}
          alt="Image showing buildings"
          className="absolute left-0 top-0 -z-10 h-full w-full object-cover"
        />

        <nav className="flex w-full flex-col justify-between md:max-w-[800px] md:flex-row md:items-center">
          {navLinks.map((navLink) => (
            <NavbarVerticalButton
              key={`footer-${navLink.href}`}
              navLink={navLink}
              variant="ghostInverse"
              className="justify-between text-sm"
            />
          ))}
          <LanguageSwitcher preserveMenuState buttonClassName="text-sm ml-2 md:ml-0 p-1 h-auto" />
        </nav>

        <Logo className="h-fit w-[144px] shrink-0 fill-icon-inverse md:w-[206px]" />
      </footer>
    </TranslationsProvider>
  );
}
