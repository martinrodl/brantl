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

export default function DynamicSlider({
  imageUrls,
  itemBaseWidth,
  itemTabletWidth,
  itemDesktopWidth,
  className,
}: {
  imageUrls: string[];
  itemBaseWidth: number;
  itemTabletWidth: number;
  itemDesktopWidth: number;
  className?: string;
}) {
  const [api, setApi] = React.useState<CarouselApi | undefined>();
  const [itemsPerView, setItemsPerView] = React.useState(1);
  const [current, setCurrent] = React.useState(0);
  const {
    deviceType: { isTablet, isDesktop },
    containerRef,
  } = useDeviceType();

  const isReadyRef = React.useRef(false);

  const itemWidth = isDesktop ? itemDesktopWidth : isTablet ? itemTabletWidth : itemBaseWidth;

  const rowIndexes = Array.from({ length: imageUrls.length }, (_, index) => index);
  const dualRowIndexes = rowIndexes.filter((index) => index % 2 === 0);
  const deviceIndexes = isDesktop ? rowIndexes : dualRowIndexes;

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
        const validCurrent = Math.min(current, deviceIndexes.length - itemsPerView);
        setCurrent(validCurrent);
        api.scrollTo(validCurrent);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [calculateItemsPerView, api, deviceIndexes.length, current, itemsPerView]);

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  const totalDots = Math.ceil(deviceIndexes.length / itemsPerView);

  return (
    <div
      className={cn("opacity-0 duration-500", isReadyRef.current && "opacity-100", className)}
      ref={containerRef as React.RefObject<HTMLDivElement>}
    >
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
          <CarouselContent className="flex min-h-[300px] items-center">
            {(!isDesktop ? dualRowIndexes : rowIndexes).map((idx) => (
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
          disabled={current >= deviceIndexes.length - itemsPerView}
          onClick={() => api?.scrollTo(Math.min(deviceIndexes.length - itemsPerView, current + itemsPerView))}
          className="absolute bottom-0 right-1/3 z-10 rounded-full bg-secondary text-secondary-foreground md:right-0 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2"
        >
          <Vector className="-rotate-90 fill-secondary-foreground" />
        </Button>
      </div>

      <div className="mt-12 hidden min-h-12 justify-center space-x-2 md:flex lg:mt-40">
        {Array.from({ length: totalDots }).map((_, idx) => {
          const startIdx = idx * itemsPerView;
          const endIdx = startIdx + itemsPerView - 1;
          const lastItem = current + itemsPerView - 1;

          return (
            <div className="flex flex-col gap-4" key={`dot-wrapper-${idx}`}>
              <button
                onClick={() => {
                  api?.scrollTo(startIdx);
                  setCurrent(startIdx);
                }}
                className={cn(
                  "h-3 w-3 rounded-full transition-colors duration-300",
                  lastItem >= startIdx && lastItem <= endIdx ? "bg-primary-inverse" : "bg-muted-foreground",
                )}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
