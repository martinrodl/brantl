"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

export function AutoHideHeader({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStaticPage = pathname?.includes("/cookies") || pathname?.includes("/ochrana-oznamovatelu");
  
  const [showHeader, setShowHeader] = React.useState(true);
  const topMarkerRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    // Always show header on static pages
    if (isStaticPage) {
      setShowHeader(true);
      return;
    }

    const currentMarker = topMarkerRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowHeader(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
      },
    );

    if (currentMarker) {
      observer.observe(currentMarker);
    }

    return () => {
      if (currentMarker) {
        observer.unobserve(currentMarker);
      }
    };
  }, [isStaticPage]);

  return (
    <>
      <div ref={topMarkerRef} className="absolute top-0 h-1 w-full"></div>

      <header
        className={`${isStaticPage ? 'relative' : 'fixed left-0 right-0 top-0'} z-50 transition-transform duration-300 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {children}
      </header>
    </>
  );
}
