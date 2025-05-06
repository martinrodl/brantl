import Image from "next/image";

import initTranslations from "@/app/i18n";
import { NavLinkHref } from "@/components/layout/navbar/utils/enums";
import { SectionRef } from "@/components/context/section-ref";
import { SectionHeader } from "@/components/ui/section-header";
import { DynamicSlider } from "@/app/[locale]/_components/testimonials/dynamic-slider";
import testimonials from "~/public/images/testimonials/testimonials.webp";
import SmallTexture from "~/public/icons/small-texture.svg";

const PARTNER_LOGOS = [
  "logos/wecubex-logo.svg",
  "logos/solodoor-logo.svg",
  "logos/fischer-group-logo.svg",
  "logos/sto-logo.svg",
  "logos/kaeser-kompressoren-logo.svg",
  "logos/konplan-logo.svg",
  "logos/enika-logo.svg",
  "logos/fibran-energy-shield-logo.svg",
  "logos/sbs-cargo-logo.svg",
  "logos/prevedig-logo.svg",
  "logos/grupo-copo-logo.svg",
  "logos/scania-logo.svg",
];

export async function Testimonials({ locale }: { locale: string }) {
  const { t } = await initTranslations(locale, ["home"]);

  return (
    <SectionRef id={NavLinkHref.TESTIMONIALS} className="flex flex-col">
      <SectionHeader header={t("testimonials.header")} />

      <DynamicSlider
        imageUrls={PARTNER_LOGOS}
        itemBaseWidth={120}
        itemTabletWidth={160}
        itemDesktopWidth={280}
        className="mt-12"
      />

      <div className="relative aspect-[188/77] w-full overflow-hidden xl:h-[420px]">
        <Image
          src={testimonials}
          alt="Handshaking representing collaboration and work"
          fill
          className="object-cover object-[0_40%] xl:object-[0_50%]"
        />
      </div>
      <SmallTexture className="fill-icon" />
    </SectionRef>
  );
}
