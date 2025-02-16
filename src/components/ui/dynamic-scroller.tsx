"use client";

import * as React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import useDeviceType from "@/hooks/useDeviceType";
import type { CarouselApi } from "@/components/ui/carousel";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Vector from "~/public/icons/vector.svg";
import viewports from "@/constants/viewports";

export default function DynamicScroller({
  imageUrls,
  itemBaseWidth,
  itemDesktopWidth,
}: {
  imageUrls: string[];
  itemBaseWidth: number;
  itemDesktopWidth: number;
}) {
  const [api, setApi] = React.useState<CarouselApi | undefined>();
  const [itemsPerView, setItemsPerView] = React.useState(1);
  const [current, setCurrent] = React.useState(0);
  const { isDesktop } = useDeviceType();

  const isReadyRef = React.useRef(false);

  const itemWidth = isDesktop ? itemDesktopWidth : itemBaseWidth;

  const indexes = Array.from({ length: imageUrls.length }, (_, index) => index);
  const evenIndexes = indexes.filter((index) => index % 2 === 0);
  const filteredImageUrls = isDesktop ? indexes : evenIndexes;

  const calculateItemsPerView = React.useCallback(() => {
    const viewportWidth = isDesktop ? viewports.desktop - 160 : window.innerWidth - 160;
    const calculatedItems = Math.floor(viewportWidth / itemWidth);
    setItemsPerView(calculatedItems > 0 ? calculatedItems : 1);
    isReadyRef.current = true;
  }, [itemWidth, isDesktop]);

  React.useEffect(() => {
    calculateItemsPerView();

    const handleResize = () => {
      calculateItemsPerView();
      if (api) {
        const validCurrent = Math.min(current, filteredImageUrls.length - itemsPerView);
        setCurrent(validCurrent);
        api.scrollTo(validCurrent);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [calculateItemsPerView, api, filteredImageUrls.length, current, itemsPerView]);

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  const totalDots = Math.ceil(filteredImageUrls.length / itemsPerView);

  return (
    <div className={cn("opacity-0 duration-500", isReadyRef.current && "opacity-100")}>
      <div className="relative px-20">
        <Carousel
          opts={{
            align: "start",
          }}
          setApi={setApi}
        >
          <CarouselContent>
            {(!isDesktop ? evenIndexes : indexes).map((idx) => (
              <CarouselItem
                key={idx}
                className="mx-auto flex justify-center"
                style={{ flexBasis: `${100 / itemsPerView}%` }}
              >
                <div className="flex flex-col">
                  <div
                    className="relative flex aspect-video h-28 shrink-0 items-center justify-center"
                    style={{ width: `${itemWidth}px` }}
                  >
                    <Image src={imageUrls[idx]} alt={`Logo ${idx + 1}`} fill unoptimized draggable="false" />
                  </div>

                  {!isDesktop && (
                    <div
                      className="relative flex aspect-video h-28 shrink-0 items-center justify-center"
                      style={{ width: `${itemWidth}px` }}
                    >
                      <Image src={imageUrls[idx + 1]} alt={`Logo ${idx + 2}`} fill unoptimized draggable="false" />
                    </div>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <Button
          variant="ghost"
          size="icon"
          disabled={current === 0}
          onClick={() => api?.scrollTo(Math.max(current - itemsPerView, 0))}
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-secondary text-secondary-foreground"
        >
          <Vector className="rotate-90 fill-secondary-foreground" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          disabled={current >= filteredImageUrls.length - itemsPerView}
          onClick={() => api?.scrollTo(Math.min(filteredImageUrls.length - itemsPerView, current + itemsPerView))}
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-secondary text-secondary-foreground"
        >
          <Vector className="-rotate-90 fill-secondary-foreground" />
        </Button>
      </div>

      <div className="mt-40 flex justify-center space-x-2">
        {Array.from({ length: totalDots }).map((_, idx) => (
          <button
            key={`dot-button-${idx}`}
            onClick={() => {
              api?.scrollTo(idx * itemsPerView);
              setCurrent(idx * itemsPerView);
            }}
            className={cn(
              "h-3 w-3 rounded-full transition-colors duration-300",
              current >= idx * itemsPerView && current < (idx + 1) * itemsPerView
                ? "bg-primary-inverse"
                : "bg-muted-foreground",
            )}
          />
        ))}
      </div>
    </div>
  );
}
