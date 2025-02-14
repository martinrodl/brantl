import initTranslations from "@/app/i18n";
import { NavLinkHref } from "@/components/navbar/utils/enums";
import SectionRef from "@/components/context/section-ref";
import SectionHeader from "@/components/ui/section-header";
import DynamicScroller from "@/components/ui/dynamic-scroller";

const imageUrls = [
  "logos/wecubex-logo.svg",
  "logos/solodoor-logo.svg",
  "logos/fischer-group-logo.svg",
  "logos/sto-logo.svg",
  "logos/kaeser-kompressoren-logo.svg",
  "logos/konplan-logo.svg",
  "logos/enika-logo-heavy.svg",
  "logos/fibran-energy-shield-logo--old.svg",
  "logos/sbs-cargo-logo.svg",
  "logos/prevedig-logo.svg",
  "logos/grupo-copo-logo.svg",
  "logos/scania-logo.svg",
];

export default async function Testimonials({ locale }: { locale: string }) {
  const { t } = await initTranslations(locale, ["home"]);

  return (
    <SectionRef id={NavLinkHref.TESTIMONIALS} className="flex flex-col">
      <SectionHeader header={t("testimonials.header")} className="mb-48" />

      <DynamicScroller imageUrls={imageUrls} itemWidth={320} />
    </SectionRef>
  );
}
