"use client";

import React, { useState } from "react";
import Link from "next/link"; // ✅ Next.js routing
import { usePathname } from "next/navigation"; // ✅ For active link highlighting
import { Search, Menu, X, ChevronDown } from "lucide-react";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  
  const navigationItems = [
    { label: "About Us", path: "/about-us", hasMegaMenu: true },
    { label: "Infertility Issues", path: "/infertility-issues" },
    { label: "Our Centers", path: "/centers" },
    { label: "Treatments", path: "/infertility-treatment" },
    { label: "Doctors", path: "/doctors" },
    { label: "Success Stories", path: "/success-stories" },
    { label: "Patient Resources", path: "/resources" },
    { label: "Careers", path: "/careers" },
  ];

  return (
    <header className="w-full bg-white border-b shadow-sm font-sans">
      <div className="mx-auto flex items-center justify-between h-20 px-4 md:px-[80px] lg:px-[120px]">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <img
              src="/logo1.png"
              alt="Progenesis Logo"
              className="w-[120px] h-[41.52px] md:w-[180px] object-contain"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navigationItems.map((item, index) => (
            <div key={index} className="relative group">
              <Link
                href={item.path}
                className={`flex items-center space-x-1 text-base font-medium px-1 py-2 rounded-md transition ${
                  pathname === item.path
                    ? "text-blue-600 font-semibold"
                    : item.hasMegaMenu
                    ? "group-hover:bg-blue-600 group-hover:text-white text-gray-800"
                    : "hover:text-blue-600 text-gray-800"
                }`}
              >
                {item.label}
                {item.hasMegaMenu && <ChevronDown size={16} />}
              </Link>

              {/* Mega Menu for About Us */}
              {item.hasMegaMenu && (
                <div
                  className="absolute -left-28 top-[104px] mt-2 hidden group-hover:flex
                             bg-white shadow-lg rounded-2xl p-6
                             max-w-[1646px] h-[468px]"
                >
                  {/* Left Image */}
                  <div className="w-[375px] h-[388px] rounded-lg overflow-hidden mr-8">
                    <img
                      src="./about-image.jpg"
                      alt="About Us"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  {/* Divider */}
                  <div
                    style={{
                      width: "1px",
                      height: "500px",
                      background: "rgba(22, 86, 165, 0.05)",
                    }}
                    className="mx-6"
                  />

                  {/* Discover Us */}
                  <div className="w-[232px] mr-8">
                    <h2 className="text-[28px] font-medium mb-6">
                      Discover Us
                    </h2>
                    <ul className="space-y-3">
                      {[
                        { title: "Our Story", path: "/about-us" },
                        { title: "Our Approach", path: "/about-us" },
                        { title: "Our Vision & Mission", path: "/about-us" },
                        { title: "Why choose us", path: "/about-us" },
                        { title: "Leadership Team", path: "/leadership-team" },
                        { title: "Impact & Growth", path: "/about-us" },
                        { title: "FAQs", path: "/about-us" },
                      ].map((link, i) => (
                        <li
                          key={i}
                          className={`text-sm hover:text-blue-600 ${
                            pathname === link.path
                              ? "text-blue-600 font-semibold"
                              : "text-gray-800"
                          }`}
                        >
                          <Link href={link.path}>{link.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Divider */}
                  <div
                    style={{
                      width: "1px",
                      height: "500px",
                      background: "rgba(22, 86, 165, 0.05)",
                    }}
                    className="mx-6"
                  />

                  {/* Quick Links */}
                  <div className="w-[232px] mr-8">
                    <h2 className="text-[28px] font-medium mb-6">
                      Quick Links
                    </h2>

                    <Link
                      href="/online-consultation"
                      className="flex items-center justify-between w-full bg-blue-600 text-white px-4 py-2 rounded-lg mb-3"
                    >
                      Book Appointment
                    </Link>

                    <div className="space-y-3 mb-4">
                      {[
                        { number: "+91 94239 71260", icon: "/call.svg" },
                        { number: "+91 70309 44041", icon: "/calla.svg" },
                      ].map((phone, idx) => (
                        <a
                          key={idx}
                          href={`tel:${phone.number}`}
                          className="flex items-center gap-3 px-3 py-2 bg-gray-50 rounded-lg hover:bg-gray-100"
                        >
                          <img src={phone.icon} alt="call" className="w-6 h-6" />
                          <span>{phone.number}</span>
                        </a>
                      ))}
                    </div>

                    {[
                      { title: "Take a Quiz", path: "/resources" },
                      { title: "Our Specialists", path: "/doctors" },
                      { title: "Online Consult", path: "/online-consultation" },
                    ].map((link, idx) => (
                      <Link
                        key={idx}
                        href={link.path}
                        className="flex items-center justify-between w-full px-3 py-2 rounded-full hover:bg-gray-50"
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>

                  {/* Divider */}
                  <div
                    style={{
                      width: "1px",
                      height: "500px",
                      background: "rgba(22, 86, 165, 0.05)",
                    }}
                    className="mx-6"
                  />

                  {/* Additional Links */}
                  <div className="w-[232px]">
                    {[
                      { title: "EMI Options", path: "/emi-options" },
                      { title: "Fellowship", path: "/career" },
                      { title: "Our Centers", path: "/centers" },
                      { title: "Our Social Impact", path: "/about-us" },
                    ].map((link, idx) => (
                      <Link
                        key={idx}
                        href={link.path}
                        className="flex items-center justify-between w-full px-3 py-2 rounded-full hover:bg-gray-50"
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-1 px-3 py-2 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-800 text-sm font-medium">
            <span>En</span>
            <ChevronDown size={14} />
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-xl bg-gray-50 hover:bg-gray-100"
          >
            <Search size={20} className="text-gray-800" />
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-600"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
