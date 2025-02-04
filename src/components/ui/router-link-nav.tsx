import React from "react";
import Link from "next/link";

interface RouterLinkNavProps {
  href: string;
  children: React.ReactNode;
}

export function RouterLinkNav({ href, children }: RouterLinkNavProps) {
  return (
    <Link
      href={href}
      passHref
      className="flex items-center justify-center whitespace-nowrap p-4 text-sm font-medium transition-all duration-300 ease-in-out hover:bg-secondary/80 hover:text-foreground hover:opacity-90"
    >
      {children}
    </Link>
  );
}
