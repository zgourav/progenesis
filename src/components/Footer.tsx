// Footer.jsx
import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link"; // ✅ Next.js routing

export default function Footer() {
  return (
    <footer
      className="relative w-full bg-cover  text-white md:h-[1200px]"
      style={{ backgroundImage: "url('/footer.png')" }} // ✅ keep in public/
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/25" />


      <div className="flex items-center md:px-[120px] md:pt-[86px] md:pb-[300px]">
        <Link href="/">
          <img
            src="/logo1.png"
            alt="Progenesis Logo"
            className="w-[120px] h-[41.52px] md:w-[180px] object-contain"
          />
        </Link>
      </div>

      <div className="relative z-10 max-w-screen-2xl mx-auto lg:px-12 py-16">
        {/* Grid links */}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-[200px] gap-y-10">
          {/* About */}
          <div>
            <h3 className="text-[#F9F9F9] font-[Manrope] text-[16px] font-semibold leading-[24px] tracking-[-0.32px] mb-4">
              About
            </h3>
            <ul className="space-y-4 text-[#F9F9F9]/80 font-[Manrope] text-[16px] font-normal leading-[24px] tracking-[-0.32px]">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Our Centers</a></li>
              <li><a href="#" className="hover:text-white">Doctors</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Success Stories</a></li>
            </ul>
          </div>

          {/* Infertility */}
          <div>
            <h3 className="text-[#F9F9F9] font-[Manrope] text-[16px] font-semibold leading-[24px] tracking-[-0.32px] mb-4">
              Infertility
            </h3>
            <ul className="space-y-4 text-[#F9F9F9]/80 font-[Manrope] text-[16px] font-normal leading-[24px] tracking-[-0.32px]">
              <li><a href="#" className="hover:text-white">Female Infertility</a></li>
              <li><a href="#" className="hover:text-white">Male Infertility</a></li>
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h3 className="text-[#F9F9F9] font-[Manrope] text-[16px] font-semibold leading-[24px] tracking-[-0.32px] mb-4">
              Treatments
            </h3>
            <ul className="space-y-4 text-[#F9F9F9]/80 font-[Manrope] text-[16px] font-normal leading-[24px] tracking-[-0.32px]">
              <li><a href="#" className="hover:text-white">Advanced Treatments</a></li>
              <li><a href="#" className="hover:text-white">Infertility Treatments</a></li>
              <li><a href="#" className="hover:text-white">Fertility Preservation</a></li>
              <li><a href="#" className="hover:text-white">Fertility Evaluation</a></li>
            </ul>
          </div>

          {/* Patient Resources */}
          <div>
            <h3 className="text-[#F9F9F9] font-[Manrope] text-[16px] font-semibold leading-[24px] tracking-[-0.32px] mb-4">
              Patient Resources
            </h3>
            <ul className="space-y-4 text-[#F9F9F9]/80 font-[Manrope] text-[16px] font-normal leading-[24px] tracking-[-0.32px]">
              <li><a href="#" className="hover:text-white">International Patients</a></li>
              <li><a href="#" className="hover:text-white">EMI Options</a></li>
              <li><a href="#" className="hover:text-white">Second Opinion</a></li>
              <li><a href="#" className="hover:text-white">Blogs</a></li>
            </ul>
          </div>

          {/* Legal & Training */}
          <div>
            <h3 className="text-[#F9F9F9] font-[Manrope] text-[16px] font-semibold leading-[24px] tracking-[-0.32px] mb-4">
              Legal & Training
            </h3>
            <ul className="space-y-4 text-[#F9F9F9]/80 font-[Manrope] text-[16px] font-normal leading-[24px] tracking-[-0.32px]">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Fellowships</a></li>
            </ul>
          </div>
        </div>







        {/* Tagline */}
        <p
          className="text-[#FFF] font-[Manrope] text-[32px] font-normal leading-[40px] tracking-[-0.64px] max-w-3xl mb-10 mt-[219px]"
        >
          Aiming to be the benchmark for reproductive health care services.
        </p>

        <div className="flex items-center justify-end">
  <a
    href="#"
    aria-label="LinkedIn"
    className="text-white/80 hover:text-white px-4 border-l border-white/30 first:border-0"
  >
    <Linkedin size={20} />
  </a>
  <a
    href="#"
    aria-label="Instagram"
    className="text-white/80 hover:text-white px-4 border-l border-white/30 first:border-0"
  >
    <Instagram size={20} />
  </a>
  <a
    href="#"
    aria-label="Facebook"
    className="text-white/80 hover:text-white px-4 border-l border-white/30 first:border-0"
  >
    <Facebook size={20} />
  </a>
  <a
    href="#"
    aria-label="Twitter"
    className="text-white/80 hover:text-white px-4 border-l border-white/30 first:border-0"
  >
    <Twitter size={20} />
  </a>
</div>


        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/20 pt-6">
  <p
    className="text-[14px] font-normal leading-[24px] tracking-[-0.28px] font-[Manrope]"
    style={{ color: "rgba(255, 255, 255, 0.50)" }}
  >
    © {new Date().getFullYear()} All Rights Reserved. Progenesis Fertility Center.
  </p>
</div>

      </div>
    </footer >
  );
}
