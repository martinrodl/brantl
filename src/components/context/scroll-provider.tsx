"use client";

import * as React from "react";

export const ScrollContext = React.createContext<{
  registerSection: (id: string, ref: React.RefObject<HTMLElement>) => void;
  scrollTo: (id: string) => void;
} | null>(null);

export default function ScrollProvider({ children }: { children: React.ReactNode }) {
  const sectionsRef = React.useRef<{ [key: string]: React.RefObject<HTMLElement> }>({});

  const registerSection = (id: string, ref: React.RefObject<HTMLElement>) => {
    sectionsRef.current[id] = ref;
  };

  const scrollTo = (id: string) => {
    const section = sectionsRef.current[id];
    if (section && section.current) {
      section.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return <ScrollContext.Provider value={{ registerSection, scrollTo }}>{children}</ScrollContext.Provider>;
}
