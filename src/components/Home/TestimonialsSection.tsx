import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation , Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TestimonialsSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const testimonials = [
    {
      text: "I came in with questions, doubts, and a heart full of fear. But I left with answers, reassurance, and hope. Today... I have someone who calls me ‘Mom.’",
      author: "Rhea Deshapnde, Progenesis Mom, Nashik",
    },
    {
      text: "The team was so supportive throughout my journey. Their care and expertise gave me hope again.",
      author: "Priya Sharma, Progenesis Mom, Pune",
    },
    {
      text: "Every visit gave me more confidence. Today, I’m blessed with the family I always dreamed of.",
      author: "Anjali Mehta, Progenesis Mom, Mumbai",
    },
    {},
  ];

  const rating = 4.5;


  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="w-full h-[750px] md:h[700px] bg-white">
      <div className="flex flex-col md:flex-row h-[700px]">
  {/* Left Rating Panel */}
  <div className="bg-blue-700 text-white p-10 flex flex-col justify-between h-full md:w-[528] px-4 md:px-[80px] lg:px-[120px pt-[128px]">
 <div className="md:text-left text-center">
  
  {/* Google Rating */}
  <div className="flex md:flex-row md:items-end items-center justify-center md:justify-start space-x-2 md:space-x-2 mb-2">
    <img
      src="https://www.gstatic.com/images/branding/product/2x/google_g_48dp.png"
      alt="Google"
      className="w-6 h-6 mb-1 md:mb-0"
    />
    <span className="text-3xl md:text-5xl font-[Manrope] font-semibold md:leading-[56px] leading-6 tracking-[-0.96px] text-[#F9F9F9]">
      4.9
    </span>
    <span className="text-lg">/5</span>
  </div>

  {/* Stars */}
  <div className="flex justify-center md:justify-start items-center text-yellow-400 text-xl mb-2">
    {Array.from({ length: 5 }).map((_, i) => {
      const full = i + 1 <= Math.floor(rating);
      const half = rating - i === 0.5;

      return (
        <span key={i} className="mr-1">
          {full ? "★" : half ? "☆" : "☆"}
        </span>
      );
    })}
  </div>

  {/* Review Count */}
  <p className="text-sm text-gray-200 mb-6 text-center md:text-left">
    Based on <span className="font-bold">14,570</span> reviews
  </p>

  {/* Heading */}
  <h2 className="text-3xl md:text-5xl font-[Manrope] font-normal md:leading-[56px] leading-10 text-[#F9F9F9] text-center md:text-left">
    What our patient’s are saying
  </h2>
</div>


<div className="hidden md:flex flex-col mt-10 mb-[100px]">
 {/* Progress bar */}
          <div className="w-[200px] h-1 bg-white/30 rounded-full mb-4">
            <div
              className="h-1 bg-white rounded-full transition-all duration-500"
              style={{
                width: `${((currentIndex + 1) / testimonials.length) * 100}%`,
              }}
            ></div>
          </div>


  {/* Arrows */}
  <div className="flex space-x-4">
    <button
      ref={prevRef}
      className="w-12 h-12 flex items-center justify-center border border-white rounded-lg hover:bg-white hover:text-blue-700 transition"
    >
      ←
    </button>
    <button
      ref={nextRef}
      className="w-12 h-12 flex items-center justify-center border border-white rounded-lg hover:bg-white hover:text-blue-700 transition"
    >
      →
    </button>
  </div>
</div>
  </div>

  {/* Right Testimonials Carousel */}
  <div
    className="relative bg-cover bg-center h-full md:w-2/3 py-[42px] md:pt-[82px]"
    style={{ backgroundImage:"url('/TestimonialsSection/testimonial.png')" }}
  >
    <Swiper
  modules={[Navigation]}
  spaceBetween={40}
  slidesPerView={1.2}
  centeredSlides={true}   // ✅ ensures last slide centers
  breakpoints={{
    768: { slidesPerView: 1.5, centeredSlides: true },
    1024: { slidesPerView: 2.5, centeredSlides: true },
  }}
  navigation={{
    prevEl: prevRef.current,
    nextEl: nextRef.current,
  }}
  onBeforeInit={(swiper) => {
    swiper.params.navigation.prevEl = prevRef.current;
    swiper.params.navigation.nextEl = nextRef.current;
  }}
  onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
>
      {testimonials.map((t, i) => (
        <SwiperSlide key={i}>
          {({ isActive }) => (
            <div
              className={`flex flex-col text-left transition-all duration-500 md:ml-[82px] md:mr-[82px] ml-[12px] mr-[12px] ${
                isActive
                  ? "w-[300px] md:w-[510px] md:h-[520px] md:px-[83px] px-[46px] md:py-[96px] py-[66px] bg-[#F9F9F9] rounded-2xl"
                  : "w-[300px] md:w-[510px] md:h-[520px] md:px-[83px] px-[46px] md:py-[96px] py-[66px] bg-[#F9F9F9] rounded-2xl opacity-50"
              }`}
            >
              <p className="text-[#1656A5] font-[Manrope] text-[16px] md:text-[32px] md:leading-[40px] leading-[24px] tracking-[-0.64px] font-normal">
                {t.text}
              </p>
              <span className="mt-auto text-[rgba(44,44,44,0.5)] font-[Manrope] md:text-[16px] text-[12px] leading-[24px] tracking-[-0.32px]">
                {t.author}
              </span>
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</div>

    </section>
  );
};

export default TestimonialsSection;