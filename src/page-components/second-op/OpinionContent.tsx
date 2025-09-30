'use client';

import React from 'react';

const OpinionContent: React.FC = () => {
  return (
    <section id='why' className="w-full bg-white">
      <div className="section-spacing w-full">
        {/* Top Section: Tag + Main Heading */}
        <div className="mb-8">
          {/* Tag/Button */}
          <span className="inline-block bg-[#1656A50D] text-[#1656A5] text-xs font-medium tracking-tight rounded-[8px] font-[Manrope] mb-4" style={{padding:'8px'}}>
            Why Get a Second Opinion?
          </span>
          
          {/* Main Heading */}
          <h1 className="text-4xl csLg:text-6xl font-normal text-black leading-[56px] csLg:leading-[72px] tracking-tight font-[Manrope]" style={{paddingBottom:'32px'}}>
            Clearer Choices, Better Outcomes
          </h1>
        </div>

        {/* Horizontal Line */}
        <div className="w-full h-px bg-gray-200 mb-8"></div>

        {/* Bottom Section: Sub-heading + Paragraph */}
        <div className="grid grid-cols-1 csLg:grid-cols-[300px_1fr] gap-8 csLg:gap-16" style={{marginTop:'16px'}}>
          {/* Left: Sub-heading */}
          <div>
            <h2 className="text-2xl csLg:text-3xl font-normal text-black leading-[36px] csLg:leading-[42px] tracking-tight font-[Manrope]">
              How It Works
            </h2>
          </div>

          {/* Right: Paragraph */}
          <div>
            <p className="text-base csLg:text-lg leading-6 csLg:leading-7 text-gray-700 tracking-tight font-[Manrope]">
              Fertility treatments can be emotionally and financially demanding. If you've experienced unsuccessful cycles, have doubts about your diagnosis, or simply want reassurance, a second opinion can give you the clarity you need. At Progenesis Fertility Center, our specialists review your reports, evaluate your options, and provide unbiased, evidence-based recommendations - helping you make confident decisions and move closer to parenthood.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpinionContent;
