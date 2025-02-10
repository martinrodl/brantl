import Vector from "~/public/icons/vector.svg";

export default function SectionHeader({ header }: { header: string }) {
  return (
    <div className="flex flex-col items-center gap-5">
      <h2 className="text-2.5xl font-medium md:text-4xl">{header}</h2>
      <Vector width={24} height={10} />
    </div>
  );
}
