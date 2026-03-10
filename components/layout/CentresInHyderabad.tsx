"use client";

import Image from "next/image";
import { useState } from "react";

type Centre = {
  id: string;
  name: string;
  state: string;
  image: string;
  rating: number;
  description: string;
};

const CENTRES: Centre[] = [
  // Telangana
  {
    id: "gachibowli",
    name: "Gachibowli",
    state: "Telangana",
    image: "/images/our-center/gachibowli.webp",
    rating: 4.9,
    description: "Best Oncology & Multi-Specialty in Gachibowli, Hyderabad",
  },
  {
    id: "banjara",
    name: "Banjara Hills",
    state: "Telangana",
    image: "/images/our-center/banjara-hills.webp",
    rating: 4.8,
    description: "Best Oncology & Multi-Specialty in Banjara Hills, Hyderabad",
  },
  {
    id: "chandanagar",
    name: "Chandanagar",
    state: "Telangana",
    image: "/images/our-center/",
    rating: 4.7,
    description: "Best Oncology & Multi-Specialty in Chandanagar, Hyderabad",
  },
  {
    id: "karimnagar",
    name: "Karimnagar",
    state: "Telangana",
    image: "/images/our-center/karimnagar.webp",
    rating: 4.6,
    description: "Best Oncology & Multi-Specialty in Karimnagar",
  },
  // Andhra Pradesh
  {
    id: "visakhapatnam",
    name: "Visakhapatnam",
    state: "Andhra Pradesh",
    image: "/images/our-center/vizag.webp",
    rating: 4.8,
    description: "Best Oncology & Multi-Specialty in Visakhapatnam",
  },
  {
    id: "guntur",
    name: "Guntur",
    state: "Andhra Pradesh",
    image: "/images/our-center/guntur.webp",
    rating: 4.7,
    description: "Best Oncology & Multi-Specialty in Guntur",
  },
  {
    id: "kurnool",
    name: "Kurnool",
    state: "Andhra Pradesh",
    image: "/images/our-center/kurnool.webp",
    rating: 4.6,
    description: "Best Oncology & Multi-Specialty in Kurnool",
  },
  {
    id: "vijayawada",
    name: "Vijayawada",
    state: "Andhra Pradesh",
    image: "/images/our-center/vizag.webp",
    rating: 4.8,
    description: "Best Oncology & Multi-Specialty in Vijayawada",
  },
  {
    id: "enikepadu",
    name: "Enikepadu",
    state: "Andhra Pradesh",
    image: "/images/our-center/tirupati.webp",
    rating: 4.7,
    description: "Best Oncology & Multi-Specialty in Enikepadu, Vijayawada",
  },
  {
    id: "suryaraopeta",
    name: "Suryaraopeta",
    state: "Andhra Pradesh",
    image: "/images/our-center/karimnagar.webp",
    rating: 4.6,
    description: "Best Oncology & Multi-Specialty in Suryaraopeta, Vijayawada",
  },
  {
    id: "tirupati",
    name: "Tirupati",
    state: "Andhra Pradesh",
    image: "/images/our-center/tirupati.webp",
    rating: 4.9,
    description: "Best Oncology & Multi-Specialty in Tirupati",
  },
  // Madhya Pradesh
  {
    id: "jabalpur",
    name: "Jabalpur",
    state: "Madhya Pradesh",
    image: "/images/our-center/jabalpur.webp",
    rating: 4.7,
    description: "Best Oncology & Multi-Specialty in Jabalpur",
  },
  // Chhattisgarh
  {
    id: "raipur",
    name: "Raipur",
    state: "Chhattisgarh",
    image: "/images/our-center/karimnagar.webp",
    rating: 4.8,
    description: "Best Oncology & Multi-Specialty in Raipur",
  },
  // Maharashtra
  {
    id: "latur",
    name: "Latur",
    state: "Maharashtra",
    image: "/images/our-center/bhimavaram.webp",
    rating: 4.6,
    description: "Best Oncology & Multi-Specialty in Latur",
  },
  // Uttarakhand
  {
    id: "dehradun",
    name: "Dehradun",
    state: "Uttarakhand",
    image: "/images/our-center/dehradun.webp",
    rating: 4.7,
    description: "Best Oncology & Multi-Specialty in Dehradun",
  },
  // Haryana
  {
    id: "yamunanagar",
    name: "Yamunanagar",
    state: "Haryana",
    image: "/images/our-center/bhimavaram.webp",
    rating: 4.6,
    description: "Best Oncology & Multi-Specialty in Yamunanagar",
  },
  // Gujarat
  {
    id: "surat",
    name: "Surat",
    state: "Gujarat",
    image: "/images/our-center/surat.webp",
    rating: 4.8,
    description: "Best Oncology & Multi-Specialty in Surat",
  },
  {
    id: "surat-new-city-light",
    name: "New City Light Rd",
    state: "Gujarat",
    image: "/images/our-center/dehradun.webp",
    rating: 4.7,
    description: "Best Oncology & Multi-Specialty in New City Light Rd, Surat",
  },
  // Karnataka
  {
    id: "bangalore",
    name: "Bangalore",
    state: "Karnataka",
    image: "/images/our-center/tirupati.webp",
    rating: 4.9,
    description: "Best Oncology & Multi-Specialty in Bangalore",
  },
  // Tamil Nadu
  {
    id: "coimbatore",
    name: "Coimbatore",
    state: "Tamil Nadu",
    image: "/images/our-center/dehradun.webp",
    rating: 4.8,
    description: "Best Oncology & Multi-Specialty in Coimbatore",
  },
  {
    id: "trichy",
    name: "Trichy",
    state: "Tamil Nadu",
    image: "/images/our-center/tirupati.webp",
    rating: 4.7,
    description: "Best Oncology & Multi-Specialty in Trichy",
  },
];

const STATES = Array.from(new Set(CENTRES.map((c) => c.state)));

export default function CentresHyderabad() {
  const [activeState, setActiveState] = useState<string>("Telangana");

  const citiesInState = CENTRES.filter((c) => c.state === activeState);

  const [activeCentre, setActiveCentre] = useState<Centre>(CENTRES[0]);

  const handleStateChange = (state: string) => {
    setActiveState(state);
    const firstCity = CENTRES.find((c) => c.state === state);
    if (firstCity) setActiveCentre(firstCity);
  };

  return (
    <section className="py-10 md:py-20 bg-accent/5">
      <div className="container">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="heading whitespace-nowrap">
            Omega Hospitals{" "}
            <span className="text-accent">Centres in India</span>
          </h2>

          <div className="h-px bg-accent flex-1"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* LEFT STATES */}
          <aside className="space-y-2">
            {STATES.map((state) => {
              const isActive = state === activeState;

              return (
                <button
                  key={state}
                  onClick={() => handleStateChange(state)}
                  className={`w-full text-left px-4 py-2 rounded-md font-medium transition
                    ${
                      isActive
                        ? "bg-accent text-white"
                        : "text-gray-700 hover:text-accent"
                    }`}
                >
                  {state}
                </button>
              );
            })}
          </aside>

          {/* RIGHT CARD */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-md p-6">
            {/* CITY BUTTONS */}
            <div className="flex flex-wrap gap-2 mb-6">
              {citiesInState.map((centre) => {
                const isActive = centre.id === activeCentre.id;

                return (
                  <button
                    key={centre.id}
                    onClick={() => setActiveCentre(centre)}
                    className={`px-3 py-1.5 text-sm rounded-full border transition
                      ${
                        isActive
                          ? "bg-accent text-white border-accent"
                          : "border-accent text-accent hover:bg-accent/10"
                      }`}
                  >
                    {centre.name}
                  </button>
                );
              })}
            </div>

            {/* CARD LAYOUT */}
            <div className="grid md:grid-cols-2 gap-6 items-center">
              {/* IMAGE LEFT */}
              <div className="relative w-full h-64 md:h-72">
                <Image
                  src={activeCentre.image}
                  alt={activeCentre.name}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>

              {/* CONTENT RIGHT */}
              <div>
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-semibold text-accent">
                    {activeCentre.name}
                  </h3>

                  <div className="text-sm">★★★★★ {activeCentre.rating}</div>
                </div>

                <p className="mt-3 text-gray-600">{activeCentre.description}</p>

                <hr className="my-6" />

                <div className="flex flex-wrap gap-3">
                  <button className="bg-accent text-white px-5 py-2 rounded-md">
                    Book Consultation
                  </button>

                  <button className="border border-accent text-accent px-5 py-2 rounded-md">
                    Call Us
                  </button>

                  <button className="border border-accent text-accent px-5 py-2 rounded-md">
                    Directions
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
