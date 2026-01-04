import { cn } from "@/lib/utils";
import { ProfileCard } from "./profile-card";
import initTranslations from "@/app/i18n";

const PROFILE_GRID_CLASSES = cn(
  "grid",
  "grid-cols-1 gap-y-12 px-8",
  "md:grid-cols-3 md:gap-x-8 md:gap-y-12",
  "lg:gap-x-10 lg:px-20",
);

const PROFILE_CARD_CLASSES = "place-self-start";

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
