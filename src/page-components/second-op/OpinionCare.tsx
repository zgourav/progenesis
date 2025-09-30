'use client';

import React from 'react';

const careItems = [
  {
    icon: "📈", // Line graph trending upwards icon (placeholder - you can replace with actual SVG)
    title: "Proven Success with Ethical Care",
    description: "We combine consistently high success rates with a strong commitment to ethical practices, ensuring patients feel supported and respected at every step."
  },
  {
    icon: "👤", // Person profile icon (placeholder - you can replace with actual SVG)
    title: "Patient-Centered Approach",
    description: "By reinventing patient care, we provide a personalized journey where compassion, guidance, and comfort are at the core of every treatment experience."
  },
  {
    icon: "🧪", // Test tube with magnifying glass icon (placeholder - you can replace with actual SVG)
    title: "World-Class Laboratories & Technology",
    description: "Our comprehensive ART labs, equipped with advanced reproductive technology, deliver precision-driven treatments that enhance outcomes."
  },
  {
    icon: "⭐", // Star with checkmark icon (placeholder - you can replace with actual SVG)
    title: "Uncompromising Quality Standards",
    description: "Every process is backed by exceptional quality benchmarks, ensuring safety, transparency, and excellence in fertility care."
  }
];

const OpinionCare: React.FC = () => {
  return (
    <section id='care' className="w-full bg-gray-100">
      <div className="section-spacing w-full">
        {/* Top Section: Tag + Main Heading */}
        <div className="mb-12">
          {/* Tag/Button */}
          <span className="inline-block bg-[#1656A50D] text-[#1656A5] text-xs font-medium tracking-tight font-[Manrope] mb-4 border-[#1656A5]/20 rounded-[8px] px-3 py-1" style={{padding:'8px'}}>
            We Take Care of You
          </span>
          
          {/* Main Heading */}
          <h1 className="text-4xl csLg:text-5xl font-semibold text-black leading-[56px] csLg:leading-[64px] tracking-tight font-[Manrope]" style={{paddingBottom:'32px'}}>
            Grow personally, professionally,<br/> purposefully.
          </h1>
        </div>

        {/* Care Cards Grid - 2x2 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 csLg:gap-8">
          {careItems.map((item, index) => (
            <div
              key={index}
              style={{padding:'8px'}}
              className="bg-white rounded-[12px] p-6 csLg:p-8 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 csLg:w-14 csLg:h-14 flex items-center justify-center text-[#1656A5] text-2xl csLg:text-3xl font-medium rounded-[8px]">
                {item.icon}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3">
                {/* Title */}
                <h3 className="text-lg csLg:text-xl font-semibold text-black leading-tight tracking-tight font-[Manrope]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm csLg:text-base leading-6 text-gray-700 tracking-tight font-[Manrope]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpinionCare;
