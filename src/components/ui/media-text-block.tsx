import Image from "next/image";
import type { StaticImageData } from "next/image";

import { Separator } from "@/components/ui/separator";
import Vector from "~/public/icons/vector.svg";

export default function MediaTextBlock({
  image,
  isImageFirst = true,
  title,
  description,
}: {
  image: StaticImageData;
  isImageFirst?: boolean;
  title: string;
  description: string;
}) {
  return (
    <div className={`flex flex-col ${isImageFirst ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
      <div className="relative aspect-[64/26] lg:aspect-square lg:w-1/2">
        <Image src={image} alt={title} fill placeholder="blur" className="object-cover" />
      </div>

      <div className="flex w-full flex-col justify-center px-8 md:px-16 lg:aspect-square lg:w-1/2 lg:pl-20 lg:pr-24">
        <div className="my-12 flex flex-grow flex-col justify-center lg:mb-0 lg:mt-20">
          <h1 className="mb-6 text-center text-xl font-medium md:text-3.5xl lg:mt-24 lg:text-left">{title}</h1>
          <Separator className="mb-14 hidden w-1/2 border-t-[2px] border-foreground lg:block" />
          <p className="text-xs md:text-lg">{description}</p>
        </div>

        <Vector width={24} height={10} className="mb-10 self-center lg:mb-20" />
      </div>
    </div>
  );
}
