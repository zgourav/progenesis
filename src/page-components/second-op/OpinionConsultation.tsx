'use client';

import React from 'react';

const OpinionConsultation: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-br from-orange-50 to-pink-50 relative overflow-hidden"  style={{padding:'8px'}}>
      {/* Background blur effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100/30 to-pink-100/30 backdrop-blur-sm"></div>
      
      <div className="section-spacing w-full relative z-10">
        {/* Centered container with two equal cards */}
        <div className="flex justify-center bg-[#FFFFFF] rounded-[20px]"  style={{padding:'16px'}} >
          <div className="w-full">
            {/* Mobile: Stacked layout, Desktop: Side by side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              
              {/* Form Card */}
              <div className="bg-[#FFFFFF]  rounded-[20px] p-6 lg:p-8 hover:shadow-xl transition-shadow duration-300"  style={{padding:'8px'}}>
                {/* Header */}
                <div className="mb-6 justify-between align-center text-center"  style={{padding:'8px'}}>
                  <span className="inline-block bg-[#1656A50D] text-[#1656A5] text-xs font-medium tracking-tight font-[Manrope] mb-4 rounded-full px-4 py-2" style={{padding:'8px'}}>
                    Schedule a Consultation
                  </span>
                  
                  <h2 className="text-2xl lg:text-3xl font-semibold text-black leading-tight tracking-tight font-[Manrope]">
                    Just focus on your fertility journey, We got the rest covered!
                  </h2>
                </div>

                {/* Form */}
                <div className="space-y-4"  style={{padding:'8px'}}>
                  {/* Row 1: First Name & Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{paddingBottom:'8px'}}>
                    <div >
                      <input
                         style={{padding:'4px'}}
                        type="text"
                        placeholder="First Name"
                        className="w-full px-4 py-3 border border-gray-200 rounded-[12px] text-sm font-[Manrope] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1656A5]/20 focus:border-[#1656A5] transition-colors"
                      />
                    </div>
                    <div>
                      <input
                         style={{padding:'4px'}}
                        type="text"
                        placeholder="Last Name"
                        className="w-full px-4 py-3 border border-gray-200 rounded-[12px] text-sm font-[Manrope] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1656A5]/20 focus:border-[#1656A5] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{paddingBottom:'8px'}}>
                    <div >
                      <input
                         style={{padding:'4px'}}
                        type="email"
                        placeholder="Email ID"
                        className="w-full px-4 py-3 border border-gray-200 rounded-[12px] text-sm font-[Manrope] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1656A5]/20 focus:border-[#1656A5] transition-colors"
                      />
                    </div>
                    <div >
                      <input
                         style={{padding:'4px'}}
                        type="tel"
                        placeholder="+91"
                        className="w-full px-4 py-3 border border-gray-200 rounded-[12px] text-sm font-[Manrope] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1656A5]/20 focus:border-[#1656A5] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 3: Preferred Date & Nearby Center */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{paddingBottom:'8px'}}>
                    <div className="relative ">
                      <input
                         style={{padding:'4px'}}
                        type="date"
                        className="w-full px-4 py-3 border border-gray-200 rounded-[12px] text-sm font-[Manrope] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1656A5]/20 focus:border-[#1656A5] transition-colors"
                      />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        
                      </div>
                    </div>
                    <div className="relative ">
                      <select  style={{padding:'4px'}} className="w-full px-4 py-3 border border-gray-200 rounded-[12px] text-sm font-[Manrope] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1656A5]/20 focus:border-[#1656A5] transition-colors appearance-none">
                        <option>Nearby Center</option>
                        <option>Center 1</option>
                        <option>Center 2</option>
                      </select>
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                        ▼
                      </div>
                    </div>
                  </div>
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-start gap-3 mt-6"  style={{padding:'8px'}}>
                  <input
                    type="checkbox"
                    id="consent"
                    className="mt-1 w-4 h-4 text-[#1656A5] border-gray-300 rounded focus:ring-[#1656A5]/20"
                  />
                  <label htmlFor="consent" className="text-xs text-gray-500 font-[Manrope] leading-relaxed">
                    Clicking means you agree to our Privacy Policy and T&C.
                  </label>
                </div>
                <div className='justify-center text-center' style={{paddingTop:'16px'}}>
                {/* CTA Button */}
                <button className="w-auto mt-6 bg-[#1656A5] text-white py-3 px-6 rounded-[12px] font-medium font-[Manrope] hover:bg-[#1656A5]/90 transition-colors duration-300"  style={{padding:'8px'}}>
                  Book Appointment
                </button>
                </div>
              </div>

              {/* Family Image Card */}
              <div className="bg-white rounded-[20px] p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
                {/* Geometric blue shapes overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1656A5] to-[#1656A5]/80 opacity-90">
                  {/* Abstract geometric shapes */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 transform rotate-45 translate-x-16 -translate-y-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/30 transform rotate-12 -translate-x-12 translate-y-12"></div>
                  <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/25 transform rotate-45"></div>
                </div>

                {/* Family Image Placeholder */}
                <div className="relative z-10 flex items-center justify-center h-full min-h-[400px] lg:min-h-[500px]">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">👨‍👩‍👶</div>
                    <p className="text-lg font-[Manrope] opacity-90">
                      Happy Family
                    </p>
                    <p className="text-sm font-[Manrope] opacity-75 mt-2">
                      Your fertility journey success story
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpinionConsultation;
