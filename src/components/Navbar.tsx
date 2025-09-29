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
  { label: "Success Stories", path: "/success-stories", hasMegaMenu: false },
  { label: "Patient Resources", path: "/resources", hasMegaMenu: true },
  { label: "Careers", path: "/careers", hasMegaMenu: false },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null); // controls which dropdown is open
  const pathname = usePathname();
const closeTimeoutRef = useRef<number | null>(null);

const handleMouseEnter = (label: string) => {
  // cancel pending close if any, then open immediately
  if (closeTimeoutRef.current) {
    window.clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = null;
  }
  setOpenMenu(label);
};

const handleMouseLeave = () => {
  // delay closing to avoid flicker while moving to dropdown
  if (closeTimeoutRef.current) window.clearTimeout(closeTimeoutRef.current);
  closeTimeoutRef.current = window.setTimeout(() => {
    setOpenMenu(null);
    closeTimeoutRef.current = null;
  }, 200); // 200ms delay, tweak if needed
};

// cleanup on unmount
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
            {/* Desktop Logo */}
            <div className="hidden lg:block w-[180.84px] h-[41.517px] relative">
              <Image
                src="/logo1.png"
                alt="Progenesis Logo"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Tablet Logo */}
            <div className="hidden md:block lg:hidden w-[140px] h-[32px] relative">
              <Image
                src="/logo1.png"
                alt="Progenesis Logo"
                fill
                className="object-contain"
              />
            </div>

            {/* Mobile Logo */}
            <div className="block md:hidden w-[104px] h-[23.88px] relative">
              <Image
                src="/logo1.png"
                alt="Progenesis Logo"
                fill
                className="object-contain"
              />
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
      {/* Trigger Link */}
      <Link
        href={item.path}
        className={`flex items-center gap-1 px-3 py-2 rounded-md text-[14px] leading-[24px] tracking-[-0.28px] transition ${
          pathname === item.path || openMenu === item.label
            ? "bg-[#1656A5] text-white"
            : "text-[#2C2C2C] hover:bg-[#1656A5] hover:text-white"
        }`}
      >
        {item.label}
        {item.hasMegaMenu && (
          <ChevronDown
            size={20}
            className="transition"
            stroke={
              pathname === item.path || openMenu === item.label
                ? "#fff"
                : "#2C2C2C"
            }
          />
        )}
      </Link>

      {/* Mega Menu Dropdown (opens when openMenu === item.label) */}
      {item.hasMegaMenu && openMenu === item.label && (
        <div
          className="absolute left-1/2 top-[80px] flex
                     -translate-x-1/2 bg-white shadow-lg rounded-2xl p-6 
                     w-[90vw] max-w-[1646px] h-[468px] overflow-hidden z-50"
        >
          {/* LEFT IMAGE */}
          <div className="w-[714px] h-full rounded-lg overflow-hidden flex-shrink-0 mr-10">
            <Image
              src="/Navbar/about-image.png"
              alt="About Us"
              width={714}
              height={468}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Divider */}
          <div className="mx-6 w-[1px] h-full bg-[rgba(22,86,165,0.05)]" />

          {/* Discover Us */}
          <div className="w-[232px] mr-10">
            <h2 className="text-[#2C2C2C] font-[Manrope] text-[28px] font-normal tracking-[-0.56px] mb-6">
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
  ].map((title, i) => {
    // conditionally set the link path
    const path = title === "Leadership Team" ? "/leadership-team" : "/about-us";

    return (
      <li key={i}>
        <Link
          href={path}
          className={`font-[Manrope] text-[14px] leading-[24px] tracking-[-0.28px] ${
            title === "Our Story"
              ? "text-[#1656A5] font-semibold"
              : "text-[#2C2C2C] hover:text-[#1656A5]"
          }`}
        >
          {title}
        </Link>
      </li>
    );
  })}
</ul>

          </div>

          {/* Divider */}
          <div className="mx-6 w-[1px] h-full bg-[rgba(22,86,165,0.05)]" />

          {/* Quick Links */}
          <div className="w-[232px] mr-10">
            <h2 className="text-[#2C2C2C] font-[Manrope] text-[28px] font-normal tracking-[-0.56px] mb-6">
              Quick Links
            </h2>

            {/* Book Appointment Button */}
            <Link
              href="/online-consultation"
              className="flex items-center justify-center gap-2 bg-[#1656A5] px-3 py-2 rounded-lg mb-3"
            >
              <span className="text-[#F9F9F9] font-[Manrope] text-[14px] font-normal leading-[24px] tracking-[-0.28px]">
                Book Appointment
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12H19M19 12L13 6M19 12L13 18"
                  stroke="#F9F9F9"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            {/* Phone / WhatsApp */}
<div className="space-y-3 mb-4">
  {/* Phone */}
  <a
    href="tel:+919423971260"
    className="flex items-center gap-3 px-3 py-2 rounded-[8px] bg-[rgba(22,86,165,0.10)]"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 27 26"
      fill="none"
    >
      <mask
        id="mask0_phone"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="27"
        height="26"
      >
        <rect x="0.5" width="26" height="26" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_phone)">
        <path
          d="M20.6771 21.3415C18.9799 21.3415 17.2149 20.8947 15.3823 20.0009C13.5496 19.1072 11.8344 17.8568 10.2364 16.2499C8.63853 14.6429 7.3927 12.9276 6.49895 11.104C5.6052 9.28043 5.15833 7.52001 5.15833 5.82279C5.15833 5.49002 5.26666 5.21278 5.48333 4.99106C5.69999 4.76915 5.97083 4.6582 6.29583 4.6582H8.46249C8.76944 4.6582 9.03576 4.75299 9.26145 4.94258C9.48714 5.13216 9.64513 5.38043 9.73541 5.68737L10.2229 7.9082C10.2771 8.21515 10.268 8.48598 10.1958 8.7207C10.1236 8.95543 9.99721 9.14501 9.81666 9.28945L7.51457 11.3749C7.98402 12.2235 8.49409 13.0044 9.04478 13.7176C9.59548 14.4308 10.1778 15.1033 10.7917 15.7353C11.4417 16.3853 12.1458 16.9901 12.9042 17.5499C13.6625 18.1096 14.5021 18.6422 15.4229 19.1478L17.6708 16.8457C17.8514 16.6471 18.0455 16.5207 18.2531 16.4665C18.4608 16.4124 18.7 16.4033 18.9708 16.4395L20.8125 16.8186C21.1194 16.8908 21.3677 17.0443 21.5573 17.279C21.7469 17.5138 21.8417 17.7846 21.8417 18.0915V20.204C21.8417 20.529 21.7307 20.7999 21.5088 21.0165C21.2871 21.2332 21.0098 21.3415 20.6771 21.3415Z"
          fill="#1C1B1F"
        />
      </g>
    </svg>
    <span className="text-[#252525] text-[14px] leading-[24px]">
      +91 94239 71260
    </span>
  </a>

  {/* WhatsApp */}
  <a
    href="https://wa.me/917030944041"
    className="flex items-center gap-3 px-3 py-2 rounded-[8px] bg-[rgba(22,86,165,0.10)]"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 27 26"
      fill="none"
    >
      <mask
        id="mask0_whatsapp"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="27"
        height="26"
      >
        <rect x="0.5" width="26" height="26" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_whatsapp)">
        <path
          d="M21.5494 9.5707C21.087 8.54882 20.4231 7.63136 19.5802 6.8407C18.7374 6.05751 17.7602 5.43841 16.6712 5.00578C15.5449 4.55824 14.3515 4.33447 13.1207 4.33447C11.89 4.33447 10.6965 4.55824 9.57023 5.00578C8.48122 5.43841 7.50409 6.05005 6.66122 6.8407C5.81835 7.63136 5.1545 8.54882 4.69204 9.5707C4.21467 10.6299 3.96851 11.7637 3.96851 12.9273C3.96851 14.9636 4.72932 16.9178 6.12415 18.4693L5.37825 22.5345L9.34646 20.7667C10.5324 21.2739 11.793 21.5275 13.1133 21.5275C14.344 21.5275 15.5375 21.3037 16.6638 20.8562C17.7528 20.4236 18.7299 19.8119 19.5728 19.0213C20.4156 18.2306 21.0795 17.3132 21.542 16.2913C22.0193 15.2321 22.2655 14.0983 22.2655 12.9347C22.273 11.7637 22.0268 10.6373 21.5494 9.5707Z"
          stroke="#1C1B1F"
          strokeWidth="0.7"
        />
        <path
          d="M16.8311 14.645C16.4432 14.451 16.1598 14.3317 15.9584 14.2571C15.8316 14.2124 15.5333 14.0781 15.4288 14.1601C15.1006 14.4287 14.7501 15.1895 14.3771 15.3312C13.4522 15.1522 12.5944 14.5182 11.9231 13.8692C11.6247 13.5858 11.0728 12.7802 10.9534 12.5639C10.931 12.3401 11.3338 12.0418 11.4233 11.8702C11.8858 11.3481 11.5352 11.0199 11.4756 10.8036C11.3711 10.5798 11.1921 10.177 11.0355 9.84883C10.9012 9.63252 10.8713 9.31178 10.6327 9.19244C9.61823 8.67031 9.03646 9.71457 8.79777 10.2591C7.35818 13.7275 16.0106 20.3288 17.771 15.7788C17.8605 15.3834 17.8232 15.2342 17.6889 15.0552C17.4204 14.8688 17.1071 14.7867 16.8311 14.645Z"
          stroke="#1C1B1F"
          strokeWidth="0.7"
        />
      </g>
    </svg>
    <span className="text-[#252525] text-[14px] leading-[24px]">
      +91 70309 44041
    </span>
  </a>
</div>


            {/* Extra Links */}
            {[
              { title: "Take a Quiz", path: "/resources" },
              { title: "Our Specialists", path: "/doctors" },
              { title: "Online Consult", path: "/online-consultation" },
            ].map((link, idx) => (
              <Link
                key={idx}
                href={link.path}
                className="flex items-center justify-between w-full px-3 py-2 rounded-full hover:bg-gray-50 text-[#252525] text-[14px] leading-[24px]"
              >
                {link.title}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#252525" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className="mx-6 w-[1px] h-full bg-[rgba(22,86,165,0.05)]" />

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
                className="flex items-center justify-between w-full px-3 py-2 rounded-full hover:bg-gray-50 text-[#252525] text-[14px] leading-[24px]"
              >
                {link.title}
                <ChevronDown size={20} stroke="#252525" />
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
              className={`text-[14px] ${
                pathname === item.path
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
          {/* Desktop / Tablet: Search & Lang */}
          <div className="hidden md:flex items-center gap-3">
            <button className="flex items-center gap-1 h-[40px] px-4 rounded-lg bg-[rgba(0,0,0,0.05)] text-sm">
              En <ChevronDown size={16} />
            </button>
            <button className="flex items-center justify-center h-[40px] w-[40px] rounded-lg bg-[rgba(0,0,0,0.05)]">
              <Search size={20} />
            </button>
          </div>

          {/* Mobile Buttons */}
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
    </header>
  );
}
