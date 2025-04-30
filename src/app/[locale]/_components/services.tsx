import initTranslations from "@/app/i18n";
import { NavLinkHref } from "@/components/navbar/utils/enums";
import SectionRef from "@/components/context/section-ref";
import MediaTextBlock from "@/components/ui/media-text-block";
import SectionHeader from "@/components/ui/section-header";

import Services01 from "~/public/images/services/services-block-01.jpg";
import Services02 from "~/public/images/services/services-block-02.jpg";
import Services03 from "~/public/images/services/services-block-03.jpg";
import Services04 from "~/public/images/services/services-block-04.jpg";
import Services05 from "~/public/images/services/services-block-05.jpg";
import Services06 from "~/public/images/services/services-block-06.jpg";
import BorderTexture from "~/public/icons/border-texture.svg";

const sections = [
  { key: "first", image: Services01 },
  { key: "second", image: Services02 },
  { key: "third", image: Services03 },
  { key: "fourth", image: Services04 },
  { key: "fifth", image: Services05 },
  { key: "sixth", image: Services06 },
];

export default async function Services({ locale }: { locale: string }) {
  const { t } = await initTranslations(locale, ["home"]);

  return (
    <SectionRef id={NavLinkHref.SERVICES}>
      <SectionHeader header={t("services.header")} className="mb-8 md:mb-12" />

      {sections.map((section, idx) => (
        <MediaTextBlock
          key={idx}
          imageSrc={section.image}
          title={t(`services.sections.${section.key}.title`)}
          descriptionPart1={t(`services.sections.${section.key}.descriptionPart1`)}
          descriptionPart2={t(`services.sections.${section.key}.descriptionPart2`)}
          isImageFirst={idx % 2 === 0}
        />
      ))}

      <BorderTexture className="w-full fill-muted" />
    </SectionRef>
  );
}
