import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/context/translations-provider";
import Hero from "@/components/pages/hero";

const i18nNamespaces = ["home"];

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider namespaces={i18nNamespaces} locale={locale} resources={resources}>
      <main className="container flex flex-grow flex-col">
        <Hero locale={locale} />

        {Array.from({ length: 50 }).map((_, i) => (
          <p key={i} className="m-4">
            Scroll content {i + 1}
          </p>
        ))}
      </main>
    </TranslationsProvider>
  );
}
