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
        className="object-cover"
      />
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <h1 className="heading font-semibold text-secondary mb-4">
              World-Class Cancer Care
            </h1>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gray-700">Right Here in </span>
              <span className="text-accent">Hyderabad</span>
            </h2>

            <p className="text-gray-600 mb-8 text-lg">
              Comprehensive cancer treatment and multi-specialty care with
              India’s leading oncologists.
            </p>

            <div className="backdrop-blur-md bg-white/70 rounded-xl p-6 flex gap-10 w-fit shadow-lg">
              <div>
                <p className="text-sm text-gray-500">Lives Touched</p>
                <h3 className="text-2xl font-bold text-secondary">52L+</h3>
                <p className="text-xs text-gray-500">Across all centers</p>
              </div>

              <div className="border-l pl-10">
                <p className="text-sm text-gray-500">Surgeries</p>
                <h3 className="text-2xl font-bold text-accent">66k+</h3>
                <p className="text-xs text-gray-500">Successful outcomes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
