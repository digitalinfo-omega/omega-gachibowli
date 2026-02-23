"use client";

import { useState } from "react";

type FAQ = {
  q: string;
  a: string;
};

const leftFaqs: FAQ[] = [
  {
    q: "Does Omega Hospital provide 24×7 Emergency Services?",
    a: "Yes, Omega Hospital provides 24×7 emergency services with trained medical staff and advanced emergency care facilities available at all times.",
  },
  {
    q: "What types of cancer treatment services are offered by Omega hospitals?",
    a: "Omega Hospitals offers comprehensive cancer care including medical oncology, surgical oncology, radiation oncology, immunotherapy, targeted therapy, and supportive cancer care.",
  },
  {
    q: "Does Omega Hospital have Ethos LINAC, an AI-powered Linear Accelerator System Machine?",
    a: "Yes, Omega Hospital is equipped with the advanced Ethos LINAC system that enables AI-powered adaptive radiation therapy for precise cancer treatment.",
  },
  {
    q: "Does Omega Hospital provide cashless medical insurance?",
    a: "Yes, Omega Hospital has tie-ups with multiple insurance providers and offers cashless treatment facilities subject to policy terms and approvals.",
  },
  {
    q: "Where can I get a list of physicians and consultants empanelled with Omega Hospitals?",
    a: "You can find the list of empanelled physicians and consultants on the Omega Hospitals official website or by contacting the hospital directly.",
  },
  {
    q: "Is patient health data/information safe and secured at Omega Hospitals?",
    a: "Yes, Omega Hospitals follows strict data protection protocols to ensure patient health information is kept confidential and secure.",
  },
];

const rightFaqs: FAQ[] = [
  {
    q: "Which is the best cancer hospital in India?",
    a: "Omega Hospitals is widely recognized as one of the leading cancer care hospitals in India due to its advanced technology, experienced doctors, and patient-focused approach.",
  },
  {
    q: "What services are offered by Omega Hospitals?",
    a: "Omega Hospitals offers oncology services, diagnostics, preventive health checkups, emergency care, pharmacy, laboratory services, and rehabilitation support.",
  },
  {
    q: "How can I book an appointment at Omega Hospital?",
    a: "Appointments can be booked through the Omega Hospitals website, mobile app, phone call, or by visiting the hospital reception.",
  },
  {
    q: "Does Omega Hospital have ambulance services?",
    a: "Yes, Omega Hospital provides ambulance services for emergency and patient transport requirements.",
  },
  {
    q: "How can I get access to health packages available at Omega Hospital?",
    a: "Health packages can be accessed through the hospital website, mobile app, or by contacting the hospital helpdesk.",
  },
  {
    q: "Is Omega Hospitals recognized by the National Accreditation Board for Hospitals & Healthcare Providers (NABH)?",
    a: "Yes, Omega Hospitals is NABH accredited, ensuring adherence to national standards of quality and patient safety.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<string | null>(null);

  const Item = ({ q, a }: FAQ) => {
    const isOpen = open === q;

    return (
      <div className="border-b border-gray-400 pb-4">
        <button
          onClick={() => setOpen(isOpen ? null : q)}
          className="w-full flex items-center justify-between text-left text-[#2F3640] text-base font-medium"
        >
          <span>{q}</span>
          <span
            className={`text-2xl font-light transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            {isOpen ? "−" : "+"}
          </span>
        </button>

        <div
          className={`grid transition-all duration-500 ease-in-out ${
            isOpen
              ? "grid-rows-[1fr] opacity-100 mt-3"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <p className="text-sm text-gray-600 max-w-xl">{a}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-white py-24 relative">
      <div className="absolute left-0 top-0 w-[300px] h-[300px] rounded-full bg-[#EAF6F8] -z-10" />
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-medium mb-16">FAQ's</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
          <div className="space-y-10">
            {leftFaqs.map((f) => (
              <Item key={f.q} {...f} />
            ))}
          </div>

          <div className="space-y-10">
            {rightFaqs.map((f) => (
              <Item key={f.q} {...f} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
