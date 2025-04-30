"use client";

import * as React from "react";
import useResizeObserver from "@/hooks/useResizeObserver";

import { breakpoints } from "@/constants/breakpoints";

export default function useDeviceType() {
  const [{ width }, containerRef] = useResizeObserver();

  const deviceType = React.useMemo(() => {
    if (width === 0) return { isMobile: false, isTablet: false, isDesktop: false };
    return {
      isMobile: width < breakpoints.md,
      isTablet: width >= breakpoints.md,
      isDesktop: width >= breakpoints.xl,
    };
  }, [width]);

  return { deviceType, containerRef };
}
