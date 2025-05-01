import { cn } from "@/lib/utils";
import MapProvider from "@/components/context/map-provider";
import MapComponent from "@/components/ui/map";

export function MarkerMap({ marker, className }: { marker: { lat: number; lng: number }; className?: string }) {
  return (
    <div className={cn("w-full", className)}>
      <MapProvider>
        <MapComponent marker={marker} />
      </MapProvider>
    </div>
  );
}
