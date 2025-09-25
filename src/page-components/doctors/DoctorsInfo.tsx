"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";

type Doctor = {
  slug: string;
  name: string;
  bio: string;
  experience: string;
  qualifications: string;
  fellowship: string;
  hospital: string;
  specialty: string;
  image: string;
};

const doctors: Doctor[] = [
  {
    slug: "dr-narhari-s-malgaonkar",
    name: "Dr. Narhari S. Malgaonkar",
    bio:
      "Dr. Narhari S. Malgaonkar is the dedicated and exclusive chief fertility consultant.",
    experience: "12+ Years of Experience",
    qualifications: "DNB/DGO (Obstetrics and Gynaecology)",
    fellowship: "Fellowship in Reproductive Medicine",
    hospital: "Mumbai",
    specialty: "Obstetrics and Gynaecology",
    image: "/images/doctor-narhari.png",
  },
  {
    slug: "dr-sonali-malgaonkar",
    name: "Dr. Sonali Malgaonkar",
    bio:
      "Dr. Sonali Malgaonkar is the dedicated and exclusive chief fertility consultant.",
    experience: "12+ Years of Experience",
    qualifications: "DNB/DGO (Obstetrics and Gynaecology)",
    fellowship: "Fellowship in Reproductive Medicine",
    hospital: "Mumbai",
    specialty: "Obstetrics and Gynaecology",
    image: "/images/doctor-sonali.png",
  },
   {
    slug: "dr-narhari-s-malgaonkar",
    name: "Dr. Narhari S. Malgaonkar",
    bio:  "Dr. Narhari S. Malgaonkar is the dedicated and exclusive chief fertility consultant.",
    experience: "12+ Years of Experience",
    qualifications: "DNB/DGO (Obstetrics and Gynaecology)",
    fellowship: "Fellowship in Reproductive Medicine",
    hospital: "Mumbai",
    specialty: "Obstetrics and Gynaecology",
    image: "/images/doctor-narhari.png",
  },
  {
    slug: "dr-sonali-malgaonkar",
    name: "Dr. Sonali Malgaonkar",
    bio:
      "Dr. Sonali Malgaonkar is the dedicated and exclusive chief fertility consultant.",
    experience: "12+ Years of Experience",
    qualifications: "DNB/DGO (Obstetrics and Gynaecology)",
    fellowship: "Fellowship in Reproductive Medicine",
    hospital: "Mumbai",
    specialty: "Obstetrics and Gynaecology",
    image: "/images/doctor-sonali.png",
  },
];

const DoctorsInfo: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = pathname?.split("/")[1] || "en";
  return (
    <section className="section-spacing w-full bg-white px-6 md:px-12 lg:px-[90px] py-10 md:py-14">
      {/* Top breadcrumb tag */}
      <span className="inline-block bg-[#1656A50D] text-[#1656A5] text-[12px] md:text-[13px] px-3 py-1 rounded-[8px]" >Our Doctors</span>
      <h2 className="text-[32px] gap-[16px] md:text-[40px] font-semibold leading-tight text-[#2C2C2C] mb-2 font-[Manrope]" >
        Meet our Experts
      </h2>

      <div className="" style={{paddingBottom:'16px'}}>
        {doctors.map((d, idx) => (
          <div key={idx} className="w-full border-b border-gray-200 py-8 md:py-10 mb-8 md:mb-10 last:border-b-0 last:mb-0">
            <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr_260px] gap-6 items-start">
              {/* Left: Image */}
              <div className="w-full h-full md:h-full lg:h-full overflow-hidden rounded-[16px] bg-gray-100">
                <img
                  src={d.image}
                  alt={d.name}
                  className="w-full h-fit object-cover"
                />
              </div>

              {/* Middle: Content */}
              <div className="font-[Manrope]" >
                <h3 className="text-[26px] md:text-[32px] text-[#1656A5] font-semibold tracking-[-0.02em]">
                  {d.name}
                </h3>
                <p className="mt-2 text-[14px] md:text-[15px] text-[#6B7280] max-w-[780px]">
                  {d.bio}
                </p>

                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-[13px] md:text-[14px] font-medium text-[#1656A5]">
                  <a className="hover:underline" href="#">{d.experience}</a>
                  <span className="text-gray-300">|</span>
                  <a className="hover:underline" href="#">{d.qualifications}</a>
                  <span className="text-gray-300">|</span>
                  <a className="hover:underline" href="#">{d.fellowship}</a>
                </div>
              </div>

              {/* Right: Meta row (Hospital + Specialty) + CTA */}
              <div className="flex flex-col items-start lg:items-end gap-6 font-[Manrope]">
                {/* Row: Hospital | Specialty */}
                <div className="w-full flex flex-row items-start justify-between gap-6 md:gap-10 lg:justify-end">
                  <div className="min-w-[110px] lg:text-right">
                    <div className="text-sm text-[#1656A5]">Hospital</div>
                    <div className="text-[16px] text-[#2C2C2C] font-medium">{d.hospital}</div>
                  </div>
                  <div className="min-w-[140px] lg:text-right">
                    <div className="text-sm text-[#1656A5]">Specialty</div>
                    <div className="text-[16px] text-[#2C2C2C] font-medium max-w-[220px]">
                      {d.specialty}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <button style={{padding:'8px'}}
                  onClick={() => router.push(`/doctors/${d.slug}`)}
                  className="h-[44px] px-5 rounded-[16px] bg-[#252525] text-white text-sm font-semibold shadow-sm hover:bg-[#000000]"
                >
                  Book Your Appointment
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DoctorsInfo;

