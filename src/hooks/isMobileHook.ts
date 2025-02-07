import { useEffect, useState } from "react";

import { VIEWPORTS } from "@/constants/viewports";

export function useIsMobile(breakpoint: number = VIEWPORTS.mobile) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= breakpoint);
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
}
