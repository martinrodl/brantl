"use client";

import * as React from "react";

import { Libraries, useJsApiLoader } from "@react-google-maps/api";

const libraries = ["places", "drawing", "geometry"];

export function MapProvider({ children }: { children: React.ReactNode }) {
  const { isLoaded: scriptLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries: libraries as Libraries,
  });

  if (loadError) return <p>Encountered error while loading google maps</p>;

  if (!scriptLoaded) return <p>Map Script is loading ...</p>;

  return children;
}
