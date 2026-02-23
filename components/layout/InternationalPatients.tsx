"use client";

import Image from "next/image";
import {
  FileText,
  ClipboardCheck,
  Home,
  Car,
  Stethoscope,
  UserCheck,
  MessageSquare,
  MapPin,
  IdCard,
} from "lucide-react";

export default function InternationalPatients() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT PEACH BLOCK (SINGLE SHAPE) */}
          <div className="relative bg-[#FFF5EC] rounded-[28px] px-12 pt-12 pb-14">
            {/* Title (INSIDE SHAPE – TOP LEFT) */}
            <h2 className="heading text-[#2F343B] leading-tight mb-10 max-w-[240px]">
              International <br /> Patients
            </h2>

            {/* Badge (INSIDE SHAPE – TOP RIGHT) */}
            <div className="absolute top-8 right-8 bg-accent rounded-full px-6 py-4 flex items-center gap-4 text-white xs-para">
              <span className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-accent">
                ☎
              </span>
              INTERNATIONAL No. +91 040 25552555
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-12 gap-y-10 xs-para text-[#4B5563] mt-6">
              <Service icon={<FileText />} label="Registration Process" />
              <Service icon={<ClipboardCheck />} label="Document Process" />
              <Service icon={<Home />} label="Food and Accommodation" />

              <Service icon={<Car />} label="Pick Up And Drop" />
              <Service icon={<IdCard />} label="Visa Process" />
              <Service icon={<Stethoscope />} label="Tourism After Treatment" />

              <Service icon={<UserCheck />} label="End To End Guidance" />
              <Service
                icon={<MessageSquare />}
                label="Post Treatment Consultation"
              />
              <Service icon={<MapPin />} label="Planning To Revisit" />
            </div>

            {/* LEFT NOTCH ILLUSION */}
            <div className="absolute -left-8 top-20 w-16 h-28 bg-white rounded-r-[24px]" />
            <div className="absolute -left-8 bottom-16 w-16 h-28 bg-white rounded-r-[24px]" />
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center">
            <div className="relative w-[300px] h-[300px] md:w-[360px] md:h-[360px] rounded-full bg-[#FFF5EC] flex items-center justify-center">
              <Image
                src="/images/international.webp"
                alt="International Patients"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVICE ITEM ---------------- */

function Service({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 border border-accent rounded-md flex items-center justify-center text-accent">
        {icon}
      </div>
      <span className="leading-snug">{label}</span>
    </div>
  );
}
