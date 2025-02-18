"use client";

import * as React from "react";
import useResizeObserver from "@/hooks/useResizeObserver";
import viewports from "@/constants/viewports";

export default function useDeviceType() {
  const [{ width }, containerRef] = useResizeObserver();

  const deviceType = React.useMemo(() => {
    if (width === 0) return { isMobile: false, isTablet: false, isDesktop: false };
    return {
      isMobile: width < viewports.tablet,
      isTablet: width >= viewports.tablet,
      isDesktop: width >= viewports.desktop,
    };
  }, [width]);

  return { deviceType, containerRef };
}
