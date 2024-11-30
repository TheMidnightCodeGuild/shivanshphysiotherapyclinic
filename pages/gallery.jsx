"use client";
import React, { useState } from "react";
import Image from "next/image";
import Navbar from "./components/Navbar";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      src: "/images/gallery1.jpg",
      alt: "Physiotherapist treating knee patient",
    },
    {
      src: "/images/gallery2.jpg",
      alt: "Back therapy treatment",
    },
    {
      src: "/images/gallery3.jpg",
      alt: "Spine alignment therapy",
    },
    {
      src: "/images/gallery4.jpg",
      alt: "Neck therapy session",
    },
    {
      src: "/images/gallery5.jpg",
      alt: "Shoulder rehabilitation",
    },
    {
      src: "/images/gallery6.jpg",
      alt: "Leg injury treatment",
    },
    {
      src: "/images/gallery7.jpg",
      alt: "Patient receiving treatment",
    },
    {
      src: "/images/gallery8.jpg",
      alt: "Patient receiving treatment",
    },
    {
      src: "/images/gallery9.jpg",
      alt: "Patient receiving treatment",
    },
    {
      src: "/images/gallery10.jpg",
      alt: "Patient receiving treatment",
    },
    {
      src: "/images/gallery11.jpg",
      alt: "Patient receiving treatment",
    },
    {
      src: "/images/gallery12.jpg",
      alt: "Patient receiving treatment",
    },
    {
      src: "/images/gallery13.jpg",
      alt: "Patient receiving treatment",
    },
    {
      src: "/images/gallery14.jpg",
      alt: "Patient receiving treatment",
    },
  ];

  const testimonialVideos = [
    {
      url: "/videos/testimonial1.mp4",
      thumbnail: "/images/video-thumb1.jpg",
      title: "Recovery Journey - John's Story",
      description:
        "Hear how physiotherapy helped John recover from a severe back injury",
    },
    {
      url: "/videos/testimonial2.mp4",
      thumbnail: "/images/video-thumb2.jpg",
      title: "Sarah's Rehabilitation Success",
      description:
        "Sarah shares her experience with our shoulder rehabilitation program",
    },
    {
      url: "/videos/testimonial3.mp4",
      thumbnail: "/images/video-thumb3.jpg",
      title: "Sports Injury Recovery - Mike's Testimonial",
      description:
        "Professional athlete Mike discusses his return to sports after treatment",
    },
  ];

  const openImage = (src) => {
    setSelectedImage(src);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] py-10">
      <Navbar />
      <div className="container mx-auto px-4 py-8 md:py-16 lg:py-20">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            Our Treatment Gallery
          </h1>
          <p className="text-gray-600 mt-4 text-base md:text-lg max-w-3xl mx-auto">
            Take a look at our state-of-the-art facility and various
            physiotherapy treatments we offer to help you recover and thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => openImage(image.src)}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Video Testimonials Section */}
        <div className="mt-20 bg">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
              Patient Testimonials
            </h2>
            <p className="text-gray-600 mt-4 text-base md:text-lg max-w-3xl mx-auto">
              Watch our patients share their recovery journeys and success
              stories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialVideos.map((video, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative aspect-video">
                  <video
                    className="w-full h-full object-cover"
                    poster={video.thumbnail}
                    controls>
                    <source src={video.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-600">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Full-screen image modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            onClick={closeImage}>
            <div className="relative w-full h-full max-w-6xl max-h-[90vh] mx-auto">
              <Image
                src={selectedImage}
                alt="Full-screen view"
                className="object-contain w-full h-full"
                fill
                sizes="100vw"
                priority
              />
              <button
                className="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none"
                onClick={closeImage}>
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
