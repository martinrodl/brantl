"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

import { navLinks } from "@/components/layout/navbar/utils/constants";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { NavbarButton } from "@/components/layout/navbar/navbar-button";
import footerBackground from "~/public/images/footer/footer-bg.jpg";
import Logo from "~/public/logos/brantl-partners-logo.svg";

export function Footer() {
  const params = useParams();
  const locale = params?.locale || "cs";
  
  return (
    <footer className="container relative flex min-h-[292px] flex-col items-center justify-between gap-6 p-9 pt-16 md:h-[367px] md:gap-10 md:p-16">
      <Image
        src={footerBackground}
        alt="Image showing buildings"
        className="absolute left-0 top-0 -z-10 h-full w-full object-cover"
      />

      <nav className="flex w-full flex-col justify-between md:max-w-[800px] md:flex-row md:items-center">
        {navLinks.map((navLink) => (
          <NavbarButton
            key={`footer-${navLink.href}`}
            type="button"
            role="link"
            navLink={navLink}
            variant="ghostInverse"
            className="justify-between text-sm font-medium"
          />
        ))}
        <LanguageSwitcher buttonClassName="text-sm ml-2 md:ml-0 p-1 h-auto" />
      </nav>

      <Link href={`/${locale}`} className="block">
        <Logo className="h-fit w-[144px] shrink-0 fill-icon-inverse md:w-[206px]" />
      </Link>

      <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-[hsl(var(--inverse-foreground))]">
        <Link href={`/${locale}/ochrana-oznamovatelu`} className="hover:underline">
          Ochrana oznamovatelů
        </Link>
        <Link href={`/${locale}/cookies`} className="hover:underline">
          Cookies
        </Link>
      </div>
    </footer>
  );
}
