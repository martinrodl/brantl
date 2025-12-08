"use client";

import { cn } from "@/lib/utils";
import { MapProvider } from "@/components/context/map-provider";
import { MapComponent } from "@/components/ui/map";

export function MarkerMap({ marker, className }: { marker: { lat: number; lng: number }; className?: string }) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  // Default to JS SDK when an API key is available; allow forcing iframe by setting NEXT_PUBLIC_GOOGLE_MAPS_USE_JS=0
  const useJsApi = !!apiKey && process.env.NEXT_PUBLIC_GOOGLE_MAPS_USE_JS !== "0";

  // Default to iframe for maximum reliability (works even with restricted keys).
  if (!useJsApi) {
    // Use ll + q=loc: to place the marker without showing the default info bubble, and hide it via iwloc
    const src = `https://maps.google.com/maps?ll=${marker.lat},${marker.lng}&q=loc:${marker.lat},${marker.lng}&z=16&hl=cs&output=embed&iwloc=near`;

    return (
      <div className={cn("relative w-full h-full overflow-hidden", className)}>
        <iframe
          title={`map-${marker.lat}-${marker.lng}`}
          src={src}
          loading="lazy"
          style={{ filter: "grayscale(100%) contrast(1.05) brightness(0.98)" }}
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full border-0"
        />
        {/* subtle blue tint overlay to match Figma look */}
        <div className="pointer-events-none absolute inset-0 bg-[#b9c7db]/40 mix-blend-multiply" />
      </div>
    );
  }

  return (
    <div className={cn("w-full", className)}>
      <MapProvider>
        <MapComponent marker={marker} />
      </MapProvider>
    </div>
  );
}
