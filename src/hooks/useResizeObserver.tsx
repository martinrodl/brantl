"use client";

import * as React from "react";

export default function useResizeObserver() {
  const [size, setSize] = React.useState({
    width: 0,
    height: 0,
  });

  const containerRef = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      if (entries.length) {
        const entry = entries[0];
        setSize({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    const currentRef = containerRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return [size, containerRef] as [typeof size, typeof containerRef];
}
