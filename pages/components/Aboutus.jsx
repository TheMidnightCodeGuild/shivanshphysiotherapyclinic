import { useState } from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="relative bg-[#FAD5A5] py-16 md:py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="mb-6 text-3xl md:text-4xl font-bold text-gray-900">
              Why Shivansh Physiotherapy Centre?
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              Shivansh Physiotherapy Clinic helps you get back on track of life.
              Our highly specialized team helps diagnose and treat injuries,
              enhance mobility and prevent further injury. They listen to your
              needs to offer a treatment specific to your condition.
            </p>
            <button className="inline-flex items-center justify-center rounded-full bg-orange-600 px-8 py-4 text-base font-semibold text-white transition duration-200 hover:bg-orange-700 focus:bg-orange-700">
              Contact Us
            </button>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden">
              <Image
                src="/images/About.png"
                alt="Physiotherapy Equipment"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
