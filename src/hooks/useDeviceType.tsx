"use client";

import * as React from "react";

import useWindowSize from "@/hooks/useWindowSize";
import viewports from "@/constants/viewports";

export default function useDeviceType() {
  const { width } = useWindowSize();

  return React.useMemo(() => {
    if (width === null) return { isMobile: false, isTablet: false, isDesktop: false };
    return {
      isMobile: width < viewports.tablet,
      isTablet: width >= viewports.tablet,
      isDesktop: width >= viewports.desktop,
    };
  }, [width]);
}
