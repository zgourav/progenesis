"use client";
import React, { useState } from "react";

type QA = { q: string; a: string };

type Tab = {
  label: string;
  items: QA[];
};

const tabs: Tab[] = [
  {
    label: "General",
    items: [
      {
        q: "What is infertility?",
        a: "Inability to get pregnant after a year under 35, or 6 months over 35, may indicate infertility. Consult a fertility specialist to determine the cause and get treatment.",
      },
      { q: "What causes infertility?", a: "Infertility can be caused by ovulation issues, low sperm count or motility, blocked tubes, hormonal problems, age, lifestyle, or unexplained factors." },
      { q: "What can cause infertility in Women?", a: "Common causes include PCOS, endometriosis, tubal blockage, ovulation disorders, thyroid imbalance, and age-related decline." },
      { q: "How Common is infertility?", a: "Roughly 10–15% of couples experience infertility, and many benefit from timely evaluation and treatment." },
      { q: "What can cause infertility in Men?", a: "Low sperm count, poor motility or morphology, infections, varicocele, hormonal issues, or lifestyle factors can contribute." },
      { q: "When should I seek consultation for infertility?", a: "Seek consultation after 12 months of trying (or 6 months if over 35), or earlier if you have known medical concerns." },
      { q: "What can cause infertility in Men?", a: "Evaluation by a specialist can identify causes and guide options like lifestyle changes, medication, IUI, or IVF." },
    ],
  },
  {
    label: "Pricing & Packages",
    items: [
      { q: "Do you offer packages?", a: "Yes, we offer transparent packages tailored to treatment needs. Contact our team for current details." },
      { q: "Are there financing options?", a: "We can guide you to financing partners and flexible payment schedules where available." },
    ],
  },
  {
    label: "Treatment-Specific",
    items: [
      { q: "What is IVF?", a: "IVF involves fertilizing an egg with sperm in a lab and transferring the embryo into the uterus." },
      { q: "What is IUI?", a: "IUI places processed sperm directly into the uterus around ovulation to improve chances of fertilization." },
    ],
  },
  {
    label: "Fertility-Related",
    items: [
      { q: "Does age affect fertility?", a: "Yes. Fertility declines with age, especially after 35 in women, and gradually in men over time." },
      { q: "Can lifestyle affect fertility?", a: "Nutrition, sleep, stress, weight, and smoking/alcohol can all influence fertility outcomes." },
    ],
  },
  {
    label: "Others",
    items: [
      { q: "How long does a consult take?", a: "Typically 30–45 minutes for the first visit, depending on tests and history." },
      { q: "Do I need a referral?", a: "No referral is required. You can book directly with our clinic." },
    ],
  },
];

const FaQ: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  // By default, open the first question in the General tab
  const [openIndex, setOpenIndex] = useState(0);

  const handleTab = (idx: number) => {
    setActiveTab(idx);
    // reset open state, open first if available
    setOpenIndex(0);
  };

  const activeItems = tabs[activeTab].items;

  return (
    <section className="section-spacing w-full bg-[#FAFAFA] px-6 md:px-10 lg:px-[90px] py-10 md:py-14 lg:py-16 font-[Manrope]" >
      <div className="grid grid-cols-1 md:grid-cols-[360px_1fr] lg:grid-cols-[420px_1fr] gap-6 md:gap-8 lg:gap-10">
        {/* Left intro */}
        <div>
          <span className="inline-block bg-[#1656A50D] text-[#1656A5] text-[12px] md:text-[13px] px-3 py-1 rounded-[8px]">Real Stories. Real Miracles.</span>
          <div style={{paddingBottom:'20px'}}>
          <h2 className="text-[36px] md:text-[44px] font-semibold leading-tight text-[#2C2C2C]">
            Quick answers to the
            
            <span className="text-[#77B255]"> most common</span>
            <br />
            <span className="text-[#77B255]">fertility-related</span>
            <br />
           <span className="text-[#77B255]">questions.</span> 
          </h2></div>
          <p className="mt-6 text-[13px] md:text-[14px] text-[#6B7280]">
            Didn’t find what you are looking for?
            <br />
            Checkout <span className="text-[#1656A5] underline">Patient Resources</span> section to know more.
          </p>
        </div>

        {/* Right content */}
        <div>
          {/* Tabs */}
          <div className="flex flex-wrap gap-3 mb-6" style={{paddingBottom:'30px'}}>
            {tabs.map((t, idx) => {
              const active = idx === activeTab;
              return (
                <button
                  key={t.label}
                  onClick={() => handleTab(idx)}
                  className={`h-[40px] w-auto px-4 rounded-[16px] border text-sm font-medium transition-colors ${
                    active
                      ? "bg-[#1656A5] text-white border-[#1656A5]"
                      : "bg-white text-[#2C2C2C] border-gray-300 hover:border-blue-400"
                  }`}
                  
                >
                  {t.label}
                </button>
              );
            })}
          </div>

          {/* Accordion list */}
          <div className="space-y-3">
            {activeItems.map((item, i) => {
              const open = i === openIndex;
              return (
                <div
                  key={i}
                  className={`bg-white overflow-hidden rounded-[16px] ${
                    open 
                  }`}
                >
                  <button
                    aria-expanded={open}
                    onClick={() => setOpenIndex(open ? -1 : i)}
                    className="w-full flex items-center justify-between gap-3 text-left md:py-4 rounded-2xl  text-[14px] md:text-[15px] text-[#2C2C2C]"
                  >
                    <span style={{padding:'8px'}}>{item.q}</span>
                    <span className="text-gray-500">{open ? "▴" : "▾"}</span>
                  </button>
                  {open && (
                    <div className="px-2 py-4 md:px-2 md:py-4 text-left text-[14px] text-[#4B5563]" >
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaQ;
