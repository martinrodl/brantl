"use client";

import * as React from "react";

import Vector from "@/public/vector.svg";
import Image from "next/image";

export default function HeroBanner() {
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
          <h1 className="text-3xl font-medium md:text-5xl lg:text-6xl">Pragmatické poradenství pro moderní firmy</h1>
          <p className="text-2xl">Jsme Brantl Partners, certifikovaní daňoví poradci a auditoři.</p>
        </div>

        {/*<div className="text-secondary-foreground">*/}
        {/*  <h1>{t("welcome")}</h1>*/}
        {/*  <p>{t("description")}</p>*/}
        {/*</div>*/}

        <Vector width={20} height={20} className="mx-auto mb-10 fill-white" />
      </div>
    </section>
  );
}
