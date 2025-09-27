// DoctorsSection.jsx
import React from "react";
import '../about/AboutMain.css'

const doctors = [
  {
    name: "Dr. Narhari S. Malgaonkar",
    image: "/DoctorsSection/doctorimage.png",
    experience: [
      "15+ Years of Experience",
      "MD, DNB, DGO, FCPS, DFP (Mumbai)",
      "Fellowship in Reproductive Medicine (Singapore)",
    ],
    role: "Chief Fertility Consultant",
  },
  {
    name: "Dr. Sonali Malgaonkar",
    image: "/DoctorsSection/doctorimage.png",
    experience: [
      "14+ Years of Experience",
      "M.S. Obstetrics and Gynecology (Mumbai)",
      "Fellowship in Reproductive Medicine",
    ],
    role: "Sr. Fertility Consultant, Thane",
  },
];

const CenterDoctorsSection = () => {
  return (
    <section className="bg-[#F9FAFB] py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-12 md:mb-24">
          <span className="inline-block text-sm font-medium text-[#1656A5] bg-[rgba(22,86,165,0.05)] px-3 py-1 rounded-full mb-6">
            The Experts
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900">
            Know more about the <br /> doctors at this center
          </h2>
        </div>

        {/* Doctor Cards Container - Full width with centered content */}
        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8 w-full">
          {doctors.map((doctor, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-100 flex flex-col md:flex-row min-h-[250px] md:min-h-[300px] flex-1 max-w-[500px] md:max-w-none"
            >
              {/* Image - Full height */}
              <div className="w-full md:w-1/3 h-[250px] md:h-full overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="h-full w-full object-cover md:rounded-l-3xl md:rounded-r-none"
                />
              </div>
              {/* Info */}
              <div className="p-6 md:p-8 flex flex-col justify-start flex-1">
                <h3 className="text-[#1656A5] font-[Manrope] text-3xl md:text-4xl font-normal leading-tight tracking-tight mb-1">
                  {doctor.name}
                </h3>
                <p className="text-gray-500 font-[Manrope] text-base md:text-lg leading-relaxed tracking-tight mb-6">
                  {doctor.role}
                </p>
                <div className="w-auto flex flex-col gap-3">
                  {doctor.experience.map((exp, idx) => (
                    <span
                      key={idx}
                      className="w-auto inline-block px-4 py-2 rounded-[16px] bg-[rgba(22,86,165,0.05)] text-[#1656A5] font-[Manrope] text-sm md:text-base font-normal leading-snug tracking-tight"
                    >
                      {exp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CenterDoctorsSection;