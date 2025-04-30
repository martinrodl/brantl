import Image from "next/image";
import type { StaticImageData } from "next/image";

import BorderTexture from "~/public/icons/border-texture.svg";

export default function ImageWithDescription({
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
      <div className="xl:flex-row xl:gap-0 flex flex-col-reverse items-center gap-6 md:gap-10">
        <Image src={imageSrc} alt={imageAlt} placeholder="blur" className="xl:h-[626px] xl:w-1/2 w-full object-cover" />

        <p className="2xl:w-1/2 2xl:pr-36 2xl:pl-20 xl:text-start xl:px-12 px-4 text-center md:px-16 md:text-lg">
          {description}
        </p>
      </div>

      <BorderTexture className="xl:hidden w-full fill-muted" />
    </div>
  );
}
