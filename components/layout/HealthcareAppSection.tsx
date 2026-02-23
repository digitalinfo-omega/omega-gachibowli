"use client";

import Image from "next/image";

export default function HealthcareAppSection() {
  return (
    <section className="relative bg-[#0E1116] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="border border-[#C9A24D] rounded-2xl px-10 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs tracking-widest text-[#C9A24D] mb-4">
                DOWNLOAD OUR APP
              </p>

              <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                Healthcare at Your{" "}
                <span className="text-[#C9A24D]">Fingertips</span>
              </h2>

              <p className="mt-4 text-gray-400 max-w-xl">
                Book Appointments · View Reports · Pay Bills · Video Consult —
                All in One App
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mt-8 text-sm text-gray-300">
                <div className="flex items-center gap-3">
                  <span className="text-[#C9A24D]">✔</span>
                  Easy online appointment booking
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#C9A24D]">✔</span>
                  Access lab reports instantly
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#C9A24D]">✔</span>
                  Video consultation with doctors
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#C9A24D]">✔</span>
                  Medicine reminders
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#C9A24D]">✔</span>
                  Health record storage
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#C9A24D]">✔</span>
                  Secure payment gateway
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-10">
                <button className="bg-[#C9A24D] text-black px-6 py-3 rounded-md font-medium flex items-center gap-2">
                   App Store
                </button>
                <button className="border border-[#C9A24D] text-[#C9A24D] px-6 py-3 rounded-md font-medium flex items-center gap-2">
                  ▶ Google Play
                </button>
              </div>
            </div>

            <div className="relative flex justify-center">
              <Image
                src="/images/mobile.webp"
                alt="Healthcare App"
                width={360}
                height={720}
                className="relative z-10"
                priority
              />

              <div className="absolute right-0 top-10 bg-white text-xs text-gray-700 p-4 rounded-xl max-w-[220px] shadow-lg">
                Omega hospitals specializes in cancer treatment. Dr. Mohana
                Vamsy who has more than 30 years of experience in cancer
                treatment is your go-to person for his opinion on treatment for
                the cancer patient.
              </div>

              <div className="absolute left-0 bottom-16 bg-white text-xs text-gray-700 p-4 rounded-xl max-w-[200px] shadow-lg">
                Here is an application for you to book your doctor appointments
                including appointments of Dr. Mohana Vamsy.
              </div>

              <div className="absolute right-6 bottom-4 bg-white text-xs text-gray-700 p-4 rounded-xl max-w-[200px] shadow-lg">
                Omega hospitals has a great team of professionals and doctors to
                provide best treatment for any of the ailments.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
