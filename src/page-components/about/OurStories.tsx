'use client';

import React, { useState } from 'react';

const tabItems = [
  {
    storyNumber: '01',
    title: 'Care, Backed by Innovation',
    heading: 'Advanced care, delivered with heart.',
    description:
      'We combine leading fertility technology with genuine empathy, ensuring every couple’s unique journey is guided by both innovation and understanding.',
    image: '/images/OurStory1.png',
  },
  {
    storyNumber: '02',
    title: 'Walking Beside You Always',
    heading: 'Support that never stops.',
    description:
      'From your first appointment to life beyond treatment, we’re by your side — ready to listen, reassure, and guide you through every step.',
    image: '/images/OurStory2.png',
  },
  {
    storyNumber: '03',
    title: 'Turning Hope into Life',
    heading: 'Proven results, real stories.',
    description:
      'With thousands of success stories and a commitment to ethical care, we’ve helped countless couples make their dream of parenthood a reality.',
    image: '/images/OurStory3.png',
  },
];

const OurStories: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section className="w-full  bg-white">
      <div className="grid grid-cols-1 csLg:grid-cols-[300px_1fr] gap-10 csLg:gap-x-28 xl:gap-x-32 section-spacing" >
        {/* Left Column: Heading + Tab List (desktop only) */}
        <div className="hidden csLg:flex flex-col gap-12">
          {/* Heading */}
          <div>
            <span className="inline-block bg-[#1656A50D] text-[#1656A5] text-[12px] md:text-[13px] px-3 py-1 rounded-[8px]" >Why choose us</span>
            <h2 className="text-4xl font-normal text-black leading-[56px] tracking-tight font-[Manrope]">
              Our Story
            </h2>
          </div>

          {/* Tab List */}
          <div className="flex flex-col pt-4">
            {tabItems.map((item, index) => (
            <div key={index}>
            <div className="h-[1px] w-full bg-[#A5A5A5] relative">
            {activeTab === index && (
            <div className="absolute left-0 top-[-1px] h-[2px] w-32 bg-[#1656A5]" />
            )}
             </div>
            <div
            onClick={() => setActiveTab(index)}
            className="flex items-center justify-between cursor-pointer py-3"
            >
            <span
            className={`text-lg csLg:text-[32px] font-medium font-[Manrope] tracking-tight ${
            activeTab === index ? "text-[#1656A5]" : "text-gray-600"
            }`}
            >
            {item.title}
            </span>
            <span
            className={`w-2 h-2 rounded-full ml-4 ${
            activeTab === index ? "bg-[#1656A5]" : "bg-gray-400"
            }`}
            />
            </div>
            {/* Separator line (after every tab) */}
            {index === tabItems.length - 1 && (
            <div className="h-[1px] w-full bg-[#A5A5A5] relative">
            </div>
            )}

      
            </div>
            ))}
          </div>

        </div>

        {/* Right Column: Paragraph + Image + Info Box */}
        {/* Desktop (csLg and up): keep tab-driven single story */}
        <div className="hidden csLg:flex flex-col gap-10">
          {/* Paragraph (top of right column) */}
          <p className="text-lg csLg:text-[32px] leading-[36px] text-black tracking-tight font-[Manrope]">
            We believe every hopeful parent deserves a team that listens, cares, and fights to make
            dreams a reality — with science, empathy, and unwavering support.
          </p>

          {/* Image + Info Box */}
          <div className="flex flex-col md:flex-row gap-5 w-full max-w-full overflow-hidden">
  {/* Image */}
  <div className="w-full md:w-1/2 max-w-[604px] aspect-[4/3] rounded-[20px] overflow-hidden flex items-center justify-center">
    <img
      src={tabItems[activeTab].image}
      alt={tabItems[activeTab].title}
      className="w-[100%] h-[100%] object-cover rounded-xl transition-all duration-300 ease-in-out"
    />
  </div>

  {/* Info Box */}
  <div className="flex flex-col justify-center gap-4 w-full md:w-1/2 max-w-[500px] md:mt-6 pt-2.5 px-4">
    <h3 className="text-[#94BA3D]">{tabItems[activeTab].storyNumber}</h3>
    <h3 className="text-[#1656A5] font-medium text-2xl md:text-[28px] lg:text-[32px] leading-tight font-[Manrope]">
      {tabItems[activeTab].heading}
    </h3>
    <p className="text-base text-gray-700 leading-6 tracking-tight font-[Manrope]">
      {tabItems[activeTab].description}
    </p>
  </div>
</div>

        </div>

        {/* Mobile & tablet: show heading + all stories sequentially, hide tabs */}
        <div className="csLg:hidden flex flex-col gap-8">
          {/* Mobile heading */}
          <div>
            <span className="inline-block bg-[#E9F0FF] text-[#1656A5] text-[12px] md:text-[13px] px-3 py-1 rounded-[8px]" style={{padding:'8px'}}>Why choose us</span>
            <h2 className="text-3xl font-normal text-black leading-[42px] tracking-tight font-[Manrope]">
              Our Story
            </h2>
          </div>

          {/* Intro paragraph */}
          <p className="text-base leading-[28px] text-black tracking-tight font-[Manrope]">
            We believe every hopeful parent deserves a team that listens, cares, and fights to make
            dreams a reality — with science, empathy, and unwavering support.
          </p>

          {/* All stories stacked */}
          {tabItems.map((item) => (
            <div key={item.storyNumber} className="flex flex-col gap-5 w-full">
              

              {/* Info Box */}
              <div className="flex flex-col gap-2 pt-2.5">
                <h3 className='text-[#94BA3D]'>{item.storyNumber}</h3>
                <h3 className="text-[#1656A5] font-medium text-2xl leading-tight font-[Manrope]">
                  {item.heading}
                </h3>
                <p className="text-base text-gray-700 leading-6 tracking-tight font-[Manrope]">
                  {item.description}
                </p>
              </div>
              {/* Image */}
              <div className="w-full aspect-[4/3] rounded-[20px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default OurStories;
