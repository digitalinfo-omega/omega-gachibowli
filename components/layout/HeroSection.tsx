"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-155 overflow-hidden">
      <Image
        src="/images/home.webp"
        alt="Hospital"
        fill
        priority
        className="object-cover z-11 relative"
      />
      <div
        className="relative z-10 h-full flex items-center"
        style={{
          background: "linear-gradient(351deg, #289eb091, transparent)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <h1 className="heading font-semibold text-secondary mb-4">
              World-Class Cancer Care
            </h1>

            <h2 className="xl-para font-bold mb-4">
              <span className="text-gray-700">Right Here in </span>
              <span className="text-accent">Hyderabad</span>
            </h2>

            <p className="text-gray-600 mb-8 xl-para">
              Comprehensive cancer treatment and multi-specialty care with
              India’s leading oncologists.
            </p>

            <div className="backdrop-blur-md bg-white/70 rounded-xl p-6 flex gap-10 w-fit items-center">
              <div className="flex flex-col">
                <h3 className="xl-para font-bold text-secondary tracking-tight">
                  52L+
                </h3>
                <p className="xl-para font-semibold text-secondary">
                  Lives Touched
                </p>
                <p className="text-sm text-gray-500">Across all centers</p>
              </div>

              <div className="h-16 w-px bg-gray-300"></div>

              <div className="flex flex-col">
                <h3 className="xl-para font-bold text-accent tracking-tight">
                  66k+
                </h3>
                <p className="text-lg font-semibold text-accent">Surgeries</p>
                <p className="text-sm text-gray-500">Successful outcomes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
