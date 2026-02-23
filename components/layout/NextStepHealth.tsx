"use client";

import {
  Stethoscope,
  CalendarCheck,
  FileSearch,
  Video,
  Pill,
  ClipboardCheck,
  AlertCircle,
} from "lucide-react";

export default function NextStepHealth() {
  return (
    <section className="py-10 md:py-20">
      <div className="container">
        {/* Heading */}
        <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          className="heading text-center font-semibold text-gray-500"
        >
          Your Next Step Toward{" "}
          <span className="text-accent">Better Health</span>
        </h2>

        {/* Top Action Buttons */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {TOP_ACTIONS.map((item, i) => (
            <button
              key={i}
              className="flex items-center justify-center gap-2 border border-secondary/40 
                         text-secondary px-4 py-3 rounded-md hover:bg-secondary/10 
                         transition xs-para"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={i * 100}
            >
              <item.icon size={18} />
              {item.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Diagnosed */}
          <Card
            icon={Stethoscope}
            title="I've Been Diagnosed"
            desc="Get expert guidance within 24 hours. Connect with our oncology team for personalized treatment plans."
            linkText="Schedule Consultation →"
            accent="accent"
            idx={0}
          />

          {/* Screening */}
          <Card
            icon={ClipboardCheck}
            title="I Need Screening"
            desc="Early detection saves lives. Explore our comprehensive cancer screening packages starting at ₹XXX."
            linkText="View Health Packages →"
            accent="secondary"
            idx={1}
          />

          {/* Emergency */}
          <Card
            icon={AlertCircle}
            title="Emergency Care"
            desc="24/7 cancer emergency services. Our team is ready when you need us most."
            linkText="Emergency: 98490 22121 →"
            accent="accent"
            idx={2}
          />
        </div>
      </div>
    </section>
  );
}

function Card({
  icon: Icon,
  title,
  desc,
  linkText,
  accent,
  idx,
}: {
  icon: any;
  title: string;
  desc: string;
  linkText: string;
  accent: "accent" | "secondary";
  idx: number;
}) {
  return (
    <div
      className={`border rounded-lg p-6 flex flex-col justify-between
                  border-gray-200 relative overflow-hidden`}
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay={idx * 300}
    >
      {/* Top Accent Line */}
      <div className={`absolute top-0 left-0 h-0.75 w-full bg-${accent}`} />

      <div className="space-y-4">
        <div
          className={`w-10 h-10 rounded-lg flex items-center justify-center
                      bg-${accent}/10 text-${accent}`}
        >
          <Icon size={20} />
        </div>

        <h3 className={`para font-semibold text-${accent}`}>{title}</h3>

        <p className="sm-para text-gray-600">{desc}</p>
      </div>

      <a
        href="#"
        className={`mt-6 inline-block xl-para font-medium text-${accent}`}
      >
        {linkText}
      </a>
    </div>
  );
}

const TOP_ACTIONS = [
  { label: "Find a Cancer Specialist", icon: Stethoscope },
  { label: "Book Health Checkup", icon: CalendarCheck },
  { label: "Get Second Opinion", icon: FileSearch },
  { label: "Video Consultation", icon: Video },
  { label: "Pharmacy", icon: Pill },
];
