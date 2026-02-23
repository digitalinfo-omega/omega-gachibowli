"use client";

import { useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

const TABS = [
  "Heart & Vascular",
  "Brain & Spine",
  "Digestive Health",
  "Women's Health",
  "Specialty Clinics",
  "Orthopedics",
];

export default function MedicalSpecialities() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="container">
        {/* Heading */}
        <h2 className="text-center heading italic font-bold text-accent mb-16">
          30+ Medical Specialties The Same Excellence You Expect from Omega
        </h2>

        {/* Tabs + Arrows */}
        <div className="relative flex items-center">
          {/* Left Arrow */}
          <button className="absolute -left-12 w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center">
            <ChevronLeft />
          </button>

          {/* Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border border-gray-200 w-full">
            {TABS.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActive(i)}
                className={`relative flex flex-col items-center justify-center gap-3 py-8 border-r border-gray-200 xs-para
                  ${
                    active === i
                      ? "bg-secondary text-white"
                      : "bg-white text-black"
                  }`}
              >
                {/* Icon Circle */}
                <div
                  className={`w-16 h-16 rounded-full ${
                    active === i ? "bg-white" : "bg-gray-300"
                  }`}
                />

                <span className="text-center">{tab}</span>

                {/* Triangle Pointer */}
                {active === i && (
                  <span className="absolute -bottom-4 w-0 h-0 border-l-[14px] border-r-[14px] border-t-[14px] border-l-transparent border-r-transparent border-t-secondary" />
                )}
              </button>
            ))}
          </div>

          {/* Right Arrow */}
          <button className="absolute -right-12 w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center">
            <ChevronRight />
          </button>
        </div>

        {/* Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <Card
            title="Cardiology"
            desc="Prevent, diagnose & manage heart disease with advanced imaging, interventional care & rehabilitation."
          />

          {/* Card 2 */}
          <Card
            title="Cardiothoracic Surgery"
            desc="Minimally invasive & open-heart surgery for complex cardiac conditions with excellent outcomes."
          />

          {/* Card 3 */}
          <Card
            title="Vascular Surgery"
            desc="Advanced treatment for varicose veins, aneurysms & vascular blockages with precision techniques."
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------- CARD ---------------- */

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="relative border border-gray-200 rounded-2xl p-8 bg-white">
      {/* Top Right Icon */}
      <span className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-accent text-white flex items-center justify-center">
        <ArrowUpRight size={18} />
      </span>

      <h3 className="para text-accent mb-4">{title}</h3>
      <p className="sm-para text-gray-600 mb-8">{desc}</p>

      <button className="bg-accent text-white px-6 py-3 rounded-md flex items-center gap-2 xs-para">
        Book Cardiologist
        <ArrowUpRight size={16} />
      </button>
    </div>
  );
}
