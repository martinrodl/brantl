import { createInstance } from "i18next";
import { initReactI18next } from "react-i18next/initReactI18next";
import i18nConfig from "~/i18nConfig";

// Staticky importuj všechny překlady pro statický export
import homeCs from "~/locales/cs/home.json";
import homeEn from "~/locales/en/home.json";
import homeDe from "~/locales/de/home.json";

const translations = {
  cs: { home: homeCs },
  en: { home: homeEn },
  de: { home: homeDe },
};

export default async function initTranslations(locale, namespaces, i18nInstance, resources) {
  i18nInstance = i18nInstance || createInstance();

  i18nInstance.use(initReactI18next);

  // Použij staticky načtené překlady
  const staticResources = resources || translations;

  await i18nInstance.init({
    lng: locale,
    resources: staticResources,
    fallbackLng: i18nConfig.defaultLocale,
    supportedLngs: i18nConfig.locales,
    defaultNS: namespaces[0],
    fallbackNS: namespaces[0],
    ns: namespaces,
    preload: i18nConfig.locales,
    returnObjects: false,
    returnEmptyString: false,
    returnNull: false,
  });

  return {
    i18n: i18nInstance,
    resources: i18nInstance.services.resourceStore.data,
    t: i18nInstance.t,
  };
}
