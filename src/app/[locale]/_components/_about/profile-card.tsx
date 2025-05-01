import Image from "next/image";
import { cn } from "@/lib/utils";

const SECTION_CLASSES = "flex flex-col gap-4";
const SECTION_TITLE_CLASSES = "text-xs font-bold";
const LIST_CLASSES = "list-disc pl-5";
const LIST_ITEM_CLASSES = "text-xs font-medium";

export function ProfileCard({
  imageSrc,
  name,
  role,
  specializationTitle,
  specializations,
  cvRecords,
  className,
}: {
  imageSrc: string;
  name: string;
  role: string;
  specializationTitle: string;
  specializations: string;
  cvRecords: string;
  className?: string;
}) {
  const renderList = (items: string) => {
    return items.split("|").map((item) => (
      <li key={item} className={LIST_ITEM_CLASSES}>
        {item}
      </li>
    ));
  };

  return (
    <>
      <Image
        src={imageSrc}
        alt={`${name} - ${role}`}
        width={138}
        height={184}
        className={cn("mb-11 h-auto min-w-[138px] xl:mb-0", className)}
      />

      <div className={cn(SECTION_CLASSES, "mb-11 xl:mb-24 xl:gap-0")}>
        <p className="text-xl font-bold">{name}</p>
        <p className={SECTION_TITLE_CLASSES}>{role}</p>
      </div>

      <div className={cn(SECTION_CLASSES, "mb-4 xl:mb-8")}>
        <p className={SECTION_TITLE_CLASSES}>{specializationTitle}:</p>
        <ul className={LIST_CLASSES}>{renderList(specializations)}</ul>
      </div>

      <div className={cn(SECTION_CLASSES, "mb-16")}>
        <p className={SECTION_TITLE_CLASSES}>CV:</p>
        <ul className={LIST_CLASSES}>{renderList(cvRecords)}</ul>
      </div>
    </>
  );
}
