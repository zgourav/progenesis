"use client";
import React from "react";
import Link from "next/link";

const TreatmentsPage: React.FC = () => {
  return (
    <div className="w-full flex flex-col">
      {/* 1️⃣ Hero Section */}
      <section
        className="relative w-full h-[500px] md:h-[600px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-treatment.jpg')" }} // ✅ Put your hero image in /public
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/80 to-transparent"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 max-w-2xl leading-snug">
            Hope, Science & Parenthood Begin Here
          </h1>
          <button className="mt-6 px-6 py-3 bg-black text-white rounded-lg text-base md:text-lg font-medium hover:bg-gray-800 transition">
            Book Appointment
          </button>
        </div>
      </section>

      {/* 2️⃣ Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 px-6 py-8 md:py-12">
        {[
          "Male Fertility Care",
          "Assisted Reproduction",
          "Fertility Preservation",
          "IVF Procedure",
          "ICSI Procedure",
          "Surgical Fertility Care",
        ].map((cat, i) => (
          <button
            key={i}
            className="px-5 py-2 bg-gray-100 rounded-full text-gray-700 hover:bg-blue-600 hover:text-white transition text-sm md:text-base"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 3️⃣ Personalized Treatments */}
      <section className="px-6 md:px-24 py-12 md:py-20 bg-white text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
          Personalized Fertility Treatments for Every Journey
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Advanced fertility care tailored to your needs. From diagnostics to
          advanced reproductive technology, our team ensures world-class
          treatment backed by compassion and innovation.
        </p>
      </section>

      {/* 4️⃣ Cutting Edge Techniques */}
      <section className="px-6 md:px-24 py-12 md:py-20 bg-gray-50">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
          Cutting-Edge Techniques for Better Success
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-center mb-10">
          Precision methods for better outcomes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "IMSI – High-Resolution Sperm Selection",
            "PICSI – Physiological ICSI",
            "LAH – Laser Assisted Hatching",
            "Blastocyst Transfer – Stronger Embryo Transfer",
            "Sequential Embryo Transfer – Two-Stage Implantation",
            "ROPA/Shared Conception – Careful Screening",
            "Class-1000 Modular Lab – Ultra-Clean Environment",
            "Incubator Regulators – Natural Growth Support",
            "Witness System – Total Safety Assurance",
            "Cryopreservation – Secure Future Fertility",
          ].map((tech, i) => (
            <div
              key={i}
              className="bg-white shadow-sm rounded-xl p-5 hover:shadow-md transition"
            >
              <h3 className="text-gray-800 font-medium">{tech}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* 5️⃣ Success Rate */}
      <section className="py-16 text-center bg-gradient-to-r from-green-50 to-blue-50">
        <h2 className="text-3xl md:text-5xl font-bold text-green-700">
          95% Success Rate in Personalized Fertility Care,
          <br /> Delivering Unmatched Results
        </h2>
      </section>

      {/* 6️⃣ Proven Treatments */}
      <section className="px-6 md:px-24 py-12 md:py-20 bg-white">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
          Where Trusted Treatments Lead to Proven Results
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            "Ovulation Induction – Stimulating Egg Production",
            "IUI – Assisted Intrauterine Insemination Treatment",
            "IVF – Comprehensive In-Vitro Fertilization Treatment",
            "IVF-ICSI – Intracytoplasmic Sperm Injection",
            "Frozen Embryo Transfer – Preserved Embryo Implantation",
            "Fertility Surgery – Corrective Reproductive Surgery",
          ].map((treatment, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <p className="text-gray-800">{treatment}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7️⃣ Future Parenthood */}
      <section className="px-6 md:px-24 py-12 md:py-20 bg-gray-50">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
          Future Parenthood Made Possible
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { title: "Female Fertility Preservation", img: "/egg-preservation.png" },
            { title: "Male Fertility Preservation", img: "/sperm-preservation.png" },
            { title: "Embryo Preservation", img: "/embryo-preservation.png" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-white p-6 rounded-lg shadow-sm"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-24 h-24 object-contain mb-4"
              />
              <p className="text-gray-800 font-medium">{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8️⃣ Diagnostic Section */}
      <section className="px-6 md:px-24 py-12 md:py-20 bg-white">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
          Know, Understand & Take Action
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
            <p className="text-gray-800">
              Female Analysis – Complete Reproductive Health Check
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
            <p className="text-gray-800">
              Male Analysis – Advanced Sperm Testing
            </p>
          </div>
        </div>
      </section>

      {/* 9️⃣ Stories Section */}
      <section className="px-6 md:px-24 py-12 md:py-20 bg-gray-50">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
          Inspiring Stories of Strength & Victories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["verma.jpg", "couple1.jpg", "couple2.jpg"].map((story, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={`/${story}`}
                alt="Story"
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <p className="text-gray-700">
                  Our IVF Journey with Progenesis | Love Finds a Way
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🔟 CTA Form Section */}
      <section
        className="relative w-full flex justify-center items-center px-6 md:px-[120px] py-[60px] bg-cover bg-center"
        style={{ backgroundImage: "url('/form-bg.jpg')" }}
      >
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 flex flex-col md:flex-row gap-10 items-center max-w-[1000px] w-full">
          <div className="flex-1 flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Just focus on your fertility journey, We got the rest covered!
            </h2>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border rounded-md p-3"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border rounded-md p-3"
              />
              <input
                type="email"
                placeholder="Email ID"
                className="border rounded-md p-3 col-span-2"
              />
              <input type="text" placeholder="+91" className="border rounded-md p-3" />
              <input type="date" className="border rounded-md p-3" />
              <select className="border rounded-md p-3 col-span-2">
                <option>Nearby Center</option>
                <option>Center 1</option>
                <option>Center 2</option>
              </select>
              <label className="flex items-center gap-2 text-sm col-span-2">
                <input type="checkbox" /> I agree to Privacy Policy & T&C
              </label>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition col-span-2">
                Book Appointment
              </button>
            </form>
          </div>
          <div className="flex-1">
            <img
              src="/consultation.jpg"
              alt="Consultation"
              className="rounded-2xl object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* 11️⃣ Closing Banner */}
      <section className="py-16 text-center bg-gradient-to-r from-green-50 to-blue-50">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
          Every journey to parenthood is unique — with the right care, hope
          finds its way.
        </h2>
      </section>
    </div>
  );
};

export default TreatmentsPage;

