'use client';
import React, { useState, useRef, useEffect } from 'react';
import CenterCard from './CenterCard';
import { centersData, type Center } from './CenterCard';

// Define type for state-city mapping
type StateCityMap = {
  [key: string]: string[];
};

// State and City data structure
// Create state-city mapping from centersData
const stateWithCities: StateCityMap = (() => {
  const stateMap: StateCityMap = {};
  
  centersData.forEach((center) => {
    if (!stateMap[center.state]) {
      stateMap[center.state] = [];
    }
    if (!stateMap[center.state].includes(center.city)) {
      stateMap[center.state].push(center.city);
    }
  });

  return stateMap;
})();



const CENTERS_PER_PAGE = 5;

const CentersNav: React.FC = () => {
  const defaultState = Object.keys(stateWithCities)[0];
  const defaultCity = stateWithCities[defaultState][0];

  const [selectedState, setSelectedState] = useState(defaultState);
  const [selectedCity, setSelectedCity] = useState(defaultCity);
  const [isStateDropdownOpen, setIsStateDropdownOpen] = useState(false);
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const [availableCities, setAvailableCities] = useState(stateWithCities[defaultState]);
  const [currentPage, setCurrentPage] = useState(1);
  
  // Initial centers are the first 5 from centersData
  const [filteredCenters, setFilteredCenters] = useState<Center[]>(centersData);

  const stateDropdownRef = useRef<HTMLDivElement>(null);
  const cityDropdownRef = useRef<HTMLDivElement>(null);

  // Handle clicks outside dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (stateDropdownRef.current && !stateDropdownRef.current.contains(event.target as Node)) {
        setIsStateDropdownOpen(false);
      }
      if (cityDropdownRef.current && !cityDropdownRef.current.contains(event.target as Node)) {
        setIsCityDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleStateChange = (state: string) => {
    setSelectedState(state);
    setAvailableCities(stateWithCities[state]);
    const firstCity = stateWithCities[state][0];
    setSelectedCity(firstCity);
    setIsStateDropdownOpen(false);
    setCurrentPage(1); // Reset to first page
    setFilteredCenters(centersData.filter((center: Center) => center.city === firstCity));
  };

  const handleCityChange = (city: string) => {
    setSelectedCity(city);
    setIsCityDropdownOpen(false);
    setCurrentPage(1); // Reset to first page
    setFilteredCenters(centersData.filter((center: Center) => center.city === city));
  };

  return (
    <section className="w-full section-spacing overflow-hidden bg-gradient-to-r from-white via-white to-blue-50">
      {/* Badge and Title */}
      <span className="inline-block bg-[#1656A50D] text-[#1656A5] text-[12px] md:text-[13px] px-3 py-1 rounded-[8px]">
          Our Expertise
        </span>
      <div className="flex flex-col gap-4 mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-[48px] font-manrope font-normal text-[#2C2C2C] leading-tight md:leading-[1.2]">
          Our Locations
        </h1>
      </div>

      {/* Filter Section */}
      <div className="flex flex-wrap gap-4 md:gap-6 mb-6">
        {/* State Dropdown */}
        <div className="flex flex-col gap-2" ref={stateDropdownRef}>
          <label className="text-sm text-gray-600">Select State</label>
          <div className="relative">
            <button
              onClick={() => setIsStateDropdownOpen(!isStateDropdownOpen)}
              className="min-w-[180px] h-10 px-5 inline-flex items-center justify-between rounded-[12px] text-sm font-medium 
              bg-[#1656A5] text-white shadow"
            >
              {selectedState}
              <span className={`ml-2 transition-transform duration-200 ${isStateDropdownOpen ? 'rotate-180' : ''}`}>▼</span>
            </button>
            
            {/* State Dropdown Menu */}
            {isStateDropdownOpen && (
              <div className="absolute top-[calc(100%+4px)] left-0 w-full max-h-[240px] overflow-y-auto bg-white rounded-xl shadow-lg border border-gray-100 z-20">
                {Object.keys(stateWithCities).map((state) => (
                  <button
                    key={state}
                    onClick={() => handleStateChange(state)}
                    className={`w-full px-5 py-2.5 text-left text-sm hover:bg-gray-50 transition-colors
                      ${selectedState === state ? 'text-[#1656A5] font-medium bg-[#1656A5]/5' : 'text-gray-700'}`}
                  >
                    {state}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* City Dropdown */}
        <div className="flex flex-col gap-2" ref={cityDropdownRef}>
          <label className="text-sm text-gray-600">Select City</label>
          <div className="relative">
            <button
              onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
              className={`min-w-[180px] h-10 px-5 inline-flex items-center justify-between rounded-[12px] text-sm font-medium transition-colors
                ${isCityDropdownOpen ? 'bg-[#1656A5] text-white' : 'bg-white text-[#1656A5] border border-[#1656A5]/60'}`}
            >
              {selectedCity}
              <span className={`ml-2 transition-transform duration-200 ${isCityDropdownOpen ? 'rotate-180' : ''}`}>▼</span>
            </button>

            {/* City Dropdown Menu */}
            {isCityDropdownOpen && (
              <div className="absolute top-[calc(100%+4px)] left-0 w-full max-h-[240px] overflow-y-auto bg-white rounded-xl shadow-lg border border-gray-100 z-20">
                {availableCities.map((city) => (
                  <button
                    key={city}
                    onClick={() => handleCityChange(city)}
                    className={`w-full px-5 py-2.5 text-left text-sm hover:bg-gray-50 transition-colors
                      ${selectedCity === city ? 'text-[#1656A5] font-medium bg-[#1656A5]/5' : 'text-gray-700'}`}
                  >
                    {city}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Centers Count */}
      <div className="text-sm text-gray-600 mb-8">
        Showing {Math.min(CENTERS_PER_PAGE, filteredCenters.length - (currentPage - 1) * CENTERS_PER_PAGE)} of {filteredCenters.length} Centers
      </div>

      {/* Centers List */}
      <div className="flex flex-col gap-6">
        {filteredCenters
          .slice((currentPage - 1) * CENTERS_PER_PAGE, currentPage * CENTERS_PER_PAGE)
          .map((center) => (
            <CenterCard
              key={center.id}
              name={center.name}
              address={center.address}
              image={center.image}
            />
          ))}
      </div>

      {/* Pagination */}
      {filteredCenters.length > CENTERS_PER_PAGE && (
        <div className="flex justify-center items-center mt-10 gap-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`h-10 w-10 flex items-center justify-center rounded-xl border ${
              currentPage === 1
                ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                : 'border-[#1656A5] text-[#1656A5] hover:bg-[#1656A5] hover:text-white transition-colors'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Page Numbers */}
          <div className="flex gap-2">
            {Array.from(
              { length: Math.ceil(filteredCenters.length / CENTERS_PER_PAGE) },
              (_, i) => i + 1
            ).map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`h-10 w-10 rounded-xl border text-sm font-medium transition-colors ${
                  currentPage === pageNum
                    ? 'bg-[#1656A5] text-white border-[#1656A5]'
                    : 'border-gray-200 text-gray-600 hover:border-[#1656A5] hover:text-[#1656A5]'
                }`}
              >
                {pageNum}
              </button>
            ))}
          </div>

          <button
            onClick={() => 
              setCurrentPage((prev) => 
                Math.min(prev + 1, Math.ceil(filteredCenters.length / CENTERS_PER_PAGE))
              )
            }
            disabled={currentPage === Math.ceil(filteredCenters.length / CENTERS_PER_PAGE)}
            className={`h-10 w-10 flex items-center justify-center rounded-xl border ${
              currentPage === Math.ceil(filteredCenters.length / CENTERS_PER_PAGE)
                ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                : 'border-[#1656A5] text-[#1656A5] hover:bg-[#1656A5] hover:text-white transition-colors'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}

      {/* Background Shapes - Similar to other sections */}
      <div className="absolute top-0 right-0 w-[320px] md:w-[420px] lg:w-[522px] h-[280px] md:h-[360px] lg:h-[442px] rounded-full blur-[250px] bg-[#1656A5] opacity-10 -rotate-2" />
      <div className="absolute bottom-0 left-0 w-[240px] md:w-[300px] lg:w-[348px] h-[200px] md:h-[240px] lg:h-[280px] rounded-full blur-[250px] bg-[#94BA3D] opacity-10 -rotate-2" />
    </section>
  );
};

export default CentersNav;
