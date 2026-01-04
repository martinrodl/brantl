"use client";

import * as React from "react";

export const ScrollContext = React.createContext<{
  registerSection: (id: string, ref: React.RefObject<HTMLElement>) => void;
  scrollTo: (id: string) => void;
} | null>(null);

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const sectionsRef = React.useRef<{ [key: string]: React.RefObject<HTMLElement> }>({});

  const registerSection = (id: string, ref: React.RefObject<HTMLElement>) => {
    sectionsRef.current[id] = ref;
  };

  const scrollTo = (id: string) => {
    const section = sectionsRef.current[id];

    if (section && section.current) {
      setTimeout(() => {
        const element = section.current;
        const headerOffset = 100; // Offset pro fixed header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }, 200);
    }
  };

  return <ScrollContext.Provider value={{ registerSection, scrollTo }}>{children}</ScrollContext.Provider>;
}
