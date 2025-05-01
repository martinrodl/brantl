import * as React from "react";

import Link from "next/link";

import initTranslations from "@/app/i18n";
import { NavLinkHref } from "@/components/navbar/utils/enums";
import SectionRef from "@/components/context/section-ref";
import MapComponent from "@/components/ui/map";
import SectionHeader from "@/components/ui/section-header";
import TriangleCluster from "~/public/icons/triangle-cluster.svg";
import Vector from "~/public/icons/vector.svg";
import MapProvider from "@/components/context/map-provider";
import { cn } from "@/lib/utils";

const TriangleClusterRow = ({
  count = 3,
  className,
  triangleClassName,
}: {
  count?: number;
  className?: string;
  triangleClassName?: string;
}) => {
  return (
    <div className={cn("flex fill-muted", className)}>
      {Array.from({ length: count }).map((_, index) => (
        <TriangleCluster key={index} className={cn("h-auto w-4", triangleClassName)} />
      ))}
    </div>
  );
};

const ContactInfo = ({ icon, children }: { icon?: boolean; children: React.ReactNode }) => (
  <div className="flex gap-2 pr-8 xl:pr-0">
    {icon && <Vector width={24} height={24} className="shrink-0 -rotate-90 fill-icon" />}
    <div className="mb-4 flex flex-col md:mb-8 xl:mb-0">{children}</div>
  </div>
);

const ContactDetails = ({
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
}) => (
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

export function MarkerMap({ marker, className }: { marker: { lat: number; lng: number }; className?: string }) {
  return (
    <div className={cn("w-full", className)}>
      <MapProvider>
        <MapComponent marker={marker} />
      </MapProvider>
    </div>
  );
}

export function OfficeAddress({
  city,
  addressStreet,
  addressCity,
  className,
}: {
  city: string;
  addressStreet: string;
  addressCity: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="text-2.5xl font-semibold">{city}</p>
      <p className="text-lg">{addressStreet}</p>
      <p className="text-lg">{addressCity}</p>
    </div>
  );
}

export default async function Contacts({ locale }: { locale: string }) {
  const { t } = await initTranslations(locale, ["home"]);

  return (
    <SectionRef
      id={NavLinkHref.CONTACTS}
      className="grid md:grid-cols-2 xl:auto-rows-min xl:grid-cols-4 2xl:grid-cols-6"
    >
      <SectionHeader header={t("contacts.header")} className="col-span-full pb-12 xl:pb-20" />

      <TriangleCluster className="row-span-2 row-start-2 hidden h-[180px] w-auto self-end fill-muted 2xl:block" />

      <ContactDetails
        name={t("contacts.company1.companyName")}
        phone={t("contacts.company1.phone")}
        email={t("contacts.company1.email")}
        website={t("contacts.company1.website")}
        address={t("contacts.company1.address")}
        companyIdNumber={t("contacts.company1.companyIdNumber")}
        taxIdNumber={t("contacts.company1.taxIdNumber")}
        className="xl:grid-row-2 grid grid-cols-subgrid px-10 pb-20 md:px-12 md:pr-2 xl:col-span-full xl:px-16 xl:pb-6 2xl:col-span-4 2xl:col-start-2"
      />

      <ContactDetails
        name={t("contacts.company2.companyName")}
        phone={t("contacts.company2.phone")}
        email={t("contacts.company2.email")}
        website={t("contacts.company2.website")}
        address={t("contacts.company2.address")}
        companyIdNumber={t("contacts.company2.companyIdNumber")}
        taxIdNumber={t("contacts.company2.taxIdNumber")}
        className="xl:grid-row-3 grid grid-cols-subgrid px-10 pb-20 md:px-12 md:pl-2 xl:col-span-full xl:px-16 xl:pb-12 2xl:col-span-4 2xl:col-start-2"
      />

      <TriangleCluster className="col-start-6 row-span-2 row-start-2 hidden h-[180px] w-auto place-self-end fill-muted 2xl:block" />

      <MarkerMap
        marker={{ lat: 50.0869393, lng: 14.4337539 }}
        className="aspect-[1.5/1] w-full md:row-start-3 md:pr-2 xl:row-span-2 xl:row-start-4 xl:mr-0 xl:h-[526px] xl:pr-0 2xl:col-span-2"
      />

      <OfficeAddress
        city={t("contacts.office1.city")}
        addressStreet={t("contacts.office1.addressStreet")}
        addressCity={t("contacts.office1.addressCity")}
        className="p-10 pb-20 md:px-12 md:pb-28 xl:py-0"
      />

      <MarkerMap
        marker={{ lat: 49.3955, lng: 13.2956 }}
        className="aspect-[1.5/1] w-full md:row-start-3 md:pl-2 xl:col-start-4 xl:row-span-2 xl:row-start-4 xl:ml-0 xl:h-[526px] xl:pl-0 2xl:col-span-2 2xl:col-start-5"
      />

      <OfficeAddress
        city={t("contacts.office2.city")}
        addressStreet={t("contacts.office2.addressStreet")}
        addressCity={t("contacts.office2.addressCity")}
        className="p-10 pb-20 md:px-12 md:pb-28 xl:py-0"
      />

      <TriangleClusterRow
        className="col-span-2 hidden w-fit -translate-y-1/2 justify-self-center xl:flex"
        triangleClassName="w-36"
      />
    </SectionRef>
  );
}
