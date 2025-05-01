import Image from "next/image";
import type { StaticImageData } from "next/image";

import BorderTexture from "~/public/icons/border-texture.svg";

export function VisualDescriptionBlock({
  imageSrc,
  imageAlt,
  description,
}: {
  imageSrc: StaticImageData;
  imageAlt: string;
  description: string;
}) {
  return (
    <div>
      <div className="flex flex-col-reverse items-center gap-6 md:gap-10 xl:flex-row xl:gap-0">
        <Image src={imageSrc} alt={imageAlt} placeholder="blur" className="w-full object-cover xl:h-[626px] xl:w-1/2" />

        <p className="px-4 text-center md:px-16 md:text-lg xl:px-12 xl:text-start 2xl:w-1/2 2xl:pl-20 2xl:pr-36">
          {description}
        </p>
      </div>

      <BorderTexture className="w-full fill-muted xl:hidden" />
    </div>
  );
}
