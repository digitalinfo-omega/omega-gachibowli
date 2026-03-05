"use client";

import Image from "next/image";

export default function LeadershipSection() {
  return (
    <section className="bg-white md:py-20 py-10">
      <div className="container">
        {/* Title */}
        <h3 className="text-2xl font-semibold text-[#2F3640] mb-10 text-center">
          Our Leadership
        </h3>

        {/* Grid Wrapper */}
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:gap-10 gap-8 justify-items-center">
            {/* Card 1 */}
            <div className="flex justify-center">
              <div className="w-65 h-105 rounded-[130px] bg-[#FFF1E6] flex items-center justify-center">
                <div className="w-50 h-90 bg-white rounded-[100px] flex flex-col items-center pt-6 text-center">
                  <Image
                    src="/assets/images/leader1.jpg"
                    alt=""
                    width={160}
                    height={200}
                    className="rounded-xl object-cover"
                  />
                  <h4 className="mt-4 font-semibold text-[#2F3640]">
                    Mr. Mahender Pala
                  </h4>
                  <p className="text-sm text-[#2F3640]">
                    Chief Operating Officer
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex justify-center">
              <div className="w-65 h-105 rounded-[130px] bg-[#FFF1E6] flex items-center justify-center">
                <div className="w-50 h-90 bg-white rounded-[100px] flex flex-col items-center pt-6 text-center">
                  <Image
                    src="/assets/images/leader2.jpg"
                    alt=""
                    width={160}
                    height={200}
                    className="rounded-xl object-cover"
                  />
                  <h4 className="mt-4 font-semibold text-[#2F3640]">
                    Mr. HaraGovind
                  </h4>
                  <p className="text-sm text-[#2F3640]">President</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex justify-center">
              <div className="w-65 h-105 rounded-[130px] bg-[#FFF1E6] flex items-center justify-center">
                <div className="w-50 h-90 bg-white rounded-[100px] flex flex-col items-center pt-6 text-center">
                  <Image
                    src="/assets/images/leader3.jpg"
                    alt=""
                    width={160}
                    height={200}
                    className="rounded-xl object-cover"
                  />
                  <h4 className="mt-4 font-semibold text-[#2F3640]">
                    Mr. Jasthi Krishna Kishore
                  </h4>
                  <p className="text-sm text-[#2F3640]">Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Learn More Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-accent text-white px-6 py-2 rounded-full flex items-center gap-2 text-sm font-medium">
            <span className="w-6 h-6 rounded-full bg-white text-[#F58220] flex items-center justify-center">
              ⛑
            </span>
            LEARN MORE
          </button>
        </div>
      </div>
    </section>
  );
}
