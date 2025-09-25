// import React from "react";
// import { motion } from "framer-motion";

// const StatsSection = () => {
//   const stats = [
//     {
//       label: "Families",
//       description:
//         "We've helped 32,500+ Families. That's more than just a number. Every one of them started where you are now.",
//       value: "32,500+",
//     },
//     {
//       label: "Specialists",
//       description:
//         "With over 400 specialists, Every heartbeat of this journey is supported by a team that listens and cares.",
//       value: "400+",
//     },
//     {
//       label: "Success Rate",
//       description:
//         "That’s not luck. It’s care, science, and faith, working together.",
//       value: "87%",
//     },
//     {
//       label: "Centers",
//       description: "Because hope should never be out of reach.",
//       value: "20+",
//     },
//   ];

//   // Parent container animation
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.8 }, // reveal one by one
//     },
//   };

//   // Each stat item animation
//   const itemVariants = {
//     hidden: { opacity: 0, y: 40, scale: 0.95 }, // behind & small
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   return (
//     <section
//       className="relative w-full bg-gradient-to-r from-white via-white to-blue-50 overflow-hidden pb-[60px]"
//       style={{ paddingTop: "84px" }}
//     >
//       {/* Blurred Background Shapes */}
//       <div
//         className="absolute top-0 right-0 rounded-[522.265px] blur-[250px]"
//         style={{
//           background: "#1656A5",
//           width: "522.265px",
//           height: "442.756px",
//           transform: "rotate(-2deg)",
//         }}
//       />
//       <div
//         className="absolute bottom-0 left-0 rounded-[348.282px] blur-[250px]"
//         style={{
//           background: "#94BA3D",
//           width: "348.282px",
//           height: "279.542px",
//           transform: "rotate(-2deg)",
//         }}
//       />

//       <div className="relative mx-0 px-4 md:px-[80px] lg:px-[120px]">
//         {/* Badge */}
//         <span className="inline-block text-sm font-medium text-blue-700 bg-blue-100 px-3 py-1 rounded-full mb-4">
//           Stats and Metrics
//         </span>

//         {/* Title */}
//         <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-12 max-w-3xl leading-snug">
//           Let the numbers <br className="hidden md:block" /> reassure your heart.
//         </h2>

//         {/* Stats with animation */}
//         <motion.div
//           className="divide-y divide-gray-200"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }} // animate when 30% visible
//         >
//           {stats.map((item, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               className="flex flex-col md:grid md:grid-cols-3 gap-4 py-8"
//             >
//               {/* Label + mobile value */}
//               <div className="flex justify-between items-center md:block">
//                 <h3 className="text-lg md:text-xl font-medium text-gray-900">
//                   {item.label}
//                 </h3>
//                 <div className="text-xl md:hidden font-semibold text-gray-900">
//                   {item.value}
//                 </div>
//               </div>

//               {/* Description */}
//               <p className="text-gray-600 text-sm md:text-base md:col-span-1 max-w-md">
//                 {item.description}
//               </p>

//               {/* Value (desktop only) */}
//               <div className="hidden md:block text-2xl md:text-3xl font-semibold text-gray-900 md:text-right">
//                 {item.value}
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default StatsSection;



import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const StatItem = ({ item }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col md:grid md:grid-cols-3 gap-4 py-8"
    >
      {/* Label + mobile value */}
      <div className="flex justify-between items-center md:block">
        <h3 className="text-[48px] font-manrope font-normal text-[#2c2c2c]">
  {item.label}
</h3>
        <div className="typo-H1-Heading text-[#2c2c2c] md:hidden">
  {item.value}
</div>
      </div>

      {/* Description */}
      <p className="typo-H4-body-copy text-[#2c2c2c] md:col-span-1 max-w-md">
  {item.description}
</p>

      {/* Value (desktop only) */}
      <div className="hidden md:block text-[48px] font-manrope font-normal text-[#2c2c2c] md:text-right">
  {item.value}
</div>
    </motion.div>
  );
};

const StatsSection = () => {
  const stats = [
    {
      label: "Families",
      description:
        "We've helped 32,500+ Families. That's more than just a number. Every one of them started where you are now.",
      value: "32,500+",
    },
    {
      label: "Specialists",
      description:
        "With over 400 specialists, Every heartbeat of this journey is supported by a team that listens and cares.",
      value: "400+",
    },
    {
      label: "Success Rate",
      description:
        "That’s not luck. It’s care, science, and faith, working together.",
      value: "87%",
    },
    {
      label: "Centers",
      description: "Because hope should never be out of reach.",
      value: "20+",
    },
  ];

  return (
    <section
      className="relative w-full bg-gradient-to-r from-white via-white to-blue-50 overflow-hidden pb-[60px]"
      style={{ paddingTop: "84px" }}
    >
      {/* Background Shapes */}
      <div
        className="absolute top-0 right-0 rounded-[522.265px] blur-[250px]"
        style={{
          background: "#1656A5",
          width: "522.265px",
          height: "442.756px",
          transform: "rotate(-2deg)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 rounded-[348.282px] blur-[250px]"
        style={{
          background: "#94BA3D",
          width: "348.282px",
          height: "279.542px",
          transform: "rotate(-2deg)",
        }}
      />

      <div className="relative mx-0 px-4 md:px-[80px] lg:px-[120px]">
        {/* Badge */}
        <span className="inline-block text-[12px] font-manrope font-medium text-[#1656A5] bg-[#1656A5]/5 px-3 py-1 rounded-full mb-4">
  Stats and Metrics
</span>

        {/* Title */}
        <h2 className="text-[48px] font-manrope font-normal text-[#2c2c2c] mb-12 max-w-3xl leading-snug">
  Let the numbers <br className="hidden md:block" /> reassure your heart.
</h2>

        {/* Stats */}
        <div className="divide-y divide-gray-200">
          {stats.map((item, i) => (
            <StatItem key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

