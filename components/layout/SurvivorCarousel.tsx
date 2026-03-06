"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const videos = [
  {
    src: "/images/videos/1.mp4",
    desc: "Beating cancer was the toughest battle of my life. Omega gave me hope again.",
  },
  {
    src: "/images/videos/2.mp4",
    desc: "The doctors supported me through every step of treatment and recovery.",
  },
  {
    src: "/images/videos/3.mp4",
    desc: "From diagnosis to recovery, Omega Hospitals stood beside me.",
  },
  {
    src: "/images/videos/1.mp4",
    desc: "Their advanced treatment and compassionate care saved my life.",
  },
  {
    src: "/images/videos/2.mp4",
    desc: "I found strength through the care and support of the Omega team.",
  },
  {
    src: "/images/videos/3.mp4",
    desc: "A journey of courage, care, and recovery with Omega Hospitals.",
  },
];

export default function SurvivorCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const length = videos.length;

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index !== activeIndex) {
        video.pause();
        video.currentTime = 0;
        video.muted = true;
      }
    });
  }, [activeIndex]);

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % length);
  const handlePrev = () =>
    setActiveIndex((prev) => (prev - 1 + length) % length);

  const getItemStyle = (index: number) => {
    let offset = (index - activeIndex) % length;
    if (offset > Math.floor(length / 2)) offset -= length;
    else if (offset < -Math.floor(length / 2)) offset += length;

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
          <h2 className="text-3xl font-bold tracking-tight text-accent sm:text-4xl">
            Survivor Stories
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Why 13+ Lakh Patients Trusted Omega Hospitals
          </p>
        </div>

        <div className="relative flex items-center justify-center h-[560px]">
          <button
            onClick={handlePrev}
            className="absolute left-0 md:left-8 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-accent shadow-xl text-white hover:bg-accent/85 transition-all duration-200"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="relative w-full max-w-[300px] h-full flex items-center justify-center">
            {videos.map((video, index) => {
              const style = getItemStyle(index);
              const isActive = index === activeIndex;

              return (
                <div
                  key={index}
                  className="absolute w-full h-full transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                  style={style}
                >
                  {isActive ? (
                    <div className="relative w-full h-full">
                      <div
                        className="absolute inset-0 rounded-[38px] pointer-events-none"
                        style={{
                          border: "10px solid #1c1c1e",
                          boxShadow:
                            "0 0 0 1px #3a3a3c, 0 32px 64px rgba(0,0,0,0.45)",
                          zIndex: 20,
                        }}
                      />

                      <div
                        className="absolute pointer-events-none"
                        style={{
                          right: "-14px",
                          top: "22%",
                          width: "4px",
                          height: "60px",
                          background: "#1c1c1e",
                          borderRadius: "0 3px 3px 0",
                          boxShadow: "2px 0 4px rgba(0,0,0,0.4)",
                          zIndex: 21,
                        }}
                      />

                      <div
                        className="absolute pointer-events-none"
                        style={{
                          left: "-14px",
                          top: "18%",
                          width: "4px",
                          height: "44px",
                          background: "#1c1c1e",
                          borderRadius: "3px 0 0 3px",
                          boxShadow: "-2px 0 4px rgba(0,0,0,0.4)",
                          zIndex: 21,
                        }}
                      />

                      <div
                        className="absolute pointer-events-none"
                        style={{
                          left: "-14px",
                          top: "calc(18% + 56px)",
                          width: "4px",
                          height: "44px",
                          background: "#1c1c1e",
                          borderRadius: "3px 0 0 3px",
                          boxShadow: "-2px 0 4px rgba(0,0,0,0.4)",
                          zIndex: 21,
                        }}
                      />

                      <div
                        className="w-full h-full overflow-hidden bg-black"
                        style={{ borderRadius: "28px" }}
                      >
                        <video
                          ref={(el) => {
                            videoRefs.current[index] = el;
                          }}
                          src={video.src}
                          loop
                          playsInline
                          controls
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-black">
                      <video
                        ref={(el) => {
                          videoRefs.current[index] = el;
                        }}
                        src={video.src}
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover scale-105 brightness-75 blur-[1px]"
                      />
                      <div className="absolute inset-x-0 bottom-0 p-4">
                        <div className="rounded-xl backdrop-blur-md bg-black/40 border border-white/10 px-4 py-3 shadow-lg">
                          <p className="text-white text-sm leading-snug line-clamp-2 font-medium">
                            {video.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <button
            onClick={handleNext}
            className="absolute right-0 md:right-8 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-accent shadow-xl text-white hover:bg-accent/85 transition-all duration-200"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {videos.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`transition-all duration-300 rounded-full ${
                i === activeIndex
                  ? "w-6 h-2 bg-accent"
                  : "w-2 h-2 bg-gray-300 hover:bg-accent/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
