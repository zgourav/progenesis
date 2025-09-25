import React from "react";
import "../about/AboutMain.css";

const items = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" stroke="currentColor" className="w-6 h-6 text-[#1656A5]">
        <rect x="3" y="5" width="18" height="14" rx="3"/>
        <path d="M3 9h18"/>
      </svg>
    ),
    text: "Up to 80% finance of the total Medical Bill",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" stroke="currentColor" className="w-6 h-6 text-[#1656A5]">
        <path d="M12 6v6l4 2"/>
        <circle cx="12" cy="12" r="9"/>
      </svg>
    ),
    text: "Easy Repayment mode",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" stroke="currentColor" className="w-6 h-6 text-[#1656A5]">
        <rect x="3" y="4" width="18" height="18" rx="2"/>
        <path d="M8 2v4M16 2v4M3 10h18"/>
      </svg>
    ),
    text: "EMI options as per your convenience (15/18/24 months)",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" stroke="currentColor" className="w-6 h-6 text-[#1656A5]">
        <rect x="4" y="3" width="16" height="18" rx="2"/>
        <path d="M8 7h8M8 11h8M8 15h5"/>
      </svg>
    ),
    text: "Minimum Documentation",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" stroke="currentColor" className="w-6 h-6 text-[#1656A5]">
        <path d="M3 12h18M7 16l-4-4 4-4"/>
      </svg>
    ),
    text: "No Collateral Security Required.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" stroke="currentColor" className="w-6 h-6 text-[#1656A5]">
        <path d="M12 2l3 6 6 .9-4.5 4.3 1.1 6.5L12 17l-5.6 2.7 1.1-6.5L3 8.9 9 8z"/>
      </svg>
    ),
    text: "Patient with medical insurance can also apply",
  },
];

const EmiOverview = () => {
  return (
    <section className="w-full bg-[#FFFFFF]">
      <div className="section-spacing w-full px-6 md:px-8 lg:px-16 py-10 md:py-14">
        {/* Badge */}
        <div className="mb-4">
          <span className="inline-block bg-[#1656A50D] text-[#1656A5] text-[12px] md:text-[13px] px-3 py-1 rounded-[8px]">We Take Care of You</span>
        </div>

        {/* Heading */}
        <h2 className="text-[#2C2C2C] font-semibold tracking-tight text-[32px] sm:text-[32px] md:text-[48px] leading-tight mb-8 pb-12">
          Financial Support That Puts You First
        </h2>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3 lg:gap-4 mb-10">
          {items.map((it, idx) => (
            <div key={idx} className="bg-white lg:h-[128px] border border-[#E3ECF7] rounded-[16px] p-2 h-full">
              <div className="flex flex-col items-start gap-3">
                <div className="shrink-0">{it.icon}</div>
                <p className="text-[#2C2C2C] text-[16px] md:text-[18px] leading-[1.6]">
                  {it.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="pt-12">
          <button type="button" className="inline-flex items-center justify-center bg-[#1656A5] text-white rounded-[12px] h-10 px-4 md:h-11 md:px-5 shadow p-2">
            Know more about EMI facilities
          </button>
        </div>
      </div>
    </section>
  );
};

export default EmiOverview;
