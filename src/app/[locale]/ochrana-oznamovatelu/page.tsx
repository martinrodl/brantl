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
    title: String(t("whistleblower.metadata.title")),
    description: String(t("whistleblower.metadata.description")),
  };
}

export default async function WhistleblowerProtectionPage({ params }: Props) {
  const { locale } = await params;
  const { t } = await initTranslations(locale, ["home"]);

  return (
    <main className="container mx-auto px-6 py-10 md:py-16 xl:px-20">
      <SectionHeader header={t("whistleblower.header")} hideArrow />

      <div className="mx-auto mt-8 max-w-3xl space-y-6 text-base leading-relaxed md:mt-10 md:text-lg">
        <p>
          Společnost Brantl & Partners implementovala vnitřní systém pro přijímání a vyřizování oznámení podle zákona
          o ochraně oznamovatelů. Tento systém umožňuje zaměstnancům a dalším osobám upozornit na podezření z
          protiprávního jednání.
        </p>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Jak podat oznámení</h2>
          <ul className="space-y-2">
            <li className="flex items-center gap-3">
              <Vector width={10} height={10} className="-rotate-90 shrink-0 fill-icon" />
              <span>
                E-mailem na adresu:{" "}
                <a className="underline" href="mailto:oznameni@brantl.cz">
                  oznameni@brantl.cz
                </a>
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Vector width={10} height={10} className="-rotate-90 shrink-0 fill-icon" />
              <span>Poštou na adresu společnosti (označeno jako „důvěrné")</span>
            </li>
            <li className="flex items-center gap-3">
              <Vector width={10} height={10} className="-rotate-90 shrink-0 fill-icon" />
              <span>Osobně u odpovědné osoby (po předchozí domluvě)</span>
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Odpovědná osoba</h2>
          <p>
            Za příjem a vyřizování oznámení odpovídá Ing. Jan Brantl. Kontakt: info@brantl.cz, +420 226 886 920.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Externí oznamování</h2>
          <p>
            Oznamovatel může podat oznámení také přímo příslušnému orgánu veřejné moci. Více informací najdete na{" "}
            <a
              className="underline"
              href="https://www.ochranoznamovatelu.cz"
              target="_blank"
              rel="noreferrer noopener"
            >
              www.ochranoznamovatelu.cz
            </a>
            .
          </p>
        </section>

        <p className="text-sm text-muted-foreground">
          Tento systém slouží výhradně k oznamování protiprávního jednání. Zneužití systému může mít právní následky.
        </p>
      </div>
    </main>
  );
}
