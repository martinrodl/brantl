"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { NavbarMenuHorizontal } from "./navbar/navbar-menu-horizontal";
import { NavbarMenuVertical } from "./navbar/navbar-menu-vertical";
import Logo from "~/public/logos/brantl-partners-logo.svg";

export function Navbar() {
  const pathname = usePathname();
  const isStaticPage = pathname?.includes("/cookies") || pathname?.includes("/ochrana-oznamovatelu");

  const navbarClasses = cn(
    "z-50 px-8 py-4 max-w-[1200px] mx-auto",
    isStaticPage ? "flex items-center justify-between bg-background" : "grid grid-cols-2 items-center",
    isStaticPage
      ? "md:mx-4 md:flex md:justify-between md:space-x-4 md:p-4 md:pb-2 md:pr-32"
      : "md:mx-4 md:flex md:justify-end md:space-x-4 md:p-4 md:pb-2",
    "xl:m-0 xl:space-x-0 xl:px-12 xl:py-8 xl:pb-0",
    isStaticPage ? "xl:border-none xl:justify-between xl:pr-40" : "xl:border-none",
  );

  const horizontalMenuClasses = cn(
    "hidden justify-center space-x-2",
    "md:flex md:items-center md:justify-end md:ml-auto",
  );

  const verticalMenuClasses = cn(
    // Mobile: keep the hamburger on the right edge
    isStaticPage ? "ml-auto" : "col-start-2 justify-self-end",
  );

  return (
    <nav className={navbarClasses}>
      {isStaticPage && <Logo className="block h-auto w-[95px] shrink-0 fill-icon md:w-[120px] xl:w-[172px]" />}
      <NavbarMenuHorizontal className={horizontalMenuClasses} isStaticPage={isStaticPage} />
      <NavbarMenuVertical className={verticalMenuClasses} isStaticPage={isStaticPage} />
    </nav>
  );
}
