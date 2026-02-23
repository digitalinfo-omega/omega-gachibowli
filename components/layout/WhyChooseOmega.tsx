"use client";

import { Check, Building2, Users, Cpu, ShieldCheck, Globe } from "lucide-react";

export default function WhyChooseOmega() {
  return (
    <section className="relative bg-[#0b0f14] py-10 md:py-20">
      <div className="container">
        {/* Top Label */}
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-center sm-para tracking-[0.25em] text-accent mb-4"
        >
          WHY CHOOSE OMEGA
        </p>

        {/* Heading */}
        <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          className="heading text-center text-white mb-16"
        >
          Why 13+ Lakh Patients{" "}
          <span className="text-accent italic">Trusted</span> Omega
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <Card
            icon={<Building2 size={18} />}
            title="Comprehensive Cancer Care Under One Roof"
            desc="Medical, surgical, and radiation oncology teams work together on your treatment plan—no running between facilities."
            idx={0}
          />

          {/* Card 2 (Highlighted Border) */}
          <Card
            icon={<Users size={18} />}
            title="India's Leading Cancer Specialists"
            desc="Founded by Dr. Ch. Mohana Vamsy, Chief Surgical Oncologist, with decades of experience treating complex cases."
            idx={1}
          />

          {/* Card 3 */}
          <Card
            icon={<Cpu size={18} />}
            title="Advanced Technology"
            desc="AI-powered Ethos LINAC, PET-MRI, robotic radiosurgery, and the latest treatment technologies."
            idx={2}
          />
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <Card
            icon={<ShieldCheck size={18} />}
            title="Insurance & Affordability"
            desc="Cashless treatment with 100+ insurance partners and transparent pricing."
            idx={3}
          />

          <Card
            icon={<Globe size={18} />}
            title="International Patient Services"
            desc="Complete support from visa assistance to post-treatment follow-ups for patients worldwide."
            idx={4}
          />
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Stat label="66,500+ Successful Surgeries" idx={0} />
          <Stat label="NABH Accredited" idx={1} />
          <Stat label="24/7 Emergency Care" idx={2} />
          <Stat label="Insurance Accepted" idx={3} />
        </div>
      </div>
    </section>
  );
}

function Card({
  icon,
  title,
  desc,
  highlight = false,
  idx = 0,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  highlight?: boolean;
  idx: number;
}) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay={idx * 200}
      className={`relative p-8 border rounded-md bg-transparent transition-colors duration-300
    ${
      highlight ? "border-accent/60" : "border-white/10 hover:border-accent/60"
    }`}
    >
      {/* Icon */}
      <div className="w-10 h-10 border border-accent flex items-center justify-center text-accent mb-6">
        {icon}
      </div>

      <h3 className="para text-white mb-4">{title}</h3>
      <p className="sm-para text-white/70">{desc}</p>
    </div>
  );
}

function Stat({ label, idx }: { label: string; idx: number }) {
  return (
    <div
      className="flex items-center gap-3 px-6 py-4 border border-accent/40 rounded-md text-white xs-para"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay={(idx ?? 0) * 200}
    >
      <Check className="text-accent" size={16} />
      {label}
    </div>
  );
}
