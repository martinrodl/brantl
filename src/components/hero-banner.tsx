import Image from "next/image";
import Vector from "../../public/vector.svg";

export default function HeroBanner() {
  return (
    <div className="relative">
      <Image src="/hero.webp" alt="Hero Banner Background" layout="responsive" width={1680} height={968} priority />

      <div className="absolute left-1/2 top-0 flex h-full w-1/2 -translate-x-1/2 flex-col">
        <div className="my-auto flex flex-col gap-20 self-center text-center text-white">
          <h1 className="text-2xl font-medium lg:text-6xl">Pragmatické poradenství pro moderní firmy</h1>
          <p className="text-lg lg:text-2xl">Jsme Brantl Partners, certifikovaní daňoví poradci a auditoři.</p>
        </div>

        <Vector className="mx-auto mb-10" />
      </div>
    </div>
  );
}
