"use client";

import {
  Map,
  MapMarker,
  MarkerContent,
  MarkerLabel,
  MarkerPopup,
} from "@/components/ui/map";
import { Button } from "@/components/ui/button";
import { Star, Navigation, Clock, ExternalLink } from "lucide-react";
import Image from "next/image";

const places = [
  {
    id: 1,
    name: "Gachibowli",
    label: "Center",
    category: "Omega Hospital",
    image: "/images/our-center.webp",
    lng: 78.3489,
    lat: 17.4401,
    direction: "https://maps.app.goo.gl/RQcvtSXu5731Dnjp8",
    rating: 4.8,
    reviews: 15432,
    hours: "Open 24 Hours",
    openNow: true,
  },
  {
    id: 2,
    name: "Banjara Hills",
    label: "Center",
    category: "Omega Hospital",
    image: "/images/our-center/banjara-hills.webp",
    lng: 78.4483,
    lat: 17.4126,
    direction: "https://maps.app.goo.gl/AjK9cB6FBvyP3u5C7",
    rating: 4.9,
    reviews: 18210,
    hours: "Open 24 Hours",
    openNow: true,
  },
  {
    id: 3,
    name: "Vizag",
    label: "Center",
    category: "Omega Hospital",
    image: "/images/our-center/vizag.webp",
    lng: 83.2185,
    lat: 17.6868,
    direction: "https://maps.app.goo.gl/ivqjNCm7p6N48Vpk9",
    rating: 4.7,
    reviews: 9634,
    hours: "8:00 AM - 9:00 PM",
    openNow: true,
  },
  {
    id: 4,
    name: "Guntur",
    label: "Center",
    category: "Omega Hospital",
    image: "/images/our-center/guntur.webp",
    lng: 80.4365,
    lat: 16.3067,
    direction: "https://maps.app.goo.gl/9qTsiSFFfwq6zaxB9",
    rating: 4.6,
    reviews: 7421,
    hours: "8:00 AM - 8:00 PM",
    openNow: true,
  },
  {
    id: 5,
    name: "Bhimavaram",
    label: "Center",
    category: "Omega Hospital",
    image: "/images/our-center/bhimavaram.webp",
    lng: 81.5212,
    lat: 16.5449,
    direction: "https://maps.app.goo.gl/MUBSKbw8djCr7fmN9",
    rating: 4.5,
    reviews: 3892,
    hours: "9:00 AM - 7:00 PM",
    openNow: true,
  },
  {
    id: 6,
    name: "Kurnool",
    label: "Center",
    category: "Omega Hospital",
    image: "/images/our-center/kurnool.webp",
    lng: 78.0373,
    lat: 15.8281,
    direction: "https://maps.app.goo.gl/u1PnotKsE3aMXgzWA",
    rating: 4.6,
    reviews: 5210,
    hours: "Open 24 Hours",
    openNow: true,
  },
  {
    id: 7,
    name: "Dehradun",
    label: "Center",
    category: "Omega Hospital",
    image: "/images/our-center/dehradun.webp",
    lng: 78.0322,
    lat: 30.3165,
    direction: "https://maps.app.goo.gl/xq2v4afabdnFQybt5",
    rating: 4.7,
    reviews: 6112,
    hours: "8:00 AM - 8:00 PM",
    openNow: true,
  },
  {
    id: 8,
    name: "Karimnagar",
    label: "Center",
    category: "Omega Hospital",
    image: "/images/our-center/karimnagar.webp",
    lng: 79.1288,
    lat: 18.4386,
    direction: "https://maps.app.goo.gl/fzUKwe8ipbUvL9Pu8",
    rating: 4.4,
    reviews: 2987,
    hours: "9:00 AM - 7:30 PM",
    openNow: true,
  },
  {
    id: 9,
    name: "Jabalpur",
    label: "Center",
    category: "Omega Hospital",
    image: "/images/our-center/jabalpur.webp",
    lng: 79.9864,
    lat: 23.1815,
    direction: "https://maps.app.goo.gl/aSeMdQUbztB7YVSe7",
    rating: 4.6,
    reviews: 4876,
    hours: "8:00 AM - 9:00 PM",
    openNow: true,
  },
  {
    id: 10,
    name: "Tirupati",
    label: "Center",
    category: "Omega Hospital",
    image: "/images/our-center/tirupati.webp",
    lng: 79.4192,
    lat: 13.6288,
    direction: "https://maps.app.goo.gl/YCcGQuVwKf4HpaxK7",
    rating: 4.8,
    reviews: 8291,
    hours: "Open 24 Hours",
    openNow: true,
  },
  {
    id: 11,
    name: "Surat",
    label: "Center",
    category: "Omega Hospital",
    image: "/images/our-center/surat.webp",
    lng: 72.8311,
    lat: 21.1702,
    direction: "https://maps.app.goo.gl/EdjuL3QqASxTzMnZ9",
    rating: 4.9,
    reviews: 17320,
    hours: "Open 24 Hours",
    openNow: true,
  },
];

export function StandalonePopupExample() {
  return (
    <div className="h-[500px] w-full">
      <Map center={[-73.98, 40.74]} zoom={11}>
        {places.map((place) => (
          <MapMarker key={place.id} longitude={place.lng} latitude={place.lat}>
            <MarkerContent>
              <div className="size-5 rounded-full bg-rose-500 border-2 border-white shadow-lg cursor-pointer hover:scale-110 transition-transform" />
              <MarkerLabel position="bottom">{place.label}</MarkerLabel>
            </MarkerContent>
            <MarkerPopup className="p-0 w-62">
              <div className="relative h-32 overflow-hidden rounded-t-md">
                <Image
                  fill
                  src={place.image}
                  alt={place.name}
                  className="object-cover"
                />
              </div>
              <div className="space-y-2 p-3">
                <div>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    {place.category}
                  </span>
                  <h3 className="font-semibold text-foreground leading-tight">
                    {place.name}
                  </h3>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="size-3.5 fill-amber-400 text-amber-400" />
                    <span className="font-medium">{place.rating}</span>
                    <span className="text-muted-foreground">
                      ({place.reviews.toLocaleString()})
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Clock className="size-3.5" />
                  <span>{place.hours}</span>
                </div>
                <div className="flex gap-2 pt-1">
                  <Button size="sm" className="flex-1 h-8">
                    <Navigation className="size-3.5 mr-1.5" />
                    Directions
                  </Button>
                  <Button size="sm" variant="outline" className="h-8">
                    <ExternalLink className="size-3.5" />
                  </Button>
                </div>
              </div>
            </MarkerPopup>
          </MapMarker>
        ))}
      </Map>
    </div>
  );
}
