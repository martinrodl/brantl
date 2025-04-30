import { cn } from "@/lib/utils";

import ProfileCard from "@/components/ui/profile-card";
import initTranslations from "@/app/i18n";

export default async function ProfileOverview({ locale }: { locale: string }) {
  const { t } = await initTranslations(locale, ["home"]);

  const teamMemberPositions = ["first", "second", "third"];

  /* Grouped CSS classes for better responsiveness and easier management of UI transitions.
  This structure helps to overcome the difficulty of handling responsive behavior directly with grid utilities. */
  const cssClasses = {
    common: "grid",
    mobile: {
      grid: "grid-cols-1",
      spacing: "px-8",
    },
    tablet: {
      grid: "md:grid-cols-3 md:grid-flow-col md:grid-rows-[repeat(4,auto)]",
      spacing: "md:gap-x-4",
    },
    desktop: {
      grid: "xl:grid-cols-[repeat(6,auto)] xl:grid-rows-1",
      spacing: "xl:gap-x-10 xl:px-20",
      alignment: "xl:place-items-start",
    },
  };

  return (
    <div
      className={cn(
        cssClasses.common,
        cssClasses.mobile.grid,
        cssClasses.mobile.spacing,
        cssClasses.tablet.grid,
        cssClasses.tablet.spacing,
        cssClasses.desktop.grid,
        cssClasses.desktop.spacing,
        cssClasses.desktop.alignment,
      )}
    >
      {teamMemberPositions.map((position, idx) => (
        <ProfileCard
          key={idx}
          imageSrc={`/images/about/${position}-member.webp`}
          name={t(`about.team.${position}.name`)}
          role={t(`about.team.${position}.role`)}
          specializationTitle={t("about.team.sectionTitle.specialization")}
          specializations={t(`about.team.${position}.specializations`)}
          cvRecords={t(`about.team.${position}.cvRecords`)}
          className="xl:row-span-3 xl:place-self-start place-self-center"
        />
      ))}
    </div>
  );
}
