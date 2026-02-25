"use client";

import { useState, useRef, useEffect } from "react";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  HeartPulse,
  Brain,
  Stethoscope,
  Baby,
  FlaskConical,
  Bone,
} from "lucide-react";
import gsap from "gsap";

const TABS = [
  {
    name: "Heart & Vascular",
    icon: HeartPulse,
    cards: [
      {
        title: "Cardiology",
        desc: "Prevent, diagnose & manage heart disease with advanced imaging.",
      },
      {
        title: "Cardiothoracic Surgery",
        desc: "Minimally invasive & open-heart surgery for complex conditions.",
      },
      {
        title: "Vascular Surgery",
        desc: "Advanced treatment for veins, aneurysms & blockages.",
      },
    ],
  },
  {
    name: "Brain & Spine",
    icon: Brain,
    cards: [
      {
        title: "Neurosurgery",
        desc: "Expert surgical intervention for brain and spinal conditions.",
      },
      {
        title: "Neurology",
        desc: "Comprehensive care for nervous system disorders.",
      },
      {
        title: "Pain Management",
        desc: "Advanced interventional techniques for chronic pain.",
      },
    ],
  },
  { name: "Digestive Health", icon: Stethoscope, cards: [] },
  { name: "Women's Health", icon: Baby, cards: [] },
  { name: "Specialty Clinics", icon: FlaskConical, cards: [] },
  { name: "Orthopedics", icon: Bone, cards: [] },
];

export default function MedicalSpecialities() {
  const [active, setActive] = useState(0);
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" },
    );
  }, [active]);

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <h2 className="text-center heading italic font-bold text-accent mb-16">
          30+ Medical Specialties The Same Excellence You Expect from Omega
        </h2>

        <div className="relative flex items-center">
          <button className="absolute -left-12 w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center">
            <ChevronLeft />
          </button>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border border-gray-200 w-full">
            {TABS.map((tab, i) => (
              <button
                key={tab.name}
                onClick={() => setActive(i)}
                className={`relative flex flex-col items-center justify-center gap-3 py-8 border-r border-gray-200 xs-para
                  ${active === i ? "bg-secondary text-white" : "bg-white text-black"}`}
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center ${active === i ? "bg-white text-secondary" : "bg-gray-300 text-gray-500"}`}
                >
                  <tab.icon size={32} strokeWidth={1.5} />
                </div>
                <span className="text-center">{tab.name}</span>
                {active === i && (
                  <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-t-[14px] border-t-secondary" />
                )}
              </button>
            ))}
          </div>
          <button className="absolute -right-12 w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center">
            <ChevronRight />
          </button>
        </div>

        <div
          ref={cardRef}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {TABS[active].cards.map((card, idx) => (
            <Card key={idx} title={card.title} desc={card.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="relative border border-gray-200 rounded-2xl p-8 bg-white shadow-sm">
      <span className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-accent text-white flex items-center justify-center">
        <ArrowUpRight size={18} />
      </span>
      <h3 className="para text-accent mb-4">{title}</h3>
      <p className="sm-para text-gray-600 mb-8">{desc}</p>
      <button className="bg-accent text-white px-6 py-3 rounded-md flex items-center gap-2 xs-para">
        Book Appointment
        <ArrowUpRight size={16} />
      </button>
    </div>
  );
}
