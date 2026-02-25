"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/images/cancer-centre/cancer-img1.webp",
  "/images/cancer-centre/cancer-img1.webp",
  "/images/cancer-centre/cancer-img1.webp",
  "/images/cancer-centre/cancer-img1.webp",
  "/images/cancer-centre/cancer-img1.webp",
  "/images/cancer-centre/cancer-img1.webp",
  "/images/cancer-centre/cancer-img1.webp",
];

export default function SurvivorCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const length = images.length;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + length) % length);
  };

  const getItemStyle = (index: number) => {
    let offset = (index - activeIndex) % length;

    if (offset > Math.floor(length / 2)) {
      offset -= length;
    } else if (offset < -Math.floor(length / 2)) {
      offset += length;
    }

    const absOffset = Math.abs(offset);
    const sign = Math.sign(offset);

    if (absOffset > 2) {
      return {
        opacity: 0,
        transform: `translateX(${sign * 200}%) scale(0.5)`,
        zIndex: 0,
        pointerEvents: "none" as const,
      };
    }

    const translateX = sign * (absOffset === 1 ? 85 : 155);
    const scale = offset === 0 ? 1 : absOffset === 1 ? 0.85 : 0.7;
    const zIndex = 30 - absOffset * 10;

    return {
      transform: `translateX(${translateX}%) scale(${scale})`,
      zIndex,
      opacity: 1,
      pointerEvents: offset === 0 ? ("auto" as const) : ("none" as const),
    };
  };

  return (
    <div className="w-full overflow-hidden bg-white py-10 md:py-20">
      <div className="container">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Survivor Stories
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Why 13+ Lakh Patients Trusted Omega Hospitals
          </p>
        </div>

        <div className="relative flex items-center justify-center h-75 sm:h-100 md:h-125">
          <button
            onClick={handlePrev}
            className="absolute left-0 md:left-8 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-accent shadow-xl text-white hover:bg-accent/85 cursor-pointer transition-all duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="relative w-full max-w-70 sm:max-w-90 md:max-w-110 h-full flex items-center justify-center">
            {images.map((src, index) => (
              <div
                key={index}
                className="absolute w-full h-full transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                style={getItemStyle(index)}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-accent">
                  <Image
                    src={src}
                    alt={`Survivor story ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={
                      Math.abs((index - activeIndex) % length) <= 1 ||
                      Math.abs((index - activeIndex) % length) === length - 1
                    }
                  />
                  {index !== activeIndex && (
                    <div className="absolute inset-0 bg-black/20 transition-opacity duration-500" />
                  )}
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="absolute right-0 md:right-8 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-accent shadow-xl text-white hover:bg-accent/85 cursor-pointer transition-all duration-300"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
