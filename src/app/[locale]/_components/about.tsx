import Image from "next/image";

import initTranslations from "@/app/i18n";
import SectionHeader from "@/components/ui/section-header";
import TriangleCluster from "~/public/icons/triangle-cluster.svg";
import SectionRef from "@/components/context/section-ref";
import { NavLinkHref } from "@/components/navbar/utils/enums";
import BorderTexture from "~/public/icons/border-texture.svg";

export default async function About({ locale }: { locale: string }) {
  const { t } = await initTranslations(locale, ["home"]);

  return (
    <SectionRef id={NavLinkHref.ABOUT} className="relative flex flex-col gap-6 lg:gap-12">
      <TriangleCluster className="absolute right-0 top-0 -z-10 hidden h-[296px] w-[296px] fill-icon lg:block" />

      <SectionHeader header={t("about.header")} />

      <div className="flex flex-col-reverse items-center lg:flex-row">
        <BorderTexture className="w-full fill-icon lg:hidden" />
        <Image
          src="/images/about/about.webp"
          alt={t("about.picture.alt")}
          width={838}
          height={626}
          className="h-[40vw] w-full object-cover object-[0_20%] lg:h-auto lg:w-1/2"
        />

        <p className="self-center justify-self-center p-4 text-center md:px-16 md:py-7 lg:w-1/2 lg:py-0 lg:pb-14 lg:pl-16 lg:pr-44 lg:text-lg">
          {t("about.description")}
        </p>
      </div>
    </SectionRef>
  );
}
