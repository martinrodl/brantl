import initTranslations from "@/app/i18n";
import { NavLinkHref } from "@/components/navbar/utils/enums";
import SectionRef from "@/components/context/section-ref";
import SectionHeader from "@/components/ui/section-header";
import TriangleCluster from "~/public/icons/triangle-cluster.svg";
import { TriangleClusterRow } from "./_contacts/triangle-cluster-row";
import { ContactDetails } from "./_contacts/contact-details";
import { MarkerMap } from "./_contacts/marker-map";
import { OfficeAddress } from "./_contacts/office-address";

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
