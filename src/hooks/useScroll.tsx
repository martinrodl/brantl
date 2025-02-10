import * as React from "react";

import { ScrollContext } from "@/components/context/scroll-provider";

export const useScroll = () => {
  const context = React.useContext(ScrollContext);

  if (!context) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }

  return context;
};
