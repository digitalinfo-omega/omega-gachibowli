"use client";

import Image from "next/image";
import RequestForm from "../helpers/RequestForm";

const RequestCallbackSection = () => {
  return (
    <section className="relative py-10 md:py-20">
      {/* Desktop Background */}
      <div
        className="absolute inset-0 hidden md:block bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/images/ask-Question.webp)" }}
      />

      {/* Mobile Image */}
      <div className="md:hidden w-full h-55 relative">
        <Image
          src="/images/ask-Question-mobile.webp"
          alt="Doctors"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container relative">
        <div className="flex items-center min-h-105 md:justify-end">
          <div className="w-full md:max-w-130 bg-white rounded-2xl p-2 md:p-8 md:bg-white/80 md:backdrop-blur">
            <h2 className="text-center text-accent text-[18px] font-bold mb-3">
              Request a Call Back Today
            </h2>

            <p className="text-center text-black text-[16px] mb-6">
              Fill in your details and our team will get in touch with you
              shortly.
            </p>

            <RequestForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestCallbackSection;
