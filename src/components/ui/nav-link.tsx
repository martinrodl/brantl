import type React from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  return (
    <a href={href} className="hover:text-primary group relative px-3 py-2 text-sm font-medium transition-colors">
      {children}
      <span className="bg-primary absolute inset-x-0 -bottom-[1px] h-[2px] origin-left scale-x-0 transition-transform duration-200 ease-out group-hover:scale-x-100" />
    </a>
  );
}
