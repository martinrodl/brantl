import { cn } from "@/lib/utils";
import { ProfileCard } from "./profile-card";
import initTranslations from "@/app/i18n";

const PROFILE_GRID_CLASSES = cn(
  "grid",
  "grid-cols-1 px-8",
  "md:grid-cols-3 md:grid-flow-col md:grid-rows-[repeat(4,auto)] md:gap-x-4",
  "xl:grid-cols-[repeat(6,auto)] xl:grid-rows-1 xl:gap-x-10 xl:px-20 xl:place-items-start",
);

const PROFILE_CARD_CLASSES = "xl:row-span-3 xl:place-self-start place-self-center";

const TEAM_MEMBERS = ["first", "second", "third"] as const;

export async function ProfileOverview({ locale }: { locale: string }) {
  const { t } = await initTranslations(locale, ["home"]);

  const getTeamMemberTranslations = (position: (typeof TEAM_MEMBERS)[number]) => ({
    name: t(`about.team.${position}.name`),
    role: t(`about.team.${position}.role`),
    specializations: t(`about.team.${position}.specializations`),
    cvRecords: t(`about.team.${position}.cvRecords`),
  });

  return (
    <div className={PROFILE_GRID_CLASSES}>
      {TEAM_MEMBERS.map((position, idx) => {
        const memberData = getTeamMemberTranslations(position);

        return (
          <ProfileCard
            key={idx}
            imageSrc={`/images/about/${position}-member.jpg`}
            name={memberData.name}
            role={memberData.role}
            specializationTitle={t("about.team.sectionTitle.specialization")}
            specializations={memberData.specializations}
            cvTitle={t("about.team.sectionTitle.experience")}
            cvRecords={memberData.cvRecords}
            className={PROFILE_CARD_CLASSES}
          />
        );
      })}
    </div>
  );
}
