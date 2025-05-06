import Image from "next/image";
import type { StaticImageData } from "next/image";

import { Separator } from "@/components/ui/separator";
import Vector from "~/public/icons/vector.svg";

export function MediaTextBlock({
  imageSrc,
  isImageFirst = true,
  title,
  descriptionPart1,
  descriptionPart2,
}: {
  imageSrc: StaticImageData;
  isImageFirst?: boolean;
  title: string;
  descriptionPart1: string;
  descriptionPart2: string;
}) {
  return (
    <div className={`flex flex-col ${isImageFirst ? "xl:flex-row" : "xl:flex-row-reverse"}`}>
      <div className="relative aspect-[64/26] xl:h-[740px] xl:w-1/2">
        <Image src={imageSrc} alt={title} fill placeholder="blur" className="object-cover" />
      </div>

      <div className="flex flex-col items-center gap-4 px-8 py-10 md:p-14 md:px-20 xl:min-h-[740px] xl:w-1/2 xl:p-16">
        <div className="flex h-full min-h-10 w-full flex-col">
          <h1 className="text-center text-xl font-medium md:text-3.5xl xl:text-left">{title}</h1>
          <Separator className="mt-14 hidden w-1/2 border-t-[2px] border-foreground xl:block" />
          <p className="mt-6 text-xs md:text-lg xl:mt-14">{descriptionPart1}</p>
          <p className="mt-4 text-xs md:text-lg">{descriptionPart2}</p>
        </div>

        <Vector width={24} height={10} />
      </div>
    </div>
  );
}
