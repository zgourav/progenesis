"use client";

import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const TestimonialsSection = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const [navReady, setNavReady] = useState(false);

  const testimonials = [
    {
      text: "I came in with questions, doubts, and a heart full of fear. But I left with answers, reassurance, and hope. Today... I have someone who calls me ‘Mom.’",
      author: "Rhea Deshapnde, Progenesis Mom, Nashik",
      image: "/images/Rvid1.png",
    },
    {
      text: "The team was so supportive throughout my journey. Their care and expertise gave me hope again.",
      author: "Priya Sharma, Progenesis Mom, Pune",
      image: "/images/Rvid2.png",
    },
    {
      text: "Every visit gave me more confidence. Today, I’m blessed with the family I always dreamed of.",
      author: "Anjali Mehta, Progenesis Mom, Mumbai",
      image: "/images/Rvid3.png",
    },
    {
      text: "Amazing care and wonderful staff. They made our journey smooth and hopeful.",
      author: "Sneha Kulkarni, Progenesis Mom, Nagpur",
      image: "/images/Rvid4.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // ensure refs are ready before enabling navigation
  useEffect(() => {
    setNavReady(true);
  }, []);

  return (
    <section className="w-full bg-white py-16">
      <div className="flex flex-col md:flex-row md:h-[600px]">
        {/* Left Panel */}
        <div className="bg-blue-700 text-white flex flex-col justify-between md:w-[400px] px-6 md:px-12 py-12">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              What Our Visitors Are Saying
            </h2>

            {/* Progress Bar */}
            <div className="w-[150px] h-1 bg-white/30 rounded-full mb-6">
              <div
                className="h-1 bg-white rounded-full transition-all duration-500"
                style={{
                  width: `${((currentIndex + 1) / testimonials.length) * 100}%`,
                }}
              ></div>
            </div>
          </div>

          {/* Arrows */}
          <div className="flex space-x-4">
            <button
              ref={prevRef}
              className="w-10 h-10 flex items-center justify-center border border-white rounded-lg hover:bg-white hover:text-blue-700 transition"
            >
              ←
            </button>
            <button
              ref={nextRef}
              className="w-10 h-10 flex items-center justify-center border border-white rounded-lg hover:bg-white hover:text-blue-700 transition"
            >
              →
            </button>
          </div>
        </div>

        {/* Right: Swiper */}
        <div className="flex-1 flex items-center justify-center bg-blue-700">
          {navReady && (
            <Swiper
              modules={[Navigation]}
              spaceBetween={0}
              slidesPerView={1} // only one at a time
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
              className="w-full max-w-[900px]"
            >
              {testimonials.map((t, i) => (
                <SwiperSlide key={i}>
                  <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden w-full h-[500px]">
                    {/* Text */}
                    <div className="flex flex-col justify-center p-8 md:w-1/2">
                      <p className="text-blue-700 font-[Manrope] text-lg md:text-2xl leading-relaxed">
                        {t.text}
                      </p>
                      <span className="mt-6 text-gray-500 text-sm md:text-base">
                        ~ {t.author}
                      </span>
                    </div>

                    {/* Image */}
                    <div className="md:w-1/2 h-[250px] md:h-full">
                      <img
                        src={t.image}
                        alt={t.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
