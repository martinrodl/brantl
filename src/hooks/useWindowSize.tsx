"use client";

import * as React from "react";

export default function useWindowSize() {
  const [windowSize, setWindowSize] = React.useState({
    width: window?.innerWidth,
    height: window?.innerHeight,
  });

  React.useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window?.innerWidth,
        height: window?.innerHeight,
      });
    };

    window?.addEventListener("resize", handleResize);

    handleResize();

    return () => window?.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
