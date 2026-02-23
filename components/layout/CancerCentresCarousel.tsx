"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

type Centre = {
  id: number;
  tab: string;
  title: string;
  subtitle: string;
  leftPoints: string[];
  rightPoints: string[];
  image: string;
};

const DATA: Centre[] = [
  {
    id: 0,
    tab: "Medical Oncology",
    title: "Medical Oncology",
    subtitle:
      "Personalized Chemotherapy & Targeted Therapy Based on Your Tumor's DNA",
    leftPoints: [
      "Precision medicine & genomic testing",
      "Immunotherapy protocols",
      "Clinical trial access",
      "3.78 lakh+ chemotherapy sessions delivered",
      "Private infusion suites",
    ],
    rightPoints: [
      "Chemotherapy",
      "Immunotherapy",
      "Targeted therapy",
      "Hormone therapy",
      "Personalized treatment protocols",
    ],
    image: "/images/cancer-centre/cancer-img1.webp",
  },
  {
    id: 1,
    tab: "Surgical Oncology",
    title: "Surgical Oncology",
    subtitle: "Advanced cancer surgeries with minimally invasive precision",
    leftPoints: [
      "Robotic & laparoscopic surgeries",
      "Organ preservation techniques",
      "High success outcomes",
    ],
    rightPoints: [
      "Tumor resections",
      "Reconstructive surgery",
      "Day-care procedures",
    ],
    image: "/images/cancer-centre/cancer-img1.webp",
  },
  {
    id: 2,
    tab: "Radiation Oncology",
    title: "Radiation Oncology",
    subtitle: "High precision radiation therapy for targeted cancer control",
    leftPoints: [
      "IMRT & IGRT",
      "Stereotactic radiotherapy",
      "Reduced side effects",
    ],
    rightPoints: [
      "External beam radiation",
      "Brachytherapy",
      "Image guided therapy",
    ],
    image: "/images/cancer-centre/cancer-img1.webp",
  },
  {
    id: 3,
    tab: "Hemato-Oncology & Bone Marrow Transplant",
    title: "Hemato-Oncology & Bone Marrow Transplant",
    subtitle: "Comprehensive blood cancer care & advanced transplant programs",
    leftPoints: [
      "Autologous & allogenic transplants",
      "Dedicated isolation units",
      "Expert transplant teams",
    ],
    rightPoints: ["Leukemia care", "Lymphoma care", "Myeloma management"],
    image: "/images/cancer-centre/cancer-img1.webp",
  },
];

export default function CancerCentresCarousel() {
  const [index, setIndex] = useState(0);
  const active = DATA[index];

  const prev = () => setIndex((i) => (i === 0 ? DATA.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === DATA.length - 1 ? 0 : i + 1));

  return (
    <section className="relative py-10 md:py-20 overflow-hidden">
      {/* Background Image (50% opacity) */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/cancer-centre/background.webp"
          alt="background"
          fill
          className="object-cover opacity-50"
          priority
        />
      </div>

      <div className="container">
        {/* Heading */}
        <div className="text-center mb-10">
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="heading text-accent italic font-semibold tracking-wide"
          >
            CANCER CENTRES OF EXCELLENCE
          </p>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="xl-para mt-2"
          >
            Four Pillars of Cancer Care, Internationally Recognized Excellence
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {DATA.map((item, i) => (
            <button
              key={item.id}
              onClick={() => setIndex(i)}
              className={`px-5 py-2 rounded-full border transition xs-para
                ${
                  index === i
                    ? "bg-secondary text-white border-secondary"
                    : "text-secondary border-secondary hover:bg-secondary/10"
                }`}
            >
              {item.tab}
            </button>
          ))}
        </div>

        {/* Card */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
          className="bg-white rounded-2xl shadow-xl p-6 lg:p-10 grid lg:grid-cols-2 gap-8"
        >
          {/* Left Content */}
          <div className="min-h-126.5 lg:min-h-96.25 flex flex-col justify-between">
            <h3 className="para text-secondary font-semibold mb-2">
              {active.title}
            </h3>
            <p className="sm-para mb-6">{active.subtitle}</p>

            <div className="grid sm:grid-cols-2 gap-6 sm-para">
              <ul className="list-disc pl-5 space-y-2">
                {active.leftPoints.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
              <ul className="list-disc pl-5 space-y-2">
                <li className="font-semibold">Treatment Options:</li>
                {active.rightPoints.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>

            <div>
              <button className="mt-8 bg-accent text-white px-6 py-3 rounded-full flex items-center gap-2 xs-para">
                Explore {active.title}
                <span className="w-5 h-5 rounded-full border border-white flex items-center justify-center">
                  <ArrowRight size={12} />
                </span>
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="700"
            className="relative h-65 md:h-80 rounded-xl overflow-hidden"
          >
            <Image
              src={active.image}
              alt={active.title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center"
          >
            <ArrowLeft size={16} />
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
