import { LinkLabelEnum, NavLinkHref } from "./enums";

export interface NavLink {
  href: NavLinkHref;
  labelKey: LinkLabelEnum;
}
