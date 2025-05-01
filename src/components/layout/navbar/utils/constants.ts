import { NavLink } from "./types";
import { LinkLabelEnum, NavLinkHref } from "./enums";

export const navLinks: NavLink[] = [
  { href: NavLinkHref.ABOUT, labelKey: LinkLabelEnum.ABOUT },
  { href: NavLinkHref.SERVICES, labelKey: LinkLabelEnum.SERVICES },
  { href: NavLinkHref.TESTIMONIALS, labelKey: LinkLabelEnum.TESTIMONIALS },
  { href: NavLinkHref.CONTACTS, labelKey: LinkLabelEnum.CONTACTS },
];
