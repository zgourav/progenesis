"use client";

import React, { useMemo } from "react";
import '../about/AboutMain.css'

// Reuse the same structure and styling as DoctorsInfo, with an option to
// show only the selected doctor (via slug) or toggle to show all doctors.

type Doctor = {
  slug: string;
  name: string;
  bio: string;
  experience: string;
  qualifications: string;
  fellowship: string;
  hospital: string;
  specialty: string;
  languages: string;
  image: string;
};

const doctorsData: Doctor[] = [
  {
    slug: "dr-narhari-s-malgaonkar",
    name: "Dr. Narhari S. Malgaonkar",
    bio:  "Dr. Narhari S. Malgaonkar is the dedicated and exclusive chief fertility consultant.",
    experience: "12+ Years of Experience",
    qualifications: "DNB/DGO (Obstetrics and Gynaecology)",
    fellowship: "Fellowship in Reproductive Medicine",
    hospital: "Mumbai",
    specialty: "Obstetrics and Gynaecology",
    languages: "Marathi, Hindi, English",
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
    languages: "Marathi, Hindi, English",
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
    languages: "Marathi, Hindi, English",
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
    languages: "Marathi, Hindi, English",
    image: "/images/doctor-sonali.png",
  },
];

export default function SingleDoctor({ selectedSlug }: { selectedSlug?: string }) {
  const selectedDoctor: Doctor | undefined = useMemo(() => {
    return selectedSlug ? doctorsData.find((d) => d.slug === selectedSlug) : undefined;
  }, [selectedSlug]);

  return (
    <section className="section-spacing w-full bg-white px-6 md:px-12 lg:px-[90px] py-10 md:py-14">
      <div style={{ paddingBottom: "16px" }}>
        {selectedDoctor && (
          <div className="w-full border-b border-gray-200 py-8 md:py-10 mb-8 md:mb-10 last:border-b-0 last:mb-0">
            <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6 items-start">
              {/* Left: Image */}
              <div className="w-full h-full md:h-full lg:h-full overflow-hidden rounded-[16px] bg-gray-100">
                <img src={selectedDoctor.image} alt={selectedDoctor.name} className="w-full h-full object-cover" />
              </div>

              {/* Middle: Content */}
              <div className="font-[Manrope]">
                <h3 className="text-[26px] md:text-[32px] text-[#1656A5] font-semibold tracking-[-0.02em]">
                  {selectedDoctor.name}
                </h3>
                <p className="mt-2 text-[14px] md:text-[15px] text-[#6B7280] max-w-[780px]">{selectedDoctor.bio}</p>

                {/* Meta row: Hospital | Specialty | Languages */}
                <div className="mt-6 flex flex-row  items-start gap-8 md:gap-10" style={{paddingBottom:'16px'}}>
                  <div className="min-w-[68px] lg:min-w-[90px]">
                    <div className="text-sm text-[#1656A5]">Hospital</div>
                    <div className="text-[16px] text-[#2C2C2C] font-medium">{selectedDoctor.hospital}</div>
                  </div>
                  <div className="min-w-[98px] lg:min-w-[130px]">
                    <div className="text-sm text-[#1656A5]">Specialty</div>
                    <div className="text-[16px] text-[#2C2C2C] font-medium max-w-[260px]">{selectedDoctor.specialty}</div>
                  </div>
                  <div className="min-w-[98px] lg:min-w-[160px]">
                    <div className="text-sm text-[#1656A5]">Languages</div>
                    <div className="text-[16px] text-[#2C2C2C] font-medium max-w-[300px]">{selectedDoctor.languages}</div>
                  </div>
                </div>
                {/* CTA buttons under meta: row on mobile, column on desktop */}
                <div className="mt-5 flex flex-row lg:flex-col items-start gap-3 lg:gap-4 ju">
                  <button style={{padding:'8px'}}
                    className="h-[44px] px-5 rounded-[16px] bg-white text-[#606060] border border-[#606060] text-sm font-semibold shadow-sm hover:bg-white hover:text-black hover:border-black"
                  >
                    Call Our Team
                  </button>
                  <button style={{padding:'8px'}}
                    className="h-[44px] px-5 rounded-[16px] bg-[#252525] text-white text-sm font-semibold shadow-sm hover:bg-[#000000]"
                  >
                    Book Your Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
