import * as React from "react";

import Link from "next/link";
import { cn } from "@/lib/utils";
import Vector from "~/public/icons/vector.svg";

const ContactInfo = ({ icon, children }: { icon?: boolean; children: React.ReactNode }) => (
  <div className="flex items-start gap-2 pr-8 xl:pr-0">
    {icon && (
      <Vector
        className="h-[10px] w-[10px] -rotate-90 shrink-0 mt-[6px] md:mt-[7px] xl:mt-[8px] fill-icon"
        aria-hidden
      />
    )}
    <div className="mb-4 flex flex-col md:mb-8 xl:mb-0">{children}</div>
  </div>
);

export function ContactDetails({
  name,
  phone,
  email,
  website,
  address,
  companyIdNumber,
  taxIdNumber,
  className,
}: {
  name: string;
  phone: string;
  email: string;
  website: string;
  address: string;
  companyIdNumber: string;
  taxIdNumber: string;
  className?: string;
}) {
  return (
    <div className={cn("text-sm xl:text-lg", className)}>
      <p className="mb-6 text-xl font-bold md:mb-8">{name}</p>

      <ContactInfo icon>
        <Link href={`tel:${phone}`}>{phone}</Link>
        <Link href={`mailto:${email}`}>{email}</Link>
        <Link href={website} target="_blank" rel="noopener noreferrer">
          {website.replace("https://", "")}
        </Link>
      </ContactInfo>

      <ContactInfo icon>
        <p>{companyIdNumber}</p>
        <p>{taxIdNumber}</p>
      </ContactInfo>

      <ContactInfo icon>
        <p>{address}</p>
      </ContactInfo>
    </div>
  );
}
