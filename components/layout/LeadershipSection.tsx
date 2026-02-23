"use client";

import Image from "next/image";

export default function LeadershipSection() {
  return (
    <section className="bg-white md:py-20 py-10">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 items-center">
          <div className="flex justify-center">
            <div className="w-65 h-65 rounded-full bg-[#FFF1E6] flex items-center justify-center">
              <div className="w-50 h-50 rounded-full bg-white flex flex-col items-center justify-center text-center">
                <h3 className="text-2xl font-semibold text-[#2F3640] mb-4">
                  Our Leadership
                </h3>
                <button className="bg-accent text-white px-6 py-2 rounded-full flex items-center gap-2 text-sm font-medium">
                  <span className="w-6 h-6 rounded-full bg-white text-[#F58220] flex items-center justify-center">
                    ⛑
                  </span>
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>

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
    </section>
  );
}
