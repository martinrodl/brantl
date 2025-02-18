"use client";

import * as React from "react";

export default function AutoHideHeader({ children }: { children: React.ReactNode }) {
  const [showHeader, setShowHeader] = React.useState(false);
  const topMarkerRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
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
  }, []);

  return (
    <>
      <div ref={topMarkerRef} className="absolute top-0 h-1 w-full"></div>

      <header
        className={`container fixed left-0 right-0 top-0 z-50 transition-transform duration-300 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {children}
      </header>
    </>
  );
}
