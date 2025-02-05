import * as React from "react";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger } from "@/components/ui/select";
import { LANGUAGES } from "@/constants/locales";

const LanguageSwitcher: React.FC = () => {
  const changeLanguage = () => {
    // i18n.changeLanguage(lng);
    // localStorage.setItem("language", lng);
  };

  return (
    <Select onValueChange={changeLanguage}>
      <SelectTrigger className="h-auto w-fit border-none bg-transparent p-4 font-medium text-secondary-foreground transition-all duration-300 ease-in-out hover:bg-secondary/80 hover:text-foreground hover:opacity-90">
        <span className="mr-1">{`${LANGUAGES.en.label}/${LANGUAGES.cs.label}`}</span>
      </SelectTrigger>
      <SelectContent align="end">
        <SelectGroup>
          <SelectLabel>Select Language</SelectLabel>
          <SelectItem value={LANGUAGES.en.locale}>{LANGUAGES.en.menuLabel}</SelectItem>
          <SelectItem value={LANGUAGES.cs.locale}>{LANGUAGES.cs.menuLabel}</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default LanguageSwitcher;
