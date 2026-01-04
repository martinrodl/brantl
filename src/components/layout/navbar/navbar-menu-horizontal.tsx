import { navLinks } from "./utils/constants";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { NavbarButton } from "./navbar-button";

export function NavbarMenuHorizontal({ className, isStaticPage }: { className?: string; isStaticPage?: boolean }) {
  return (
    <nav
      className={cn(
        "inline-flex items-center",
        "md:border-b md:py-2",
        isStaticPage ? "md:border-border" : "md:border-inverse",
        className,
      )}
    >
      {navLinks.map((navLink) => (
        <NavbarButton
          key={`header-${navLink.href}`}
          type="button"
          role="link"
          navLink={navLink}
          variant={isStaticPage ? "ghost" : "ghostInverse"}
          className="justify-between text-sm font-medium"
        />
      ))}
      <LanguageSwitcher buttonClassName="h-auto p-1" isInverse={!isStaticPage} />
    </nav>
  );
}
