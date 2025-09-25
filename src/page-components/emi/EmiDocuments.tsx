import React from "react";
import "../about/AboutMain.css";

const CheckIcon = () => (
  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-[#1656A5] text-[#1656A5]">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-4 h-4">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  </span>
);

const Dash = () => <span className="text-[#2C2C2C]">-</span>;
 
const EmiDocuments = () => {
  return (
    <section className="w-full relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-[#EAF3EA] via-[#F5F9FF] to-[#E3ECF7] opacity-60" />

      <div className="relative section-spacing w-full px-6 md:px-8 lg:px-16 py-10 md:py-14" style={{paddingTop:'36px'}}>
        {/* Badge */}
        <div className="mb-3">
          <span className="inline-block bg-[#E9F0FF] text-[#1656A5] text-[12px] md:text-[13px] px-3 py-1 rounded-[8px]" style={{padding:'8px'}}>Stats and Metrics</span>
        </div>

        {/* Heading */}
        <h2 className="text-[#2C2C2C] font-semibold tracking-tight text-[34px] sm:text-[34px] md:text-[48px] leading-[1.1] mb-8" style={{paddingBottom:'32px'}}>
          Required Documents
          <br />
          During Application.
        </h2>

        {/* Desktop/Tablet Table */}
        <div className="hidden md:block bg-[#FFFFFF] backdrop-blur-sm rounded-[16px] overflow-hidden border-[#E3ECF7]">
          {/* Head */}
          <div className="grid grid-cols-4 text-[#2C2C2C]" style={{padding:'16px'}}>
            <div className="px-6 py-6" />
            <div className="px-6 py-6 text-center text-[22px]">Adhar Card</div>
            <div className="px-6 py-6 text-center text-[22px]">Pan Card</div>
            <div className="px-6 py-6 text-center text-[22px]">IT Return Salary Slip</div>
          </div>

          {/* Row 1 */}
          <div className="grid grid-cols-4 items-center bg-[#F5F9FF]" style={{padding:'16px'}}>
            <div className="px-6 py-7 text-[20px] text-[#2C2C2C]">Address Proof</div>
            <div className="px-6 py-7 flex justify-center"><CheckIcon /></div>
            <div className="px-6 py-7 flex justify-center"><CheckIcon /></div>
            <div className="px-6 py-7 flex justify-center"><Dash /></div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-4 items-center bg-[#FFFFFF]" style={{padding:'16px'}}>
            <div className="px-6 py-7 text-[20px] text-[#2C2C2C]">Identity Proof</div>
            <div className="px-6 py-7 flex justify-center"><CheckIcon /></div>
            <div className="px-6 py-7 flex justify-center"><CheckIcon /></div>
            <div className="px-6 py-7 flex justify-center"><Dash /></div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-4 items-center bg-[#F5F9FF]" style={{padding:'16px'}}>
            <div className="px-6 py-7 text-[20px] text-[#2C2C2C]">Income Proof</div>
            <div className="px-6 py-7 flex justify-center"><Dash /></div>
            <div className="px-6 py-7 flex justify-center"><Dash /></div>
            <div className="px-6 py-7 flex justify-center"><CheckIcon /></div>
          </div>
        </div>

        {/* Desktop/Tablet Note */}
        <div className="hidden md:block bg-[#FFFFFF] mt-6 text-[18px] text-[#2C2C2C]" style={{padding:'16px'}}>
          Bank Statement of last 6 month from date of application
        </div>

        {/* Mobile Layout: Stacked cards */}
        <div className="md:hidden space-y-5">
          {/* Address Proof */}
          <div className="bg-[#F5F9FF] rounded-[16px] gap-2 p-4" style={{padding:'8px', marginTop:'8px'}}>
            <h3 className="text-[#2C2C2C] font-semibold mb-3" style={{paddingBottom:'8px'}}>Address Proof</h3>
            <div className="flex items-center gap-3 mb-2 text-[#2C2C2C]" style={{paddingBottom:'8px'}}>
              <CheckIcon />
              <span>Aadhar Card</span>
            </div>
            <div className="flex items-center gap-3 text-[#2C2C2C]" style={{paddingBottom:'8px'}}>
              <CheckIcon />
              <span>Pan Card</ span>
            </div>
          </div>

          {/* Identity Proof */}
          <div className="bg-[#FFFFFF] rounded-[16px] p-4" style={{padding:'8px', marginTop:'8px'}}>
            <h3 className="text-[#2C2C2C] font-semibold mb-3" style={{paddingBottom:'8px'}}>Identity Proof</h3>
            <div className="flex items-center gap-3 mb-2 text-[#2C2C2C]"style={{paddingBottom:'8px'}}>
              <CheckIcon />
              <span>Aadhar Card</span>
            </div>
            <div className="flex items-center gap-3 text-[#2C2C2C]"style={{paddingBottom:'8px'}}>
              <CheckIcon />
              <span>Pan Card</span>
            </div>
          </div>

          {/* Income Proof */}
          <div className="bg-[#F5F9FF] rounded-[16px] p-4"style={{padding:'8px', marginTop:'8px'}}>
            <h3 className="text-[#2C2C2C] font-semibold mb-3" style={{paddingBottom:'8px'}}>Income Proof</h3>
            <div className="flex items-center gap-3 text-[#2C2C2C]" style={{paddingBottom:'8px'}}>
              <CheckIcon />
              <span>IT Return Salary Slip</span>
            </div>
          </div>

          {/* Note card */}
          <div className="bg-[#FFFFFF] rounded-[16px] p-4 text-[#2C2C2C]" style={{padding:'8px', marginTop:'8px'}}>
            Bank Statement of last 6 month from date of application
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmiDocuments;
