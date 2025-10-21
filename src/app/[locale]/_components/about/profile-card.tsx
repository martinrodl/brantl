import Image from "next/image";
import { cn } from "@/lib/utils";

const SECTION_CLASSES = "flex flex-col gap-2";
const SECTION_TITLE_CLASSES = "text-xs font-bold";
const LIST_CLASSES = "list-disc pl-5";
const LIST_ITEM_CLASSES = "text-xs font-medium";

export function ProfileCard({
  imageSrc,
  name,
  role,
  specializationTitle,
  specializations,
  cvTitle,
  cvRecords,
  className,
}: {
  imageSrc: string;
  name: string;
  role: string;
  specializationTitle: string;
  specializations: string;
  cvTitle: string;
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
    <div className={cn("md:flex md:items-start md:gap-x-8", className)}>
      <Image
        src={imageSrc}
        alt={`${name} - ${role}`}
        width={138}
        height={184}
        className={cn("mb-8 h-auto min-w-[138px] md:mb-0", className)}
      />

      <div className="flex flex-col">
        <div className={cn(SECTION_CLASSES, "mb-0 xl:mb-1 xl:gap-0")}> 
          <p className="text-xl font-bold">{name}</p>
          <p className={cn(SECTION_TITLE_CLASSES, "mb-0")}>{role}</p>
        </div>

          <div className={cn("flex flex-col gap-2 mt-2 mb-2 xl:mt-3 xl:mb-3")}> 
          <p className={cn(SECTION_TITLE_CLASSES, "mt-0")}>{specializationTitle}:</p>
          <ul className={LIST_CLASSES}>{renderList(specializations)}</ul>
        </div>

          <div className={cn("flex flex-col gap-2 mb-4")}> 
    <p className={SECTION_TITLE_CLASSES}>{cvTitle}:</p>
          <ul className={LIST_CLASSES}>{renderList(cvRecords)}</ul>
        </div>
      </div>
    </div>
  );
}
