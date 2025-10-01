import React from 'react';

interface AppointmentFormProps {
  onClose: () => void;
}

const AppointmentForm: React.FC<AppointmentFormProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center  backdrop-blur-md z-50">
      {/* Desktop View (1024px and above) */}
      <div className="hidden md:hidden lg:block w-[90%] md:w-[800px] shadow-lg">
        <div className="bg-white rounded-lg p-6 flex flex-row items-center justify-between relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl font-bold"
          >
            ✕
          </button>
          <div className="w-full md:w-1/2 pr-6">
            <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
              Just focus on your fertility journey,<br />We got the rest covered!
            </h2>
            <a href="#" className="text-blue-600 text-sm mb-6 block text-center">Schedule a Consultation</a>

            <form className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                  required
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Email ID"
                  className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                  required
                />
                <input
                  type="tel"
                  placeholder="+91"
                  className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                  required
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="date"
                  className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                  required
                />
                <select
                  className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full appearance-none"
                  required
                >
                  <option value="">Nearby Center</option>
                  <option value="center1">Center 1</option>
                  <option value="center2">Center 2</option>
                </select>
              </div>
              <label className="text-sm text-gray-500 flex items-center">
                <input type="checkbox" className="mr-2" required />
                Clicking means you agree to our Privacy Policy and T&C
              </label>
              <button
                type="submit"
                className="bg-[#1656A5] text-white py-2 rounded-lg hover:bg-[#0f3f7a] transition-colors w-full text-lg font-medium"
              >
                Book Appointment
              </button>
            </form>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="/images/about-banner-img.png"
              alt="Family"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Medium View (768px to 1023px) */}
      <div className="hidden md:block lg:hidden xl:hidden w-[90%] md:w-[600px] shadow-lg">
        <div className="bg-white rounded-lg p-4 flex flex-col items-center relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl font-bold"
          >
            ✕
          </button>
          <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">
            Just focus on your fertility journey,<br />We got the rest covered!
          </h2>
          <a href="#" className="text-blue-600 text-sm mb-4 block text-center">Schedule a Consultation</a>

          <form className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              required
            />
            <input
              type="email"
              placeholder="Email ID"
              className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              required
            />
            <input
              type="tel"
              placeholder="+91"
              className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              required
            />
            <input
              type="date"
              className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              required
            />
            <select
              className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full appearance-none"
              required
            >
              <option value="">Nearby Center</option>
              <option value="center1">Center 1</option>
              <option value="center2">Center 2</option>
            </select>
            <label className="text-sm text-gray-500 flex items-center">
              <input type="checkbox" className="mr-2" required />
              Clicking means you agree to our Privacy Policy and T&C
            </label>
            <button
              type="submit"
              className="bg-[#1656A5] text-white py-2 rounded-lg hover:bg-[#0f3f7a] transition-colors w-full text-base font-medium"
            >
              Book Appointment
            </button>
          </form>
          <img
            src="/images/about-banner-img.png"
            alt="Family"
            className="rounded-lg object-cover w-full h-fit mt-4"
          />
        </div>
      </div>

      {/* Mobile View (up to 767px) */}
      <div className="block md:hidden w-[90%] md:w-[300px] shadow-lg">
        <div className="bg-white rounded-lg p-3 flex flex-col items-center relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-600 hover:text-black text-lg font-bold"
          >
            ✕
          </button>
          <h2 className="text-lg font-semibold mb-3 text-center text-gray-800">
            Just focus on your fertility journey,<br />We got the rest covered!
          </h2>
          <a href="#" className="text-blue-600 text-xs mb-3 block text-center">Schedule a Consultation</a>

          <form className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-300 rounded-lg px-2 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              required
            />
            <input
              type="email"
              placeholder="Email ID"
              className="border border-gray-300 rounded-lg px-2 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              required
            />
            <input
              type="tel"
              placeholder="+91"
              className="border border-gray-300 rounded-lg px-2 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              required
            />
            <input
              type="date"
              className="border border-gray-300 rounded-lg px-2 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              required
            />
            <select
              className="border border-gray-300 rounded-lg px-2 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full appearance-none"
              required
            >
              <option value="">Nearby Center</option>
              <option value="center1">Center 1</option>
              <option value="center2">Center 2</option>
            </select>
            <label className="text-xs text-gray-500 flex items-center">
              <input type="checkbox" className="mr-1" required />
              Clicking means you agree to our Privacy Policy and T&C
            </label>
            <button
              type="submit"
              className="bg-[#1656A5] text-white py-1 rounded-lg hover:bg-[#0f3f7a] transition-colors w-full text-sm font-medium"
            >
              Book Appointment
            </button>
          </form>
          <img
            src="/images/about-banner-img.png"
            alt="Family"
            className="rounded-lg object-cover w-full h-fit mt-3"
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;