"use client";

import * as React from "react";
import { Menu, X } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import { NavLinks } from "@/components/navbar/types";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Logo from "~/public/logo.svg";
import { NavbarSideLink } from "@/components/navbar/navbar-side-link";

interface NavbarSideMenuProps {
  links: NavLinks;
  positioning?: string; // Optional positioning prop
}

export default function NavbarSideMenu({
  links,
  positioning = "flex w-full flex-grow flex-col justify-center gap-4 pl-12 pr-20", // Default positioning
}: NavbarSideMenuProps) {
  const [open, setOpen] = React.useState(false);

  return (
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

        <section className={positioning}>
          {links.map((link) => (
            <NavbarSideLink key={link.href} link={link} onClick={() => setOpen(false)} />
          ))}
        </section>
      </SheetContent>
    </Sheet>
  );
}
