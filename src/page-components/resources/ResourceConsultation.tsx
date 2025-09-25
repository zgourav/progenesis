import React from 'react'

/**
 * ResourceConsultation
 * Split layout matching the provided mock:
 * - Left: white rounded form card with heading and inputs
 * - Right: blue rounded panel with an image revealed through slashed cutouts
 * - Background: soft, blurred hero image with subtle dark overlay for contrast
 */
const ResourceConsultation: React.FC = () => {
  return (
    <section
      className="relative w-full py-12 md:py-16 lg:py-20"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 -z-10 bg-center bg-cover"
        style={{ backgroundImage: "url('/images/banner3.png')" }}
      />
      {/* Subtle overlay to increase contrast */}
      <div className="absolute inset-0 -z-10 bg-black/20" />

      <div className="section-spacing px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-stretch">
          {/* Left: Form Card */}
          <div className="w-full overflow-visible break-words bg-white/95 backdrop-blur rounded-2xl md:rounded-[18px] p-4 shadow-[0_8px_24px_rgba(0,0,0,0.12)] border border-black/5">
            <div className="text-center mb-3 pb-4">
              <span className="text-[11px] sm:text-[12px] px-3 py-1 rounded-[8px] border-[#1656A5]/30 text-[#1656A5] bg-[#1656A5]/5 p-1">
                Schedule a Consultation
              </span>
            </div>
            <h3 className="text-center text-gray-900 font-semibold leading-snug text-[20px] sm:text-[22px] md:text-[26px] lg:text-[28px] max-w-xl mx-auto">
              Just focus on your fertility journey,
              <br className="hidden sm:block" /> We got the rest covered!
            </h3>

            <form className="mt-5 space-y-3 gap-3 border-[#D9D9D9] pt-4">
              <div className="border border-[#D9D9D9] rounded-2xl p-4 overflow-visible mb-4 mr-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-[16px] border border-[#D9D9D9] bg-white h-11 px-4 text-sm outline-none focus:ring-2 focus:ring-[#1656A5]/20 focus:border-[#1656A5]/40 p-2 m-2"
              />
              <input
                type="email"
                placeholder="Email ID"
                className="w-full rounded-[16px] border border-[#D9D9D9] bg-white h-11 px-4 text-sm outline-none focus:ring-2 focus:ring-[#1656A5]/20 focus:border-[#1656A5]/40 p-2 m-2"
              />
              <div className="relative">
                <input
                  type="date"
                  placeholder="Preferred Date"
                  className="w-full rounded-[16px] border border-[#D9D9D9] bg-white h-11 px-4 pr-10 text-sm outline-none focus:ring-2 focus:ring-[#1656A5]/20 focus:border-[#1656A5]/40 [color-scheme:light] p-2 m-2"
                />
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"></span>
              </div>
              <input
                type="tel"
                placeholder="+91"
                className="w-full rounded-[16px] border border-[#D9D9D9] bg-white h-11 px-4 text-sm outline-none focus:ring-2 focus:ring-[#1656A5]/20 focus:border-[#1656A5]/40 p-2 m-2"
              />
              <div className="relative">
                <select
                  className="appearance-none w-full rounded-[16px] border border-[#D9D9D9] bg-white h-11 px-4 pr-9 text-sm outline-none focus:ring-2 focus:ring-[#1656A5]/20 focus:border-[#1656A5]/40 p-2 m-2"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Nearby Center
                  </option>
                  <option>Pune</option>
                  <option>Mumbai</option>
                  <option>Delhi</option>
                  <option>Bengaluru</option>
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">▾</span>
              </div>

              <label className="flex items-start gap-2 text-[12px] text-gray-600 select-none p-2 m-2">
                <input type="checkbox" className="mt-[2px] h-4 w-4 rounded border-[#D9D9D9]" />
                <span>
                  Clicking means you agree to our Privacy Policy and T&amp;C.
                </span>
              </label>

              <div className="pt-1 justify-center items-center text-center p-2 m-2">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-[16px] bg-[#1656A5] text-white text-sm font-medium h-10 px-5 shadow hover:shadow-md transition-shadow p-2"
                >
                  Book Appointment
                </button>
              </div>
              </div>
            </form>
          </div>

          {/* Right: Stylized Image Panel */}
          <div className="block mt-4 md:mt-0">
            <div className="relative rounded-2xl overflow-hidden bg-[#1656A5] p-0 shadow-[0_8px_24px_rgba(0,0,0,0.18)]">
              <svg viewBox="0 0 560 520" className="w-full lg:h-[670px] aspect-[7/6]">
                <defs>
                  {/* Create slashed cutouts using rotated rects in user space */}
                  <clipPath id="slashes" clipPathUnits="userSpaceOnUse">
                    {/* first slash */}
                    <rect x="100" y="60" width="520" height="70" rx="35" transform="rotate(-20 100 60)" />
                    {/* second slash */}
                    <rect x="120" y="200" width="520" height="70" rx="35" transform="rotate(-20 120 200)" />
                    {/* third slash */}
                    <rect x="70" y="320" width="520" height="80" rx="40" transform="rotate(-20 70 320)" />
                    {/* fourth small tail */}
                    <rect x="220" y="430" width="380" height="60" rx="30" transform="rotate(-20 220 430)" />
                  </clipPath>
                </defs>

                {/* Rounded blue panel background */}
                <rect x="0" y="0" width="560" height="520" rx="18" ry="18" fill="#1656A5" />

                {/* Image clipped by the slashes */}
                <g clipPath="url(#slashes)">
                  <image
                    href="/images/OurStory1.png"
                    x="0"
                    y="-20"
                    width="560"
                    height="560"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ResourceConsultation
