import * as React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

export default function ProfileCard({
  imageSrc,
  name,
  role,
  specializationTitle,
  specializations,
  cvRecords,
  className,
}: {
  imageSrc: string;
  name: string;
  role: string;
  specializationTitle: string;
  specializations: string;
  cvRecords: string;
  className?: string;
}) {
  return (
    <>
      <Image
        src={imageSrc}
        alt={`${name} - ${role}`}
        width={138}
        height={184}
        className={cn("mb-11 h-[184px] w-[138px] lg:mb-0", className)}
      />

      <div className="mb-11 flex flex-col gap-4 lg:mb-24 lg:gap-0">
        <p className="text-xl font-bold">{name}</p>
        <p className="text-xs font-bold">{role}</p>
      </div>

      <div className="mb-4 flex flex-col gap-4 lg:mb-8">
        <p className="text-xs font-bold">{specializationTitle}:</p>
        <ul className="list-disc pl-5">
          {specializations.split("|").map((specialization) => (
            <li key={specialization} className="text-xs font-medium">
              {specialization}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-16 flex flex-col gap-4">
        <p className="text-xs font-bold">CV:</p>
        <ul className="list-disc pl-5">
          {cvRecords.split("|").map((record) => (
            <li key={record} className="text-xs font-medium">
              {record}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
