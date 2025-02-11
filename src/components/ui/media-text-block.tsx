import Image from "next/image";
import type { StaticImageData } from "next/image";

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
    <div className={`flex ${isImageFirst ? "flex-row" : "flex-row-reverse"}`}>
      <div className="relative aspect-square w-1/2">
        <Image src={image} alt={title} fill style={{ objectFit: "cover" }} />
      </div>

      <div className="relative flex aspect-square w-1/2 flex-col justify-center pl-20 pr-24">
        <h1 className="text-3.5xl font-medium">{title}</h1>
        <hr className="mb-14 mt-24 w-1/2 border-t-[2px] border-foreground" />
        <p className="text-lg">{description}</p>
        <Vector width={24} height={10} className="absolute bottom-20 right-1/2 translate-x-1/2" />
      </div>
    </div>
  );
}
