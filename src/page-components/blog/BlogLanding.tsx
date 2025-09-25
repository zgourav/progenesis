import React from "react";

const BlogLanding = () => {
  return (
    <div className="section-spacing w-full px-6 md:px-8 lg:px-16 py-12 text-center bg-white">
      {/* Latest Blog Badge */}
      <div className="mb-8" style={{marginBottom:'12px'}}>
        <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-[8px]" style={{padding:'8px'}}>
          Latest Blog
        </span>
      </div>

      {/* Main Title */}
      <h1 className="text-[32px] md:text-5xl font-bold text-[#2C2C2C] mb-8 leading-tight" style={{paddingBottom:'16px'}}>
        Our Complete Guide to Parenthood <br/> Inspiring & Supportive Story to Guide You.
      </h1>

      {/* Description */}
      <p className="font-manrope font-normal text-[12.86px] leading-[19.29px] tracking-[-0.02em] text-center text-[#606060] mb-8 md:text-[32px] md:leading-[40px]"
         style={{ paddingBottom: '16px' }} >
         See our expert insight to inspire, guide, and support you through every step of your unique parenthood journey with confidence. 
      </p>



      {/* Main Image */}
      <div className="mb-8" style={{paddingTop:'16px', marginTop:'16px', paddingBottom:'16px'}}>
        <div className="relative w-full h-full bg-gray-100 rounded-lg overflow-hidden">
          <img 
            src="/images/Bbanner.png" 
            alt="Baby's hand holding adult's finger - tender moment of connection"
            className="w-full h-[407px] csLg:h-[900px] object-cover"
          />
        </div>
      </div>

      {/* Metadata Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8" style={{paddingTop:'32px'}}>
        {/* Date */}
        <div className="text-center">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Date
          </h3>
          <p className="text-gray-900 font-medium">
            Updated on 13 August 2025
          </p>
        </div>

        {/* Author */}
        <div className="text-center">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Author
          </h3>
          <p className="text-gray-900 font-medium">
            Dr. Priya Deshmukh, Senior Fertility Specialist at Progenesis IVF
          </p>
        </div>

        {/* Read Time */}
        <div className="text-center">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Read
          </h3>
          <p className="text-gray-900 font-medium">
            10 mins
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogLanding;
