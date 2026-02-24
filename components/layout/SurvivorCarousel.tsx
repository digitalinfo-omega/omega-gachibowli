"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SurvivorCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!containerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    setCanScrollLeft(scrollLeft > 1);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    checkScroll();
    container.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    return () => {
      container.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const cardWidth = container.querySelector("div")?.offsetWidth || 180;
    const scrollAmount = cardWidth * 2 + 16; // roughly two cards + gap

    container.scrollTo({
      left:
        direction === "left"
          ? container.scrollLeft - scrollAmount
          : container.scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full overflow-hidden bg-white py-12 md:py-16">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Survivor Stories
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Why 13+ Lakh Patients Trusted Omega Hospitals
          </p>
        </div>

        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`
              absolute -left-2 md:-left-6 top-1/2 -translate-y-1/2 z-20
              flex h-10 w-10 md:h-12 md:w-12 items-center justify-center
              rounded-full bg-white/90 shadow-lg backdrop-blur-sm
              text-gray-700 hover:bg-white hover:text-accent
              transition-all duration-300
              disabled:opacity-40 disabled:cursor-not-allowed
              border border-gray-200
            `}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 md:h-7 md:w-7" />
          </button>

          {/* Carousel Container */}
          <div
            ref={containerRef}
            className="
              flex items-center justify-start gap-3 sm:gap-4 md:gap-5 lg:gap-6
              overflow-x-auto snap-x snap-mandatory scrollbar-hide
              scroll-smooth px-1 py-4 -mx-1
            "
          >
            <div className="relative flex-shrink-0 w-16 sm:w-24 md:w-32 lg:w-40 h-32 sm:h-40 md:h-48 lg:h-56 snap-center transition-all duration-500 ease-out">
              <Image
                src="/images/cancer-centre/cancer-img1.webp"
                alt=""
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 640px) 64px, (max-width: 768px) 96px, (max-width: 1024px) 128px, 160px"
              />
            </div>

            <div className="relative flex-shrink-0 w-20 sm:w-32 md:w-40 lg:w-48 h-40 sm:h-48 md:h-56 lg:h-64 snap-center transition-all duration-500 ease-out">
              <Image
                src="/images/cancer-centre/cancer-img1.webp"
                alt=""
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 640px) 80px, (max-width: 768px) 128px, (max-width: 1024px) 160px, 192px"
              />
            </div>

            <div
              className="
                relative flex-shrink-0 w-24 sm:w-40 md:w-56 lg:w-72
                h-48 sm:h-56 md:h-64 lg:h-80
                snap-center scale-100 sm:scale-105 md:scale-110
                shadow-2xl z-10 transition-all duration-500 ease-out
                ring-1 ring-orange-200/50
              "
            >
              <Image
                src="/images/cancer-centre/cancer-img1.webp"
                alt="Featured survivor story"
                fill
                className="object-cover rounded-xl"
                sizes="(max-width: 640px) 96px, (max-width: 768px) 160px, (max-width: 1024px) 224px, 288px"
                priority
              />
            </div>

            <div className="relative flex-shrink-0 w-20 sm:w-32 md:w-40 lg:w-48 h-40 sm:h-48 md:h-56 lg:h-64 snap-center transition-all duration-500 ease-out">
              <Image
                src="/images/cancer-centre/cancer-img1.webp"
                alt=""
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 640px) 80px, (max-width: 768px) 128px, (max-width: 1024px) 160px, 192px"
              />
            </div>

            <div className="relative flex-shrink-0 w-16 sm:w-24 md:w-32 lg:w-40 h-32 sm:h-40 md:h-48 lg:h-56 snap-center transition-all duration-500 ease-out">
              <Image
                src="/images/cancer-centre/cancer-img1.webp"
                alt=""
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 640px) 64px, (max-width: 768px) 96px, (max-width: 1024px) 128px, 160px"
              />
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`
              absolute -right-2 md:-right-6 top-1/2 -translate-y-1/2 z-20
              flex h-10 w-10 md:h-12 md:w-12 items-center justify-center
              rounded-full bg-white/90 shadow-lg backdrop-blur-sm
              text-gray-700 hover:bg-white hover:text-accent
              transition-all duration-300
              disabled:opacity-40 disabled:cursor-not-allowed
              border border-gray-200
            `}
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 md:h-7 md:w-7" />
          </button>
        </div>
      </div>
    </div>
  );
}
