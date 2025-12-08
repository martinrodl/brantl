import initTranslations from "@/app/i18n";
import { NavLinkHref } from "@/components/layout/navbar/utils/enums";
import { SectionRef } from "@/components/context/section-ref";
import { MediaTextBlock } from "@/app/[locale]/_components/services/media-text-block";
import { SectionHeader } from "@/components/ui/section-header";

import Services01 from "~/public/images/services/services-block-01.jpg";
import Services02 from "~/public/images/services/services-block-02.jpg";
import Services03 from "~/public/images/services/services-block-03.webp";
import Services04 from "~/public/images/services/services-block-04.jpg";
import Services05 from "~/public/images/services/services-block-05.jpg";
import Services06 from "~/public/images/services/services-block-06.jpg";
import BorderTexture from "~/public/icons/border-texture.svg";

const sections = {
  first: Services01,
  second: Services02,
  third: Services03,
  fourth: Services04,
  fifth: Services05,
  sixth: Services06,
};

export async function Services({ locale }: { locale: string }) {
  const { t } = await initTranslations(locale, ["home"]);

  return (
    <SectionRef id={NavLinkHref.SERVICES}>
      <SectionHeader header={t("services.header")} className="mb-8 md:mb-12" />

      {Object.entries(sections).map(([pos, image], idx) => (
        <MediaTextBlock
          key={idx}
          imageSrc={image}
          title={t(`services.sections.${pos}.title`)}
          descriptionPart1={t(`services.sections.${pos}.descriptionPart1`)}
          descriptionPart2={t(`services.sections.${pos}.descriptionPart2`)}
          isImageFirst={idx % 2 === 0}
        />
      ))}

      <BorderTexture className="w-full fill-muted" />
    </SectionRef>
  );
}
