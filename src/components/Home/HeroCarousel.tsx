import React, { useState, useEffect } from "react";


const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "/home/hcv.mp4",
      title: "What would you like to know about your fertility journey?",
      buttons: ["Book Your Appointment", "Treatment"],
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      title: "Your parenthood journey starts with us",
      buttons: ["Get Started", "Meet Our Experts"],
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      title: "Trusted care for every step of the way",
      buttons: ["Book Consultation", "See Success Stories"],
    },
  ];

  const goToSlide = (index) => setCurrentSlide(index);

  // // Optional autoplay (5s)
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % slides.length);
  //   }, 10000);
  //   return () => clearInterval(interval);
  // }, [slides.length]);

  return (
    <div className="relative w-full h-[650px] md:h-[800px] xl:h-[850px]  overflow-hidden">
  {/* Background Slides */}
  {slides.map((slide, index) => (
    <div
      key={slide.id}
      className={`absolute inset-0 w-full transition-opacity duration-700 ${
        index === currentSlide ? "opacity-100" : "opacity-0"
      }`}
    >
      {slide.image.endsWith(".mp4") ? (
        <video
          src={slide.image}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      ) : (
        <img
          src={slide.image}
          alt={slide.title}
          className="w-full h-full object-cover"
        />
      )}
      {/* Dark overlay */}
      
    </div>
  ))}

  {/* Content */}
  <div className="absolute top-0 left-0 pt-[300px] px-4 md:px-[80px] lg:px-[120px] text-white max-w-[850px] z-10">
    {/* Title */}
    <p
      className="
        font-[Manrope] font-semibold text-[#F9F9F9]
        text-[32px] leading-[40px] tracking-[-0.64px] 
        md:text-[56px] md:leading-[64px] md:tracking-[-1px]
        xl:text-[80px] xl:leading-[88px] xl:tracking-[-1.6px]
      "
    >
      {slides[currentSlide].title}
    </p>

    {/* Buttons */}
    <div className="flex flex-row gap-3 mt-6 md:mt-12">
      {slides[currentSlide].buttons.map((btn, i) => (
        <button
          key={i}
          className={`px-[12px] md:px-12 py-[12px] md:py-3 md:rounded-[16px] rounded-[8px] font-[Manrope] text-[12px] md:text-sm font-medium leading-[20px] sm:leading-6 tracking-[-0.24px] sm:tracking-[-0.28px] transition ${
            i === 0
              ? "bg-white text-[#2C2C2C] backdrop-blur-[7.5px]"
              : "border border-white text-white backdrop-blur-[7.5px]"
          }`}
        >
          {btn}
        </button>
      ))}
    </div>

    {/* Navigation Dots */}
    <div className="flex gap-4 mt-8">
      {slides.map((_, index) => (
        <button
          key={index}
          onClick={() => goToSlide(index)}
          className={`w-[40px] sm:w-[80px] h-[2px] transition-all ${
            index === currentSlide
              ? "bg-[#F9F9F9]"
              : "bg-[#F9F9F9] opacity-20"
          }`}
        />
      ))}
    </div>
  </div>
</div>

  );
};

export default HeroCarousel;
