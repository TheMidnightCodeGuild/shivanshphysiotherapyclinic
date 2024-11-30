import React from "react";
import Image from "next/image";
import Link from "next/link";

const Banner2 = () => {
  return (
    <div className="relative h-[400px] w-full bg-[#FAD5A5]  ">
      {/* Background image */}
      <Image
        src="/images/bg.webp"
        alt="Background"
        fill
        className="object-bottom brightness-[0.3] "
      />

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white ">
        <h2 className="text-3xl font-semibold max-w-[1300px] mt-12 mb-8">
          Experience personalized care and expert treatment to help you recover
          and get back to doing what you love
        </h2>

        <Link
          href="/contactus"
          className="px-8 py-3 border-2 border-white rounded-full hover:bg-white hover:text-gray-800 transition-colors">
          Schedule an Appointment
        </Link>
      </div>
    </div>
  );
};

export default Banner2;
