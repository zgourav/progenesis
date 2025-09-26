'use client';

import React, { useMemo } from 'react';
import { centersData, type Center } from './CenterCard';
import { useRouter } from 'next/navigation';
import ResourceConsultation from '../resources/ResourceConsultation';
import FaQ from '../about/FaQ';
import TestimonialsSection from '@/components/Home/TestimonialsSection';
import CenterDoctorsSection from './SingleCenterDoctors';

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
        <div className="max-w-7xl mx-auto">
          <div className="w-full py-8 md:py-10">
            <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-8 items-start">
            {/* Left: Image */}
            <div className="w-full h-[280px] md:h-[320px] overflow-hidden rounded-[16px] bg-gray-100">
              <img 
                src={selectedCenter.image} 
                alt={selectedCenter.name} 
                className="w-full h-full object-cover" 
              />
            </div>

            {/* Right: Content */}
            <div className="font-[Manrope]">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <h3 className="text-[26px] md:text-[32px] text-[#1656A5] font-semibold tracking-[-0.02em]">
                  {selectedCenter.name}
                </h3>
                <div className="text-[#2C2C2C] font-medium mt-2 md:mt-0">
                  {selectedCenter.city}, {selectedCenter.state}
                </div>
              </div>

              {/* Contact Information Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {/* Visit the Center Card */}
                <div className="bg-gray-50 p-6 rounded-2xl">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-xl">
                      <svg className="w-6 h-6 text-[#1656A5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#2C2C2C] mb-2">Visit the Center</h3>
                      <p className="text-sm text-gray-600">{selectedCenter.address}</p>
                      <button 
                        onClick={() => {
                          if (selectedCenter.coordinates) {
                            window.open(
                              `https://www.google.com/maps?q=${selectedCenter.coordinates.lat},${selectedCenter.coordinates.lng}`,
                              '_blank'
                            );
                          }
                        }}
                        className="mt-4 text-[#1656A5] text-sm font-medium hover:text-[#1656A5]/80"
                      >
                        Get Directions →
                      </button>
                    </div>
                  </div>
                </div>

                {/* Contact Info Card */}
                <div className="bg-gray-50 p-6 rounded-2xl">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-xl">
                      <svg className="w-6 h-6 text-[#1656A5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#2C2C2C] mb-2">Contact Info</h3>
                      <p className="text-sm text-gray-600">{selectedCenter.phone}</p>
                      <p className="text-sm text-gray-600">{selectedCenter.email}</p>
                    </div>
                  </div>
                </div>

                {/* Timings Card */}
                <div className="bg-gray-50 p-6 rounded-2xl">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-xl">
                      <svg className="w-6 h-6 text-[#1656A5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#2C2C2C] mb-2">Center Timings</h3>
                      <p className="text-sm text-gray-600">Weekdays: {selectedCenter.timings?.weekdays}</p>
                      <p className="text-sm text-gray-600">Weekends: {selectedCenter.timings?.weekends}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services */}
              {selectedCenter.services && selectedCenter.services.length > 0 && (
                <div className="mt-8">
                  <div className="text-sm text-[#1656A5] mb-3">Available Services</div>
                  <div className="flex flex-wrap gap-2">
                    {selectedCenter.services.map((service: string, idx: number) => (
                      <span 
                        key={idx}
                        className="px-3 py-1.5 bg-blue-50 text-[#1656A5] text-sm rounded-xl"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
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
                  disabled={!selectedCenter.coordinates && !selectedCenter.address}
                  className="h-[44px] px-6 rounded-[16px] bg-white text-[#606060] border border-[#606060] text-sm font-semibold shadow-sm hover:bg-white hover:text-black hover:border-black flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Get Directions
                </button>
                <button
                  onClick={() => router.push('/book-appointment')}
                  className="h-[44px] px-6 rounded-[16px] bg-[#1656A5] text-white text-sm font-semibold shadow-sm hover:bg-[#1656A5]/90 flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className='w-full h-[400px] md:h-[500px] lg:h-[600px]'>
        <img src="/images/CenterFixed.png" alt="fixed" className='h-[100%] w-full overflow-hidden' />
    </div>
    <CenterDoctorsSection />
    <TestimonialsSection />
    <ResourceConsultation />
    <FaQ />
</div>
  );
}