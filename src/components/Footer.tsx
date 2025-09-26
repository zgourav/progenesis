// Footer.jsx
import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link"; // ✅ Next.js routing

export default function Footer() {
  return (
    <footer
      className="relative w-full bg-cover text-white"
      style={{ backgroundImage: "url('/footer.png')" }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Logo */}
      <div className="flex items-center px-6 pt-10 md:px-[120px] md:pt-[86px] md:mb-[100px] lg:[200px] xl:[300px]">
        <Link href="/">
          <img
            src="/logo1.png"
            alt="Progenesis Logo"
            className="w-[120px] h-[41.52px] md:w-[180px] object-contain"
          />
        </Link>
      </div>

      <div className="relative z-10 max-w-screen-2xl mx-auto pt-12 px-6 md:px-[120px]">
        {/* Grid links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-x-[8vw] gap-y-10">
          {/* About */}
          <div>
            <h3 className="text-[#FFF] font-[Manrope] text-[16px] font-semibold leading-[24px] tracking-[-0.32px] mb-4">
              About
            </h3>
            <ul className="space-y-4 font-[Manrope] text-[16px] font-normal leading-[24px] tracking-[-0.32px] text-white/50">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Our Centers</a></li>
              <li><a href="#" className="hover:text-white">Doctors</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Success Stories</a></li>
            </ul>
          </div>

          {/* Infertility */}
          <div>
            <h3 className="text-[#FFF] font-[Manrope] text-[16px] font-semibold leading-[24px] tracking-[-0.32px] mb-4">
              Infertility
            </h3>
            <ul className="space-y-4 font-[Manrope] text-[16px] font-normal leading-[24px] tracking-[-0.32px] text-white/50">
              <li><a href="#" className="hover:text-white">Female Infertility</a></li>
              <li><a href="#" className="hover:text-white">Male Infertility</a></li>
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h3 className="text-[#FFF] font-[Manrope] text-[16px] font-semibold leading-[24px] tracking-[-0.32px] mb-4">
              Treatments
            </h3>
            <ul className="space-y-4 font-[Manrope] text-[16px] font-normal leading-[24px] tracking-[-0.32px] text-white/50">
              <li><a href="#" className="hover:text-white">Advanced Treatments</a></li>
              <li><a href="#" className="hover:text-white">Infertility Treatments</a></li>
              <li><a href="#" className="hover:text-white">Fertility Preservation</a></li>
              <li><a href="#" className="hover:text-white">Fertility Evaluation</a></li>
            </ul>
          </div>

          {/* Patient Resources */}
          <div>
            <h3 className="text-[#FFF] font-[Manrope] text-[16px] font-semibold leading-[24px] tracking-[-0.32px] mb-4">
              Patient Resources
            </h3>
            <ul className="space-y-4 font-[Manrope] text-[16px] font-normal leading-[24px] tracking-[-0.32px] text-white/50">
              <li><a href="#" className="hover:text-white">International Patients</a></li>
              <li><a href="#" className="hover:text-white">EMI Options</a></li>
              <li><a href="#" className="hover:text-white">Second Opinion</a></li>
              <li><a href="#" className="hover:text-white">Blogs</a></li>
            </ul>
          </div>

          {/* Legal & Training */}
          <div>
            <h3 className="text-[#FFF] font-[Manrope] text-[16px] font-semibold leading-[24px] tracking-[-0.32px] mb-4">
              Legal & Training
            </h3>
            <ul className="space-y-4 font-[Manrope] text-[16px] font-normal leading-[24px] tracking-[-0.32px] text-white/50">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Fellowships</a></li>
            </ul>
          </div>
        </div>

        {/* Tagline + Social */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-16 gap-8">
          <p className="text-[#FFF] font-[Manrope] text-[16px] md:text-[32px] font-normal leading-[24px] md:leading-[40px] tracking-[-0.32px] md:tracking-[-0.64px] max-w-xl">
            Aiming to be the benchmark for reproductive health care services.
          </p>

          <div className="flex space-x-4">
            <a href="#" aria-label="LinkedIn" className="text-white/80 hover:text-white">
              <Linkedin size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="text-white/80 hover:text-white">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="Facebook" className="text-white/80 hover:text-white">
              <Facebook size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="text-white/80 hover:text-white">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/20 pt-6 mt-10">
          <p className="font-[Manrope] text-[14px] font-normal leading-[22px] tracking-[-0.28px] text-white/50">
            © {new Date().getFullYear()} All Rights Reserved. Progenesis Fertility Center.
          </p>
        </div>
      </div>
    </footer>


  );
}
