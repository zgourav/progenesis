'use client';

import React from 'react';

const stats = [
  {
    title: "Clear Diagnosis",
    description: "78% of patients gained clearer diagnosis after a second opinion.",
    metric: "78%"
  },
  {
    title: "Corrected Errors",
    description: "62% of initial misdiagnoses were corrected with advanced evaluation.",
    metric: "62%"
  },
  {
    title: "Better Results",
    description: "3 in 5 couples saw better pregnancy results after re-evaluation.",
    metric: "3 in 5"
  },
  {
    title: "Patient Trust",
    description: "95% felt more confident about their treatment choices after consultation.",
    metric: "95%"
  }
];

const OpinionStats: React.FC = () => {
  return (
    <section className="w-full px-6 lg:px-[90px] py-20 bg-gradient-to-br from-green-50 via-[#FFFFFF] to-blue-50">
      <div className="section-spacing w-full">
        {/* Top Section: Tag + Main Heading */}
        <div className="mb-12">
          {/* Tag/Button */}
          <span className="inline-block bg-[#1656A50D] text-[#1656A5] text-xs font-medium tracking-tight rounded-[8px] font-[Manrope] mb-4" style={{padding:'8px'}}>
            Numbers That Set Us Apart
          </span>
          
          {/* Main Heading */}
          <h1 className="text-[32px] csLg:text-5xl font-semibold text-black leading-[24pxpx] csLg:leading-[64px] tracking-tight font-[Manrope]" style={{paddingBottom:'32px'}}>
            Benefits, corrections, and successes through second opinions.
          </h1>
        </div>

        {/* Stats Content */}
        <div className="space-y-8">
          {stats.map((stat, index) => (
            <div key={index}>
              {/* Stats Row */}
              <div className="grid grid-cols-1 csLg:grid-cols-[300px_1fr_200px] gap-6 csLg:gap-12 items-center">
                {/* Mobile: Title and Metric on one line, Description below */}
                <div className="csLg:hidden space-y-4" style={{paddingBottom:'12px'}}>
                  {/* Title and Metric Row */}
                  <div className="flex justify-between items-center">
                    <h3 className="text-[32px] font-semibold text-black leading-tight tracking-tight font-[Manrope] whitespace-nowrap">
                      {stat.title}
                    </h3>
                    <span className="text-[32px] text-[#2C2C2C] leading-none tracking-tight font-[Manrope]">
                      {stat.metric}
                    </span>
                  </div>
                  {/* Description */}
                  <p className="text-base text-center leading-6 text-gray-700 tracking-tight font-[Manrope]">
                    {stat.description}
                  </p>
                </div>

                {/* Desktop: Original Layout */}
                {/* Left: Title */}
                <div className="hidden csLg:block">
                  <h3 className="text-[32px] csLg:text-5xl font-semibold text-black leading-tight tracking-tight font-[Manrope] whitespace-nowrap">
                    {stat.title}
                  </h3>
                </div>

                {/* Center: Description */}
                <div className="hidden csLg:block">
                  <p className="text-base csLg:text-[16px] text-center leading-6 csLg:leading-7 text-gray-700 tracking-tight font-[Manrope]">
                    {stat.description}
                  </p>
                </div>

                {/* Right: Metric */}
                <div className="hidden csLg:flex justify-end">
                  <span className="text-[32px] csLg:text-5xl text-[#2C2C2C] leading-none tracking-tight font-[Manrope]">
                    {stat.metric}
                  </span>
                </div>
              </div>

              {/* Horizontal Line (except for last item) */}
              {index < stats.length - 1 && (
                <div className="w-full h-px bg-gray-200 mt-8" style={{marginTop:'24px'}}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpinionStats;
