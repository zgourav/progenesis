// "use client";

// import React, { useState } from "react";
// import Link from "next/link"; // ✅ Next.js routing
// import { usePathname } from "next/navigation"; // ✅ For active link highlighting
// import { Search, Menu, X, ChevronDown } from "lucide-react";


// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const pathname = usePathname();


//   const navigationItems = [
//     { label: "About Us", path: "/about-us", hasMegaMenu: true },
//     { label: "Infertility Issues", path: "/infertility-issues" },
//     { label: "Our Centers", path: "/centers" },
//     { label: "Treatments", path: "/infertility-treatment" },
//     { label: "Doctors", path: "/doctors" },
//     { label: "Success Stories", path: "/success-stories" },
//     { label: "Patient Resources", path: "/resources" },
//     { label: "Careers", path: "/careers" },
//   ];

//   return (
//     <header className="w-full bg-white border-b shadow-sm font-sans">
//       <div className="mx-auto flex items-center justify-between h-20 px-4 md:px-[80px] lg:px-[120px]">
//         {/* Logo */}
//         <div className="flex items-center">
//           <Link href="/">
//             <img
//               src="/logo1.png"
//               alt="Progenesis Logo"
//               className="w-[120px] h-[41.52px] md:w-[180px] object-contain"
//             />
//           </Link>
//         </div>

//         {/* Desktop Nav */}
//         <nav className="hidden lg:flex items-center space-x-6">
//           {navigationItems.map((item, index) => (
//             <div key={index} className="relative group">
//               <Link
//                 href={item.path}
//                 className={`flex items-center space-x-1 text-base font-medium px-1 py-2 rounded-md transition ${
//                   pathname === item.path
//                     ? "text-blue-600 font-semibold"
//                     : item.hasMegaMenu
//                     ? "group-hover:bg-blue-600 group-hover:text-white text-gray-800"
//                     : "hover:text-blue-600 text-gray-800"
//                 }`}
//               >
//                 {item.label}
//                 {item.hasMegaMenu && <ChevronDown size={16} />}
//               </Link>

//               {/* Mega Menu for About Us */}
//               {item.hasMegaMenu && (
//                 <div
//                   className="absolute -left-28 top-[104px] mt-2 hidden group-hover:flex
//                              bg-white shadow-lg rounded-2xl p-6
//                              max-w-[1646px] h-[468px]"
//                 >
//                   {/* Left Image */}
//                   <div className="w-[375px] h-[388px] rounded-lg overflow-hidden mr-8">
//                     <img
//                       src="./about-image.jpg"
//                       alt="About Us"
//                       className="w-full h-full object-cover rounded-lg"
//                     />
//                   </div>

//                   {/* Divider */}
//                   <div
//                     style={{
//                       width: "1px",
//                       height: "500px",
//                       background: "rgba(22, 86, 165, 0.05)",
//                     }}
//                     className="mx-6"
//                   />

//                   {/* Discover Us */}
//                   <div className="w-[232px] mr-8">
//                     <h2 className="text-[28px] font-medium mb-6">
//                       Discover Us
//                     </h2>
//                     <ul className="space-y-3">
//                       {[
//                         { title: "Our Story", path: "/about-us" },
//                         { title: "Our Approach", path: "/about-us" },
//                         { title: "Our Vision & Mission", path: "/about-us" },
//                         { title: "Why choose us", path: "/about-us" },
//                         { title: "Leadership Team", path: "/leadership-team" },
//                         { title: "Impact & Growth", path: "/about-us" },
//                         { title: "FAQs", path: "/about-us" },
//                       ].map((link, i) => (
//                         <li
//                           key={i}
//                           className={`text-sm hover:text-blue-600 ${
//                             pathname === link.path
//                               ? "text-blue-600 font-semibold"
//                               : "text-gray-800"
//                           }`}
//                         >
//                           <Link href={link.path}>{link.title}</Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   {/* Divider */}
//                   <div
//                     style={{
//                       width: "1px",
//                       height: "500px",
//                       background: "rgba(22, 86, 165, 0.05)",
//                     }}
//                     className="mx-6"
//                   />

//                   {/* Quick Links */}
//                   <div className="w-[232px] mr-8">
//                     <h2 className="text-[28px] font-medium mb-6">
//                       Quick Links
//                     </h2>

//                     <Link
//                       href="/online-consultation"
//                       className="flex items-center justify-between w-full bg-blue-600 text-white px-4 py-2 rounded-lg mb-3"
//                     >
//                       Book Appointment
//                     </Link>

//                     <div className="space-y-3 mb-4">
//                       {[
//                         { number: "+91 94239 71260", icon: "/call.svg" },
//                         { number: "+91 70309 44041", icon: "/calla.svg" },
//                       ].map((phone, idx) => (
//                         <a
//                           key={idx}
//                           href={`tel:${phone.number}`}
//                           className="flex items-center gap-3 px-3 py-2 bg-gray-50 rounded-lg hover:bg-gray-100"
//                         >
//                           <img src={phone.icon} alt="call" className="w-6 h-6" />
//                           <span>{phone.number}</span>
//                         </a>
//                       ))}
//                     </div>

//                     {[
//                       { title: "Take a Quiz", path: "/resources" },
//                       { title: "Our Specialists", path: "/doctors" },
//                       { title: "Online Consult", path: "/online-consultation" },
//                     ].map((link, idx) => (
//                       <Link
//                         key={idx}
//                         href={link.path}
//                         className="flex items-center justify-between w-full px-3 py-2 rounded-full hover:bg-gray-50"
//                       >
//                         {link.title}
//                       </Link>
//                     ))}
//                   </div>

//                   {/* Divider */}
//                   <div
//                     style={{
//                       width: "1px",
//                       height: "500px",
//                       background: "rgba(22, 86, 165, 0.05)",
//                     }}
//                     className="mx-6"
//                   />

//                   {/* Additional Links */}
//                   <div className="w-[232px]">
//                     {[
//                       { title: "EMI Options", path: "/emi-options" },
//                       { title: "Fellowship", path: "/career" },
//                       { title: "Our Centers", path: "/centers" },
//                       { title: "Our Social Impact", path: "/about-us" },
//                     ].map((link, idx) => (
//                       <Link
//                         key={idx}
//                         href={link.path}
//                         className="flex items-center justify-between w-full px-3 py-2 rounded-full hover:bg-gray-50"
//                       >
//                         {link.title}
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </nav>

//         {/* Right Controls */}
//         <div className="flex items-center space-x-3">
//           <button className="flex items-center space-x-1 px-3 py-2 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-800 text-sm font-medium">
//             <span>En</span>
//             <ChevronDown size={14} />
//           </button>
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="p-2 rounded-xl bg-gray-50 hover:bg-gray-100"
//           >
//             <Search size={20} className="text-gray-800" />
//           </button>
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="lg:hidden p-2 text-gray-600"
//           >
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

















// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { Search, Menu, X, ChevronDown } from "lucide-react";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const pathname = usePathname();

//   const navigationItems = [
//     { label: "About Us", path: "/about-us", hasMegaMenu: true },
//     { label: "Infertility Issues", path: "/infertility-issues",hasMegaMenu: true },
//     { label: "Our Centers", path: "/centers",hasMegaMenu: true },
//     { label: "Treatments", path: "/infertility-treatment", hasMegaMenu: true },
//     { label: "Doctors", path: "/doctors" ,hasMegaMenu: false},
//     { label: "Success Stories", path: "/success-stories",hasMegaMenu: false },
//     { label: "Patient Resources", path: "/resources",hasMegaMenu: true },
//     { label: "Careers", path: "/careers",hasMegaMenu: false },
//   ];

//   return (
//     <header className="w-full bg-white  shadow-sm font-sans">
//       <div className="mx-auto flex items-center justify-between h-20 px-4 md:px-[80px] lg:px-[120px]">
//         {/* Logo */}
//         <div className="flex items-center flex-shrink-0 w-[180.84px] h-[41.517px] relative">
//           <Link href="/">
//             <Image
//               src="/logo1.png"
//               alt="Progenesis Logo"
//               fill
//               className="object-contain"
//               priority
//             />
//           </Link>
//         </div>

//         {/* Desktop Nav */}
//         <nav className="hidden lg:flex items-center space-x-6">
//           {navigationItems.map((item, index) => (
//             <div key={index} className="relative group">
//               <Link
//                 href={item.path}
//                 className={`flex items-center gap-1 px-1 py-2 rounded-md text-[14px] font-normal leading-[24px] tracking-[-0.28px] ${
//                   pathname === item.path
//                     ? "text-blue-600 font-semibold"
//                     : "text-[#2C2C2C] hover:text-blue-600"
//                 }`}
//               >
//                 {item.label}
//                 {item.hasMegaMenu && <ChevronDown size={20} stroke="#2C2C2C" />}
//               </Link>

//               {/* Mega Menu for About Us */}
// {/* Mega Menu for About Us */}
// {item.hasMegaMenu && (
//   <div
//     className="absolute left-1/2 top-[80px] hidden group-hover:flex 
//                -translate-x-1/2 bg-white shadow-lg rounded-2xl p-6 
//                w-[90vw] max-w-[1646px] h-[468px] overflow-hidden"
//   >
//     {/* Left Image */}
//     <div className="w-[714px] h-full rounded-lg overflow-hidden flex-shrink-0 mr-10">
//       <Image
//         src="/Navbar/about-image.png"
//         alt="About Us"
//         width={714}
//         height={468} // match dropdown height
//         className="w-full h-full object-cover rounded-lg"
//       />
//     </div>

//     {/* Divider */}
//     <div
//       className="mx-6"
//       style={{
//         width: "1px",
//         height: "100%",
//         background: "rgba(22, 86, 165, 0.05)",
//       }}
//     />

//     {/* Discover Us */}
//     <div className="w-[232px] mr-10">
//       <h2 className="text-[#2C2C2C] font-[Manrope] text-[28px] font-normal tracking-[-0.56px] mb-6">
//         Discover Us
//       </h2>
//       <ul className="space-y-3">
//         {[
//           { title: "Our Story", path: "/about-us", active: true },
//           { title: "Our Approach", path: "/about-us" },
//           { title: "Our Vision & Mission", path: "/about-us" },
//           { title: "Why choose us", path: "/about-us" },
//           { title: "Leadership Team", path: "/leadership-team" },
//           { title: "Impact & Growth", path: "/about-us" },
//           { title: "FAQs", path: "/about-us" },
//         ].map((link, i) => (
//           <li key={i}>
//             <Link
//               href={link.path}
//               className={`font-[Manrope] text-[14px] leading-[24px] tracking-[-0.28px] ${
//                 link.active
//                   ? "text-[#1656A5] font-semibold"
//                   : "text-[#2C2C2C] font-normal hover:text-[#1656A5]"
//               }`}
//             >
//               {link.title}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>

//     {/* Divider */}
//     <div
//       className="mx-6"
//       style={{
//         width: "1px",
//         height: "100%",
//         background: "rgba(22, 86, 165, 0.05)",
//       }}
//     />

//     {/* Quick Links */}
//     <div className="w-[232px] mr-10">
//       <h2 className="text-[#2C2C2C] font-[Manrope] text-[28px] font-normal tracking-[-0.56px] mb-6">
//         Quick Links
//       </h2>

//       {/* Book Appointment Button */}
//       <Link
//         href="/online-consultation"
//         className="flex items-center justify-center gap-2 bg-[#1656A5] px-3 py-2 rounded-lg mb-3"
//       >
//         <span className="text-[#F9F9F9] font-[Manrope] text-[14px] font-normal leading-[24px] tracking-[-0.28px]">
//           Book Appointment
//         </span>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//         >
//           <path
//             d="M5 12H19M19 12L13 6M19 12L13 18"
//             stroke="#F9F9F9"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//       </Link>

//       {/* Phone Numbers */}
//       <div className="space-y-3 mb-4">
//         {[
//           { number: "+91 94239 71260", icon: "/call.svg" },
//           { number: "+91 70309 44041", icon: "/calla.svg" },
//         ].map((phone, idx) => (
//           <a
//             key={idx}
//             href={`tel:${phone.number}`}
//             className="flex items-center gap-3 px-3 py-2 bg-gray-50 rounded-lg hover:bg-gray-100"
//           >
//             <Image src={phone.icon} alt="call" width={24} height={24} />
//             <span className="text-[#252525] font-[Manrope] text-[14px] font-normal leading-[24px] tracking-[-0.28px]">
//               {phone.number}
//             </span>
//           </a>
//         ))}
//       </div>

//       {/* Extra Links */}
//       {[
//         { title: "Take a Quiz", path: "/resources" },
//         { title: "Our Specialists", path: "/doctors" },
//         { title: "Online Consult", path: "/online-consultation" },
//       ].map((link, idx) => (
//         <Link
//           key={idx}
//           href={link.path}
//           className="flex items-center justify-between w-full px-3 py-2 rounded-full hover:bg-gray-50 text-[#252525] font-[Manrope] text-[14px] font-normal leading-[24px] tracking-[-0.28px]"
//         >
//           {link.title}
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             fill="none"
//             viewBox="0 0 24 24"
//           >
//             <path
//               d="M5 12H19M19 12L13 6M19 12L13 18"
//               stroke="#252525"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </Link>
//       ))}
//     </div>

//     {/* Divider */}
//     <div
//       className="mx-6"
//       style={{
//         width: "1px",
//         height: "100%",
//         background: "rgba(22, 86, 165, 0.05)",
//       }}
//     />

//     {/* Additional Links */}
//     <div className="w-[232px]">
//       {[
//         { title: "EMI Options", path: "/emi-options" },
//         { title: "Fellowship", path: "/career" },
//         { title: "Our Centers", path: "/centers" },
//         { title: "Our Social Impact", path: "/about-us" },
//       ].map((link, idx) => (
//         <Link
//           key={idx}
//           href={link.path}
//           className="flex items-center justify-between w-full px-3 py-2 rounded-full hover:bg-gray-50 text-[#252525] font-[Manrope] text-[14px] font-normal leading-[24px] tracking-[-0.28px]"
//         >
//           {link.title}
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             fill="none"
//             viewBox="0 0 24 24"
//           >
//             <path
//               d="M5 12H19M19 12L13 6M19 12L13 18"
//               stroke="#252525"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </Link>
//       ))}
//     </div>
//   </div>
// )}



//             </div>
//           ))}
//         </nav>

//         {/* Right Controls */}
//         <div className="flex items-center space-x-3">
//           {/* Language Selector */}
//           <button className="flex items-center gap-1 h-[56px] px-4 py-2 rounded-[16px] bg-[rgba(0,0,0,0.05)] backdrop-blur-[7.5px] text-[#2C2C2C] text-sm font-medium">
//             <span>En</span>
//             <ChevronDown size={20} stroke="#2C2C2C" />
//           </button>

//           {/* Search */}
//           <button className="inline-flex h-[56px] px-4 py-2 items-center justify-center rounded-[16px] bg-[rgba(0,0,0,0.05)] backdrop-blur-[7.5px]">
//             <Search size={24} stroke="#2C2C2C" />
//           </button>

//           {/* Mobile Menu Toggle */}
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="lg:hidden p-2 text-gray-600"
//           >
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;



"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Search, Menu, X, ChevronDown } from "lucide-react";

const navigationItems = [
  { label: "About Us", path: "/about-us", hasMegaMenu: true },
  { label: "Infertility Issues", path: "/infertility-issues", hasMegaMenu: true },
  { label: "Our Centers", path: "/centers", hasMegaMenu: true },
  { label: "Treatments", path: "/infertility-treatment", hasMegaMenu: true },
  { label: "Doctors", path: "/doctors", hasMegaMenu: false },
  { label: "Success Stories", path: "/resources", hasMegaMenu: false },
  { label: "Patient Resources", path: "/resources", hasMegaMenu: true },
  { label: "Careers", path: "/careers", hasMegaMenu: false },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);

  const pathname = usePathname();
  const closeTimeoutRef = useRef<number | null>(null);

  const handleMouseEnter = (label: string) => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenMenu(label);
  };

  const handleMouseLeave = () => {
    if (closeTimeoutRef.current) window.clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = window.setTimeout(() => {
      setOpenMenu(null);
      closeTimeoutRef.current = null;
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        window.clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = null;
      }
    };
  }, []);

  return (
    <header className="w-full bg-white font-sans">
      <div className="mx-auto flex items-center justify-between h-20 px-4 md:px-[80px] lg:px-[120px]">
        {/* LOGO */}
        <div className="flex items-center">
          <Link href="/" className="flex-shrink-0 relative">
            <div className="hidden lg:block w-[180.84px] h-[41.517px] relative">
              <Image src="/logo1.png" alt="Progenesis Logo" fill className="object-contain" priority />
            </div>
            <div className="hidden md:block lg:hidden w-[140px] h-[32px] relative">
              <Image src="/logo1.png" alt="Progenesis Logo" fill className="object-contain" />
            </div>
            <div className="block md:hidden w-[104px] h-[23.88px] relative">
              <Image src="/logo1.png" alt="Progenesis Logo" fill className="object-contain" />
            </div>
          </Link>
        </div>

        {/* DESKTOP NAVBAR */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navigationItems.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href={item.path}
                className={`flex items-center gap-1 px-3 py-2 rounded-md text-[14px] leading-[24px] tracking-[-0.28px] transition ${pathname === item.path || openMenu === item.label
                    ? "bg-[#1656A5] text-white"
                    : "text-[#2C2C2C] hover:bg-[#1656A5] hover:text-white"
                  }`}
              >
                {item.label}
                {item.hasMegaMenu && <ChevronDown size={20} className="transition" />}
              </Link>

              {/* Mega Menu */}
             {item.hasMegaMenu && openMenu === item.label && (
  <div
    className="fixed left-1/2 top-[80px] -translate-x-1/2 
               bg-white shadow-lg rounded-2xl overflow-hidden z-50
               w-[90vw] max-w-[1646px]
               flex flex-col md:flex-row p-6 gap-8"
  >
    {/* LEFT IMAGE (Desktop only) */}
    <div className="hidden lg:block w-[714px] h-[468px] flex-shrink-0">
      <Image
        src="/Navbar/about-image.png"
        alt="About Us"
        width={714}
        height={468}
        className="w-full h-full object-cover rounded-lg"
      />
    </div>

    {/* Discover Us */}
    <div className="w-full md:w-1/3">
      <h2 className="text-[#2C2C2C] text-[20px] md:text-[28px] font-normal mb-4">
        Discover Us
      </h2>
      <ul className="space-y-3">
        {[
          "Our Story",
          "Our Approach",
          "Our Vision & Mission",
          "Why choose us",
          "Leadership Team",
          "Impact & Growth",
          "FAQs",
        ].map((title, i) => (
          <li key={i}>
            <Link
              href="/about-us"
              className="text-[14px] leading-[24px] text-[#2C2C2C] hover:text-[#1656A5]"
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>

    {/* Quick Links */}
    <div className="w-full md:w-1/3">
      <h2 className="text-[#2C2C2C] text-[20px] md:text-[28px] font-normal mb-4">
        Quick Links
      </h2>
      <Link
        href="/online-consultation"
        className="block text-center bg-[#1656A5] text-white rounded-lg px-4 py-2 mb-4"
      >
        Book Appointment →
      </Link>
      <a href="tel:+919423971260" className="block mb-2">
        📞 +91 94239 71260
      </a>
      <a href="https://wa.me/917030944041" className="block">
        💬 +91 70309 44041
      </a>
    </div>

    {/* Additional Links */}
    <div className="w-full md:w-1/3">
      <h2 className="text-[#2C2C2C] text-[20px] md:text-[28px] font-normal mb-4">
        Extra
      </h2>
      {[
        { title: "EMI Options", path: "/emi-options" },
        { title: "Fellowship", path: "/career" },
        { title: "Our Centers", path: "/centers" },
        { title: "Our Social Impact", path: "/about-us" },
      ].map((link, idx) => (
        <Link
          key={idx}
          href={link.path}
          className="block px-3 py-2 hover:bg-gray-50 rounded-md"
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

        {/* TABLET NAVBAR */}
        <nav className="hidden md:flex lg:hidden items-center space-x-5">
          {navigationItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.path}
              className={`text-[14px] ${pathname === item.path
                  ? "text-blue-600 font-semibold"
                  : "text-[#2C2C2C] hover:text-blue-600"
                }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* RIGHT CONTROLS */}
        <div className="flex items-center gap-2">
          {/* Desktop / Tablet */}
          <div className="hidden md:flex items-center gap-3">
            <button className="flex items-center gap-1 h-[40px] px-4 rounded-lg bg-[rgba(0,0,0,0.05)] text-sm">
              En <ChevronDown size={16} />
            </button>
            <button className="flex items-center justify-center h-[40px] w-[40px] rounded-lg bg-[rgba(0,0,0,0.05)]">
              <Search size={20} />
            </button>
          </div>

          {/* Mobile */}
          <div className="flex md:hidden items-center gap-2">
            <button className="flex items-center justify-center p-2 rounded-md bg-[rgba(0,0,0,0.25)] backdrop-blur-[7.5px]">
              <Search size={24} color="#F9F9F9" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center justify-center p-2 rounded-md bg-[rgba(0,0,0,0.25)] backdrop-blur-[7.5px]"
            >
              {isMenuOpen ? <X size={24} color="#F9F9F9" /> : <Menu size={24} color="#F9F9F9" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg p-4 space-y-4">
          {navigationItems.map((item, idx) => (
            <div key={idx}>
              <button
                className="flex justify-between w-full text-left py-2 text-[#2C2C2C] font-medium"
                onClick={() => setMobileOpen(mobileOpen === item.label ? null : item.label)}
              >
                {item.label}
                {item.hasMegaMenu && <ChevronDown size={16} className={`${mobileOpen === item.label ? "rotate-180" : ""}`} />}
              </button>
              {item.hasMegaMenu && mobileOpen === item.label && (
                <div className="pl-4 space-y-2">
                  <Link href="/about-us" className="block text-sm text-gray-600">Our Story</Link>
                  <Link href="/about-us" className="block text-sm text-gray-600">Our Vision & Mission</Link>
                  <Link href="/doctors" className="block text-sm text-gray-600">Our Specialists</Link>
                  <Link href="/resources" className="block text-sm text-gray-600">Take a Quiz</Link>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
