"use client";

import * as React from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { RouterLinkNav } from "@/components/ui/router-link-nav";
import { RouterLinkMenu } from "@/components/ui/router-link-menu";
import Logo from "@/public/logo.svg";
import Vector from "@/public/vector.svg";

const links = [
  { href: "#", label: "KDO JSME" },
  { href: "#", label: "SLUŽBY" },
  { href: "#", label: "REFERENCE" },
  { href: "#", label: "KONTAKTY" },
  { href: "#", label: "CZ/ENG" },
];

export default function NavMenu() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <nav className="relative z-50 flex justify-between border-b border-b-secondary-foreground p-4 md:mx-8 md:px-4 md:py-0 md:pt-9 lg:mx-16 lg:border-none">
        <Logo className="h-[40px] w-[95px] shrink-0 justify-self-start fill-secondary-foreground md:mb-6 lg:mb-0 lg:mt-4 lg:h-[72px] lg:w-[172px]" />

        <div className="absolute left-1/2 hidden w-full -translate-x-1/2 justify-between text-secondary-foreground md:bottom-0 md:flex md:max-w-[55%] md:pb-2 lg:bottom-auto lg:max-w-[800px] lg:gap-8 lg:border-b lg:pb-0">
          {links.map((link, idx) => (
            <RouterLinkNav key={`${link.href}-${idx}`} href={link.href}>
              {link.label}
            </RouterLinkNav>
          ))}
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              onClick={() => setOpen((prev) => !prev)}
              variant="ghost"
              size="icon"
              className="group h-10 w-10 rounded-full border-2 border-secondary-foreground ring-offset-background hover:bg-secondary-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 md:hidden [&_svg]:size-7"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <Menu className="stroke-secondary-foreground group-hover:stroke-foreground" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>

          <SheetContent className="w-full bg-black bg-[url('/menu-bg-mobile.webp')] bg-cover bg-center p-0 text-secondary-foreground">
            <div className="absolute left-0 top-0 flex w-full justify-between border-b-2 p-4">
              <Logo className="h-[40px] w-[95px] shrink-0 fill-secondary-foreground" />

              <Button
                onClick={() => setOpen(false)}
                variant="ghost"
                size="icon"
                className="group flex h-10 w-10 items-center rounded-full border-2 border-secondary-foreground ring-offset-background hover:bg-secondary-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 [&_svg]:size-7"
                aria-label="Close"
              >
                <X className="stroke-secondary-foreground group-hover:stroke-foreground" />
                <span className="sr-only">Close</span>
              </Button>
            </div>

            <nav className="flex h-full flex-col items-center justify-center gap-4 pl-12 pr-20">
              {links.map((link, idx) => (
                <RouterLinkMenu
                  key={`${link.href}-${idx}`}
                  href={link.href}
                  icon={<Vector width={20} height={20} className="fill-menu-icon -rotate-90" />}
                  onClick={() => setOpen(false)}
                  label={link.label}
                />
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </>
  );
}
