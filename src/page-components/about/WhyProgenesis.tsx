"use client";
import React, { useState } from "react";

type Slide = {
  title: string;
  number: string;
  desc: string;
  image: string; // background image url
  bannerHeading: string;
  bannerPara?: string;
};

const slides: Slide[] = [
  {
    title: "Personalized, Holistic Care",
    number: "01",
    desc:
      "Every journey is unique. We design your treatment around your story, not just your symptoms.",
    image: "/images/why-1.png", // replace with real image
    bannerHeading: 'Care That Feels Like It’s Just for You.',
  },
  {
    title: "Always Accessible",
    number: "02",
    desc:
      "We’re here whenever you need—answers, reassurance, or simply someone who understands.",
    image: "/images/why-2.png",
    bannerHeading: "We’re always here for you, completely.",
  },
  {
    title: "Transparency Builds Trust",
    number: "03",
    desc:
      "You deserve to know everything—clearly, honestly, and respectfully.",
    image: "/images/why-3.png",
    bannerHeading: "Every Step With Honest Care.",
    bannerPara:
      "From diagnosis to delivery, you’ll always know what’s happening and why because trust grows with transparency.",
  },
  {
    title: "Your Journey, Your Say",
    number: "04",
    desc:
      "We empower you to make confident, informed choices at every step of your parenthood journey.",
    image: "/images/why-4.png",
    bannerHeading: "Because Parenthood is Your Choice.",
  },
];

const WhyProgenesis: React.FC = () => {
  const [active, setActive] = useState(0);
  const current = slides[active];

  return (
    <section id="why-choose-us" className="w-full bg-[#1656A50D] px-6 md:px-12 lg:px-[90px] py-12 md:py-16 section-spacing" >
      <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-10 items-start">
        {/* Left column */}
        <div>
          <div className="why-bott-pad">
          <span className="inline-block bg-[#1656A50D] text-[#1656A5] text-[12px] md:text-[13px] px-3 py-1 rounded-[8px]">Why choose us</span>
          <h2 className="mt-3 text-[36px] md:text-[42px] font-semibold text-gray-900">
            Why Progenesis?
          </h2></div>

          {/* List */}
          <div className="mt-6 space-y-4 pt-8">
            {slides.map((s, idx) => {
              const activeRow = idx === active;
              return (
                <button
                  key={s.number}
                  onClick={() => setActive(idx)}
                  className="w-full text-left group"
                >
                  {/* Top separator line (always visible) */}
                  <div className="h-[1px] w-full bg-[#A5A5A5] relative">
                    {activeRow && (
                      <div className="absolute left-0 top-[-1px] h-[2px] w-32 bg-[#1656A5]" />
                    )}
                  </div>
                  <div className="flex items-center justify-between pt-3 pb-3">
                    <div className={`text-[16px] md:text-[32px] font-medium ${
                      activeRow ? 'text-gray-900' : 'text-gray-800'
                    }`}>
                      {s.title}
                    </div>
                    <span className="text-gray-400 font-semibold">{s.number}</span>
                  </div>
                  {/* Active description */}
                  {activeRow && (
                    <p className="text-[14px] text-gray-600 mt-1 max-w-[360px]">
                      {s.desc}
                    </p>
                  )}
                  {/* Bottom separator line (always visible) */}
                  {idx === slides.length - 1 && (
                    <div className="h-[1px] w-full bg-[#A5A5A5] relative">
                    
                   </div>
               )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right banner */}
        <div className="relative w-full rounded-2xl overflow-hidden min-h-[220px] shadow-sm csLg:min-h-[720px] flex items-center justify-center" style={{}}>
          <div
            className="absolute inset-0 bg-cover bg-center items-center"
            style={{ backgroundImage: `url(${current.image})` }}
          />
          {/* light gradient like screenshots */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#EAF6FF]/40 via-white/10 to-[#D7E8FF]/30" />

          {/* Content */}
          <div className="relative z-10 w-full h-full">
            {/* Dynamic heading position */}
            {active === 0 && (
              // First banner: center
              <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                <h3 className="text-[26px] md:text-[32px] lg:text-[36px] font-semibold text-gray-900 max-w-[720px]">
                    {current.bannerHeading.includes("Like") ? (
                    <>
                   {current.bannerHeading.split("Like")[0]}Like
                     <br />
                   {current.bannerHeading.split("Like")[1].trim()}
                      </>
                        ) : (
                        current.bannerHeading
                     )}
                </h3>

              </div>
            )}
            {active === 1 && (
              // Second banner: top left
              <div className="absolute top-6 left-6 md:left-12 lg:left-16 text-top pr-6">
                <h3 className="text-[26px] md:text-[32px] lg:text-[36px] font-semibold text-gray-900 max-w-[720px]">
                  {current.bannerHeading}
                </h3>
              </div>
            )}
            {active === 2 && (
              // Third banner: heading top right, para bottom left
              <>
                <div className="absolute top-6 md:top-10 lg:top-12 right-6 md:right-20 lg:right-16 text-right pl-6">
                  <h3 className="text-[26px] md:text-[32px] lg:text-[36px] font-semibold text-gray-900 max-w-[720px]">
                    {current.bannerHeading}
                  </h3>
                </div>
                {current.bannerPara && (
                  <p className="absolute left-6 md:left-10 lg:left-12 bottom-6 md:bottom-8 lg:bottom-10 text-[14px] md:text-[15px] text-gray-700 max-w-[520px]">
                    {current.bannerPara}
                  </p>
                )}
              </>
            )}
            {active === 3 && (
              // Fourth banner: top center
              <div className="absolute top-6 md:top-10 lg:top-12 left-1/2 -translate-x-1/2 text-center px-4">
                <h3 className="text-[26px] md:text-[32px] lg:text-[36px] font-semibold text-gray-900 max-w-[720px]">
                  {current.bannerHeading}
                </h3>
              </div>
            )}
            {/* Remove duplicate para for third banner below */}
            {active !== 2 && current.bannerPara && (
              <p className="absolute left-6 md:left-10 lg:left-12 bottom-6 md:bottom-8 lg:bottom-10 text-[14px] md:text-[15px] text-gray-700 max-w-[520px]">
                {current.bannerPara}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyProgenesis;
