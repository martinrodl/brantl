"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import { VIEWPORTS } from "@/constants/viewports";

export default function ResponsiveImage() {
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
      src="/hero.webp"
      alt="Hero Banner Background"
      width={isMobile ? 1438 : 1680}
      height={isMobile ? 822 : 968}
      priority
      className={isMobile ? "min-w-[1438px]" : "min-w-[1680px]"}
    />
  );
}
