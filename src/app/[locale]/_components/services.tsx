import initTranslations from "@/app/i18n";
import SectionRef from "@/components/context/section-ref";
import { NavLinkHref } from "@/components/navbar/utils/enums";
import MediaTextBlock from "@/components/ui/media-text-block";
import SectionHeader from "@/components/ui/section-header";

import Services01 from "~/public/images/services/services-block-01.jpg";
import Services02 from "~/public/images/services/services-block-02.jpg";
import Services03 from "~/public/images/services/services-block-03.jpg";
import Services04 from "~/public/images/services/services-block-04.jpg";
import Services05 from "~/public/images/services/services-block-05.jpg";
import Services06 from "~/public/images/services/services-block-06.jpg";

const sections = ["first", "second", "third", "fourth", "fifth", "sixth"];
const sectionImages = [Services01, Services02, Services03, Services04, Services05, Services06];

export default async function Services({ locale }: { locale: string }) {
  const { t } = await initTranslations(locale, ["home"]);

  return (
    <SectionRef id={NavLinkHref.SERVICES} className="">
      <SectionHeader header={t("services.header")} className="mb-8 md:mb-12" />

      {sections.map((key, idx) => (
        <MediaTextBlock
          key={idx}
          image={sectionImages[idx]}
          title={t(`services.sections.${key}.title`)}
          description={t(`services.sections.${key}.description`)}
          isImageFirst={idx % 2 === 0}
        />
      ))}
    </SectionRef>
  );
}
