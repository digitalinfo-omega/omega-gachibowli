import { Trophy } from "lucide-react";

export default function AwardsSection() {
  return (
    <div className="bg-secondary/10 py-10 md:py-20">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <h2 className="heading font-bold text-[#0a3d62] md:text-start text-center">
            Awards & Accolades
          </h2>
          <div className="flex justify-center md:justify-start">
            <button className="mt-6 md:mt-0 flex items-center gap-2 bg-[#00a0df] text-white px-6 py-3 rounded-full font-medium hover:bg-[#0088bf] transition">
              <Trophy size={20} />
              LEARN MORE
            </button>
          </div>
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

              <div className="mx-auto w-24 h-24 rounded-full bg-[#e6f4ff] flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-full border-4 border-[#a3d8ff] flex items-center justify-center">
                  <div className="text-secondary text-4xl">★</div>
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
      </div>
    </div>
  );
}
