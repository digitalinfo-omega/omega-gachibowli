"use client";

import { useEffect, useRef } from "react";
import {
  Baby,
  UserCheck,
  Building2,
  Sparkles,
  ShieldCheck,
  Tag,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
  { icon: Baby, label: "115,000+\nBabies Born" },
  { icon: UserCheck, label: "Trusted by\nGynecs" },
  { icon: Building2, label: "Clinical\nExcellence" },
  { icon: Sparkles, label: "Personalised\nTreatments" },
  { icon: ShieldCheck, label: "Comprehensive\nCare" },
  { icon: Tag, label: "Ethical &\nTransparent" },
];

export default function WhyChooseUs() {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    itemsRef.current.forEach((el, i) => {
      if (!el) return;

      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: i * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        },
      );

      const circle = el.querySelector(".icon-circle");
      const icon = el.querySelector(".icon-el");
      const label = el.querySelector(".label-el");

      el.addEventListener("mouseenter", () => {
        gsap.to(circle, {
          scale: 1.15,
          backgroundColor: "#ede9fe",
          boxShadow: "0 12px 32px rgba(147,51,234,0.18)",
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(icon, {
          rotate: 15,
          scale: 1.2,
          color: "#299fb0",
          duration: 0.3,
          ease: "back.out(2)",
        });
        gsap.to(label, {
          color: "#299fb0",
          y: -4,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      el.addEventListener("mouseleave", () => {
        gsap.to(circle, {
          scale: 1,
          backgroundColor: "#f5f3ff",
          boxShadow: "none",
          duration: 0.3,
          ease: "power2.inOut",
        });
        gsap.to(icon, {
          rotate: 0,
          scale: 1,
          color: "#a78bfa",
          duration: 0.3,
          ease: "power2.inOut",
        });
        gsap.to(label, {
          color: "#4b5563",
          y: 0,
          duration: 0.3,
          ease: "power2.inOut",
        });
      });
    });
  }, []);

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
              ref={(el) => {
                itemsRef.current[i] = el;
              }}
              className="flex flex-col items-center gap-4 cursor-default w-28 text-center opacity-0"
            >
              <div
                className="icon-circle w-24 h-24 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#f5f3ff" }}
              >
                <feature.icon
                  className="icon-el"
                  size={44}
                  strokeWidth={1.2}
                  style={{ color: "#299fb0" }}
                />
              </div>
              <p className="label-el text-gray-600 text-sm leading-snug whitespace-pre-line">
                {feature.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
