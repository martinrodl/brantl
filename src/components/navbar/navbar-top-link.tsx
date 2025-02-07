import * as React from "react";
import Link from "next/link";

import { NavLink } from "@/components/navbar/types";

export function NavbarTopLink({ link }: { link: NavLink }) {
  return (
    <Link
      href={link.href}
      passHref
      className="flex items-center justify-center whitespace-nowrap p-4 text-sm font-medium text-secondary-foreground transition-all duration-300 ease-in-out hover:bg-secondary/80 hover:text-foreground hover:opacity-90"
    >
      {link.label}
    </Link>
  );
}
