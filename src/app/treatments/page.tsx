"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ConsultationForm from "@/components/Consultation/ConsultationForm";
import GradientBanner from "@/components/GradientBanner";
import StoriesSectionNew from "@/components/Storiescard-with-new-layout";
import HeroSection from "@/components/HeroSection/herosection";
import { ArrowUpRight } from "lucide-react";



interface FeatureCardProps {
  title: string;
  description: string;
  href?: string;
  foregroundImage?: string; 
  overlayImage?: string;   
}

export function FeatureCard({ title, description, href }: FeatureCardProps) {
  const cardContent = (
    <div
      className="
        flex flex-col gap-3 rounded-[16px] p-6 bg-[#F9FAFB]
        transition-colors duration-300
        hover:bg-[#F1F7FC] cursor-pointer h-full
      "
    >
      <div className="flex flex-col items-start gap-3">
        <span className="flex h-8 w-16 items-center justify-center rounded-full bg-black text-white shrink-0">
          <ArrowUpRight className="w-4 h-4" />
        </span>
        <h4
          className="
            text-[#2C2C2C] font-[Manrope] opacity-70
            text-[16px] leading-[24px] tracking-[-0.32px] font-semibold
            md:text-[32px] md:leading-[40px] md:tracking-[-0.64px] md:font-normal
          "
        >
          {title}
        </h4>
      </div>
      <p
        className="
          text-[#606060] font-[Manrope] opacity-70
          text-[16px] leading-[24px] tracking-[-0.32px] font-normal
        "
      >
        {description}
      </p>
    </div>
  );

  return href ? <Link href={href}>{cardContent}</Link> : cardContent;
}


const TreatmentsPage: React.FC = () => {


  const categories = [
    { id: "path", label: "Your Path to Parenthood" },
    { id: "advanced", label: "Advanced Infertility Treatments" },
    { id: "infertility", label: "Infertility Treatments" },
    { id: "preservation", label: "Fertility Preservation" },
    { id: "evaluation", label: "Fertility Evaluation" },
    { id: "stories", label: "Real Stories. Real Miracles." },
  ];



  const [activeTab, setActiveTab] = useState<string>("male");



  const precisionMethods = [
    {
      title: "IMSI – High-Resolution Sperm Selection",
      description:
        "Uses advanced microscopy to identify the healthiest sperm for improved fertilization outcomes.",
        slug: "imsi",
    },
    {
      title: "PICSI – Physiological ICSI",
      description:
        "Selects mature sperm using hyaluronan binding, enhancing embryo quality.",
    },
    {
      title: "LAH – Laser Assisted Hatching",
      description:
        "Helps embryos implant by gently thinning the outer shell with laser precision.",
    },
    {
      title: "Blastocyst Transfer – Stronger Embryo Transfer",
      description:
        "Transfers embryos at the blastocyst stage (day 5), increasing chances of pregnancy.",
    },
    {
      title: "Sequential Embryo Transfer – Two-Stage Transfer",
      description:
        "Combines early and late-stage transfers for improved implantation.",
    },
    {
      title: "PGD/PGS/PGT-A – Genetic Screening",
      description:
        "Detects genetic abnormalities in embryos, ensuring healthy pregnancies.",
    },
  ];

  const advancedFacilities = [
    {
      title: "Class-1000 Modular Lab – Ultra-Clean Environment",
      description:
        "Maintains sterile lab conditions, ensuring safe and contamination-free procedures.",
    },
    {
      title: "Trigas Incubators – Natural Growth Support",
      description:
        "Mimics womb-like conditions with precise oxygen, carbon dioxide, and nitrogen balance.",
    },
    {
      title: "Witness System – Total Safety Assurance",
      description:
        "Uses RFID tracking to prevent errors in gamete and embryo handling.",
    },
    {
      title: "Cryopreservation – Secure Future Fertility",
      description:
        "Safely freezes and stores eggs, sperm, or embryos for future use.",
    },
  ];



  const treatments = [
    {
      title: "Ovulation Induction – Stimulating Egg Release",
      description:
        "Medications regulate or trigger ovulation, improving natural conception or preparing for assisted treatments.",
    },
    {
      title: "IUI – Assisted Intrauterine Insemination Treatment",
      description:
        "Prepared sperm is placed into the uterus during ovulation, boosting fertilization chances.",
    },
    {
      title: "IVF – Comprehensive In Vitro Fertilization Treatment",
      description:
        "Eggs and sperm are combined in a lab, and embryos are transferred to the uterus.",
    },
    {
      title: "IVF-ICSI – Intracytoplasmic Sperm Injection",
      description:
        "A single sperm is injected into the egg, helpful in male infertility or failed fertilization cases.",
    },
    {
      title: "Frozen Embryo Transfer – Preserved Embryo Implantation",
      description:
        "Frozen embryos are carefully thawed and transferred in a natural or medically prepared cycle.",
    },
    {
      title: "Fertility Surgery – Corrective Reproductive Surgery",
      description:
        "Surgery for fibroids, endometriosis, or blocked tubes helps restore fertility and reproductive health.",
    },
  ];


  const preservation = [
  {
    title: "Female Fertility Preservation",
    image: "/treatments/12.png", // replace with actual path
  },
  {
    title: "Male Fertility Preservation",
    image: "/treatments/13.png",
  },
  {
    title: "Embryo Preservation",
    image: "/treatments/14.png",
  },
];



const evaluations = [
  {
    title: "Female Analysis – Complete Reproductive Health Check",
    description:
      "A detailed evaluation of hormone levels, ovarian reserve, fallopian tubes, and uterine health. This testing helps identify fertility issues and guides a personalized treatment plan for better outcomes.",
    highlighted: true,
  },
  {
    title: "Male Analysis – Advanced Sperm Testing",
    description:
      "Tests sperm count, motility, shape, and quality using advanced methods. These results help diagnose male infertility and guide the best treatment options.",
    highlighted: false,
  },
];



  return (
    <div className="w-full flex flex-col">
      <HeroSection
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Treatments", href: "/treatments" },
        ]}
        title="Hope, Science & Parenthood Begin Here"
        buttonText="Book Your Appointment"
        buttonLink="/book-appointment"
        foregroundImage="/treatments/bg-overlay.png"
        overlayImage="/treatments/doctor-foreground.png"
      />


      {/* 2️⃣ Category Tabs */}
      <div className="flex flex-wrap gap-4 pt-[50px] px-[12px] md:px-[80px] xl:px-[120px] pb-[80px] bg-[#fff]">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActiveTab(cat.id)}
            className={`px-[10px] py-[10px] md:px-[20px] md:py-[16px] rounded-[8px] md:rounded-[16px] 
            font-[Manrope] text-[12px] md:text-[14px] font-medium leading-[24px] 
            tracking-[-0.28px] transition 
            ${activeTab === cat.id
                ? "bg-[#1656A5] text-white"
                : "border border-[#1656A5] text-[#1656A5] hover:bg-[#1656A5]/10"
              }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* 3️⃣ Personalized Treatments */}
      <section id="path" className="px-[12px] md:px-[120px] py-[80px]">
        {/* Label */}
        <div className="mb-4">


          <span className="inline-block text-[12px] font-medium text-[#1656A5] bg-[#1656A5]/5 px-3 py-1 rounded-full mb-4">
            Your Path to Parenthood
          </span>
        </div>

        {/* Main Heading */}
        <h2
          className="
          text-[#2C2C2C] font-[Manrope] 
          text-[32px] leading-[40px] tracking-[-0.64px] font-normal
          md:text-[48px] md:leading-[56px] md:tracking-normal
        "
        >
          Personalized Fertility Treatments for Every Journey
        </h2>

        {/* Divider */}
        <hr className="my-8 border-t border-[#E0E0E0]" />

        {/* Subheading + Description */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          {/* Subheading */}
          <h3
            className="
            text-[#2C2C2C] font-[Manrope] 
            text-[16px] leading-[24px] tracking-[-0.32px] font-normal
            md:text-[32px] md:leading-[40px] md:tracking-[-0.64px]
          "
          >
            Advanced Fertility Care
          </h3>

          {/* Paragraph */}
          <p
            className="
            text-[#606060] font-[Manrope] 
            text-[16px] leading-[24px] tracking-[-0.32px] font-normal
            max-w-3xl
          "
          >
            From initial evaluation to the most advanced fertility treatments, Progenesis walks beside you at every step.
            We combine medical excellence with compassionate guidance to provide holistic fertility solutions tailored to
            your unique health needs, personal lifestyle, and emotional journey. Whether you are just beginning to explore
            your options or seeking advanced interventions, we are here to turn hope into reality with care, clarity, and confidence.
          </p>
        </div>
      </section>

      {/* 4️⃣ Cutting Edge Techniques */}
      <section id="advanced" className="px-[12px] md:px-[120px] py-[80px]">

        <span className="inline-block text-[12px] font-medium text-[#1656A5] bg-[#1656A5]/5 px-3 py-1 rounded-full mb-4">
          Advanced Infertility Treatments
        </span>


        <h2
          className="
    text-[#2C2C2C] font-[Manrope] font-normal mb-[80px]
    text-[32px] leading-[40px] tracking-[-0.64px]   /* mobile */
    md:text-[48px] md:leading-[56px] md:tracking-[-0.96px] /* desktop */
  "
        >
          Cutting-Edge Techniques for Better Success
        </h2>


        {/* Block 1 */}
        <h3
          className="
          text-[#2C2C2C] font-[Manrope]
          text-[16px] leading-[24px] tracking-[-0.32px] font-normal
          md:text-[32px] md:leading-[40px] md:tracking-[-0.64px]
          mb-8
        "
        >
          Precision Methods for Better Outcomes
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-[80px]">
          {precisionMethods.map((item, idx) => (
            <FeatureCard key={idx} title={item.title} description={item.description}   href={`/treatments/${item.slug}`} />
          ))}
        </div>

        {/* Block 2 */}
        <h3
          className="
          text-[#2C2C2C] font-[Manrope]
          text-[16px] leading-[24px] tracking-[-0.32px] font-normal
          md:text-[32px] md:leading-[40px] md:tracking-[-0.64px]
          mb-8
        "
        >
          Advanced Facilities for Trusted Care
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {advancedFacilities.map((item, idx) => (
            <FeatureCard key={idx} title={item.title} description={item.description} />
          ))}
        </div>
      </section>

      {/* <section className="w-full bg-[#FAFAFA] px-6 md:px-12 lg:px-24 py-20 relative overflow-hidden">
     
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-[#2C2C2C] font-manrope font-normal text-2xl md:text-4xl lg:text-[48px] leading-[40px] md:leading-[56px] tracking-[-0.64px] md:tracking-[-0.96px]">
            Learn the numbers, Take control of your fertility journey
          </h2>
        </div>


        <div className="relative flex justify-center items-center w-full h-[1150px] md:h-[1000px]">
         
          <div className="absolute translate-x-[160px] -translate-y-[40px] w-[380px] md:w-[596px] h-[380px] md:h-[596px] rounded-full bg-[#C3DCFB] flex items-center justify-center text-center z-10">
            <p className="text-[#2C2C2C] font-manrope font-medium text-[32px] md:text-[64px]">
              60–70%
            </p>

           
            <div className="absolute top-1/2 left-full ml-6 flex items-center hidden md:flex">
              <hr className="w-[220px] border-t border-dotted border-[#7A7A7A]" />
              <p className="ml-4 text-[#606060] font-manrope text-[16px] leading-[24px] tracking-[-0.32px] w-64">
                Switching to IVF or ICSI can raise success rates to 60–70% per cycle in suitable cases.
              </p>
            </div>
          </div>


          <div className="absolute -translate-x-[260px] translate-y-[80px] w-[280px] md:w-[386px] h-[280px] md:h-[386px] rounded-full bg-[#E5F1FF] flex items-center justify-center text-center z-20">
            <p className="text-[#2C2C2C] font-manrope font-medium text-[32px] md:text-[64px]">
              5–10%
            </p>


            <div className="absolute top-1/2 right-full mr-6 flex items-center hidden md:flex">
              <hr className="w-[220px] border-t border-dotted border-[#7A7A7A]" />
              <p className="mr-4 text-[#606060] text-right font-manrope text-[16px] leading-[24px] tracking-[-0.32px] w-64">
                The success rate of a single IUI cycle is only 5–10%, meaning multiple attempts are often needed.
              </p>
            </div>
          </div>

          <div className="absolute translate-x-[60px] translate-y-[300px] w-[300px] md:w-[432px] h-[300px] md:h-[432px] rounded-full bg-[#E4F8B6] flex items-center justify-center text-center z-30">
            <p className="text-[#2C2C2C] font-manrope font-medium text-[32px] md:text-[64px]">
              3–4 <br /> Cycles
            </p>


            <div className="absolute top-full mt-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center hidden md:flex">
              <hr className="w-[220px] border-t border-dotted border-[#7A7A7A]" />
              <p className="mt-2 text-[#606060] text-center font-manrope text-[16px] leading-[24px] tracking-[-0.32px] w-80">
                If you’ve had 3–4 failed IUI cycles, it’s time to consult your doctor about advanced options.
              </p>
            </div>
          </div>
        </div>
      </section> */}


      {/* 5️⃣ Success Rate */}
      <section className="relative w-full flex justify-center items-center overflow-hidden  px-6 md:px-12 lg:px-[120px] py-20">
        {/* Left Green Blur Ellipse */}
        <div
          className="absolute left-[-100px] bottom-[-50px] rounded-full bg-[#94BA3D] blur-[250px]"
          style={{
            width: "348px",
            height: "280px",
            transform: "rotate(-2deg)",
          }}
        ></div>

        {/* Right Blue Blur Ellipse */}
        <div
          className="absolute right-[-200px] top-[-150px] rounded-full bg-[#1656A5] blur-[250px]"
          style={{
            width: "222px",
            height: "203px",
            transform: "rotate(-2deg)",
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between w-full">
          {/* Percentage */}
          <h2 className="text-[#94BA3D] font-manrope text-[80px] md:text-[120px] font-normal leading-none tracking-[-2.4px] mb-6 md:mb-0">
            95%
          </h2>

          {/* Heading Text */}
          <p className="text-[#94BA3D] font-manrope text-[32px] md:text-[48px] font-normal leading-[40px] md:leading-[56px] tracking-[-0.64px] md:tracking-[-0.96px] text-left md:text-right max-w-3xl">
            Success Rate in Personalized Fertility Care, Delivering Unmatched
            Results
          </p>
        </div>
      </section>

      {/* 6️⃣ Proven Treatments */}
      <section className="w-full bg-[#F5FAFF] px-6 md:px-12 lg:px-24 py-20">
        {/* Tag */}

        <span className="inline-block text-[12px] font-medium text-[#1656A5] bg-[#1656A5]/5 px-3 py-1 rounded-full mb-4">
          Infertility Treatments
        </span>


        {/* Heading */}
        <h2 className="text-[#2C2C2C] font-manrope font-normal text-[32px] leading-[40px] tracking-[-0.64px] md:text-[48px] md:leading-[56px] md:tracking-normal mb-12">
          Where Trusted Treatments Lead to Proven Results
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((item, idx) => (
            <div
              key={idx}
              className=" rounded-xl border border-[#E6E6E6] p-6 flex flex-col gap-3 hover:shadow-lg transition bg-[#EEF5FF] hover:bg-[#DDEBFF]"
            >
             <span
  className="
    flex items-center justify-center 
    bg-[#2C2C2C] text-white 
    rounded-full 
    w-16 h-8
  "
>
  <ArrowUpRight className="w-4 h-4" />
</span>


              {/* Title */}
              <h3 className="text-[#2C2C2C] font-manrope text-[16px] font-semibold leading-[24px] tracking-[-0.32px] md:text-[32px] md:font-normal md:leading-[40px] md:tracking-[-0.64px]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[#606060] font-manrope text-[16px] font-normal leading-[24px] tracking-[-0.32px] opacity-70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>


      {/* 7️⃣ Future Parenthood */}
      <section className="w-full bg-[#FAFAFA] px-6 md:px-12 lg:px-24 py-20">


        {/* Tag */}

        <span className="inline-block text-[12px] font-medium text-[#1656A5] bg-[#1656A5]/5 px-3 py-1 rounded-full mb-4">
          Fertility Preservation
        </span>


        {/* Heading */}
        <h2 className="text-[#2C2C2C] font-manrope font-normal text-[32px] leading-[40px] tracking-[-0.64px] md:text-[48px] md:leading-[56px] md:tracking-normal mb-12">
          Future Parenthood Made Possible
        </h2>


{/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {preservation.map((item, idx) => (
          <div
            key={idx}
            className="
              flex flex-col items-center justify-center text-center
              rounded-[16px]
              h-[370px] md:h-[444px]
              bg-[#EEF1F5] md:bg-[rgba(22,86,165,0.12)]
              hover:bg-[#DDEBFF] transition
              p-6
            "
          >
            {/* Image */}
            <Image
              src={item.image}
              alt={item.title}
              width={238} // desktop size
              height={240}
              className="w-[180px] h-[180px] md:w-[238px] md:h-[240px] object-contain"
              style={{ mixBlendMode: "multiply" }}
              priority={false} // optional: use priority for above-the-fold images
            />


        

            {/* Title */}
            <h3 className="mt-6 text-[#2C2C2C] font-manrope text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-normal tracking-[-0.64px]">
              {item.title}
            </h3>
          </div>
        ))}
        </div>
   
    </section>


      {/* 8️⃣ Diagnostic Section */}
      <section className="w-full bg-[#F5FAFF] px-6 md:px-12 lg:px-24 py-20">
      {/* Tag */}
      <span className="inline-block text-[12px] font-medium text-[#1656A5] bg-[#1656A5]/5 px-3 py-1 rounded-full mb-4">
        Fertility Evaluation
      </span>

      {/* Heading */}
      <h2 className="text-[#2C2C2C] font-manrope font-normal text-[32px] leading-[40px] tracking-[-0.64px] md:text-[48px] md:leading-[56px] md:tracking-normal mb-12">
        Know, Understand & Take Action
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {evaluations.map((item, idx) => (
          <div
            key={idx}
            className={`
              flex flex-col gap-3 rounded-[16px] p-6
              ${item.highlighted ? "bg-[#EEF5FF]" : "bg-[#EEF5FF] border border-[#E6E6E6]"}
              hover:bg-[#DDEBFF] transition
            `}
          >
            {/* Icon */}
            <span className="flex items-center justify-center w-8 h-8 rounded-[16px] bg-[#2C2C2C] text-white shrink-0">
              <ArrowUpRight className="w-4 h-4" />
            </span>

            {/* Title */}
            <h3 className="text-[#2C2C2C] font-manrope text-[16px] font-semibold leading-[24px] tracking-[-0.32px] md:text-[32px] md:font-normal md:leading-[40px] md:tracking-[-0.64px]">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-[#606060] font-manrope text-[16px] font-normal leading-[24px] tracking-[-0.32px] opacity-70">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>


      <StoriesSectionNew/>

      <ConsultationForm />
      <GradientBanner text="Your dream of parenthood deserves the best. Our specialists offer advanced fertility treatments for higher success." />

      {/* </div> */}

    </div>
  );
};

export default TreatmentsPage;

