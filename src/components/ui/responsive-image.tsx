"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import Image, { ImageProps } from "next/image";

import { VIEWPORTS } from "@/constants/viewports";
import { cn } from "@/lib/utils";

interface ResponsiveImageProps extends ImageProps {
  mobileWidth?: number;
  mobileHeight?: number;
}

export default function ResponsiveImage({
  src,
  alt,
  width,
  height,
  mobileWidth,
  mobileHeight,
  priority,
  className,
  ...props
}: ResponsiveImageProps) {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < VIEWPORTS.mobile;

  return (
    <Image
      src={src}
      alt={alt}
      width={isMobile ? mobileWidth || width : width}
      height={isMobile ? mobileHeight || height : height}
      priority={priority}
      className={cn(isMobile ? `min-w-[${mobileWidth || width}px]` : `min-w-[${width}px]`, className, { ...props })}
    />
  );
}
