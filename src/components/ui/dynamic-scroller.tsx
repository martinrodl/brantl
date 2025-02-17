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
  itemTabletWidth,
  itemDesktopWidth,
}: {
  imageUrls: string[];
  itemBaseWidth: number;
  itemTabletWidth: number;
  itemDesktopWidth: number;
}) {
  const [api, setApi] = React.useState<CarouselApi | undefined>();
  const [itemsPerView, setItemsPerView] = React.useState(1);
  const [current, setCurrent] = React.useState(0);
  const { isDesktop, isTablet } = useDeviceType();

  const isReadyRef = React.useRef(false);

  const itemWidth = isDesktop ? itemDesktopWidth : isTablet ? itemTabletWidth : itemBaseWidth;

  const indexes = Array.from({ length: imageUrls.length }, (_, index) => index);
  const evenIndexes = indexes.filter((index) => index % 2 === 0);
  const filteredImageUrls = isDesktop ? indexes : evenIndexes;

  const paddingMobile = 36;
  const paddingTabletDesktop = 80;

  const calculateItemsPerView = React.useCallback(() => {
    const viewportWidth = isDesktop
      ? viewports.desktop - paddingTabletDesktop * 2
      : window.innerWidth - (isTablet ? paddingTabletDesktop * 2 : paddingMobile * 2);
    const calculatedItems = Math.floor(viewportWidth / itemWidth);
    setItemsPerView(calculatedItems > 0 ? calculatedItems : 1);
    isReadyRef.current = true;
  }, [itemWidth, isTablet, isDesktop]);

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
      <div
        className="relative"
        style={{ padding: isTablet ? `0 ${paddingTabletDesktop}px` : `0 ${paddingMobile}px 60px` }}
      >
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
          className="absolute bottom-0 left-1/3 z-10 rounded-full bg-secondary text-secondary-foreground md:left-0 md:top-1/2 md:-translate-y-1/2 md:translate-x-1/2"
        >
          <Vector className="rotate-90 fill-secondary-foreground" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          disabled={current >= filteredImageUrls.length - itemsPerView}
          onClick={() => api?.scrollTo(Math.min(filteredImageUrls.length - itemsPerView, current + itemsPerView))}
          className="absolute bottom-0 right-1/3 z-10 rounded-full bg-secondary text-secondary-foreground md:right-0 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2"
        >
          <Vector className="-rotate-90 fill-secondary-foreground" />
        </Button>
      </div>

      <div className="mt-12 hidden justify-center space-x-2 md:flex lg:mt-40">
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
