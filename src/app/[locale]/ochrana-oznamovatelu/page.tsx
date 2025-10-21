import * as React from "react";
import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/section-header";

export const metadata: Metadata = {
  title: "Ochrana oznamovatelů | Brantl",
  description:
    "Informace o režimu ochrany oznamovatelů (whistleblowing) ve společnosti Brantl & Partners a způsobech, jak podat oznámení.",
};

export default function WhistleblowerProtectionPage() {
  return (
    <main className="container mx-auto px-6 py-10 md:py-16 xl:px-20">
      <SectionHeader header="Ochrana oznamovatelů" />

      <div className="mx-auto mt-8 max-w-3xl space-y-6 text-base leading-relaxed md:mt-10 md:text-lg">
        <p>
          Společnost Brantl & Partners, s.r.o., v souladu se zákonem č. 171/2023 Sb., o ochraně oznamovatelů,
          zavedla vnitřní oznamovací systém pro podávání oznámení o možném protiprávním jednání, ke kterému došlo
          nebo má dojít v pracovním kontextu.
        </p>
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Jak podat oznámení</h2>
          <ul className="list-disc pl-6">
            <li>
              E‑mailem na adresu: <a className="underline" href="mailto:whistleblowing@brantl.cz">whistleblowing@brantl.cz</a>
            </li>
            <li>
              Písemně na adresu sídla společnosti s viditelným označením „Oznámení – pouze do rukou příslušné osoby“.
            </li>
            <li>
              Osobně po předchozí domluvě s příslušnou osobou.
            </li>
          </ul>
        </section>
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Příslušná osoba</h2>
          <p>
            Příslušná osoba přijímá a posuzuje oznámení, komunikuje s oznamovateli a navrhuje nápravná opatření.
            Kontakt na příslušnou osobu bude sdělen na vyžádání prostřednictvím výše uvedeného e‑mailu.
          </p>
        </section>
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Externí podání</h2>
          <p>
            Oznámení lze podat také prostřednictvím Ministerstva spravedlnosti ČR. Aktuální informace a formulář jsou
            k dispozici na webu <a className="underline" href="https://oznamovatel.justice.cz/" target="_blank" rel="noreferrer noopener">oznamovatel.justice.cz</a>.
          </p>
        </section>
        <p className="text-sm text-muted-foreground">
          Tento text má informativní charakter a může být dále upřesněn interní směrnicí společnosti.
        </p>
      </div>
    </main>
  );
}
