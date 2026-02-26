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
    <section className="md:py-20 py-10 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT PEACH BLOCK (SINGLE SHAPE) */}
          <div className="relative bg-[#FFF5EC] rounded-[28px] p-6">
            {/* Flex container to ensure proper vertical flow on mobile */}
            <div className="flex flex-col gap-8">
              {/* Heading & Badge Container */}
              <div className="flex flex-col sm:flex-row justify-between md:items-start items-center gap-4">
                <h2 className="relative z-10 heading text-[#2F343B] leading-tight md:mb-5 max-w-60">
                  International Patients
                </h2>

                {/* Badge - Adjusted for better mobile flow */}
                <div className="bg-accent rounded-full px-4 py-2 flex items-center gap-2 text-white text-xs whitespace-nowrap">
                  <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-accent">
                    ☎
                  </span>
                  +91 040 25552555
                </div>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 md:gap-8 gap-3">
                <Service icon={<FileText />} label="Registration Process" />
                <Service icon={<ClipboardCheck />} label="Document Process" />
                <Service icon={<Home />} label="Food and Accommodation" />
                <Service icon={<Car />} label="Pick Up And Drop" />
                <Service icon={<IdCard />} label="Visa Process" />
                <Service
                  icon={<Stethoscope />}
                  label="Tourism After Treatment"
                />
                <Service icon={<UserCheck />} label="End To End Guidance" />
                <Service
                  icon={<MessageSquare />}
                  label="Post Treatment Consultation"
                />
                <Service icon={<MapPin />} label="Planning To Revisit" />
              </div>
              {/* LEFT NOTCH ILLUSION */}
              <div className="absolute left-0 top-0 w-55 h-16 bg-white rounded-br-[24px] hidden md:block" />
              <div className="absolute left-0 top-14 w-40 h-16 bg-white rounded-br-[24px] hidden md:block" />
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center">
            <div className="relative w-83 h-83 md:w-102 md:h-103 rounded-full bg-[#FFF5EC] flex items-center justify-center">
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
    <div className="flex md:items-start items-center gap-4">
      <div className="w-10 h-10 flex items-center justify-center text-accent">
        {icon}
      </div>
      <span className="leading-snug">{label}</span>
    </div>
  );
}
