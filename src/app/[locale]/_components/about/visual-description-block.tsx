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
      <div className="grid items-center gap-8 md:gap-12 xl:grid-cols-2 xl:gap-0">
        <div className="relative aspect-[188/77] w-full overflow-hidden xl:h-[626px]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, (min-width: 1280px) 840px"
            className="object-cover object-[0_30%] xl:object-contain xl:object-center xl:scale-100 2xl:object-center"
          />
        </div>

        <p className="row-start-1 px-4 text-center md:px-16 md:text-lg xl:col-start-2 xl:pl-12 xl:pr-36 xl:text-start">
          {description}
        </p>
      </div>

      <BorderTexture className="w-full fill-muted xl:hidden" />
    </div>
  );
}
