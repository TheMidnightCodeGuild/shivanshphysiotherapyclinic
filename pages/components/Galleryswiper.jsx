"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, Parallax } from "swiper/modules";
import "swiper/css";

import "swiper/css/autoplay";
import "swiper/css/parallax";
import Image from "next/image";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (src) => {
    setSelectedImage(src);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <section className="min-h-screen py-2 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center pb-6 md:pb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-2">
            Our Gallery
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600">
            Explore the essence of beauty in our gallery intimate space.
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Autoplay, Pagination, Parallax]}
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            480: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="w-full">
          {/* Swiper Slide 1 */}
          <SwiperSlide>
            <div className="h-full">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  className="rounded-lg object-cover cursor-pointer hover:opacity-90 transition-opacity"
                  src="/images/image1.webp"
                  alt="Bathroom"
                  onClick={() => openImage("/images/image1.webp")}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  className="rounded-lg object-cover cursor-pointer hover:opacity-90 transition-opacity"
                  src="/images/image1.webp"
                  alt="Bathroom"
                  onClick={() => openImage("/images/image1.webp")}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  className="rounded-lg object-cover cursor-pointer hover:opacity-90 transition-opacity"
                  src="/images/image1.webp"
                  alt="Bathroom"
                  onClick={() => openImage("/images/image1.webp")}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  className="rounded-lg object-cover cursor-pointer hover:opacity-90 transition-opacity"
                  src="/images/image1.webp"
                  alt="Bathroom"
                  onClick={() => openImage("/images/image1.webp")}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  className="rounded-lg object-cover cursor-pointer hover:opacity-90 transition-opacity"
                  src="/images/image1.webp"
                  alt="Bathroom"
                  onClick={() => openImage("/images/image1.webp")}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  className="rounded-lg object-cover cursor-pointer hover:opacity-90 transition-opacity"
                  src="/images/image1.webp"
                  alt="Bathroom"
                  onClick={() => openImage("/images/image1.webp")}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
          </SwiperSlide>

          {/* Swiper Slide 2 */}
        </Swiper>
      </div>

      {/* Full-screen image modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={closeImage}>
          <div className="relative w-full h-full max-w-4xl max-h-[90vh] mx-auto">
            <Image
              src={selectedImage}
              alt="Full-screen view"
              className="object-contain w-full h-full"
              fill
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
