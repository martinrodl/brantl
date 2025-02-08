import * as React from "react";
import Link from "next/link";

import { NavLink } from "@/components/navbar/types";
import Vector from "~/public/vector.svg";

export function NavbarSideLink({
  link,
  onClick,
}: {
  link: NavLink;
  onClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}) {
  return (
    <Link
      href={link.href}
      className="flex w-full items-center justify-between p-2 text-2xl font-medium text-secondary-foreground transition-colors hover:bg-gray-800"
      onClick={(evt) => {
        evt.preventDefault();
        onClick(evt);
        window.location.href = link.href;
      }}
    >
      {link.label}
      <Vector width={20} height={20} className="-rotate-90 fill-menu-icon" />
    </Link>
  );
}
