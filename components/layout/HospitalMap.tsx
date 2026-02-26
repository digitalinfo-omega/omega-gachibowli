"use client";

import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { centers } from "../constants/OurCenter";
import { useMemo } from "react";

const centerCoordinates: Record<string, [number, number]> = {
  Gachibowli: [17.4401, 78.3489],
  "Banjara Hills": [17.4126, 78.4482],
  Vizag: [17.6868, 83.2185],
  Guntur: [16.3067, 80.4365],
  Bhimavaram: [16.5449, 81.5212],
  Kurnool: [15.8281, 78.0373],
  Dehradun: [30.3165, 78.0322],
  Karimnagar: [18.4386, 79.1288],
  Jabalpur: [23.1815, 79.9864],
  Tirupati: [13.6288, 79.4192],
  Surat: [21.1702, 72.8311],
};

export default function HospitalMap() {
  const blinkingIcon = useMemo(
    () =>
      L.divIcon({
        className: "",
        html: `<div class="blink-marker"></div>`,
      }),
    [],
  );

  return (
    <div className="w-full h-[650px] rounded-2xl overflow-hidden">
      <MapContainer
        key="leaflet-map"
        center={[22.5937, 78.9629]}
        zoom={5}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />

        {centers.map((center) => {
          const coords = centerCoordinates[center.name];
          if (!coords) return null;

          return (
            <Marker key={center.name} position={coords} icon={blinkingIcon}>
              <Tooltip direction="top" offset={[0, -10]}>
                <div className="w-60">
                  <img
                    src={center.image}
                    alt={center.name}
                    className="w-full h-28 object-cover rounded-lg mb-2"
                  />
                  <h4 className="font-semibold text-sm">{center.heading}</h4>
                  <a
                    href={center.direction}
                    target="_blank"
                    className="text-xs text-blue-400 underline"
                  >
                    Get Directions
                  </a>
                </div>
              </Tooltip>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
