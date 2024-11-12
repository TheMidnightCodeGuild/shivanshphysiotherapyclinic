import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="pt-5 min-h-screen bg-gradient-to-b from-[#7CB9E8] to-white">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800  ">
              Your Journey to Recovery Starts Here
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Expert physiotherapy care tailored to your needs. We help you
              regain mobility, reduce pain, and get back to doing what you love.
            </p>
            <div className="flex gap-6">
              <Link
                href="/enquire"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transform hover:-translate-y-1 transition duration-300 shadow-lg hover:shadow-xl">
                Book Appointment
              </Link>
              <Link
                href="/procedures"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-50 transform hover:-translate-y-1 transition duration-300 shadow-lg hover:shadow-xl">
                Our Services
              </Link>
            </div>
          </div>
          <div className="relative h-[500px] rounded-2xl overflow-hidden ">
            <Image
              src="https://reliva.in/wp-content/uploads/2024/02/Reliva-Effective-ResultOriented-Trusted.webp"
              alt="Physiotherapist treating patient"
              fill
              className="object-cover rounded-3xl"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
