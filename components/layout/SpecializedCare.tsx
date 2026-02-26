"use client";

import { useState } from "react";
import { Heart, Brain, Stethoscope, Venus, Bone, Siren } from "lucide-react";

const TABS = [
  {
    label: "Heart & Vascular",
    icon: <Heart size={16} />,
    cards: [
      {
        title: "Cardiology",
        desc: "Prevent, diagnose & manage heart disease with advanced imaging, interventional care & rehabilitation.",
        cta: "Book Cardiologist →",
      },
      {
        title: "Cardiothoracic Surgery",
        desc: "Minimally invasive & open-heart surgery for complex cardiac conditions with excellent outcomes.",
        cta: "Consult CT Surgeon →",
      },
      {
        title: "Vascular Surgery",
        desc: "Advanced treatment for varicose veins, aneurysms & vascular blockages with precision techniques.",
        cta: "Vascular Consultation →",
      },
    ],
  },
  {
    label: "Brain & Spine",
    icon: <Brain size={16} />,
    cards: [
      {
        title: "Neurology",
        desc: "Advanced diagnosis and treatment of neurological disorders with precision care.",
        cta: "Consult Neurologist →",
      },
      {
        title: "Neurosurgery",
        desc: "Minimally invasive and complex brain & spine surgeries with expert outcomes.",
        cta: "Consult Neurosurgeon →",
      },
      {
        title: "Spine Care",
        desc: "Comprehensive spine care including surgical and non-surgical treatments.",
        cta: "Spine Consultation →",
      },
    ],
  },
  {
    label: "Digestive Health",
    icon: <Stethoscope size={16} />,
    cards: [
      {
        title: "Gastroenterology",
        desc: "Complete digestive system care with advanced diagnostics and interventions.",
        cta: "Consult Gastroenterologist →",
      },
      {
        title: "GI Surgery",
        desc: "Advanced laparoscopic and open GI surgeries for complex conditions.",
        cta: "GI Surgery Consultation →",
      },
      {
        title: "Liver Care",
        desc: "Specialized treatment for liver diseases and disorders.",
        cta: "Liver Consultation →",
      },
    ],
  },
  {
    label: "Women's Health",
    icon: <Venus size={16} />,
    cards: [
      {
        title: "Gynecology",
        desc: "Comprehensive women’s healthcare across all life stages.",
        cta: "Consult Gynecologist →",
      },
      {
        title: "Obstetrics",
        desc: "Advanced maternity care with expert monitoring and delivery services.",
        cta: "Book Obstetrician →",
      },
      {
        title: "Breast Care",
        desc: "Specialized diagnosis and treatment for breast health conditions.",
        cta: "Breast Consultation →",
      },
    ],
  },
  {
    label: "Orthopedics",
    icon: <Bone size={16} />,
    cards: [
      {
        title: "Joint Replacement",
        desc: "Advanced knee and hip replacement surgeries for improved mobility.",
        cta: "Joint Consultation →",
      },
      {
        title: "Sports Medicine",
        desc: "Injury prevention and recovery for active lifestyles.",
        cta: "Sports Consultation →",
      },
      {
        title: "Spine Orthopedics",
        desc: "Orthopedic spine treatments with precision techniques.",
        cta: "Ortho Spine Consultation →",
      },
    ],
  },
  {
    label: "Emergency & Critical",
    icon: <Siren size={16} />,
    cards: [
      {
        title: "Emergency Medicine",
        desc: "24/7 emergency response with rapid diagnosis and treatment.",
        cta: "Emergency Care →",
      },
      {
        title: "Critical Care",
        desc: "Advanced ICU care with continuous monitoring and expert teams.",
        cta: "Critical Care →",
      },
      {
        title: "Trauma Care",
        desc: "Comprehensive trauma management with immediate intervention.",
        cta: "Trauma Support →",
      },
    ],
  },
];

export default function SpecializedCare() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#0B0F14] py-10 md:py-20">
      <div className="container">
        <div className="text-center md:mb-20 mb-10">
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="xs-para tracking-[0.35em] text-accent mb-4"
          >
            30+ MEDICAL SPECIALTIES
          </p>
          <h2
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="heading text-white"
          >
            Specialized Care,{" "}
            <span className="text-accent italic">Tailored to You</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] md:gap-12 gap-6">
          <div className="space-y-3">
            {TABS.map((tab, i) => (
              <div
                key={tab.label}
                onClick={() => setActive(i)}
                className={`flex items-center gap-3 px-5 py-4 border cursor-pointer ${
                  active === i
                    ? "bg-[#F3C56B] text-black border-[#F3C56B]"
                    : "border-white/10 text-[#8B97A7]"
                }`}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={i * 300}
              >
                {tab.icon}
                <span className="xs-para">{tab.label}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TABS[active].cards.map((card, idx) => (
              <div
                key={card.title}
                className="border border-white/10 p-10 text-white md:min-h-105 min-h-70 flex flex-col"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={idx * 200}
              >
                <h3 className="para mb-6">{card.title}</h3>
                <p className="sm-para text-[#8B97A7] mb-10 leading-relaxed">
                  {card.desc}
                </p>
                <span className="mt-auto text-accent sm-para">{card.cta}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
