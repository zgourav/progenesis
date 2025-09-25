import React from 'react'

const AboutMainBanner = () => {
    return (
        <div className='bg-gradient-to-r from-green-100 via-white to-sky-200  grid grid-cols-12 gap-4'>
          
                <div className='col-span-12 csLg:col-span-8 section-spacing'>
                    <div className=' flex flex-col' >
                        <div className=''> 
                        <h2 className='font-manrope csLg:text-[18px] font-semibold text-[12px] leading-[26px] tracking-[-0.02em]'>Home  <span className="text-[#1656A5]"> About Us </span> 
                             </h2>
                        </ div>
                    <div className=''>
                        <h1 className='font-manrope font-semibold csLg:text-[80px] text-[32px] csLg:leading-[88px] leading-[48px] tracking-[-0.02em]'>
                            Your journey to <br /> parenthood begins here.
                        </h1>

                    </div>
                     <div className='pt-[44px]'style={{paddingTop:'44px'}}>
                        <span className='bg-[#252525] csLg:text-[24px] p-8 text-[#F9F9F9]' style={{padding:"12px",borderRadius:"8px"}}>
                        Book Your Appointment
                        </span>
                     </div>
                    </div>
                </div>
            <div className='col-span-12 csLg:col-span-4'>
                <img src="/images/about-banner-img.png" alt="" className='h-[100%] w-full'  />
            </div>
        </div>
    )
}

export default AboutMainBanner