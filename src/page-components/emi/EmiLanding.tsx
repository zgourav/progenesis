import React from "react";
import '../about/AboutMain.css'

const EmiLanding = () => {
  return (
    <section className="relative w-full h-[60%]">
      {/* Background images: mobile and desktop */}
      <div
        className="absolute inset-0 md:hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/images/emiBgM.png')" }}
        aria-hidden
      />
      <div
        className="absolute inset-0 hidden md:block bg-cover bg-center"
        style={{ backgroundImage: "url('/images/emiBgD.png')" }}
        aria-hidden
      />
      

      <div className='relative grid grid-cols-12 gap-4 min-h-[300px] md:min-h-[420px] lg:min-h-[500px]'>
        {/* Left: Content block */}
        <div className='col-span-12 csLg:col-span-8 section-spacing'>
          <div className='flex flex-col'>
            {/* Breadcrumb-like line */}
            <div>
              <h2 className='font-manrope csLg:text-[18px] font-semibold text-[12px] leading-[26px] tracking-[-0.02em]'>
                Home <span className="text-[#1656A5]"> EMI Options </span>
              </h2>
            </div>

            {/* Title */}
            <div>
              <h1 className='font-manrope font-semibold csLg:text-[80px] text-[32px] csLg:leading-[88px] leading-[48px] tracking-[-0.02em]'>
                EMI Options
              </h1>
            </div>

            {/* CTA */}
            <div className='pt-[44px]' style={{paddingTop:'44px'}}>
              <span className='bg-[#252525] csLg:text-[14px] text-[12px] p-8 text-[#F9F9F9]' style={{padding:"16px",borderRadius:"12px"}}>
                Book Your Appointment
              </span>
            </div>
          </div>
        </div>

        {/* Right column removed; background image now covers entire section */}
      </div>
    </section>
  );
};

export default EmiLanding;
