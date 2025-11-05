"use client";

import { GoogleMap, Marker } from "@react-google-maps/api";
import { cn } from "@/lib/utils";

const defaultMapContainerStyle = {
  width: "100%",
  height: "100%",
};

const defaultMapZoom = 18;

const figmaLikeStyles = [
  { featureType: "all", elementType: "labels", stylers: [{ visibility: "on" }] },
  { featureType: "poi", elementType: "all", stylers: [{ visibility: "off" }] },
  { featureType: "transit", elementType: "all", stylers: [{ visibility: "off" }] },
  { featureType: "administrative", elementType: "geometry", stylers: [{ lightness: 20 }] },
  { featureType: "road", elementType: "geometry", stylers: [{ lightness: 70 }, { saturation: -100 }] },
  { featureType: "landscape", elementType: "geometry", stylers: [{ saturation: -100 }, { lightness: 40 }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#b9c7db" }] },
];

const defaultMapOptions = {
  zoomControl: false,
  tilt: 0,
  gestureHandling: "greedy" as const,
  streetViewControl: false,
  fullscreenControl: false,
  mapTypeControl: false,
  styles: figmaLikeStyles,
};

interface MapComponentProps {
  marker: { lat: number; lng: number };
}

export function MapComponent({ marker, className }: MapComponentProps & { className?: string }) {
  return (
    <div className={cn("relative h-full w-full", className)}>
      <GoogleMap
        mapContainerStyle={defaultMapContainerStyle}
        center={marker}
        zoom={defaultMapZoom}
        options={defaultMapOptions}
      >
        <Marker
          position={marker}
          icon={{
            path: google.maps.SymbolPath.CIRCLE,
            scale: 7,
            fillColor: "#213565",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeOpacity: 1,
            strokeWeight: 3,
          }}
        />
      </GoogleMap>
    </div>
  );
}
