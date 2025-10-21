import * as React from "react";
import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/section-header";

export const metadata: Metadata = {
  title: "Cookies | Brantl",
  description: "Informace o používání souborů cookies na webu Brantl & Partners.",
};

export default function CookiesPage() {
  return (
    <main className="container mx-auto px-6 py-10 md:py-16 xl:px-20">
      <SectionHeader header="Cookies" />

      <div className="mx-auto mt-8 max-w-3xl space-y-6 text-base leading-relaxed md:mt-10 md:text-lg">
        <p>
          Tento web používá soubory cookies, aby správně fungoval a abychom mohli vylepšovat jeho obsah a vaše
          uživatelské prostředí. Níže najdete přehled typů cookies a informace o tom, jak je lze spravovat.
        </p>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Co jsou cookies</h2>
          <p>
            Cookies jsou malé textové soubory ukládané do vašeho zařízení, které umožňují webu rozpoznat vaše
            zařízení, pamatovat si vaše volby nebo sledovat, jak web používáte.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Jaké cookies používáme</h2>
          <ul className="list-disc pl-6">
            <li>
              <strong>Nezbytné (technické)</strong> – nutné pro základní funkce webu (např. bezpečnost, navigace,
              uložení jazykové volby). Tyto cookies nelze vypnout.
            </li>
            <li>
              <strong>Preferenční</strong> – pomáhají si pamatovat vaše nastavení a zlepšují komfort používání webu.
            </li>
            <li>
              <strong>Analytické</strong> – anonymně měří návštěvnost a používání webu, abychom mohli zlepšovat obsah.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Správa a odmítnutí cookies</h2>
          <p>
            Cookies můžete kdykoli spravovat či odmítnout v nastavení svého prohlížeče. Způsob se může lišit podle
            konkrétního prohlížeče (Chrome, Firefox, Safari, Edge). Obvykle je najdete v části Soukromí / Bezpečnost.
            Upozorňujeme, že vypnutí některých cookies může omezit funkčnost webu.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Kontakt</h2>
          <p>
            Máte‑li dotazy k používání cookies, napište nám na <a className="underline" href="mailto:info@brantl.cz">info@brantl.cz</a>.
          </p>
        </section>

        <p className="text-sm text-muted-foreground">Poslední aktualizace: {new Date().toLocaleDateString("cs-CZ")}</p>
      </div>
    </main>
  );
}
