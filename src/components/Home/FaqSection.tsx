import React, { useState } from "react";

const categories = [
  "General",
  "Pricing & Packages",
  "Treatment-Specific",
  "Fertility-Related",
  "Others",
];

const faqs = {
  General: [
    {
      q: "What is infertility?",
      a: "Inability to get pregnant after a year under 35, or 6 months over 35, may indicate infertility. Consult a fertility specialist to determine the cause and get treatment.",
    },
    {
      q: "What causes infertility?",
      a: "It can be caused by issues in either partner or both. Medical evaluation is required.",
    },
    {
      q: "What can cause infertility in Women?",
      a: "Common causes include ovulation disorders, blocked fallopian tubes, endometriosis, and age-related factors.",
    },
    {
      q: "How Common is Infertility?",
      a: "Roughly 1 in 8 couples experience infertility issues globally.",
    },
    {
      q: "What can cause infertility in Men?",
      a: "Low sperm count, poor motility, lifestyle factors, and hormonal imbalances.",
    },
    {
      q: "When should I seek consultation for infertility?",
      a: "If you’ve been trying for over a year (or 6 months if over 35), it’s time to consult a specialist.",
    },
  ],
  "Pricing & Packages": [
    {
      q: "Do you offer EMI options?",
      a: "Yes, flexible EMI options are available for most treatments.",
    },
    {
      q: "What is included in a treatment package?",
      a: "Packages usually include consultations, medications, lab tests, and procedures. Details vary.",
    },
  ],
  "Treatment-Specific": [
    {
      q: "What is IVF?",
      a: "IVF is In-Vitro Fertilization, a process where eggs are fertilized outside the body and implanted into the uterus.",
    },
    {
      q: "Is IUI different from IVF?",
      a: "Yes, IUI (Intrauterine Insemination) is less invasive and involves placing sperm directly into the uterus.",
    },
  ],
  "Fertility-Related": [
    {
      q: "Does age affect fertility?",
      a: "Yes, fertility declines significantly after age 35 for women and after 40 for men.",
    },
  ],
  Others: [
    {
      q: "Do you provide counseling?",
      a: "Yes, emotional and psychological support is part of our care approach.",
    },
  ],
};

const FaqSection = () => {
  const [activeCategory, setActiveCategory] = useState("General");
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#fafafa] pt-[42px] md:pt-[84px] mx-0 px-4 md:px-[80px] lg:px-[120px] pb-[60px]">
      <div className="mx-auto grid lg:grid-cols-2 gap-1 md:pr-[80px]">
        {/* Header / Intro */}
        <div className="mb-6">
          <span className="inline-block bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full">
            FAQ’s
          </span>

          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 leading-tight">
            Quick answers to the{" "}
            <span className="text-[#94BA3D]">most common fertility-related questions.</span>
          </h2>

          <p className="mt-4 text-sm text-gray-600">
            Didn’t find what you are looking for?<br></br>Checkout {" "}
            <a href="#" className="text-blue-600 font-semibold underline">
              Patient Resources
            </a>{" "}
            section to know more.
          </p>
        </div>


        <div>

        {/* Tabs */}

          <div className="flex flex-wrap gap-3 mb-6">
            {categories.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setOpenIndex(null);
                  }}
                  className={
                    "px-4 py-2 rounded-lg text-sm font-medium transition focus:outline-none " +
                    (active
                      ? "bg-blue-600 text-white"
                      : "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50")
                  }
                >
                  {cat}
                </button>
              );
            })}
          </div>


        {/* Accordion */}
        <div className="space-y-3">
          {faqs[activeCategory].map((item, idx) => {
            const opened = openIndex === idx;
            return (
              <div key={idx} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={opened}
                  className="w-full text-left px-4 py-4 flex items-center justify-between"
                >
                  <span className="text-gray-900 text-base font-medium">{item.q}</span>
                  <span className="ml-3">
                    {opened ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M18 15l-6-6-6 6" stroke="#2C2C2C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M6 9l6 6 6-6" stroke="#2C2C2C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </span>
                </button>

                <div
                  className={`px-4 pb-4 transition-all duration-200 ${
                    opened ? "pt-0" : "hidden"
                  }`}
                >
                  {opened && (
                    <p className="text-gray-700 text-sm leading-relaxed">{item.a}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div></div>
      </div>
    </section>
  );
};

export default FaqSection;
