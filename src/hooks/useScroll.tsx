import * as React from "react";

import { ScrollContext } from "@/components/context/scroll-provider";

export function useScroll() {
  const context = React.useContext(ScrollContext);

  if (!context) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }

  const { scrollTo, registerSection } = context;

  return { scrollTo, registerSection };
}
