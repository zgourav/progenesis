import React, { useState } from "react";

const tabs = ["Awards & Certifications", "Knowledge Center"];

const awards = [
  {
    year: "2022-23",
    title: "Best Hospital for Reproductive Medicine...",
    subtitle: "Business Excellence and Research Group (BERG) Singapore.",
    image: "/awards/awards.png", // ✅ public folder
  },
  {
    year: "2016-17",
    title: "World's Greatest Brand & World's Greatest Leaders",
    subtitle: "URS and ASIA ONE in Dubai.",
    image: "/awards/awards.png", // ✅ public folder
  },
  {
    year: "2017-18",
    title: "India's Fastest Growing Brand in IVF",
    subtitle: "URS and ASIA ONE in Dubai.",
    image: "/awards/awardsb.png", // ✅ public folder
  },
  {
    year: "2023-24",
    title: "The Number 1 IVF Centre for Emerging IVF Centre Category",
    subtitle: "The Times of India.",
    image: "/awards/awardsc.png", // ✅ public folder
  },
];



const knowledge = [
  {
    year: "1 month ago",
    title: "Breaking the Myths Around IVF",
    subtitle: "Discover the truth behind common misconceptions, so you can approach your fertility journey with clarity and confidence.",
    image: "/awards/kc1.png", // ✅ public folder
  },
  {
    year: "1 month ago",
    title: "Nutrition for Fertility Success",
    subtitle: " Learn how small, mindful changes in your diet can create a healthier foundation for conception and IVF success.",
    image: "/awards/kc2.png", // ✅ public folder
  },
  {
    year: "1 month ago",
    title: "Advanced Technology in IVF",
    subtitle: "Explore how innovations in reproductive science are transforming possibilities and bringing dreams to life.",
    image: "/awards/kc3.png", // ✅ public folder
  },
  {
    year: "1 month ago",
    title: "Preparing for Parenthood",
    subtitle: "Steps you can take today to feel ready — emotionally, physically, and mentally — for the beautiful journey ahead.",
    image: "/awards/kc4.png", // ✅ public folder
  },
];



export default function AwardsSection() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="bg-gray-50 pt-[42px] md:pt-[84px] mx-0 px-4 md:px-[80px] lg:px-[120px] pb-[60px]">
      <div className=" mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left column: heading + tabs (always first visually) */}
          <div>
            <span className="inline-block bg-blue-50 text-blue-700 text-xs px-[12] py-1 rounded-full">
              Featured News & Media
            </span>

            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:px-[48] font-light text-gray-900 leading-tight">
              In the News <br /> On the Web
            </h2>

            {/* Tabs */}
            <div className="mt-6 space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`block font-[Manrope] text-[18px] md:text-[32px] font-normal leading-[40px] tracking-[-0.64px] ${activeTab === tab
                    ? "text-[#1656A5] border-b-2 border-[#1656A5] pb-1"
                    : "text-gray-400 hover:text-gray-600"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Right column: tab content */}
          <div>
            {activeTab === "Awards & Certifications" ? (
              <div className="mt-2">
                {/* Grid: single column on mobile, two columns from sm/md */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {awards.map((award, idx) => (
                    <article
                      key={idx}
                      className="bg-white rounded-2xl shadow-sm overflow-hidden transition hover:shadow-m h-[490px]
                      md:p-[24px]"
                    >
                      <div className="flex justify-between mb-4 text-[#606060]/50 font-[Manrope] text-[15.8px] font-medium leading-[26.3px] tracking-[-0.316px]">
                        <span>{award.year}</span>
                        <span>Awards</span>
                      </div>
                      <div className="w-full h-44 sm:h-40 md:h-44 lg:h-48 rounded-2xl  overflow-hidden">
                        <img
                          src={award.image}
                          alt={award.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="pt-4 sm:pt-5 flex flex-col h-[150px]">
                        <h3
                          className="text-[#2C2C2C] font-[Manrope] text-[20px] font-normal leading-[28px] tracking-[-0.4px] pb-[57px]"
                        >
                          {award.title}
                        </h3>

                        <p
                          className="text-[#606060] font-[Manrope] text-[16px] font-normal leading-[24px] tracking-[-0.32px] opacity-50 mt-3"
                        >
                          {award.subtitle}
                        </p>
                      </div>


                    </article>
                  ))}
                </div>
              </div>
            ) : (
              // <div className="bg-white rounded-2xl p-6 shadow-sm">
              //   <h4 className="text-lg font-semibold text-gray-900 mb-2">
              //     Knowledge Center
              //   </h4>
              //   <p className="text-sm text-gray-600">
              //     Articles, guides and patient resources will appear here.
              //     (Replace this placeholder with your real content.)
              //   </p>
              // </div>
              <div className="mt-2">
                {/* Grid: single column on mobile, two columns from sm/md */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {knowledge.map((award, idx) => (
                    <article
                      key={idx}
                      className="bg-white rounded-2xl shadow-sm overflow-hidden transition hover:shadow-m h-[490px]
                      md:p-[24px]"
                    >
                      <div className="flex justify-between mb-4 text-[#606060]/50 font-[Manrope] text-[15.8px] font-medium leading-[26.3px] tracking-[-0.316px]">
                        <span>{award.year}</span>
                        <span>Awards</span>
                      </div>
                      <div className="w-full h-44 sm:h-40 md:h-44 lg:h-48 rounded-2xl  overflow-hidden">
                        <img
                          src={award.image}
                          alt={award.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="pt-4 sm:pt-5 flex flex-col h-[150px]">
                        <h3
                          className="text-[#2C2C2C] font-[Manrope] text-[20px] font-normal leading-[28px] tracking-[-0.4px] pb-[57px]"
                        >
                          {award.title}
                        </h3>

                        <p
                          className="text-[#606060] font-[Manrope] text-[16px] font-normal leading-[24px] tracking-[-0.32px] opacity-50 mt-3"
                        >
                          {award.subtitle}
                        </p>
                      </div>


                    </article>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
