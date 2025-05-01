import initTranslations from "@/app/i18n";
import SectionHeader from "@/components/ui/section-header";
import { NavLinkHref } from "@/components/navbar/utils/enums";
import SectionRef from "@/components/context/section-ref";
import { ProfileOverview } from "@/app/[locale]/_components/_about/profile-overview";
import { VisualDescriptionBlock } from "@/app/[locale]/_components/_about/visual-description-block";
import aboutPrimary from "~/public/images/about/about-primary.webp";
import TriangleCluster from "~/public/icons/triangle-cluster.svg";
import BorderTexture from "~/public/icons/border-texture.svg";

export default async function About({ locale }: { locale: string }) {
  const { t } = await initTranslations(locale, ["home"]);

  return (
    <SectionRef id={NavLinkHref.ABOUT}>
      <div className="relative flex flex-col gap-8 md:gap-20">
        <TriangleCluster className="absolute right-0 top-0 -z-10 hidden h-[296px] w-[296px] fill-muted xl:block" />

        <SectionHeader header={t("about.header")} />

        <VisualDescriptionBlock
          imageSrc={aboutPrimary}
          imageAlt="Three members of the company Brantl Partners"
          description={t("about.description")}
        />

        <ProfileOverview locale={locale} />
      </div>

      <BorderTexture className="w-full fill-muted" />
    </SectionRef>
  );
}
