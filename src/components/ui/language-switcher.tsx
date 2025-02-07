"use client";

import { useTranslation } from "react-i18next";
import { usePathname, useRouter } from "next/navigation";

import { LANGUAGES } from "@/constants/locales";
import i18nConfig from "~/i18nConfig";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const changeLanguage = (newLocale: string) => {
    if (currentLocale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`));
    }
    router.refresh();
  };

  return (
    <Select onValueChange={changeLanguage} value={currentLocale}>
      <SelectTrigger className="h-auto w-fit border-none bg-transparent p-4 font-medium text-secondary-foreground transition-all duration-300 ease-in-out hover:bg-secondary/80 hover:text-foreground hover:opacity-90">
        <SelectValue />
        &nbsp;
      </SelectTrigger>
      <SelectContent align="end">
        <SelectGroup>
          <SelectLabel>Select Language</SelectLabel>
          <SelectItem value={LANGUAGES.en.locale}>{LANGUAGES.en.label}</SelectItem>
          <SelectItem value={LANGUAGES.cs.locale}>{LANGUAGES.cs.label}</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
