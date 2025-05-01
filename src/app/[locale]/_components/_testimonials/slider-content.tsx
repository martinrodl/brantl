import Image from "next/image";
import { CarouselContent, CarouselItem } from "@/components/ui/carousel";

export function SliderImage({ src, alt, width }: { src: string; alt: string; width: number }) {
  return (
    <div
      className="relative flex aspect-video h-28 shrink-0 items-center justify-center"
      style={{ width: `${width}px` }}
    >
      <Image src={src} alt={alt} fill unoptimized draggable="false" />
    </div>
  );
}

export function SliderContent({
  rowIndexes,
  dualRowIndexes,
  isDesktop,
  itemsPerView,
  itemWidth,
  imageUrls,
}: {
  rowIndexes: number[];
  dualRowIndexes: number[];
  isDesktop: boolean;
  itemsPerView: number;
  itemWidth: number;
  imageUrls: string[];
}) {
  return (
    <CarouselContent className="flex min-h-[300px] items-center">
      {(!isDesktop ? dualRowIndexes : rowIndexes).map((idx) => (
        <CarouselItem key={idx} className="mx-auto flex justify-center" style={{ flexBasis: `${100 / itemsPerView}%` }}>
          <div className="flex flex-col">
            <SliderImage src={imageUrls[idx]} alt={`Logo ${idx + 1}`} width={itemWidth} />
            {!isDesktop && <SliderImage src={imageUrls[idx + 1]} alt={`Logo ${idx + 2}`} width={itemWidth} />}
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
  );
}
