import Image from "next/image";

import initTranslations from "@/app/i18n";
import heroBanner from "~/public/images/hero/hero-banner.webp";
import Vector from "~/public/icons/vector.svg";
import BorderTexture from "~/public/icons/border-texture.svg";

export default async function Hero({ locale }: { locale: string }) {
  const { t } = await initTranslations(locale, ["home"]);

  return (
    <section id="hero">
      <div className="relative flex justify-center overflow-hidden">
        <div className="relative h-[820px] w-full md:h-[968px]">
          <Image src={heroBanner} alt="Hero banner image" priority fill className="object-cover" />
        </div>

        <div className="absolute mx-6 flex h-full max-w-[800px] flex-col md:mx-16">
          <div className="my-auto flex flex-col gap-24 self-center text-center text-inverse-foreground lg:gap-20">
            <h1 className="text-3xl font-medium md:text-5xl lg:text-6xl">{t("hero.header")}</h1>
            <p className="text-2xl">{t("hero.description")}</p>
          </div>

          <Vector
            width={24}
            height={10}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 fill-icon-inverse md:bottom-8"
          />
        </div>
      </div>

      <BorderTexture className="w-full fill-icon" />
    </section>
  );
}
