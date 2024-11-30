"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Videotesti = () => {
  const videos = [
    {
      id: "your_video_id_1",
      title: "Patient Testimonial 1",
    },
    {
      id: "your_video_id_2",
      title: "Patient Testimonial 2",
    },
    {
      id: "your_video_id_3",
      title: "Patient Testimonial 3",
    },
    {
      id: "your_video_id_4",
      title: "Patient Testimonial 4",
    },
    {
      id: "your_video_id_5",
      title: "Patient Testimonial 5",
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
          Patient Testimonials
        </h2>
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          grabCursor={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="testimonial-swiper pb-12">
          {videos.map((video, index) => (
            <SwiperSlide key={video.id}>
              <div
                className="relative w-full max-w-[300px] mx-auto"
                style={{ paddingTop: "100.25%" }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen></iframe>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Videotesti;
