'use client';

import React from 'react';

const benefits = [
  {
    icon: "🔍", // Magnifying glass icon (placeholder - you can replace with actual SVG)
    title: "Clarity & Confidence",
    description: "Get an unbiased review of your diagnosis and plan to make informed, confident decisions."
  },
  {
    icon: "🩺", // Stethoscope icon (placeholder - you can replace with actual SVG)
    title: "Accurate Diagnosis",
    description: "Recheck tests, spot overlooked conditions, and confirm the right diagnosis."
  },
  {
    icon: "➕", // Medical cross icon (placeholder - you can replace with actual SVG)
    title: "Right Treatment Choices",
    description: "See if your plan fits, compare success rates, and explore more options."
  },
  {
    icon: "❓", // Question mark icon (placeholder - you can replace with actual SVG)
    title: "Access to Advanced Care",
    description: "Discover new technologies and fertility solutions not available everywhere."
  }
];

const OpinionBenefits: React.FC = () => {
  return (
    <section id='how' className="w-full bg-[#FFFFFF]">
      <div className="section-spacing w-full">
        {/* Top Section: Tag + Main Heading */}
        <div className="mb-12" style={{paddingBottom:'32px'}}>
          {/* Tag/Button */}
          <span className="inline-block bg-[#1656A50D] text-[#1656A5] text-xs font-medium tracking-tight rounded-[8px] font-[Manrope] mb-4" style={{padding:'8px'}}>
            How a Second Opinion Helps
          </span>
          
          {/* Main Heading */}
          <h1 className="text-4xl csLg:text-5xl font-normal text-black leading-[56px] csLg:leading-[64px] tracking-tight font-[Manrope]">
            Clarity, Better Choices, Greater Confidence in Fertility Care
          </h1>
        </div>

        {/* Benefits Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 csLg:grid-cols-4 gap-6 csLg:gap-8" >
          {benefits.map((benefit, index) => (
            <div 
              style={{padding:'8px'}}
              key={index}
              className="bg-gray-50 rounded-[12px] p-6 csLg:p-8 flex flex-col gap-4 hover:shadow-md transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 csLg:w-14 csLg:h-14 flex items-center justify-center text-[#1656A5] text-2xl csLg:text-3xl font-medium">
                {benefit.icon}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3">
                {/* Title */}
                <h3 className="text-lg csLg:text-xl font-semibold text-black leading-tight tracking-tight font-[Manrope]">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-sm csLg:text-base leading-6 text-gray-700 tracking-tight font-[Manrope]">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpinionBenefits;
