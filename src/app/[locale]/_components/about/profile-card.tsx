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
    const itemsString = String(items);
    return itemsString.split("|").map((item, index) => (
      <li key={`${item}-${index}`} className={LIST_ITEM_CLASSES}>
        {item}
      </li>
    ));
  };

  return (
    <div className={cn("flex flex-col", className)}>
      <div className="flex flex-col items-center gap-x-8 lg:flex-row lg:items-start">
        <Image
          src={imageSrc}
          alt={`${name} - ${role}`}
          width={138}
          height={184}
          className="mb-[10px] h-auto w-[138px] flex-shrink-0"
        />
        <div className="mb-4 text-center lg:text-left">
          <p className="text-xl font-bold">{name}</p>
          <p className="text-xs font-bold">{role}</p>
        </div>
      </div>

      <div className="flex flex-col gap-y-4">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-bold">{specializationTitle}:</p>
          <ul className={LIST_CLASSES}>{renderList(specializations)}</ul>
        </div>

        <div className="flex flex-col gap-2">
          <p className={SECTION_TITLE_CLASSES}>{cvTitle}:</p>
          <ul className={LIST_CLASSES}>{renderList(cvRecords)}</ul>
        </div>
      </div>
    </div>
  );
}
