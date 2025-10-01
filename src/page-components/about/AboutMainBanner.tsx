'use client'
import React, { useState } from 'react'
import AppointmentForm from './AppointmentForm';  // import form component

const AboutMainBanner = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='bg-gradient-to-r from-green-100 via-white to-sky-200 grid grid-cols-12'>
            <div className='col-span-12 md:col-span-7 csLg:col-span-8 section-spacing'>
                <div className='flex flex-col'>
                    <div>
                        <h2 className='font-manrope text-[12px] md:text-[16px] csLg:text-[18px] font-semibold leading-[26px] tracking-[-0.02em]'>
                           <button onClick={() => window.location.href = '/'} className='hover:cursor-pointer'> Home </button><span className="px-[12px]">›</span> <span className="text-[#1656A5]"> About Us </span>
                        </h2>
                    </div>

                    <div>
                        <h1 className='font-manrope font-semibold csLg:text-[80px] text-[32px] csLg:leading-[88px] leading-[48px] tracking-[-0.02em]'>
                            Your journey to <br /> parenthood begins here.
                        </h1>
                    </div>

                    <div className='pt-11'>
                        <button 
                            onClick={() => setIsOpen(true)} 
                            className='bg-[#252525] csLg:text-[24px] px-6 py-3 text-[#F9F9F9] rounded-lg hover:bg-[#333] transition'
                        >
                            Book Your Appointment
                        </button>
                    </div>
                </div>
            </div>

            <div className='col-span-12 md:col-span-5 csLg:col-span-4 pr-0'>
                <img src="/images/about-banner-img.png" alt="" className='h-[100%] w-full' />
            </div>

            {/* Modal */}
            {isOpen && <AppointmentForm onClose={() => setIsOpen(false)} />}
        </div>
    )
}

export default AboutMainBanner
