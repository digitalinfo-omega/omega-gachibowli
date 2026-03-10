import { Trophy } from "lucide-react";
import Image from "next/image";

export default function AwardsSection() {
  return (
    <div className="bg-secondary/10 py-10 md:py-20">
      <div className="container flex flex-col md:gap-10 gap-5">
        <div className="flex flex-col md:flex-row md:items-center justify-center">
          <h2 className="heading font-bold text-[#0a3d62] md:text-start text-center">
            Awards & Accolades
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md overflow-hidden text-center pt-8 pb-10 px-6 relative"
            >
              <div className="absolute top-4 right-4 bg-gray-800 text-white text-xs font-medium px-3 py-1 rounded-full">
                2022
              </div>

              <div className="mx-auto w-28 h-28 rounded-full bg-[#e6f4fb] flex items-center justify-center mb-6">
                {/* middle ring */}
                <div className="w-20 h-20 rounded-full flex items-center justify-center bg-white">
                  {/* icon */}
                  <div className="w-12 h-12 flex items-center justify-center">
                    <Image
                      alt="awards"
                      src="/images/awards.png"
                      width={60}
                      height={60}
                    />
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-[#0a3d62] mb-2">
                Times Health Survey
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                The best hospital in Oncology Dedicated Single
                <br />
                Specialty Cancer Centre
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="mt-6 md:mt-0 flex items-center gap-2 bg-[#00a0df] text-white px-6 py-3 rounded-full font-medium hover:bg-[#0088bf] transition">
            <Trophy size={20} />
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
}
