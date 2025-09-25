import React from "react";

const JoinUs: React.FC = () => {
  return (
    <div className="section-spacing flex flex-col csLg:flex-row items-center bg-gradient-to-r from-[#f6fbf5] via-[#f6fbf5] to-[#e3eef7] py-10 px-4 gap-6" style={{paddingBottom:'1px'}}>
      {/* Left: Doctor Image (mobile: comes second) */}
      <div className="order-2 csLg:order-1 flex-shrink-0 w-full csLg:w-[350px] flex justify-center csLg:justify-end">
        <img
          src="/images/doctor.png"
          alt="Doctor"

          className="h-[260px] csLg:h-[340px] object-cover rounded-[12px] ]"

        />
      </div>

      {/* Right: Text and Button (mobile: text first, button last) */}
      <div className="order-1 csLg:order-2 flex-1 csLg:pl-10 max-w-[650px] w-full flex flex-col">

        <div className="text-center text-[32px] csLg:text-[2rem] text-[#8dc63f] font-normal leading-[1.2] mb-4 csLg:mb-8">
          We’re looking for passionate people to help create life’s most precious journeys.
        </div>
        <div className="order-3 mt-2 csLg:order-2 justify-center text-center">
        <div className="text-center csLg:text-[48px] text-[32px] csLg:text-base justify-center text-[#8dc63f] font-normal leading-[1.2] mb-4 csLg:mb-8" style={{paddingBottom:'10px'}}>
          We’re looking for passionate people to help create life’s most precious journeys.
        </div>
        <div className="order-3 mt-2 csLg:order-2 text-center">
          <button className="w-[96px] h-[40px] csLg:w-[150px] csLg:h-[48px] px-8 py-2.5 border border-[#1656A5] rounded-[16px] bg-white text-[#1656A5] text-[12px] csLg:text-[14px] cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-colors duration-200 hover:bg-[#f4f4f4]">
 
              Join Our Team
          </button>
        </div>

      </div>
    </div>
    </div>
  );
};

export default JoinUs;
