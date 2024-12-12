import React from "react";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="relative h-[300px] sm:h-[350px] md:h-[400px] w-full bg-[#FAD5A5]">
      {/* Background image */}
      <Image
        src="/images/bg.webp"
        alt="Background"
        fill
        className="object-bottom brightness-[0.3]"
      />

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 md:px-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold max-w-[1300px] mt-8 sm:mt-10 md:mt-12 mb-4 sm:mb-6 md:mb-8">
          No matter whether your condition was caused by a sport, work accident
          or otherwise, we welcome the chance to serve you
        </h2>

        <Link
          href="/contactus"
          className="px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base border-2 border-white rounded-full hover:bg-white hover:text-gray-800 transition-colors">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Contact;
