"use client";
import React, { useRef, useEffect, useState } from "react";

const ScratchImage = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [scratchCount, setScratchCount] = useState(0);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    ctx.fillStyle = "#1656A5";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const scratch = (e: any) => {
      if (revealed) return;

      const rect = canvas.getBoundingClientRect();
      const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
      const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;

      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(x, y, 30, 0, Math.PI * 2);
      ctx.fill();

      setScratchCount((prev) => {
        const newCount = prev + 1;
        if (newCount >= 2) {
          setRevealed(true);
        }
        return newCount;
      });
    };

    canvas.addEventListener("mousemove", scratch);
    canvas.addEventListener("touchmove", scratch);

    return () => {
      canvas.removeEventListener("mousemove", scratch);
      canvas.removeEventListener("touchmove", scratch);
    };
  }, [revealed]);

  useEffect(() => {
    if (revealed && canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      }
    }
  }, [revealed]);

  return (
    <div className="w-full h-full relative rounded-2xl overflow-hidden">
      <img
        src="/ConsultationForm/contact.png" // ✅ served from /public
        alt="Consultation"
        className="w-full h-full object-cover"
      />
      {!revealed && (
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      )}
    </div>
  );
};

const ConsultationForm = () => {
  return (
    <section className="relative pt-[42px] md:pt-[84px] mx-0 px-4 md:px-[80px] lg:px-[120px] pb-[60px] flex justify-center bg-gray-50">
      <div className="absolute inset-0 -z-10">
        <img
          src="/ConsultationForm/contact.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col md:flex-row w-full max-w-6xl gap-10">
        {/* Left Form */}
        <div className="flex-1 text-center">
          <span className="inline-block text-sm font-medium text-blue-700 bg-blue-100 px-3 py-1 rounded-full mb-6">
            Schedule a Consultation
          </span>

          <h2 className="mt-4 text-[#2C2C2C] font-[Manrope] text-[32px] font-normal leading-[40px] tracking-[-0.64px] text-center">
            Just focus on your fertility journey, <br /> We got the rest
            covered!
          </h2>

          <form className="mt-8 space-y-6">
            {/* Row 1 */}
            <div className="grid grid-flow-row md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Row 2 */}
            <div className="grid grid-flow-row md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email ID"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                placeholder="+91"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Row 3 */}
            <div className="grid grid-flow-row md:grid-cols-2 gap-4">
              <input
                type="date"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
              />
              <select className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500">
                <option>Nearby Center</option>
                <option>Mumbai</option>
                <option>Pune</option>
                <option>Nashik</option>
              </select>
            </div>

            {/* Checkbox */}
            <div className="flex items-center justify-center space-x-2">
              <input type="checkbox" id="privacy" className="h-4 w-4" />
              <label htmlFor="privacy" className="text-sm text-gray-600">
                Clicking means you agree to our{" "}
                <a href="#" className="text-blue-600 underline">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-600 underline">
                  T&C.
                </a>
              </label>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="px-6 py-3 rounded-[16px] bg-[#1656A5] text-[#F9F9F9] 
                 font-[Manrope] text-[14px] font-medium leading-[24px] 
                 tracking-[-0.28px] backdrop-blur-[7.5px] transition 
                 hover:bg-[#134a91] block mx-auto"
            >
              Book Appointment
            </button>
          </form>
        </div>

        {/* Right Image with Scratch Effect */}
        <div className="flex-1 relative">
          <ScratchImage />
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;
