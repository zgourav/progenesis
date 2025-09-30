// "use client";
// import Image from "next/image";
// import Link from "next/link";

// interface Breadcrumb {
//   label: string;
//   href?: string;
// }

// interface HeroSectionProps {
//   breadcrumbs: Breadcrumb[];
//   title: string | React.ReactNode;
//   buttonText?: string;
//   buttonLink?: string;
//   backgroundImage?: string;
//   showBlurredShape?: boolean;
//   foregroundImage?: string; 
//   overlayImage?: string;    
// }

// export default function HeroSection({
//   breadcrumbs,
//   title,
//   buttonText,
//   buttonLink,
//   backgroundImage,
//   foregroundImage,
//   overlayImage,
//   showBlurredShape = true,
// }: HeroSectionProps) {
//   return (
//     <section
//       className="relative w-full h-[500px] md:h-[600px] flex pl-[12px] md:pl-[120px] bg-cover bg-center overflow-hidden"
//       style={{
//         backgroundImage: backgroundImage ? `url('${backgroundImage}')` : "none",
//       }}
//     >
//       {/* Blurred gradient shape */}
//       {showBlurredShape && (
//         <div
//           className="absolute left-[-150px] top-[80px] w-[445px] h-[441px] rounded-full opacity-70"
//           style={{
//             background: "#94BA3D",
//             filter: "blur(250px)",
//             transform: "rotate(-2deg)",
//           }}
//         ></div>
//       )}

//       {/* Left content */}
//       <div className="relative z-10 mt-2 md:mt-[85px] max-w-5xl">
//         {/* Breadcrumbs */}
//         <p className="text-[18px] text-gray-600 mb-2 md:mb-[44px] flex items-center flex-wrap">
//           {breadcrumbs.map((crumb, idx) => (
//             <span key={idx} className="flex items-center">
//               {crumb.href ? (
//                 <Link
//                   href={crumb.href}
//                   className={`${
//                     idx === breadcrumbs.length - 1
//                       ? "text-[#1656A5] font-medium"
//                       : "text-gray-600"
//                   } px-[6px]`}
//                 >
//                   {crumb.label}
//                 </Link>
//               ) : (
//                 <span
//                   className={`${
//                     idx === breadcrumbs.length - 1
//                       ? "text-[#1656A5] font-medium"
//                       : "text-gray-600"
//                   } px-[6px]`}
//                 >
//                   {crumb.label}
//                 </span>
//               )}
//               {idx < breadcrumbs.length - 1 && (
//                 <span className="px-[6px]">›</span>
//               )}
//             </span>
//           ))}
//         </p>

//         {/* Title */}
//         <h1
//           className="text-3xl md:text-[80px] font-bold leading-tight mb-[44px]"
//           style={{ color: "#252525" }}
//         >
//           {title}
//         </h1>

//         {/* Button */}
//         {buttonText && (
//           <div>
//             {buttonLink ? (
//               <Link
//                 href={buttonLink}
//                 className="mt-6 inline-block px-[20px] py-[16px] bg-black text-white rounded-[16px]"
//               >
//                 {buttonText}
//               </Link>
//             ) : (
//               <button className="mt-6 px-[20px] py-[16px] bg-black text-white rounded-[16px]">
//                 {buttonText}
//               </button>
//             )}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }
"use client";

import Link from "next/link";
import Image from "next/image";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface HeroSectionProps {
  breadcrumbs: Breadcrumb[];
  title: string | React.ReactNode;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage?: string;
  showBlurredShape?: boolean;
  foregroundImage?: string;
  overlayImage?: string;
}

export default function HeroSection({
  breadcrumbs,
  title,
  buttonText,
  buttonLink,
  backgroundImage,
  foregroundImage,
  overlayImage,
  showBlurredShape = true,
}: HeroSectionProps) {
  return (
    <section
      className="relative w-full h-[500px] md:h-[600px] flex pl-[12px] md:pl-[120px] bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: backgroundImage ? `url('${backgroundImage}')` : "none",
      }}
    >
      {/* Overlay Image (background layer) */}
      {overlayImage && (
        <Image
          src={overlayImage}
          alt="Overlay"
          fill
          priority
          className="absolute inset-0 object-cover -z-20"
        />
      )}

      {/* Foreground Image (responsive, above overlay & background) */}
      {foregroundImage && (
        <Image
          src={foregroundImage}
          alt="Foreground"
          // width={500}
          // height={500}
          fill
          priority
          className="absolute bottom-0 right-0 object-contain z-0 
                     w-[180px] md:w-[350px] lg:w-[500px] h-auto"
        />
      )}

      {/* Blurred gradient shape */}
      {showBlurredShape && (
        <div
          className="absolute left-[-150px] top-[80px] w-[445px] h-[441px] rounded-full opacity-70 z-0"
          style={{
            background: "#94BA3D",
            filter: "blur(250px)",
            transform: "rotate(-2deg)",
          }}
        ></div>
      )}

      {/* Content (always above images) */}
      <div className="relative z-10 mt-2 md:mt-[85px] max-w-5xl">
        {/* Breadcrumbs */}
        <p className="text-[18px] text-gray-600 mb-2 md:mb-[44px] flex items-center flex-wrap">
          {breadcrumbs.map((crumb, idx) => (
            <span key={idx} className="flex items-center">
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className={`${
                    idx === breadcrumbs.length - 1
                      ? "text-[#1656A5] font-medium"
                      : "text-gray-600"
                  } px-[6px]`}
                >
                  {crumb.label}
                </Link>
              ) : (
                <span
                  className={`${
                    idx === breadcrumbs.length - 1
                      ? "text-[#1656A5] font-medium"
                      : "text-gray-600"
                  } px-[6px]`}
                >
                  {crumb.label}
                </span>
              )}
              {idx < breadcrumbs.length - 1 && (
                <span className="px-[6px]">›</span>
              )}
            </span>
          ))}
        </p>

        {/* Title */}
        <h1
          className="text-3xl md:text-[80px] font-bold leading-tight mb-[44px]"
          style={{ color: "#252525" }}
        >
          {title}
        </h1>

        {/* Button */}
        {buttonText && (
          <div>
            {buttonLink ? (
              <Link
                href={buttonLink}
                className="mt-6 inline-block px-[20px] py-[16px] bg-black text-white rounded-[16px]"
              >
                {buttonText}
              </Link>
            ) : (
              <button className="mt-6 px-[20px] py-[16px] bg-black text-white rounded-[16px]">
                {buttonText}
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
