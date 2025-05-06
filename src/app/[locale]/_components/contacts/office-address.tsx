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
