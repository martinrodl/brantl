"use client";

import * as React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import type { CarouselApi } from "@/components/ui/carousel";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Vector from "~/public/icons/vector.svg";

export default function DynamicScroller({ imageUrls, itemWidth }: { imageUrls: string[]; itemWidth: number }) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [itemsPerView, setItemsPerView] = React.useState(1);
  const [current, setCurrent] = React.useState(0);

  const isReadyRef = React.useRef(false);

  const calculateItemsPerView = React.useCallback(() => {
    const viewportWidth = window.innerWidth > 1680 ? 1520 : window.innerWidth - 160;

    const items = Math.floor(viewportWidth / itemWidth);
    setItemsPerView(items > 0 ? items : 1);

    console.log("Viewport width:", viewportWidth, "Items per view:", items);

    isReadyRef.current = true;
  }, [itemWidth]);

  React.useEffect(() => {
    calculateItemsPerView();

    if (api) {
      const validCurrent = Math.min(current, imageUrls.length - itemsPerView);
      setCurrent(validCurrent);
      api.scrollTo(validCurrent);
    }

    const handleResize = () => {
      calculateItemsPerView();
      if (api) {
        const validCurrent = Math.min(current, imageUrls.length - itemsPerView);
        setCurrent(validCurrent);
        api.scrollTo(validCurrent);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [calculateItemsPerView, api, imageUrls.length, current, itemsPerView]);

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div>
      {/* region carousel container */}
      <div className={cn("relative w-full px-20 opacity-0 duration-500", isReadyRef.current && "opacity-100")}>
        {/* region carousel scrollable */}

        <Carousel
          opts={{
            align: "start",
          }}
          setApi={setApi}
        >
          <CarouselContent>
            {imageUrls.map((url, index) => (
              <CarouselItem
                key={index}
                className="flex justify-center"
                style={{ flexBasis: `${100 / itemsPerView}%` }} // Ensure layout respects itemsPerView
              >
                <div
                  className="relative flex aspect-video h-28 shrink-0 items-center justify-center"
                  style={{ width: `${itemWidth}px` }} // Dynamically calculate width based on itemWidth
                >
                  <Image src={url} alt={`Logo ${index + 1}`} fill unoptimized draggable="false" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* endregion carousel scrollable */}

        {/* region scroll buttons */}
        <Button
          variant="ghost"
          size="icon"
          disabled={current === 0}
          onClick={() => api?.scrollTo(Math.max(current - itemsPerView, 0))} // Prevent out-of-bounds scrolling
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-secondary text-secondary-foreground"
        >
          <Vector className="rotate-90 fill-secondary-foreground" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          disabled={current >= imageUrls.length - itemsPerView}
          onClick={
            () => api?.scrollTo(Math.min(imageUrls.length - itemsPerView, current + itemsPerView)) // Prevent overscrolling
          }
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-secondary text-secondary-foreground"
        >
          <Vector className="-rotate-90 fill-secondary-foreground" />
        </Button>
        {/* endregion scroll buttons */}
      </div>
      {/* endregion carousel container */}

      {/* region dot buttons */}
      <div className="mt-40 flex justify-center space-x-2">
        {Array.from({ length: Math.ceil(imageUrls.length / itemsPerView) }).map((_, idx) => (
          <button
            key={`dot-button-${crypto.randomUUID()}`}
            onClick={() => {
              api?.scrollTo(idx * itemsPerView);
              setCurrent(idx * itemsPerView);
            }}
            className={cn(
              "h-3 w-3 rounded-full transition-colors duration-300" /* todo: change colors */,
              current >= idx * itemsPerView && current < (idx + 1) * itemsPerView ? "bg-red-500" : "bg-green-400",
            )}
          />
        ))}
      </div>
      {/* endregion dot buttons */}
    </div>
  );
}
