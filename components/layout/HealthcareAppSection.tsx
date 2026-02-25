"use client";

import Image from "next/image";

export default function HealthcareAppSection() {
  return (
    <section className="relative bg-[#0E1116] md:py-20 py-10">
      <div className="container">
        <div className="border-t border-t-accent rounded-2xl px-5 py-5 md:px-10 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center md:gap-5 gap-10">
            <div className="flex flex-col items-center md:items-start">
              <p className="sm-para tracking-widest text-accent mb-4">
                DOWNLOAD OUR APP
              </p>

              <h2 className="heading font-serif text-white leading-tight">
                Healthcare at Your{" "}
                <span className="text-accent">Fingertips</span>
              </h2>

              <p className="mt-4 text-gray-400 max-w-xl">
                Book Appointments · View Reports · Pay Bills · Video Consult —
                All in One App
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mt-8 text-sm text-gray-300">
                <div className="flex items-center gap-3">
                  <span className="text-accent">✔</span>
                  Easy online appointment booking
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-accent">✔</span>
                  Access lab reports instantly
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-accent">✔</span>
                  Video consultation with doctors
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-accent">✔</span>
                  Medicine reminders
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-accent">✔</span>
                  Health record storage
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-accent">✔</span>
                  Secure payment gateway
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-10 justify-center md:justify-start">
                <button className="bg-accent text-black px-6 py-3 rounded-md font-medium flex items-center gap-2">
                   App Store
                </button>
                <button className="border border-accent text-accent px-6 py-3 rounded-md font-medium flex items-center gap-2">
                  ▶ Google Play
                </button>
              </div>
            </div>

            <div className="relative flex justify-center">
              <Image
                src="/images/mobile.webp"
                alt="Healthcare App"
                width={260}
                height={620}
                className="relative z-10"
                priority
              />

              <div className="absolute -right-10 top-10 bg-white text-xs text-gray-700 p-2 rounded-xl max-w-55 shadow-lg">
                Omega hospitals has a great team of professionals and doctors to
                provide best treatment for any of the ailments.
              </div>

              <div className="absolute -left-5 bottom-16 bg-white text-xs text-gray-700 p-2 rounded-xl max-w-50 shadow-lg">
                Omega hospitals specializes in cancer treatment. Dr. Ch Mohana
                Vamsy who has more than 30 years of experience in cancer
                treatment, is your go-to person for his opinion on treatment for
                the cancer patient.
              </div>

              <div className="absolute -right-5 bottom-4 bg-white text-xs text-gray-700 p-2 rounded-xl max-w-50 shadow-lg">
                Here is an application for you to book your doctor appointments
                including appointments of Dr. Ch Mohana Vamsy.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
