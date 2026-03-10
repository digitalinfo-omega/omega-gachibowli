"use client";

import {
  Baby,
  UserCheck,
  Building2,
  Sparkles,
  ShieldCheck,
  Tag,
} from "lucide-react";

const FEATURES = [
  { icon: Baby, label: "115,000+\nBabies Born" },
  { icon: UserCheck, label: "Trusted by\nGynecs" },
  { icon: Building2, label: "Clinical\nExcellence" },
  { icon: Sparkles, label: "Personalised\nTreatments" },
  { icon: ShieldCheck, label: "Comprehensive\nCare" },
  { icon: Tag, label: "Ethical &\nTransparent" },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <h2 className="text-center text-4xl font-semibold text-secondary mb-16">
          Why Choose Omega?
        </h2>

        <div className="flex flex-wrap justify-center gap-10 md:gap-16">
          {FEATURES.map((feature, i) => (
            <div
              key={i}
              className="group flex flex-col items-center gap-4 w-28 text-center cursor-pointer"
            >
              {/* circle */}
              <div
                className="
                  w-24 h-24 rounded-full flex items-center justify-center
                  transition-colors duration-300

                  bg-accent/10
                  md:bg-transparent
                  md:group-hover:bg-accent/10
                "
              >
                <feature.icon
                  size={44}
                  strokeWidth={1.2}
                  className="text-accent"
                />
              </div>

              {/* label */}
              <p
                className="
                  text-sm leading-snug whitespace-pre-line font-semibold
                  text-accent
                  md:text-gray-600
                  md:group-hover:text-accent
                  transition-colors duration-300
                "
              >
                {feature.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
