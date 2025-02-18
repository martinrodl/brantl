import NavbarMenuHorizontal from "@/components/navbar/navbar-menu-horizontal";
import NavbarMenuVertical from "@/components/navbar/navbar-menu-vertical";
import Logo from "~/public/logos/brantl-partners-logo.svg";

export default function Navbar() {
  return (
    <nav className="z-50 grid grid-cols-2 items-center border-b border-inverse px-8 py-4 md:mx-4 md:grid-cols-[1fr_auto_1fr] md:space-x-4 md:p-4 md:pb-2 lg:m-0 lg:space-x-0 lg:border-none lg:px-12 lg:py-8 lg:pb-0">
      <Logo className="h-fit w-[95px] shrink-0 fill-icon-inverse md:mb-2 lg:mb-0 lg:mt-2 lg:w-[172px]" />
      <NavbarMenuHorizontal className="hidden justify-center space-x-2 md:flex md:self-end lg:self-start lg:border-b lg:border-inverse lg:pr-3" />
      <NavbarMenuVertical className="place-self-end" />
    </nav>
  );
}
