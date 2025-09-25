"use client";
import React from "react";

const items = [
  {
    icon: "🖼️",
    title: "Health Outreach",
    desc: "Awareness camps and community programs bringing fertility care closer to all.",
  },
  {
    icon: "🩺",
    title: "Medical Education",
    desc: "Training doctors through CME sessions to spread knowledge and reduce stigma.",
  },
  {
    icon: "⤢",
    title: "Expanding Presence",
    desc: "Growing across Maharashtra with advanced fertility centers and world-class labs.",
  },
  {
    icon: "∞",
    title: "Future Partnerships",
    desc: "Welcoming investors to join us in shaping tomorrow’s fertility care.",
  },
];

const Impact: React.FC = () => {
  return (
    <section id="impact-growth" className="w-full font-[Manrope] bg-[#1656A50D] px-6 md:px-12 lg:px-[90px] py-12 md:py-16 section-spacing" >
      {/* Label & Heading */}
      <div className="max-w-5xl">
        <span className="inline-block bg-[#E9F0FF] text-[#1656A5] text-[12px] md:text-[13px] px-3 py-1 rounded-[8px]" style={{padding:'8px'}}>Impact & Growth</span>
        <h2 className="csLg:text-[48px] csLg:leading-[56px] text-[32px] tracking-[0] text-[#2C2C2C] font-normal mb-10">
          Extending care through
          <br />
          community initiatives while
          <br />
          building a strong future together.
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6" style={{paddingTop:'40px'}}>
        {items.map((it, idx) => (
          <div key={idx} className="bg-[#EEF5FF] backdrop-blur-sm rounded-2xl border border-[#E5EEF9] p-8 md:p-10 min-h-[220px] flex flex-col" style={{padding:'24px'}}>
            <div className="text-[#1656A5] text-2xl mb-6">{it.icon}</div>
            <h3 className="text-[20px] md:text-[22px] font-semibold text-[#2C2C2C] mb-2">{it.title}</h3>
            <p className="mt-1 text-[14px] leading-[22px] text-[#6B7280]">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Impact;
