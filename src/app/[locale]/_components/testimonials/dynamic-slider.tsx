"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { useDeviceType } from "./hooks/useDeviceType";
import type { CarouselApi } from "@/components/ui/carousel";
import { Carousel } from "@/components/ui/carousel";
import { breakpoints } from "@/constants/breakpoints";
import { SliderContent } from "./slider-content";
import { NavigationButton } from "./navigation-button";
import { PaginationDots } from "./pagination-dots";

export function DynamicSlider({
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
  const currentRef = React.useRef(0);
  // Direction no longer needed with looped auto-scroll
  const autoScrollIntervalRef = React.useRef<number | null>(null);
  const {
    deviceType: { isTablet, isDesktop },
    containerRef,
  } = useDeviceType();
  const isReadyRef = React.useRef(false);

  const paddingMobile = 36;
  const paddingTabletDesktop = 80;
  const itemWidth = isDesktop ? itemDesktopWidth : isTablet ? itemTabletWidth : itemBaseWidth;
  const rowIndexes = Array.from({ length: imageUrls.length }, (_, index) => index);
  const dualRowIndexes = rowIndexes.filter((index) => index % 2 === 0);
  const deviceIndexes = isDesktop ? rowIndexes : dualRowIndexes;

  const clearAutoScroll = React.useCallback(() => {
    if (autoScrollIntervalRef.current !== null) {
      window.clearInterval(autoScrollIntervalRef.current);
      autoScrollIntervalRef.current = null;
    }
  }, []);

  const startAutoScroll = React.useCallback(() => {
    if (!api || deviceIndexes.length <= itemsPerView) {
      clearAutoScroll();
      return;
    }

    clearAutoScroll();

    autoScrollIntervalRef.current = window.setInterval(() => {
      if (!api) return;
      api.scrollNext();
    }, 4000);
  }, [api, deviceIndexes.length, itemsPerView, clearAutoScroll]);

  const calculateItemsPerView = React.useCallback(() => {
    const viewportWidth = isDesktop
      ? breakpoints.xl - paddingTabletDesktop * 2
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
    return () => window.removeEventListener("resize", handleResize);
  }, [calculateItemsPerView, api, deviceIndexes.length, current, itemsPerView]);

  React.useEffect(() => {
    if (!api) return;
    const handleSelect = () => {
      const selected = api.selectedScrollSnap();
      currentRef.current = selected;
      setCurrent(selected);
      startAutoScroll();
    };

    handleSelect();
    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
    };
  }, [api, startAutoScroll]);

  React.useEffect(() => {
    startAutoScroll();
    return () => clearAutoScroll();
  }, [startAutoScroll, clearAutoScroll]);

  const totalDots = Math.ceil(deviceIndexes.length / itemsPerView);

  const handlePrevious = () => api?.scrollTo(Math.max(current - itemsPerView, 0));
  const handleNext = () => api?.scrollTo(Math.min(deviceIndexes.length - itemsPerView, current + itemsPerView));
  const handleDotClick = (index: number) => {
    api?.scrollTo(index);
    setCurrent(index);
  };

  return (
    <div
      className={cn("opacity-0 duration-500", isReadyRef.current && "opacity-100", className)}
      ref={containerRef as React.RefObject<HTMLDivElement>}
    >
      <div
        className="relative mb-12 md:mb-0"
        style={{ padding: isTablet ? `0 ${paddingTabletDesktop}px` : `0 ${paddingMobile}px 60px` }}
      >
  <Carousel opts={{ align: "start", loop: true }} setApi={setApi}>
          <SliderContent
            rowIndexes={rowIndexes}
            dualRowIndexes={dualRowIndexes}
            isDesktop={isDesktop}
            itemsPerView={itemsPerView}
            itemWidth={itemWidth}
            imageUrls={imageUrls}
          />
        </Carousel>

        <NavigationButton direction="prev" disabled={current === 0} onClick={handlePrevious} />

        <NavigationButton
          direction="next"
          disabled={current >= deviceIndexes.length - itemsPerView}
          onClick={handleNext}
        />
      </div>

      <PaginationDots
        totalDots={totalDots}
        currentIndex={current}
        itemsPerView={itemsPerView}
        onDotClick={handleDotClick}
        className="mt-12 hidden min-h-12 justify-center md:flex xl:mt-40"
      />
    </div>
  );
}
