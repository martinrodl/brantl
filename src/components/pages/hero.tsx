import initTranslations from "@/app/i18n";
import Vector from "@/public/vector.svg";
import Image from "next/image";

export default async function Hero({ locale }: { locale: string }) {
  const { t } = await initTranslations(locale, ["home"]);

  return (
    <section className="relative flex justify-center overflow-hidden">
      <Image
        src="/hero.webp"
        alt="Hero Banner Background"
        width={1680}
        height={968}
        priority
        className="min-w-[1438px] md:min-w-[1680px]"
      />

      <div className="absolute mx-6 flex h-full max-w-[800px] flex-col md:mx-16">
        <div className="my-auto flex flex-col gap-24 self-center text-center text-white lg:gap-20">
          <h1 className="text-3xl font-medium md:text-5xl lg:text-6xl">{t("hero.header")}</h1>
          <p className="text-2xl">{t("hero.description")}</p>
        </div>

        <Vector width={20} height={20} className="mx-auto mb-10 fill-white" />
      </div>
    </section>
  );
}
