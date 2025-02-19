import Image from "next/image";

import initTranslations from "@/app/i18n";
import { NavLinkHref } from "@/components/navbar/utils/enums";
import SectionRef from "@/components/context/section-ref";
import SectionHeader from "@/components/ui/section-header";
import DynamicSlider from "@/components/ui/dynamic-slider";
import testimonials from "~/public/images/testimonials/testimonials.webp";
import SmallTexture from "~/public/icons/small-texture.svg";

const imageUrls = [
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

export default async function Testimonials({ locale }: { locale: string }) {
  const { t } = await initTranslations(locale, ["home"]);

  return (
    <SectionRef id={NavLinkHref.TESTIMONIALS} className="flex flex-col">
      <SectionHeader header={t("testimonials.header")} />

      <DynamicSlider
        imageUrls={imageUrls}
        itemBaseWidth={120}
        itemTabletWidth={160}
        itemDesktopWidth={280}
        className="mt-12"
      />

      <Image
        src={testimonials}
        alt="Handshaking representing collaboration and work"
        placeholder="blur"
        className="mt-9 min-h-[144px] lg:mt-20"
      />
      <SmallTexture className="fill-icon" />
    </SectionRef>
  );
}
