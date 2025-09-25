import React, { useState } from "react";

const tabs = [
  { key: "why", label: "Why Get a Second Opinion?" },
  { key: "how", label: "How a Second Opinion Helps" },
  { key: "numbers", label: "Numbers That Set Us Apart" },
  { key: "care", label: "We Take Care of You" },
];

const OpinionNav: React.FC = () => {
  const [active, setActive] = useState<string>("why");

  return (
    <nav className="w-full bg-[#FFFFFF]">
      <div className="section-spacing w-full px-6 md:px-8 lg:px-14 py-6">
        <div className="flex flex-wrap items-center gap-4 md:gap-6">
          {tabs.map((t) => {
            const isActive = t.key === active;
            return (
              <button
                key={t.key}
                type="button"
                style={{padding:'8px'}}
                onClick={() => setActive(t.key)}
                className={[
                  "min-w-[180px] h-10 px-5 inline-flex items-center justify-center rounded-[12px] text-sm font-medium transition-colors",
                  isActive
                    ? "bg-[#1656A5] text-[#F9F9F9] shadow"
                    : "bg-[#F9F9F9] text-[#1656A5] border border-[#1656A5]/60 hover:bg-[#1656A5]/5",
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

export default OpinionNav;
