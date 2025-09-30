'use client';
import React, { useEffect, useState, useRef } from "react";

// Renders text where all characters gradually turn black one by one
const HoverText: React.FC<{ text: string; className?: string }> = ({ text, className }) => {
  const chars = Array.from(text);
  const [visibleIndex, setVisibleIndex] = useState(-1);
  const [startAnimation, setStartAnimation] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Trigger animation when element enters viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartAnimation(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!startAnimation) return;

    let current = -1;
    const interval = setInterval(() => {
      current++;
      if (current >= chars.length) {
        clearInterval(interval);
        return;
      }
      setVisibleIndex(current);
    }, 100); // 100ms per character

    return () => clearInterval(interval);
  }, [startAnimation, chars.length]);

  return (
    <p
      ref={ref}
      className={`${className ?? ''} break-words whitespace-normal max-w-full overflow-hidden`}
    >
      {chars.map((ch, i) => (
        <span
          key={i}
          className={`transition-colors duration-1000`}
          style={{ color: i <= visibleIndex ? '#000000' : '#2C2C2C40' }}
        >
          {ch}
        </span>
      ))}
    </p>
  );
};

const VisionMission: React.FC = () => {
  return (
    <section id="our-vision" className="w-full bg-white px-6 md:px-12 lg:px-16 py-10 md:py-12 section-spacing" >
      {/* Top Label */}
      <div className="pb-8 md:pb-10 lg:pb-12">
        <span className="inline-block bg-[#1656A50D] text-[#1656A5] text-[12px] md:text-[13px] px-3 py-1 rounded-[8px]">Our Vision & Mission</span>

        {/* Section Title */}
        <h2 className="font-[Manrope] text-[32px] leading-[40px] tracking-[-0.02em] font-normal text-gray-900 mb-12 csLg:text-[48px] csLg:leading-[56px] csLg:font-semibold">
          Guided by Purpose. <br /> Driven by Compassion.
        </h2>
      </div>

      {/* Our Vision Row */}
      <div className="border-t border-gray-200 pt-10 pb-10 md:flex md:space-x-12">
        <div className="md:w-1/3 mb-4 md:mb-0">
          <h3 className="text-[32px] leading-[40px] tracking-[-0.02em] font-normal text-gray-900 csLg:text-[48px] csLg:font-medium">Our Vision</h3>
        </div>
        <div className="md:w-2/3 text-gray-700">
          <HoverText
            className="mt-4 md:mt-2 font-[Manrope] text-[16px] leading-[24px] tracking-[-0.02em] font-normal csLg:text-[32px] csLg:leading-[36px]"
            text={
              "At Progenesis IVF, our vision is to become the benchmark for reproductive healthcare — a trusted name where hope meets expertise. We are committed to walking hand-in-hand with every couple on their path to parenthood, blending cutting-edge fertility science with deep empathy and ethical care."
            }
          />
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-6"></div>

      {/* Our Mission Row */}
      <div className="pb-10 pt-10 md:flex md:space-x-12">
        <div className="md:w-1/3 mb-4 md:mb-0">
          <h3 className="text-[32px] leading-[40px] tracking-[-0.02em] font-normal text-gray-900 csLg:text-[48px] csLg:font-medium">Our Mission</h3>
        </div>
        <div className="md:w-2/3 text-gray-700">
          <HoverText
            className="mt-4 md:mt-2 font-[Manrope] text-[16px] leading-[24px] tracking-[-0.02em] font-normal csLg:text-[32px] csLg:leading-[36px]"
            text={
              "Our mission is to provide comprehensive, personalized fertility solutions in a nurturing environment that values trust, transparency, and dignity. We strive to deliver the highest standards in reproductive medicine, guided by compassion, clinical excellence, and a relentless dedication to making parenthood possible, one family at a time."
            }
          />
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
