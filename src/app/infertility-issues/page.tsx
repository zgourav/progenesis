import React from "react";
import ConsultationForm from "../../components/Consultation/ConsultationForm";
const InfertilityIssues: React.FC = () => {
  return (
    <div className="w-full flex flex-col">
      {/* Section 1 */}
      <section
        className="relative w-full h-[500px] md:h-[600px] flex pl-[12px] md:pl-[120px] bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: "url('/InfertilityIssues/s-1bg1.png')", // ✅ Now from public/
        }}
      >
        {/* Blurred gradient shape */}
        <div
          className="absolute left-[-150px] top-[80px] w-[445px] h-[441px] rounded-full opacity-70"
          style={{
            background: "#94BA3D",
            filter: "blur(250px)",
            transform: "rotate(-2deg)",
          }}
        ></div>

        {/* Left content */}
        <div className="relative z-10 mt-2 md:mt-[85px] max-w-5xl">
          <p className="text-[18px] text-gray-600 mb-2 md:mb-[44px]">
            Home<span className="px-[12px]">›</span>
            <span
              className="inline-block px-3 py-1 rounded-md text-[18px] font-medium leading-[40px] tracking-[-0.36px]"
              style={{ color: "var(--Blue, #1656A5)" }}
            >
              Online Consultation
            </span>
          </p>
          <h1
            className="text-3xl md:text-[80px] font-bold leading-tight mb-[44px]"
            style={{ color: "#252525" }}
          >
            IVF & Fertility<br /> Online Consultation
          </h1>
          <button className="mt-6 px-[20px] py-[16px] bg-black text-white rounded-[16px]">
            Book Your Appointment
          </button>
        </div>
      </section>

      {/* Section 2 */}
      <section className="w-full px-6 md:px-20 py-16 bg-white">
        {/* Small Tag */}
        <span
          className="inline-block px-3 py-1 mb-6 rounded-full text-[12px] font-medium leading-[20px] tracking-[-0.24px] text-[#1656A5] bg-[#F3F8FE]"
          style={{ fontFamily: "Manrope" }}
        >
          Know the Basics
        </span>

        {/* Main Heading */}
        <h2
          className="w-full text-[48px] font-normal leading-[56px] tracking-[-0.96px] text-[#2C2C2C] mb-12"
          style={{ fontFamily: "Manrope" }}
        >
          Repeated IUI failures: causes, signs, <br />
          and treatments for parenthood.
        </h2>

        {/* Grid with spacing 4 (cols) and 8 (rows) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-8">
          {/* Item 1 */}
          <div>
            <p
              className="text-[16px] font-normal leading-[24px] tracking-[-0.32px] text-[#606060] mb-2"
              style={{ fontFamily: "Manrope" }}
            >
              01
            </p>
            <h3
              className="text-[32px] font-normal leading-[40px] tracking-[-0.64px] text-[#2C2C2C] mb-2"
              style={{ fontFamily: "Manrope" }}
            >
              Definition
            </h3>
            <p
              className="text-[16px] font-normal leading-[24px] tracking-[-0.32px] text-[#606060]"
              style={{ fontFamily: "Manrope" }}
            >
              Multiple IUI failure occurs when repeated attempts at intrauterine
              insemination (IUI) do not result in pregnancy, often after 3–4 cycles.
            </p>
          </div>

          {/* Item 2 */}
          <div>
            <p className="text-[16px] font-normal leading-[24px] tracking-[-0.32px] text-[#606060] mb-2" style={{ fontFamily: "Manrope" }}>
              02
            </p>
            <h3 className="text-[32px] font-normal leading-[40px] tracking-[-0.64px] text-[#2C2C2C] mb-2" style={{ fontFamily: "Manrope" }}>
              Possible Reasons
            </h3>
            <p className="text-[16px] font-normal leading-[24px] tracking-[-0.32px] text-[#606060]" style={{ fontFamily: "Manrope" }}>
              Poor sperm/egg quality, age, timing issues, endometrial problems, hormonal imbalance.
            </p>
          </div>

          {/* Item 3 */}
          <div>
            <p className="text-[16px] font-normal leading-[24px] tracking-[-0.32px] text-[#606060] mb-2" style={{ fontFamily: "Manrope" }}>
              03
            </p>
            <h3 className="text-[32px] font-normal leading-[40px] tracking-[-0.64px] text-[#2C2C2C] mb-2" style={{ fontFamily: "Manrope" }}>
              Symptoms &amp; Impact
            </h3>
            <p className="text-[16px] font-normal leading-[24px] tracking-[-0.32px] text-[#606060]" style={{ fontFamily: "Manrope" }}>
              The primary sign is the inability to conceive after multiple cycles,
              often leading to emotional distress, financial strain, and frustration.
            </p>
          </div>

          {/* Item 4 */}
          <div>
            <p className="text-[16px] font-normal leading-[24px] tracking-[-0.32px] text-[#606060] mb-2" style={{ fontFamily: "Manrope" }}>
              04
            </p>
            <h3 className="text-[32px] font-normal leading-[40px] tracking-[-0.64px] text-[#2C2C2C] mb-2" style={{ fontFamily: "Manrope" }}>
              Treatment Options
            </h3>
            <p className="text-[16px] font-normal leading-[24px] tracking-[-0.32px] text-[#606060]" style={{ fontFamily: "Manrope" }}>
              Depending on the cause, options like IVF, ICSI, or other advanced
              treatments are advised with expert guidance.
            </p>
          </div>

          {/* Item 5 */}
          <div>
            <p className="text-[16px] font-normal leading-[24px] tracking-[-0.32px] text-[#606060] mb-2" style={{ fontFamily: "Manrope" }}>
              05
            </p>
            <h3 className="text-[32px] font-normal leading-[40px] tracking-[-0.64px] text-[#2C2C2C] mb-2" style={{ fontFamily: "Manrope" }}>
              Emotional Challenges
            </h3>
            <p className="text-[16px] font-normal leading-[24px] tracking-[-0.32px] text-[#606060]" style={{ fontFamily: "Manrope" }}>
              Repeated failures can lead to frustration, anxiety, and strain on
              relationships, making emotional support and counseling vital.
            </p>
          </div>

          {/* Item 6 */}
          <div>
            <p className="text-[16px] font-normal leading-[24px] tracking-[-0.32px] text-[#606060] mb-2" style={{ fontFamily: "Manrope" }}>
              06
            </p>
            <h3 className="text-[32px] font-normal leading-[40px] tracking-[-0.64px] text-[#2C2C2C] mb-2" style={{ fontFamily: "Manrope" }}>
              When to Seek Expert Help
            </h3>
            <p className="text-[16px] font-normal leading-[24px] tracking-[-0.32px] text-[#606060]" style={{ fontFamily: "Manrope" }}>
              If IUI fails after several cycles, consult a fertility specialist to assess causes
              and explore advanced treatment options.
            </p>
          </div>
        </div>
      </section>
      <ConsultationForm />
    </div>
  );
};

export default InfertilityIssues;
