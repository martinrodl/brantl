import * as React from "react";

import ResponsiveImage from "@/components/ui/responsive-image";
import Vector from "@/public/vector.svg";

export default function HeroBanner() {
  return (
    <div className="relative flex justify-center overflow-hidden">
      <ResponsiveImage
        src="/hero.webp"
        alt="Hero Banner Background"
        width={1680}
        height={968}
        mobileWidth={1438}
        mobileHeight={822}
        priority
      />

      <div className="absolute mx-6 flex h-full max-w-[800px] flex-col md:mx-16">
        <div className="my-auto flex flex-col gap-24 self-center text-center text-white lg:gap-20">
          <h1 className="text-3xl font-medium md:text-5xl lg:text-6xl">Pragmatické poradenství pro moderní firmy</h1>
          <p className="text-2xl">Jsme Brantl Partners, certifikovaní daňoví poradci a auditoři.</p>
        </div>

        <Vector width={20} height={20} className="mx-auto mb-10 fill-white" />
      </div>
    </div>
  );
}
