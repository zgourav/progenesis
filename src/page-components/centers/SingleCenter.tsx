'use client';

import React, { useMemo } from 'react';
import { centersData, type Center } from './CenterCard';
import { useRouter } from 'next/navigation';
import ResourceConsultation from '../resources/ResourceConsultation';
import FaQ from '../about/FaQ';
import CenterDoctorsSection from './SingleCenterDoctors';
import TestimonialsCenters from './TestimonialCenters';

export default function SingleCenter({ selectedId }: { selectedId?: number }) {
  const router = useRouter();
  
  const selectedCenter = useMemo(() => {
    return selectedId ? centersData.find((c) => c.id === selectedId) : undefined;
  }, [selectedId]);

  if (!selectedCenter) {
    return null;
  }

  return (
    <div>
      {/* Hero Banner Section */}
      <section 
        className="relative w-full h-[500px] bg-cover bg-center flex items-center"
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${selectedCenter.image})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-[90px] w-full">
          
          <h1 className="text-white text-4xl md:text-6xl font-[Manrope] font-semibold mb-4">
            Progenesis IVF,
          </h1>
          <h2 className="text-white text-3xl md:text-5xl font-[Manrope] mb-6">
            {selectedCenter.name}
          </h2>
        </div>
      </section>

      {/* Center Details Section */}
      <section className="section-spacing w-full bg-white px-6 md:px-12 lg:px-[90px] py-10 md:py-14">
        <div className="max-w-7xl mx-auto lg:flex lg:flex-row">
          <div className="w-full py-8 md:py-10">
            <p className="text-sm text-[#1656A5] mb-2">Our Centers</p>
            <h1 className="text-[#1656A5] text-3xl font-[Manrope] font-semibold mb-6">
              Progenesis IVF, {selectedCenter.name}
            </h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Left: Contact Information */}
              <div className="font-[Manrope] space-y-8">
                {/* Phone Section */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span className="text-base text-gray-600">Reach Out to us at</span>
                  </div>
                  <p className="text-2xl font-semibold text-[#1656A5] ml-12">{selectedCenter.phone}</p>
                </div>

                {/* Address Section */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span className="text-base text-gray-600">Visit the Center</span>
                  </div>
                  <div className="ml-12">
                    <p className="text-base text-[#1656A5] font-medium leading-relaxed">
                      {selectedCenter.address}
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    onClick={() => {
                      if (selectedCenter.coordinates) {
                        window.open(
                          `https://www.google.com/maps?q=${selectedCenter.coordinates.lat},${selectedCenter.coordinates.lng}`,
                          '_blank'
                        );
                      } else if (selectedCenter.address) {
                        window.open(
                          `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedCenter.address)}`,
                          '_blank'
                        );
                      }
                    }}
                    className="px-8 py-3 rounded-lg border border-[#1656A5] text-[#1656A5] bg-white text-sm font-medium hover:bg-gray-50 transition-colors"
                  >
                    Get Location
                  </button>
                  <button
                    onClick={() => router.push('/book-appointment')}
                    className="px-8 py-3 rounded-lg bg-[#1656A5] text-white text-sm font-medium hover:bg-[#1656A5]/90 transition-colors"
                  >
                    Book an Appointment
                  </button>
                </div>
              </div>

              {/* Right: Map */}
              
            </div>
          </div>
          <div className="w-full h-[400px] lg:h-[500px] overflow-hidden rounded-lg bg-gray-100 shadow-sm">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.391805115976!2d72.9734238!3d19.2319302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b00a1c5d4e59%3A0x63f8a6e5a0d5c9a8!2sProgenesis%20Fertility%20Center!5e0!3m2!1sen!2sin!4v1727488361842!5m2!1sen!2sin"
                ></iframe>
              </div>
        </div>
      </section>
      <div className='w-full h-[400px] md:h-[500px] lg:h-[600px]'>
          <img src="/images/CenterFixed.png" alt="fixed" className='h-[100%] w-full overflow-hidden' />
      </div>
      <CenterDoctorsSection />
      <TestimonialsCenters />
      <ResourceConsultation />
      <FaQ />
    </div>
  );
}