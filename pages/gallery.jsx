import React from "react";
import Image from "next/image";
import Navbar from "./components/Navbar";

const Gallery = () => {
  const images = [
    {
      src: "https://img.freepik.com/premium-photo/physiotherapist-giving-exercise-treatment-about-knee-patient-clinic_43157-1469.jpg",
      alt: "Physiotherapist treating knee patient",
    },
    {
      src: "https://img.freepik.com/premium-photo/physiotherapist-doing-healing-treatment-man-s-back-physiotherapy-center_361425-4773.jpg",
      alt: "Back therapy treatment",
    },
    {
      src: "https://img.freepik.com/premium-photo/physiotherapist-doing-treatment-patient-s-back_361425-5456.jpg",
      alt: "Spine alignment therapy",
    },
    {
      src: "https://img.freepik.com/premium-photo/physiotherapist-treating-patient-with-neck-problems_361425-5455.jpg",
      alt: "Neck therapy session",
    },
    {
      src: "https://img.freepik.com/premium-photo/physiotherapist-doing-healing-treatment-man-s-shoulder_361425-4774.jpg",
      alt: "Shoulder rehabilitation",
    },
    {
      src: "https://img.freepik.com/premium-photo/physiotherapist-treating-injured-leg-patient-clinic_43157-1466.jpg",
      alt: "Leg injury treatment",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="h-screen bg-gradient-to-b from-[#7CB9E8]/30 to-white py-20">
        <div className="text-center py-8 sm:py-12 md:py-16 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Our Treatment Gallery
          </h1>
          <p className="text-gray-600 mt-3 sm:mt-4 text-base sm:text-lg max-w-2xl mx-auto px-2 sm:px-4">
            Take a look at our state-of-the-art facility and various
            physiotherapy treatments we offer to help you recover and thrive.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 md:pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative h-64 sm:h-72 md:h-80 rounded-lg sm:rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
