import * as React from "react";

import Link from "next/link";

import initTranslations from "@/app/i18n";
import { NavLinkHref } from "@/components/navbar/utils/enums";
import SectionRef from "@/components/context/section-ref";
import SectionHeader from "@/components/ui/section-header";
import TriangleCluster from "~/public/icons/triangle-cluster.svg";
import Vector from "~/public/icons/vector.svg";

const ContactInfo = ({ icon, children }: { icon?: boolean; children: React.ReactNode }) => (
  <div className="flex gap-2 pr-8 lg:pr-0">
    {icon && <Vector width={24} height={24} className="shrink-0 -rotate-90 fill-icon" />}
    <div className="mb-4 flex flex-col md:mb-8 lg:mb-0">{children}</div>
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
}: {
  name: string;
  phone: string;
  email: string;
  website: string;
  address: string;
  companyIdNumber: string;
  taxIdNumber: string;
}) => (
  <div className="flex flex-col text-sm lg:grid lg:grid-cols-[1.5fr_1fr_1fr_1.5fr] lg:text-lg">
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

const PositionedTriangleCluster = ({ position, translateX }: { position: "left" | "right"; translateX?: boolean }) => (
  <TriangleCluster
    className={`absolute bottom-28 ${
      position === "left" ? "left-1/2" : "right-1/2"
    } ml-auto hidden h-auto w-[156px] shrink-0 ${
      translateX ? "translate-x-1/2" : "-translate-x-1/2"
    } fill-muted lg:block`}
  />
);

export default async function Contacts({ locale }: { locale: string }) {
  const { t } = await initTranslations(locale, ["home"]);

  return (
    <SectionRef id={NavLinkHref.CONTACTS} className="flex flex-col">
      <SectionHeader header={t("contacts.header")} />

      <div className="mt-12 flex justify-center gap-12 px-8 md:gap-4 md:px-16 lg:mt-20 lg:gap-12 lg:px-0">
        <TriangleCluster className="hidden h-auto w-[254px] shrink-0 fill-muted lg:block" />

        <div className="flex flex-col gap-8 md:flex-row lg:flex-col">
          <ContactDetails
            name={t("contacts.company1.companyName")}
            phone={t("contacts.company1.phone")}
            email={t("contacts.company1.email")}
            website={t("contacts.company1.website")}
            address={t("contacts.company1.address")}
            companyIdNumber={t("contacts.company1.companyIdNumber")}
            taxIdNumber={t("contacts.company1.taxIdNumber")}
          />

          <ContactDetails
            name={t("contacts.company2.companyName")}
            phone={t("contacts.company2.phone")}
            email={t("contacts.company2.email")}
            website={t("contacts.company2.website")}
            address={t("contacts.company2.address")}
            companyIdNumber={t("contacts.company2.companyIdNumber")}
            taxIdNumber={t("contacts.company2.taxIdNumber")}
          />
        </div>

        <TriangleCluster className="hidden h-auto w-[254px] shrink-0 fill-muted lg:block" />
      </div>

      <div className="relative mt-20 flex flex-col md:mt-24 md:flex-row md:gap-4 lg:mt-0 lg:gap-0">
        <PositionedTriangleCluster position="left" />
        <PositionedTriangleCluster position="right" />
        <PositionedTriangleCluster position="left" translateX />

        <div className="flex flex-col bg-violet-300 md:w-1/2 lg:flex-row">
          <div className="aspect-[1.5/1] bg-orange-300 lg:aspect-square lg:w-2/3" />

          <div className="p-8 pb-32 pt-12 md:p-12 lg:w-1/3">
            <p className="text-2.5xl font-semibold">{t("contacts.office1.city")}</p>
            <p className="text-lg">{t("contacts.office1.address")}</p>
          </div>
        </div>

        <div className="flex flex-col bg-green-300 md:w-1/2 lg:flex-row-reverse">
          <div className="aspect-[1.5/1] bg-blue-300 lg:aspect-square lg:w-2/3" />

          <div className="p-12 pb-32 lg:w-1/3">
            <p className="text-2.5xl font-semibold">{t("contacts.office2.city")}</p>
            <p className="text-lg">{t("contacts.office2.address")}</p>
          </div>
        </div>
      </div>
    </SectionRef>
  );
}
