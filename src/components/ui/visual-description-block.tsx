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
      <div className="flex flex-col-reverse items-center gap-6 md:gap-10 lg:flex-row lg:gap-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          placeholder="blur"
          className="h-[40vw] w-full object-cover object-[0_20%] lg:h-auto lg:w-1/2"
        />

        <p className="px-4 text-center md:px-16 md:text-lg lg:w-1/2 lg:pr-36 lg:text-start">{description}</p>
      </div>

      <BorderTexture className="w-full fill-icon lg:hidden" />
    </div>
  );
}
