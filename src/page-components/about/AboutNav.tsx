// src/components/Navbar.tsx
'use client'
import React, { useState } from "react";

const sections = [
  { id: "why-1", label: "Why Progenesis" },
  { id: "our-approach", label: "Our Approach" },
  { id: "our-vision", label: "Our Vision & Mission" },
  { id: "why-choose-us", label: "Why choose us" },
  { id: "impact-growth", label: "Impact & Growth" },
  { id: "faqs", label: "FAQ's" },
];

const AboutNav: React.FC = () => {
  const [active, setActive] = useState("why-choose-us");

  const handleScroll = (id: string) => {
    setActive(id);
    const element = document.getElementById(id);
    if (!element) return;
    // Smooth scroll with a small offset compensation for sticky headers if any
    const y = element.getBoundingClientRect().top + window.scrollY - 20; // 20px breathing room
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <nav  className="flex space-x-3 py-3 md:py-4 bg-white" >
      <div className="section-spacing grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-row gap-3 md:gap-4 lg:gap-10">
           {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => handleScroll(section.id)}
          className={`w-auto h-[44px] md:h-[50px] lg:h-[56px] px-3 md:px-4 py-2 text-[12px] md:text-[13px] lg:text-[14px] gap-3 md:gap-4 rounded-[16px] border transition-colors duration-300 ${
            active === section.id
              ? "bg-[#1656A5] text-white border-[#1656A5]"
              : "text-[#1656A5] border-[#1656A5] hover:bg-[#1656A5] hover:text-white"
          }`}
        >
          {section.label}
        </button>
      ))}
      </div>
     
    </nav>
  );
};

export default AboutNav;
