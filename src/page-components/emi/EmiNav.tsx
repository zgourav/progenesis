import React, { useState } from "react";

const tabs = [
  { key: "landing", label: "Landing" },
  { key: "financial", label: "Financial support" },
  { key: "care", label: "We Take Care of You" },
  { key: "stats", label: "Stats and Metrics" },
];

const EmiNav: React.FC = () => {
  const [active, setActive] = useState<string>("landing");

  const handleScroll = (id: string) => {
    setActive(id);
    const element = document.getElementById(id);
    if (!element) return;

    // Add small offset in case you have a sticky header
    const y = element.getBoundingClientRect().top + window.scrollY - 20;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <nav className="w-full bg-[#FFFFFF]">
      <div className="section-spacing max-w-7xl">
        <div className="flex flex-wrap items-center gap-4 md:gap-6">
          {tabs.map((t) => {
            const isActive = t.key === active;
            return (
              <button
                key={t.key}
                type="button"
                onClick={() => handleScroll(t.key)}
                className={[
                  "min-w-[180px] h-10 px-5 inline-flex items-center justify-center rounded-[12px] text-sm font-medium transition-colors",
                  isActive
                    ? "bg-[#1656A5] text-white shadow"
                    : "bg-white text-[#1656A5] border border-[#1656A5]/60 hover:bg-[#1656A5]/5",
                ].join(" ")}
              >
                {t.label}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default EmiNav;
