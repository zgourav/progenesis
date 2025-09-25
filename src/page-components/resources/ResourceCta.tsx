import React from "react";

const ResourceCta: React.FC = () => {
  return (
    <div className="section-spacing flex flex-col csLg:flex-row items-center bg-gradient-to-r from-[#f6fbf5] via-[#f6fbf5] to-[#e3eef7] py-10 px-4 gap-6 pb-[1px]">
      {/* Left: Doctor Image (mobile: comes second) */}
      <div className="order-2 csLg:order-1 flex-shrink-0 w-full csLg:w-[350px] flex justify-center csLg:justify-end">
      </div>

      {/* Right: Text and Button (mobile: text first, button last) */}
      <div className="order-1 csLg:order-2 flex-1 csLg:pl-10 max-w-[650px] w-full flex flex-col justify-center">

        <div className="text-center text-[32px] csLg:text-[2rem] text-[#8dc63f] font-normal leading-[1.2] mb-4 csLg:mb-8">
          Discover answers, find inspiration, and take the next step in your journey with confidence.
        </div>
    </div>
    </div>
  );
};

export default ResourceCta;
