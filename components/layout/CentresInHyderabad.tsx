"use client";

import Image from "next/image";
import { useState } from "react";

type Centre = {
  id: string;
  name: string;
  image: string;
  rating: number;
  description: string;
};

const CENTRES: Centre[] = [
  {
    id: "banjara",
    name: "Banjara Hills",
    image: "/images/cancer-centre/cancer-img1.webp",
    rating: 4.8,
    description: "Best Oncology & Multi-Specialty in banjara hills",
  },
  {
    id: "dilsukhnagar",
    name: "Dilsukhnagar",
    image: "/images/cancer-centre/cancer-img1.webp",
    rating: 4.7,
    description: "Best Oncology & Multi-Specialty in Dilsukhnagar",
  },
  {
    id: "gachibowli",
    name: "Gachibowli",
    image: "/images/cancer-centre/cancer-img1.webp",
    rating: 4.9,
    description: "Best Oncology & Multi-Specialty in Gachibowli",
  },
  {
    id: "kompally",
    name: "Kompally",
    image: "/images/cancer-centre/cancer-img1.webp",
    rating: 4.6,
    description: "Best Oncology & Multi-Specialty in Kompally",
  },
  {
    id: "miyapur",
    name: "Miyapur",
    image: "/images/cancer-centre/cancer-img1.webp",
    rating: 4.7,
    description: "Best Oncology & Multi-Specialty in Miyapur",
  },
  {
    id: "secunderabad",
    name: "Secunderabad",
    image: "/images/cancer-centre/cancer-img1.webp",
    rating: 4.8,
    description: "Best Oncology & Multi-Specialty in Secunderabad",
  },
  {
    id: "tolichowki",
    name: "Tolichowki",
    image: "/images/cancer-centre/cancer-img1.webp",
    rating: 4.6,
    description: "Best Oncology & Multi-Specialty in Tolichowki",
  },
  {
    id: "uppal",
    name: "Uppal",
    image: "/images/cancer-centre/cancer-img1.webp",
    rating: 4.7,
    description: "Best Oncology & Multi-Specialty in Uppal",
  },
];

export default function CentresHyderabad() {
  const [activeCentre, setActiveCentre] = useState<Centre>(
    CENTRES.find((c) => c.id === "gachibowli")!,
  );

  return (
    <section className="py-10 md:py-20 bg-accent/10">
      <div className="container">
        <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          className="heading font-medium mb-10"
        >
          Omega Hospitals{" "}
          <span className="text-purple-700">Centres in Hyderabad</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
            className="lg:col-span-3 bg-white rounded-2xl shadow-md overflow-hidden p-7"
          >
            <div className="relative h-85">
              <Image
                src={activeCentre.image}
                alt={activeCentre.name}
                fill
                className="object-cover rounded-2xl"
              />
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold text-purple-700">
                  {activeCentre.name}
                </h3>

                <div className="flex items-center gap-1 text-sm">
                  {"★★★★★".split("").map((_, i) => (
                    <span key={i} className="text-orange-400">
                      ★
                    </span>
                  ))}
                  <span className="ml-1 font-medium text-gray-700">
                    {activeCentre.rating}
                  </span>
                </div>
              </div>

              <p className="mt-3 text-gray-600 text-sm max-w-xl">
                {activeCentre.description}
              </p>

              <hr className="my-6" />

              <div className="flex flex-wrap gap-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-medium">
                  Book a Free Consultation
                </button>

                <button className="border border-purple-700 text-purple-700 px-6 py-2 rounded-md font-medium hover:bg-purple-50">
                  Call Us
                </button>

                <button className="border border-purple-700 text-purple-700 px-6 py-2 rounded-md font-medium hover:bg-purple-50">
                  Get Directions
                </button>
              </div>
            </div>
          </div>

          <aside
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
            className="space-y-4"
          >
            {CENTRES.map((centre, index) => {
              const isActive = centre.id === activeCentre.id;

              return (
                <button
                  key={centre.id}
                  onClick={() => setActiveCentre(centre)}
                  className={`w-full xl-para text-left px-4 py-2 rounded-md transition
                  ${
                    isActive
                      ? "bg-purple-700 text-white font-semibold"
                      : "text-pink-300 hover:text-purple-700"
                  }`}
                >
                  {centre.name}
                </button>
              );
            })}
          </aside>
        </div>
      </div>
    </section>
  );
}
