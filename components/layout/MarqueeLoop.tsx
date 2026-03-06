"use client";

import { Mail, Phone } from "lucide-react";

export default function ContactMarquee() {
  const items = [
    { type: "phone", label: "98490 22121", link: "tel:9849022121" },
    {
      type: "email",
      label: "info@omegahospitals.com",
      link: "mailto:info@omegahospitals.com",
    },
  ];

  return (
    <div className="w-full overflow-hidden bg-accent text-white py-3">
      <div className="marquee flex items-center whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <a
            key={i}
            href={item.link}
            className="mx-24 flex items-center gap-2 whitespace-nowrap text-lg font-semibold hover:underline"
          >
            {item.type === "phone" ? <Phone size={16} /> : <Mail size={16} />}
            <span>{item.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
