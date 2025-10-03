// // Footer.jsx
// import React from "react";
// import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
// import Link from "next/link"; // ✅ Next.js routing

// export default function Footer() {
//   return (
//     <footer
//       className="relative w-full bg-cover text-white"
//       style={{ backgroundImage: "url('/footer.png')" }}
//     >
//       {/* dark overlay */}
//       <div className="absolute inset-0 bg-black/25" />

//       {/* Logo */}
//       <div className="flex items-center px-6 pt-10 md:px-[120px] md:pt-[86px] md:mb-[100px] lg:[200px] xl:[300px]">
//         <Link href="/">
//           <img
//             src="/logo1.png"
//             alt="Progenesis Logo"
//             className="w-[120px] h-[41.52px] md:w-[180px] object-contain"
//           />
//         </Link>
//       </div>

//       <div className="relative z-10 max-w-screen-2xl mx-auto pt-12 px-6 md:px-[120px]">
//         {/* Grid links */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-x-[8vw] gap-y-10">
//           {/* About */}
//           <div>
//             <h3 className="text-[#FFF] font-[Manrope] text-[16px] font-semibold leading-[24px] tracking-[-0.32px] mb-4">
//               About
//             </h3>
//             <ul className="space-y-4 font-[Manrope] text-[16px] font-normal leading-[24px] tracking-[-0.32px] text-white/50">
//               <li><a href="#" className="hover:text-white">About Us</a></li>
//               <li><a href="#" className="hover:text-white">Our Centers</a></li>
//               <li><a href="#" className="hover:text-white">Doctors</a></li>
//               <li><a href="#" className="hover:text-white">Careers</a></li>
//               <li><a href="#" className="hover:text-white">Success Stories</a></li>
//             </ul>
//           </div>

//           {/* Infertility */}
//           <div>
//             <h3 className="text-[#FFF] font-[Manrope] text-[16px] font-semibold leading-[24px] tracking-[-0.32px] mb-4">
//               Infertility
//             </h3>
//             <ul className="space-y-4 font-[Manrope] text-[16px] font-normal leading-[24px] tracking-[-0.32px] text-white/50">
//               <li><a href="#" className="hover:text-white">Female Infertility</a></li>
//               <li><a href="#" className="hover:text-white">Male Infertility</a></li>
//             </ul>
//           </div>

//           {/* Treatments */}
//           <div>
//             <h3 className="text-[#FFF] font-[Manrope] text-[16px] font-semibold leading-[24px] tracking-[-0.32px] mb-4">
//               Treatments
//             </h3>
//             <ul className="space-y-4 font-[Manrope] text-[16px] font-normal leading-[24px] tracking-[-0.32px] text-white/50">
//               <li><a href="#" className="hover:text-white">Advanced Treatments</a></li>
//               <li><a href="#" className="hover:text-white">Infertility Treatments</a></li>
//               <li><a href="#" className="hover:text-white">Fertility Preservation</a></li>
//               <li><a href="#" className="hover:text-white">Fertility Evaluation</a></li>
//             </ul>
//           </div>

//           {/* Patient Resources */}
//           <div>
//             <h3 className="text-[#FFF] font-[Manrope] text-[16px] font-semibold leading-[24px] tracking-[-0.32px] mb-4">
//               Patient Resources
//             </h3>
//             <ul className="space-y-4 font-[Manrope] text-[16px] font-normal leading-[24px] tracking-[-0.32px] text-white/50">
//               <li><a href="#" className="hover:text-white">International Patients</a></li>
//               <li><a href="#" className="hover:text-white">EMI Options</a></li>
//               <li><a href="#" className="hover:text-white">Second Opinion</a></li>
//               <li><a href="#" className="hover:text-white">Blogs</a></li>
//             </ul>
//           </div>

//           {/* Legal & Training */}
//           <div>
//             <h3 className="text-[#FFF] font-[Manrope] text-[16px] font-semibold leading-[24px] tracking-[-0.32px] mb-4">
//               Legal & Training
//             </h3>
//             <ul className="space-y-4 font-[Manrope] text-[16px] font-normal leading-[24px] tracking-[-0.32px] text-white/50">
//               <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
//               <li><a href="#" className="hover:text-white">Fellowships</a></li>
//             </ul>
//           </div>
//         </div>

//         {/* Tagline + Social */}
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-16 gap-8">
//           <p className="text-[#FFF] font-[Manrope] text-[16px] md:text-[32px] font-normal leading-[24px] md:leading-[40px] tracking-[-0.32px] md:tracking-[-0.64px] max-w-xl">
//             Aiming to be the benchmark for reproductive health care services.
//           </p>

//           <div className="flex space-x-4">
//             <a href="#" aria-label="LinkedIn" className="text-white/80 hover:text-white">
//               <Linkedin size={20} />
//             </a>
//             <a href="#" aria-label="Instagram" className="text-white/80 hover:text-white">
//               <Instagram size={20} />
//             </a>
//             <a href="#" aria-label="Facebook" className="text-white/80 hover:text-white">
//               <Facebook size={20} />
//             </a>
//             <a href="#" aria-label="Twitter" className="text-white/80 hover:text-white">
//               <Twitter size={20} />
//             </a>
//           </div>
//         </div>

//         {/* Bottom row */}
//         <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/20 pt-6 mt-10">
//           <p className="font-[Manrope] text-[14px] font-normal leading-[22px] tracking-[-0.28px] text-white/50">
//             © {new Date().getFullYear()} All Rights Reserved. Progenesis Fertility Center.
//           </p>
//         </div>
//       </div>
//     </footer>


//   );
// }




"use client";

import React, { useState } from "react";
import Link from "next/link";

interface ArrowDownProps {
  open: boolean;
}

const ArrowDown: React.FC<ArrowDownProps> = ({ open }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className={`text-white transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}`}
  >
    <path
      d="M9 11L12 14L15 11"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  </svg>
);

const Footer: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (key: string) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  const renderList = (key: string, items: { label: string; href: string }[]) => (
    <ul
      className={`ml-4 mt-2 space-y-2 text-sm md:text-base leading-6 text-white/60 
        ${openDropdown === key ? "block" : "hidden"}`}
    >
      {items.map((it) => (
        <li key={it.label}>
          <Link href={it.href} className="hover:text-white block">
            {it.label}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <footer
      className="relative w-full min-h-screen flex flex-col justify-between bg-cover text-white"
      style={{ backgroundImage: "url('/footer.png')" }}
    >
      <div className="absolute inset-0 bg-black/25" />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-between max-w-screen-2xl w-full mx-auto px-6 md:px-20 pt-10 md:pt-20 pb-10">
        <div>
          {/* Logo */}
          <div className="mb-10 md:mb-20">
            <Link href="/">
              <img
                src="/logo1.png"
                alt="Progenesis Logo"
                className="w-40 md:w-64 object-contain"
              />
            </Link>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-y-10 gap-x-8 md:gap-x-12 lg:gap-x-20">
            {/* About */}
            <div>
              <h3 className="text-base md:text-lg font-[Manrope] font-semibold leading-6 mb-4 text-white">
                About
              </h3>
              <ul className="space-y-2">
                {[
                  { label: "About Us", href: "/about" },
                  { label: "Our Centers", href: "/centers" },
                  { label: "Doctors", href: "/doctors" },
                  { label: "Careers", href: "/careers" },
                  { label: "Success Stories", href: "/success-stories" },
                ].map((it) => (
                  <li key={it.label}>
                    <Link
                      href={it.href}
                      className="text-base font-[Manrope] font-normal leading-6 text-white hover:opacity-80"
                    >
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Infertility (Dropdowns) */}
            <div>
              <h3 className="text-base md:text-lg font-[Manrope] font-semibold leading-6 mb-4 text-white">
                Infertility
              </h3>

              {/* Female Infertility */}
              <div className="mb-4">
                <button
                  type="button"
                  onClick={() => toggleDropdown("femaleInf")}
                  className="flex justify-between items-center w-full text-left"
                >
                  <span>Female Infertility</span>
                  <ArrowDown open={openDropdown === "femaleInf"} />
                </button>
                {renderList("femaleInf", [
                  { label: "Repeated IUI Failure", href: "#" },
                  { label: "Repeated IVF Failure", href: "#" },
                  { label: "Pregnancy after Menopause", href: "#" },
                  { label: "Low AMH", href: "#" },
                  { label: "PCOS", href: "#" },
                  { label: "Tubal Blockage", href: "#" },
                  { label: "Fibroids", href: "#" },
                  { label: "Endometriosis", href: "#" },
                ])}
              </div>

              {/* Male Infertility */}
              <div>
                <button
                  type="button"
                  onClick={() => toggleDropdown("maleInf")}
                  className="flex justify-between items-center w-full text-left"
                >
                  <span>Male Infertility</span>
                  <ArrowDown open={openDropdown === "maleInf"} />
                </button>
                {renderList("maleInf", [
                  { label: "Azoospermia", href: "#" },
                  { label: "Low Sperm Count", href: "#" },
                  { label: "Erectile Dysfunction (ED)", href: "#" },
                ])}
              </div>
            </div>

            {/* Treatments (Dropdowns) */}
            <div>
              <h3 className="text-base md:text-lg font-[Manrope] font-semibold leading-6 mb-4 text-white">
                Treatments
              </h3>

              <div className="mb-4">
                <button
                  type="button"
                  onClick={() => toggleDropdown("advTreat")}
                  className="flex justify-between items-center w-full text-left"
                >
                  <span>Advanced Treatments</span>
                  <ArrowDown open={openDropdown === "advTreat"} />
                </button>
                {renderList("advTreat", [
                  { label: "IMSI", href: "#" },
                  { label: "PICSI", href: "#" },
                  { label: "LAH", href: "#" },
                  { label: "Blastocyst Transfer", href: "#" },
                  { label: "Sequential Embryo Transfer", href: "#" },
                  { label: "PGD/PGS/PGT-A", href: "#" },
                  { label: "Class-1000 Modular Lab", href: "#" },
                  { label: "Trigas Incubators", href: "#" },
                  { label: "Witness System", href: "#" },
                  { label: "Cryopreservation of Human Gametes", href: "#" },
                ])}
              </div>

              <div className="mb-4">
                <button
                  type="button"
                  onClick={() => toggleDropdown("infTreat")}
                  className="flex justify-between items-center w-full text-left"
                >
                  <span>Infertility Treatments</span>
                  <ArrowDown open={openDropdown === "infTreat"} />
                </button>
                {renderList("infTreat", [
                  { label: "Ovulation Induction", href: "#" },
                  { label: "IUI", href: "#" },
                  { label: "IVF", href: "#" },
                  { label: "IVF–ICSI", href: "#" },
                  { label: "Frozen Embryo Transfer", href: "#" },
                  { label: "Fertility Surgery", href: "#" },
                ])}
              </div>

              <div className="mb-4">
                <button
                  type="button"
                  onClick={() => toggleDropdown("fPres")}
                  className="flex justify-between items-center w-full text-left"
                >
                  <span>Fertility Preservation</span>
                  <ArrowDown open={openDropdown === "fPres"} />
                </button>
                {renderList("fPres", [
                  { label: "Female Fertility Preservation", href: "#" },
                  { label: "Male Fertility Preservation", href: "#" },
                  { label: "Embryo Preservation", href: "#" },
                ])}
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => toggleDropdown("fEval")}
                  className="flex justify-between items-center w-full text-left"
                >
                  <span>Fertility Evaluation</span>
                  <ArrowDown open={openDropdown === "fEval"} />
                </button>
                {renderList("fEval", [
                  { label: "Female Analysis", href: "#" },
                  { label: "Male Analysis", href: "#" },
                ])}
              </div>
            </div>

            {/* Patient Resources */}
            <div>
              <h3 className="text-base md:text-lg font-[Manrope] font-normal leading-6 mb-4 text-white">
                Patient Resources
              </h3>
              <ul className="space-y-2">
                {[
                  { label: "International Patients", href: "/international-patients" },
                  { label: "EMI Options", href: "/emi-options" },
                  { label: "Second Opinion", href: "/second-opinion" },
                  { label: "Blogs", href: "/blog" },
                ].map((it) => (
                  <li key={it.label}>
                    <Link
                      href={it.href}
                      className="text-base font-[Manrope] font-normal leading-6 text-white hover:opacity-80"
                    >
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal & Training */}
            <div>
              <h3 className="text-base md:text-lg font-[Manrope] font-normal leading-6 mb-4 text-white">
                Legal & Training
              </h3>
              <ul className="space-y-2">
                {[
                  { label: "Privacy Policy", href: "/privacy-policy" },
                  { label: "Fellowships", href: "/fellowships" },
                ].map((it) => (
                  <li key={it.label}>
                    <Link
                      href={it.href}
                      className="text-base font-[Manrope] font-normal leading-6 text-white hover:opacity-80"
                    >
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Tagline + Socials */}
        <div className="mt-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <p className="text-base md:text-2xl leading-6 md:leading-10 font-normal max-w-sm md:max-w-2xl">
            Aiming to be the benchmark for reproductive health care services.
          </p>

          <div className="flex items-center gap-4">
            {["/linkedin.svg", "/instagram.svg", "/facebook.svg", "/threads.svg", "/twitter.svg"].map((icon, i, arr) => (
              <React.Fragment key={icon + i}>
                <a href="#" className="hover:opacity-100 opacity-80">
                  <img src={icon} className="w-8 h-8" alt="social" />
                </a>
                {i !== arr.length - 1 && (
                  <div className="h-6 w-px bg-[#685C52] md:bg-white" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Divider Line */}
        <div className="mt-10 w-full">
          <div className="w-full max-w-sm md:max-w-[1680px] h-px bg-white opacity-25" />
        </div>

        {/* Bottom row */}
        <div className="pt-6">
          <p className="text-sm md:text-base leading-6 text-white/50">
            © {new Date().getFullYear()} All Rights Reserved. Progenesis Fertility Center.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
