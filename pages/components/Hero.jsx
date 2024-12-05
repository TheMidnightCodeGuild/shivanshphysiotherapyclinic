import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="h-screen mt-10 sm:mt-0 py-12 sm:py-1">
      <div className="max-w-6xl mx-auto px-4 py-5">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 md:space-y-6 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800 leading-tight">
              Your Journey to <span className="text-orange-400">Recovery</span>{" "}
              Starts Here
            </h1>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed px-4 md:px-0">
              Expert physiotherapy care tailored to your needs. We help you
              regain mobility, reduce pain, and get back to doing what you love.
            </p>
            <div className="flex justify-center md:justify-start mt-6">
              <Link
                href="/enquire"
                className="inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium border border-black bg-orange-400 hover:bg-orange-500 transition-colors duration-300 w-48 sm:w-auto text-center">
                Book Appointment
              </Link>
            </div>
          </div>
          <div className="relative h-[300px] sm:h-[400px] md:h-[600px] rounded-2xl overflow-hidden  -mt-5">
            <Image
              src="/images/hero.png"
              alt="Physiotherapist treating patient"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
