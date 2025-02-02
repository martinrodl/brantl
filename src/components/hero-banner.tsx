import Image from "next/image";
import Vector from "../../public/vector.svg";

export default function HeroBanner() {
  return (
    <div className="relative flex justify-center overflow-hidden">
      <Image
        src="/hero.webp"
        alt="Hero Banner Background"
        layout="responsive"
        width={1680}
        height={968}
        priority
        className="min-w-[1680px]"
      />

      <div className="absolute mx-16 flex h-full max-w-[800px] flex-col">
        <div className="my-auto flex flex-col gap-24 self-center text-center text-white lg:gap-20">
          <h1 className="text-5xl font-medium lg:text-6xl">Pragmatické poradenství pro moderní firmy</h1>
          <p className="text-2xl">Jsme Brantl Partners, certifikovaní daňoví poradci a auditoři.</p>
        </div>

        <Vector className="mx-auto mb-10" />
      </div>
    </div>
  );
}
