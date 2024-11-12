import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="relative h-[380px] w-full ">
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
          No matter whether your condition was caused by a sport, work accident
          or otherwise, we welcome the chance to serve you
        </h2>

        <a
          href="/contactus"
          className="px-8 py-3 border-2 border-white rounded-full hover:bg-white hover:text-gray-800 transition-colors">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Contact;
