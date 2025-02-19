"use client";

import { GoogleMap, Marker } from "@react-google-maps/api";
import { cn } from "@/lib/utils";

const defaultMapContainerStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "15px 0px 0px 15px",
};

const defaultMapZoom = 18;

const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
  gestureHandling: "auto",
  streetViewControl: false,
  fullscreenControl: false,
  mapTypeControl: false,
};

interface MapComponentProps {
  marker: { lat: number; lng: number };
}

export default function MapComponent({ marker, className }: MapComponentProps & { className?: string }) {
  return (
    <div className={cn("h-full w-full", className)}>
      <GoogleMap
        mapContainerStyle={defaultMapContainerStyle}
        center={marker}
        zoom={defaultMapZoom}
        options={defaultMapOptions}
      >
        <Marker position={marker} />
      </GoogleMap>
    </div>
  );
}
