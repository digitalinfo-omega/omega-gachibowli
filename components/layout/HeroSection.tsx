"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[70vh] md:h-[620px] overflow-hidden">
      <Image
        src="/images/home.webp"
        alt="Hospital"
        fill
        priority
        className="object-cover"
      />

      <div className="relative z-10 h-full flex items-center justify-center md:justify-start px-4">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-2xl text-center md:text-left mx-auto md:mx-0">
            <h1 className="text-[26px] md:text-[40px] font-semibold text-secondary mb-4">
              World-Class Cancer Care
            </h1>

            <h2 className="font-bold mb-4">
              <span className="text-gray-400 heading">Right Here in </span>
              <span className="text-accent text-[26px] md:text-[40px]">
                Hyderabad
              </span>
            </h2>

            <p className="text-gray-600 mb-8 xl-para md:max-w-[70%] mx-auto md:mx-0">
              Comprehensive cancer treatment and multi-specialty care with
              India’s leading oncologists.
            </p>

            {/* Stats */}
            <div className="backdrop-blur-md bg-white/70 rounded-xl px-6 md:px-11 py-5 flex flex-col md:flex-row gap-6 md:gap-10 w-fit mx-auto md:mx-0 items-center">
              {/* Stat 1 */}
              <div className="flex items-center gap-4">
                <h3 className="heading font-bold text-secondary tracking-tight">
                  52L+
                </h3>
                <div className="flex flex-col text-left">
                  <p className="xl-para font-semibold text-secondary">
                    Lives Touched
                  </p>
                  <p className="text-sm text-gray-500">Across all centers</p>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden md:block h-16 w-px bg-gray-300"></div>

              {/* Stat 2 */}
              <div className="flex items-center gap-4">
                <h3 className="heading font-bold text-accent tracking-tight">
                  66k+
                </h3>
                <div className="flex flex-col text-left">
                  <p className="text-lg font-semibold text-accent">Surgeries</p>
                  <p className="text-sm text-gray-500">Successful outcomes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
