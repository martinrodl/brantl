import initTranslations from "@/app/i18n";
import SectionHeader from "@/components/ui/section-header";
import SectionRef from "@/components/context/section-ref";
import { NavLinkHref } from "@/components/navbar/utils/enums";
import ProfileOverview from "@/components/ui/profile-overview";
import ImageWithDescription from "@/components/ui/visual-description-block";
import TriangleCluster from "~/public/icons/triangle-cluster.svg";
import BorderTexture from "~/public/icons/border-texture.svg";

export default async function About({ locale }: { locale: string }) {
  const { t } = await initTranslations(locale, ["home"]);

  return (
    <SectionRef id={NavLinkHref.ABOUT}>
      <div className="relative flex flex-col gap-8 md:gap-20">
        <TriangleCluster className="absolute right-0 top-0 -z-10 hidden h-[296px] w-[296px] fill-icon lg:block" />

        <SectionHeader header={t("about.header")} />

        <ImageWithDescription
          imageSrc="/images/about/about-primary.webp"
          imageAlt="Three members of the company Brantl Partners"
          width={838}
          height={626}
          description={t("about.description")}
        />

        <ProfileOverview locale={locale} />
      </div>

      <BorderTexture className="w-full fill-icon" />
    </SectionRef>
  );
}
