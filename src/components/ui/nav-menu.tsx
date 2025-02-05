"use client";

import * as React from "react";
import { Menu, X } from "lucide-react";

import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader, SheetDescription } from "@/components/ui/sheet";
import { RouterLinkNav } from "@/components/ui/router-link-nav";
import { RouterLinkMenu } from "@/components/ui/router-link-menu";
import Logo from "@/public/logo.svg";
import Vector from "@/public/vector.svg";
import LanguageSwitcher from "@/components/ui/language-switcher";

const links = [
  { href: "#", label: "KDO JSME" },
  { href: "#", label: "SLUŽBY" },
  { href: "#", label: "REFERENCE" },
  { href: "#", label: "KONTAKTY" },
];

export default function NavMenu() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="relative z-50 flex justify-between border-b border-b-secondary-foreground p-4 md:mx-8 md:px-4 md:py-0 md:pt-9 lg:mx-16 lg:border-none">
      <Logo className="h-[40px] w-[95px] shrink-0 justify-self-start fill-secondary-foreground md:mb-6 lg:mb-0 lg:mt-4 lg:h-[72px] lg:w-[172px]" />

      <nav className="absolute left-1/2 hidden w-full -translate-x-1/2 justify-between md:bottom-0 md:flex md:max-w-[55%] md:pb-2 lg:bottom-auto lg:max-w-[800px] lg:gap-8 lg:border-b lg:pb-0">
        {links.map((link, idx) => (
          <RouterLinkNav key={`${link.href}-${idx}`} href={link.href}>
            {link.label}
          </RouterLinkNav>
        ))}

        <LanguageSwitcher />
      </nav>

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

        <SheetContent className="flex w-full flex-col justify-between gap-0 bg-black bg-[url('/menu-bg-mobile.webp')] bg-cover bg-center p-0 text-secondary-foreground">
          <VisuallyHidden>
            <SheetTitle>Main Navigation</SheetTitle>
            <SheetDescription>Choose an option from the menu below.</SheetDescription>
          </VisuallyHidden>

          <SheetHeader>
            <div className="flex w-full justify-between border-b-2 p-4">
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
          </SheetHeader>

          <nav className="flex flex-grow flex-col justify-center gap-4 overflow-clip pl-12 pr-20">
            {links.map((link, idx) => (
              <RouterLinkMenu
                key={`${link.href}-${idx}`}
                href={link.href}
                icon={<Vector width={20} height={20} className="-rotate-90 fill-menu-icon" />}
                onClick={() => setOpen(false)}
                label={link.label}
              />
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
