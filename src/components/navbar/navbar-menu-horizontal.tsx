import * as React from "react";

import { navLinks } from "./utils/constants";
import { cn } from "@/lib/utils";
import LanguageSwitcher from "@/components/ui/language-switcher";
import NavbarButton from "@/components/navbar/navbar-button";

export default function NavbarMenuHorizontal({ className }: { className?: string }) {
  return (
    <nav className={cn("flex items-center", className)}>
      {navLinks.map((navLink) => (
        <NavbarButton
          key={`header-${navLink.href}`}
          type="button"
          role="link"
          navLink={navLink}
          variant="ghostInverse"
          className="justify-between text-sm font-medium"
        />
      ))}
      <LanguageSwitcher buttonClassName="h-auto p-1" />
    </nav>
  );
}
