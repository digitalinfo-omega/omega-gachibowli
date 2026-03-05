"use client";

import { useState, useRef, useEffect } from "react";
import {
  ArrowUpRight,
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
  {
    name: "Digestive Health",
    icon: Stethoscope,
    cards: [
      {
        title: "Gastroenterology",
        desc: "Diagnosis and treatment of digestive system disorders including stomach, liver, and intestines.",
      },
      {
        title: "Endoscopy Services",
        desc: "Advanced diagnostic procedures for detecting ulcers, reflux, and gastrointestinal diseases.",
      },
      {
        title: "Hepatology",
        desc: "Specialized care for liver diseases including hepatitis, fatty liver, and cirrhosis.",
      },
    ],
  },
  {
    name: "Women's Health",
    icon: Baby,
    cards: [
      {
        title: "Gynecology",
        desc: "Comprehensive care for women’s reproductive health, menstrual disorders, and screenings.",
      },
      {
        title: "Obstetrics",
        desc: "Expert pregnancy care including prenatal checkups, delivery, and postpartum support.",
      },
      {
        title: "Fertility & IVF",
        desc: "Advanced fertility treatments and assisted reproductive technologies for couples.",
      },
    ],
  },
  {
    name: "Specialty Clinics",
    icon: FlaskConical,
    cards: [
      {
        title: "Diabetes Clinic",
        desc: "Personalized diabetes management including insulin therapy and lifestyle counseling.",
      },
      {
        title: "Hypertension Clinic",
        desc: "Specialized care for high blood pressure and cardiovascular risk prevention.",
      },
      {
        title: "Preventive Health",
        desc: "Routine health checkups and screenings for early disease detection and wellness.",
      },
    ],
  },
  {
    name: "Orthopedics",
    icon: Bone,
    cards: [
      {
        title: "Joint Replacement",
        desc: "Advanced knee, hip, and shoulder replacement surgeries with faster recovery.",
      },
      {
        title: "Sports Medicine",
        desc: "Treatment for sports injuries including ligament tears and muscle damage.",
      },
      {
        title: "Spine Surgery",
        desc: "Minimally invasive procedures for spinal disorders, disc problems, and fractures.",
      },
    ],
  },
];

export default function MedicalSpecialities() {
  const [active, setActive] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
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
          30+ Medical Specialties
        </h2>

        {/* Wrapper: overflow-hidden only on x, but allow y overflow for the arrow */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex w-full overflow-x-auto overflow-y-visible pb-6 touch-pan-x scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {TABS.map((tab, i) => (
              <button
                key={tab.name}
                onClick={() => setActive(i)}
                className={`relative min-w-[150px] border border-gray-200 sm:min-w-[200px] flex flex-col items-center justify-center gap-3 py-8 border-r border-gray-200 xs-para shrink-0 snap-start
                  ${active === i ? "bg-secondary text-white" : "bg-white text-black"}`}
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center ${
                    active === i
                      ? "bg-white text-secondary"
                      : "bg-gray-300 text-gray-500"
                  }`}
                >
                  <tab.icon size={32} strokeWidth={1.5} />
                </div>
                <span className="text-center">{tab.name}</span>

                {/* Down arrow - rendered outside overflow clip via absolute positioning */}
                {active === i && (
                  <span
                    className="absolute left-1/2 -translate-x-1/2 z-10"
                    style={{
                      bottom: "-20px",
                      width: 0,
                      height: 0,
                      borderLeft: "20px solid transparent",
                      borderRight: "20px solid transparent",
                      borderTop: "20px solid var(--color-secondary, #0d9488)",
                    }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <div
          ref={cardRef}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
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
  const shape =
    "polygon(0 0, calc(100% - 56px) 0, calc(100% - 56px) 56px, 100% 56px, 100% 100%, 0 100%)";

  return (
    <div className="relative">
      <span className="absolute top-0 right-0 w-13 h-13 rounded-xl bg-secondary text-white flex items-center justify-center border border-white z-10">
        <ArrowUpRight size={20} />
      </span>

      <div
        className="bg-gray-200 p-[1.5px]"
        style={{ clipPath: shape, borderRadius: "16px" }}
      >
        <div
          className="bg-white p-8 shadow-sm"
          style={{ clipPath: shape, borderRadius: "12px" }}
        >
          <h3 className="para text-accent mb-4">{title}</h3>
          <p className="sm-para text-gray-600 mb-8">{desc}</p>
          <button className="bg-secondary text-white px-6 py-3 rounded-md flex items-center gap-2 xs-para">
            Book Appointment
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
