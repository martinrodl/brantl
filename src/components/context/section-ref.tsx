"use client";

import * as React from "react";

import { useScroll } from "@/hooks/useScroll";

export function SectionRef({ id, children, className }: { id: string; children: React.ReactNode; className?: string }) {
  const sectionRef = React.useRef<HTMLElement>(null!);

  const { registerSection } = useScroll();

  React.useEffect(() => {
    registerSection(id, sectionRef);
  }, [id, sectionRef, registerSection]);

  return (
    <section ref={sectionRef} className={className}>
      {children}
    </section>
  );
}
