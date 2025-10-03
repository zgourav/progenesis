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
import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Search, X, ChevronDown, Phone } from "lucide-react";
import { centersData } from "@/page-components/centers/CenterCard";
/* -------------------- SEARCH SECTION -------------------- */
export function SearchSection({ onClose }: { onClose: () => void }) {
  const [activeStep, setActiveStep] = useState<"what" | "where" | "who" | null>("what");
  const treatments = [
    "IVF Treatment",
    "IUI Procedure",
    "PCOS",
    "Irregular Periods",
    "Repeated Miscarriages",
    "Infertility Issues",
    "Pregnancy after Menopause",
    "Ovulation Induction",
    "Low AMH",
    "Fibroids",
  ];
  const locations = [
    { name: "Nearby", desc: "Find clinic around you", icon: "/LocationsSection/Nearby.svg" },
    { name: "Pune", desc: "(Aundh – ITI Rd)", icon: "/LocationsSection/pune.png" },
    { name: "Nashik", desc: "(College Rd)", icon: "/LocationsSection/nasik.png" },
    { name: "Thane", desc: "(Ghodhbunder Rd)", icon: "/LocationsSection/thane.png" },
  ];
  const doctors = [
    { name: "Dr. Dinesh Wade", role: "Fertility Consultant, Pune", img: "/DoctorsSection/DrDinesh.png" },
    { name: "Dr. Unnati Mamtora", role: "Fertility Consultant, Borivali", img: "/DoctorsSection/DrUnnati.png" },
    { name: "Dr. Darshna Wahane", role: "Fertility Consultant, Panvel", img: "/DoctorsSection/DrDarshna.png" },
    { name: "Dr. Priti Pardeshi", role: "Fertility Consultant, Kalyan", img: "/DoctorsSection/DrPriti.png" },
  ];
  return (
    <section className="relative w-full bg-white shadow-md">
      {/* Search Tabs */}
      <div className="flex items-center w-full max-w-[1600px] mx-auto px-4 py-4 md:px-[80px] lg:px-[120px] gap-2">
        {["what", "where", "who"].map((step, idx) => (
          <button
            key={idx}
            onClick={() => setActiveStep(step as any)}
            className={`flex-1 px-4 py-3 rounded-xl text-left text-sm md:text-base transition
              ${activeStep === step ? "bg-[#1656A5] text-white" : "bg-gray-100 text-gray-600"}`}
          >
            {step === "what" && "What"}
            {step === "where" && "Where"}
            {step === "who" && "Who"}
          </button>
        ))}
        {/* Close */}
        <button
          onClick={onClose}
          className="h-[44px] w-[44px] rounded-xl bg-[#1656A5] flex items-center justify-center"
        >
          <X size={20} color="#fff" />
        </button>
      </div>
      {/* Popup */}
      {activeStep && (
        <div className="absolute left-1/2 top-[80px] -translate-x-1/2 bg-white rounded-2xl shadow-xl p-6 w-[90%] max-w-[600px] max-h-[400px] overflow-y-auto z-50">
          {activeStep === "what" && (
            <div className="grid grid-cols-2 gap-3">
              {treatments.map((t, i) => (
                <button
                  key={i}
                  className={`px-4 py-2 rounded-lg border text-sm
                    ${i === 0 ? "bg-[#1656A5] text-white" : "border-[#1656A5] text-[#1656A5]"}`}
                >
                  {t}
                </button>
              ))}
            </div>
          )}
          {activeStep === "where" && (
            <div className="space-y-3">
              {locations.map((l, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <Image src={l.icon} alt={l.name} width={40} height={40} className="rounded-md object-cover" />
                  <div>
                    <p className="font-medium text-gray-900">{l.name}</p>
                    <p className="text-sm text-gray-600">{l.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
          {activeStep === "who" && (
            <div className="space-y-3">
              {doctors.map((d, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <Image src={d.img} alt={d.name} width={48} height={48} className="rounded-full object-cover" />
                  <div>
                    <p className="font-medium text-gray-900">{d.name}</p>
                    <p className="text-sm text-gray-600">{d.role}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
/* -------------------- DROPDOWN DATA -------------------- */
const megaMenuData: Record<string, any> = {
  "About Us": {
    image: "/Navbar/about-image.png",
    columns: [
      {
        title: "Discover Us",
        links: [
          { label: "Why Progenesis", path: "/about-us#why-1" },
          { label: "Our Approach", path: "/about-us#our-approach" },
          { label: "Our Vision & Mission", path: "/about-us#our-vision" },
          { label: "Why choose us", path: "/about-us#why-choose-us" },
          { label: "Leadership Team", path: "/leadership-team" },
          { label: "Impact & Growth", path: "/about-us#impact-growth" },
          { label: "FAQs", path: "/about-us#faqs" },
        ],
      },
      {
        title: "Quick Links",
        links: [
          { label: "Book Appointment", path: "/appointment", isButton: true },
          { label: "+91 94239 71260", path: "tel:+919423971260", isPhone: true },
          { label: "+91 70309 44041", path: "tel:+917030944041", isPhone: true },
          { label: "Take a Quiz", path: "/quiz" },
          { label: "Online Consult", path: "/online-consult" },
          { label: "EMI Options", path: "/emi-options" },
        ],
      },
      {
        links: [
          { label: "Fellowship", path: "/fellowship" },
          { label: "Our Centers", path: "/centers" },
          { label: "Our Social Impact", path: "/social-impact" },
        ],
      },
    ],
  },
  "Infertility Issues": {
    image: "/Navbar/infertility-image.png",
    columns: [
      {
        title: "Know Infertility",
        links: [
          { label: "What is Infertility", path: "/infertility-issues#what" },
          { label: "Female Infertility Causes", path: "/infertility-issues#female" },
          { label: "Male Infertility Causes", path: "/infertility-issues#male" },
          { label: "Real Stories. Real Miracles.", path: "/stories" },
        ],
      },
      {
        title: "Quick Links",
        links: [
          { label: "Book Appointment", path: "/appointment" },
          { label: "+91 94239 71260", path: "tel:+919423971260" },
          { label: "+91 70309 44041", path: "tel:+917030944041" },
          { label: "Take a Quiz", path: "/quiz" },
          { label: "Online Consult", path: "/online-consult" },
          { label: "EMI Options", path: "/emi-options" },
        ],
      },
      {
        links: [
          { label: "Fellowship", path: "/fellowship" },
          { label: "Our Centers", path: "/centers" },
          { label: "Our Social Impact", path: "/social-impact" },
        ],
      },
    ],
  },
  "Our Centers": {
    image: "/Navbar/infertility-image.png",
    columns: [
      {
        title: "Where We Are",
        links: centersData.map((center) => ({
          label: center.name,
          path: `/centers/${center.id}#${center.name.toLowerCase()}`,
        })).slice(0, 9), // Showing first 9 centers like the image
      },
      {
        links: [
          { label: "Ahilyanagar", path: "/centers/16#ahilyanagar" },
          { label: "Amravati", path: "/centers/15#amravati" },
          { label: "Kolhapur", path: "/centers/14#kolhapur" },
          { label: "Nagpur", path: "/centers/13#nagpur" },
          { label: "Solapur", path: "/centers/12#solapur" },
          { label: "Pune", path: "/centers/4#pune" },
          { label: "Book Appointment", path: "/appointment", isButton: true },
          { label: "+91 94239 71260", path: "tel:+919423971260", isPhone: true },
          { label: "+91 70309 44041", path: "tel:+917030944041", isPhone: true },
        ],
      },
      {
        links: [
          { label: "Take a Quiz", path: "/quiz" },
          { label: "Online Consult", path: "/online-consult" },
          { label: "EMI Options", path: "/emi-options" },
          { label: "Fellowship", path: "/fellowship" },
          { label: "View All Centers", path: "/centers" },
        ],
      },
    ],
  },
  "Treatments": {
    image: "/Navbar/infertility-image.png",
    columns: [
      {
        title: "Solutions",
        links: [
          { label: "IVF", path: "/treatments#ivf" },
          { label: "IUI", path: "/treatments#iui" },
          { label: "ICSI", path: "/treatments#icsi" },
        ],
      },
      {
        title: "Preservation",
        links: [
          { label: "Female Preservation", path: "/treatments#female-preservation" },
          { label: "Male Preservation", path: "/treatments#male-preservation" },
        ],
      },
    ],
  },
};
/* -------------------- MEGA MENU -------------------- */
const MegaMenu = ({ menu }: { menu: any }) => {
  if (!menu) return null;
  return (
    <div className="fixed left-1/2 top-[80px] -translate-x-1/2 bg-white shadow-lg rounded-2xl z-50 w-[90vw] max-w-[1646px] flex gap-8 p-6">
      {menu.image && (
        <div className="hidden lg:block w-[350px] h-[300px] flex-shrink-0">
          <Image
            src={menu.image}
            alt="menu-img"
            width={350}
            height={300}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      )}
      {menu.columns.map((col: any, idx: number) => (
        <div key={idx} className="flex-1">
          {col.title && (
            <h3 className="text-lg font-semibold mb-3 text-gray-900">{col.title}</h3>
          )}
          <ul className="space-y-2">
            {col.links.map((link: any, i: number) => (
              <li key={i} className="text-sm">
                {link.isButton ? (
                  <Link
                    href={link.path}
                    className="inline-flex items-center px-4 py-2 bg-[#1656A5] text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    {link.label}
                  </Link>
                ) : link.isPhone ? (
                  <a
                    href={link.path}
                    className="inline-flex items-center text-gray-700 hover:text-blue-600"
                  >
                    <Phone size={16} className="mr-2" /> {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.path}
                    className="text-gray-700 hover:text-blue-600"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
/* -------------------- NAVBAR -------------------- */
export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();
  const closeTimeoutRef = useRef<number | null>(null);
  const navigationItems = [
    { label: "About Us", path: "/about-us", hasMegaMenu: true },
    { label: "Infertility Issues", path: "/infertility-issues", hasMegaMenu: true },
    { label: "Our Centers", path: "/centers", hasMegaMenu: true },
    { label: "Treatments", path: "/treatments", hasMegaMenu: true },
    { label: "Doctors", path: "/doctors", hasMegaMenu: false },
    { label: "Patient Resources", path: "/resources", hasMegaMenu: false },
    { label: "Careers", path: "/careers", hasMegaMenu: false },
  ];
  const handleMouseEnter = (label: string) => {
    if (closeTimeoutRef.current) window.clearTimeout(closeTimeoutRef.current);
    setOpenMenu(label);
  };
  const handleMouseLeave = () => {
    closeTimeoutRef.current = window.setTimeout(() => setOpenMenu(null), 200);
  };
  return (
    <header className="w-full bg-white font-sans relative">
      {/* Top bar */}
      {!isSearchOpen && (
        <div className="mx-auto flex items-center justify-between h-20 px-6 lg:px-[120px]">
          <Link href="/" className="w-[150px] h-[40px] relative">
            <Image src="/logo1.png" alt="Logo" fill className="object-contain" />
          </Link>
          <nav className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item, idx) => (
              <div
                key={idx}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.path}
                  className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm transition
                    ${
                      pathname === item.path || openMenu === item.label
                        ? "bg-[#1656A5] text-white"
                        : "text-gray-700 hover:bg-[#1656A5] hover:text-white"
                    }`}
                >
                  {item.label}
                  {item.hasMegaMenu && <ChevronDown size={18} />}
                </Link>
                {item.hasMegaMenu && openMenu === item.label && <MegaMenu menu={megaMenuData[item.label]} />}
              </div>
            ))}
          </nav>
          <button
            onClick={() => setIsSearchOpen(true)}
            className="h-10 w-10 flex items-center justify-center bg-gray-100 rounded-lg"
          >
            <Search size={18} />
          </button>
        </div>
      )}
      {/* Search Section */}
      {isSearchOpen && <SearchSection onClose={() => setIsSearchOpen(false)} />}
    </header>
  );
}