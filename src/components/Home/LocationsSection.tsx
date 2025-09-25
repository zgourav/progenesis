import React, { useState } from "react";

const locations = [
  {
    city: "Mumbai",
    address: "123 Business Tower, Bandra Kurla Complex, Mumbai, 400051",
    image: "/LocationSection/location.png", // ✅ file in public/locations/mumbai.png
  },
  {
    city: "Pune",
    address:
      "Kataria Chambers, ITI Road, Infront of Reliance Digital, Aundh, Pune, Maharashtra 411007",
    image: "/LocationSection/location.png", // ✅ file in public/locations/pune.png
  },
  {
    city: "Nashik",
    address:
      "IKON, 3rd Floor, Above Westside, Opp. Sun Bird Building, College Road, Nashik – 422005",
    image: "/LocationSection/location.png", // ✅ file in public/locations/nashik.png
  },
  {
    city: "Nagpur",
    address:
      "6th Floor, Tower 10, N Ambazari Rd, beside Alankar Theater, Shankar Nagar, Nagpur",
    image: "/LocationSection/location.png", // ✅ file in public/locations/nagpur.png
  },
];

const LocationsSection = () => {
  const [activeIndex, setActiveIndex] = useState(1); // default Pune

  return (
    <section className=" bg-white py-8 px-4 md:px-[80px] lg:px-[120px] md:py-20 ">
      <div className=" mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
          <div className="md:flex-1">
            <span className="inline-block text-xs md:text-sm font-medium text-blue-700 bg-blue-100 px-3 py-1 rounded-full mb-4">
              Trusted Guidance Everywhere.
            </span>

            <h2 className="mt-2 text-3xl md:text-5xl font-light text-gray-900 leading-snug">
              Trusted care, now across <br />
              <span className="font-semibold">20+ centers near you...</span>
            </h2>
          </div>

          <div className="md:flex-none">
            <button className="mt-3 md:mt-0 px-4 md:px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition text-sm">
              View all Centers
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left: clickable list (hidden on mobile) */}
          <div className="hidden md:flex md:flex-col md:w-1/3 space-y-4">
            {locations.map((loc, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`text-left rounded-xl p-5 transition flex items-center justify-between ${
                  activeIndex === idx
                    ? "bg-blue-50 border border-blue-200"
                    : "bg-gray-50 border border-gray-100"
                }`}
              >
                <div className="pr-3">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                    {loc.city}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{loc.address}</p>
                </div>

                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full ${
                    activeIndex === idx
                      ? "bg-blue-600 text-white"
                      : "bg-black text-white"
                  }`}
                >
                  ↗
                </div>
              </button>
            ))}
          </div>

          {/* Right: image + info card */}
          <div className="w-full md:w-2/3">
            {/* Image card */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/LocationsSection/location.png"
                alt="Mumbai"
                className="w-full h-[220px] md:h-[360px] object-cover"
              />
            </div>

            {/* Info card */}
            <div className="mt-4 bg-gray-50 rounded-2xl p-5 md:p-6 shadow-inner relative">
              <div className="absolute right-4 -top-6">
                <button
                  aria-label="Open location"
                  className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center shadow-md"
                >
                  ↗
                </button>
              </div>

              <div className="pt-2">
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
                  {locations[activeIndex].city}
                </h3>
                <p className="mt-3 text-sm md:text-base text-gray-600 leading-relaxed">
                  {locations[activeIndex].address}
                </p>
              </div>
            </div>

            {/* Mobile: quick list */}
            <div className="mt-6 md:hidden">
              <div className="flex gap-3 overflow-x-auto pb-1">
                {locations.map((loc, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`flex-shrink-0 min-w-[120px] rounded-xl p-3 text-left border transition ${
                      activeIndex === idx
                        ? "bg-blue-50 border-blue-200"
                        : "bg-white border-gray-100"
                    }`}
                  >
                    <div className="text-sm font-semibold text-gray-900">
                      {loc.city}
                    </div>
                    <div
                      className="text-xs text-gray-500 mt-1 line-clamp-2"
                      style={{ WebkitLineClamp: 2 }}
                    >
                      {loc.address}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
