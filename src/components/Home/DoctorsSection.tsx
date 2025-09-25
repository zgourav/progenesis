// DoctorsSection.jsx
import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const doctors = [
  {
    name: "Dr. Narhari S. Malgaonkar",
    image: "/DoctorsSection/doctorimage.png",
    description:
      "Dr. Narhari S. Malgaonkar is the dedicated and exclusive chief fertility consultant.",
    experience: [
      "15+ Years of Experience",
      "MD, DNB, DGO, FCPS, DFP (Mumbai)",
      "Fellowship in Reproductive Medicine (Singapore)",
    ],
    location: "Mumbai",
    role: "Chief Fertility Consultant",
  },
  {
    name: "Dr. Jane Doe",
    image: "/DoctorsSection/doctorimage.png",
    description:
      "Dr. Jane Doe specializes in advanced fertility treatments with global expertise.",
    experience: [
      "12+ Years of Experience",
      "MD, OBGYN, Harvard Medical School",
      "Certified Embryologist",
    ],
    location: "Pune",
    role: "Fertility Consultant",
  },
  {
    name: "Dr. John Smith",
    image: "/DoctorsSection/doctorimage.png",
    description:
      "Dr. John Smith is passionate about helping families achieve their dreams.",
    experience: [
      "18+ Years of Experience",
      "MS, Obstetrics & Gynecology",
      "Fellowship in IVF & ART",
    ],
    location: "Nashik",
    role: "Senior Fertility Specialist",
  },
];



const Letter = ({ char, index, total, scrollYProgress }) => {
  const start = index / total;
  const end = (index + 1) / total;

  const color = useTransform(
    scrollYProgress,
    [start, end],
    ["rgba(44,44,44,0.25)", "#2C2C2C"]
  );

  return (
    <motion.span
      style={{ color }}
      className="text-sm md:text-[32px] md:leading-[40px] leading-8 tracking-[-0.32px] md:tracking-[-0.64px] font-[Manrope] font-normal"
    >
      {char}
    </motion.span>
  );
};


const DoctorsSection = () => {

  const ref = useRef(null);

  // Track scroll relative to this block
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Animate vertical background position
  const backgroundPosition = useTransform(
    scrollYProgress,
    [0, 1],
    ["0% 100%", "0% 0%"] // from bottom → top
  );

  const text =
    "Our team of internationally trained fertility specialists, embryologists, and counselors are here to support you medically and emotionally. Our team of internationally trained fertility specialists, embryologists.";

  
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevDoctor = () => {
    setCurrentIndex((prev) => (prev === 0 ? doctors.length - 1 : prev - 1));
  };

  const nextDoctor = () => {
    setCurrentIndex((prev) => (prev === doctors.length - 1 ? 0 : prev + 1));
  };

  const doctor = doctors[currentIndex];

  return (
    <section className="py-20 bg-[#F9FAFB] px-4 md:px-[80px] lg:px-[120px] ">
      <div>
        {/* Heading */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-[12px] mb:gap-[144px] mb-[144px] md:mb-[144px]" ref={ref}>
          {/* Left */}
          <div className="max-w-[560px]">
            <span className="inline-block text-sm font-medium text-blue-700 bg-blue-100 px-3 py-1 rounded-full mb-6">
              The Experts
            </span>
            <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-6">
              Meet the Experts <br /> Behind the Magic
            </h2>
            <button className="px-[12px] md:px-12 py-[12px] md:py-3 md:rounded-[16px] rounded-[8px] text-[12px] md:text-sm font-medium  border border-blue-600 text-blue-600  hover:bg-blue-600 hover:text-white transition">
              View all Doctors
            </button>
          </div>

          {/* Right */}
          <div className="max-w-3xl">
             {text.split("").map((char, i) => (
              <Letter
                key={i}
                char={char}
                index={i}
                total={text.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
        {/* Doctor Card */}
        <div className="relative flex items-center  ">
          {/* Left Arrow */}
          <button
            onClick={prevDoctor}
            className="absolute l-14  w-12 h-12  hidden md:flex items-center justify-center rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            ←
          </button>

          {/* Card */}
          {/* <div className="bg-white rounded-2xl shadow-md flex overflow-hidden border border-gray-200 mx-auto"> */}
          <div className=" bg-white rounded-2xl flex flex-col  md:flex-row w-[250px] md:w-auto overflow-hidden p-2 md:p-10 border-gray-200 mx-[12px]  md:mx-[120px] relative">
            {/* Left Image */}

            <p className="absolute -top-6 right-6 text-[#606060] font-[Manrope] text-[16px] font-semibold leading-[24px] tracking-[-0.32px] ">
              {String(currentIndex + 1).padStart(2, "0")} of{" "}
              {String(doctors.length).padStart(2, "0")}
            </p>
            <div className="inline-flex h-[200px] md:h-[444px] w-auto md:w-[340px] justify-center items-center flex-shrink-0 rounded-xl bg-[#27C3EB] overflow-hidden">
              <img
                src="/DoctorsSection/doctorimage.png"
                alt={doctor.name}
                className="h-full w-full object-cover rounded-xl"
              />
            </div>

            {/* Middle Section */}
            <div className="flex flex-col justify-start pl-1 pr-1 md:pl-10 md:pr-10 flex-1">
              {/* Heading */}
              <h3 className="text-[#1656A5] font-[Manrope] text-[32px] md:text-[48px] font-normal leading-[42px] md:leading-[56px] tracking-[-0.96px]">
                {doctor.name}
              </h3>

              {/* Description */}
              <p className="mt-4 text-[#606060] font-[Manrope] text-[16px] leading-[18px] md:leading-[24px] tracking-[-0.32px]">
                {doctor.description}
              </p>

              {/* Experience Boxes */}
              <div className="mt-[24px] md:mt-[108px] flex flex-wrap gap-4">
                {doctor.experience.map((exp, idx) => (
                  <span
                    key={idx}
                    className="flex px-3 py-2 justify-center items-center rounded-xl bg-[rgba(22,86,165,0.05)] text-[#1656A5] font-[Manrope] text-[14px] font-normal leading-[24px] tracking-[-0.28px] backdrop-blur-[25px]"
                  >
                    {exp}
                  </span>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="w-auto h-[1px] md:w-[1px] md:h-[450px] mx-1 my-1 md:mx-0 md:my-0 opacity-25 bg-black"></div>

            {/* Right Section */}
            <div className="flex flex-col justify-end pl-1 md:pl-10">
              <h4 className="text-[#2C2C2C] font-[Manrope] text-[48px] font-normal leading-[56px] tracking-[-0.96px]">
                {doctor.location}
              </h4>
              <p className="text-[#2C2C2C] font-[Manrope] text-[16px] font-normal leading-[24px] tracking-[-0.32px]">
                {doctor.role}
              </p>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextDoctor}
            className="hidden md:flex absolute right-0 w-12 h-12 items-center justify-center rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            →
          </button>

        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
