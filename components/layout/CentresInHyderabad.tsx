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

  const [activeCentre, setActiveCentre] = useState<Centre>(
    CENTRES.find((c) => c.id === "gachibowli")!,
  );

  const handleStateChange = (state: string) => {
    setActiveState(state);
    const firstCity = CENTRES.find((c) => c.state === state);
    if (firstCity) setActiveCentre(firstCity);
  };

  return (
    <section className="py-10 md:py-20 bg-accent/5">
      <div className="container">
        <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          className="heading font-medium mb-10 md:text-start text-center"
        >
          Omega Hospitals <span className="text-accent">Centres in India</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-4 md:gap-10 gap-5">
          <aside
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
            className="space-y-6"
          >
            {/* State selector */}
            <div className="space-y-1">
              {STATES.map((state) => {
                const isActiveState = state === activeState;
                return (
                  <button
                    key={state}
                    onClick={() => handleStateChange(state)}
                    className={`w-full xl-para text-left px-4 py-2 rounded-md transition font-semibold
                      ${
                        isActiveState
                          ? "bg-accent text-white"
                          : "text-gray-700 hover:text-accent"
                      }`}
                  >
                    {state}
                  </button>
                );
              })}
            </div>
          </aside>

          <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
            className="lg:col-span-3 bg-white rounded-2xl shadow-md overflow-hidden p-7"
          >
            {/* City pill tabs */}
            {citiesInState.length > 0 && (
              <div className="flex flex-wrap gap-3 mb-6">
                {citiesInState.map((centre) => {
                  const isActive = centre.id === activeCentre.id;
                  return (
                    <button
                      key={centre.id}
                      onClick={() => setActiveCentre(centre)}
                      className={`xl-para px-5 py-2 rounded-full border transition font-medium
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
            )}

            <div className="relative h-85 w-full flex items-center justify-center overflow-hidden">
              <Image
                src={activeCentre.image}
                alt={activeCentre.name}
                fill
                className="object-cover object-center rounded-2xl"
              />
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold text-accent">
                  {activeCentre.name}
                </h3>

                <div className="flex items-center gap-1 text-sm">
                  {"★★★★★".split("").map((_, i) => (
                    <span key={i} className="text-accent">
                      ★
                    </span>
                  ))}
                  <span className="ml-1 font-medium text-gray-700">
                    {activeCentre.rating}
                  </span>
                </div>
              </div>

              <p className="mt-3 text-gray-600 text-sm max-w-xl md:text-start text-center">
                {activeCentre.description}
              </p>

              <hr className="my-6" />

              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                <button className="w-full sm:w-auto bg-accent hover:bg-accent/70 text-white px-6 py-2 rounded-md font-medium text-center">
                  Book a Free Consultation
                </button>

                <button className="w-full sm:w-auto border border-accent text-accent px-6 py-2 rounded-md font-medium hover:bg-purple-50 text-center">
                  Call Us
                </button>

                <button className="w-full sm:w-auto border border-accent text-accent px-6 py-2 rounded-md font-medium hover:bg-purple-50 text-center">
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
