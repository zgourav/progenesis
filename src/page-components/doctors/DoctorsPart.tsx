import React from "react";

const DoctorsPart = () => {
  return (
    <section>
    <div className="section-spacing relative flex w-full h-[320px] bg-gradient-to-r from-green-100 via-white to-sky-200 px-6 md:px-12 lg:px-[90px] py-10 md:py-14">
      
      {/* Bottom-left paragraph */}
      <p className="absolute bottom-36 lg:bottom-0 lg:left-0  max-w-[500px] px-4 pb-4 text-[16px] text-center lg:text-start md:text-[18px] text-[#606060]">
        Connect with the specialists who combine world-class expertise with
        genuine care, and take your first step toward parenthood.
      </p>

      {/* Top-right heading */}
      <h2 className="absolute top-0 right-0 text-[#94BA3D] lg:text-[#1656A5] text-center lg:text-start lg:w-[640px] font-semibold text-[32px] lg:text-[46px] leading-[97%] tracking-[-0.02em] px-4 pt-4">
        Book your appointment with our experts today.
      </h2>
    </div>
    </section>
  );
};

export default DoctorsPart;
