import { Hero } from "@/app/[locale]/_components/hero";
import { About } from "@/app/[locale]/_components/about";
import { Services } from "@/app/[locale]/_components/services";
import { Testimonials } from "@/app/[locale]/_components/testimonials";
import { Contacts } from "@/app/[locale]/_components/contacts";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <main className="container flex flex-grow flex-col gap-7 md:gap-14">
      <Hero locale={locale} />
      <About locale={locale} />
      <Services locale={locale} />
      <Testimonials locale={locale} />
      <Contacts locale={locale} />
    </main>
  );
}
