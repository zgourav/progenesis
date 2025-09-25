import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Card = ({ card, index, total, scrollYProgress }) => {
  // Define scroll segment for this card
  const start = index / total;
  const end = (index + 1) / total;

  // Animate position (slide up into stack)
  const y = useTransform(scrollYProgress, [start, end], [350, 0]);

  // Animate rotation (straighten as it stacks)
  const rotate = useTransform(scrollYProgress, [start, end], [index % 2 === 0 ? -6 : 6, 0]);

  // Animate scale (slight depth illusion)
  const scale = useTransform(scrollYProgress, [start, end], [0.9, 1]);

  return (
    <motion.div
      className="absolute w-[280px] h-[255px] md:w-[408px] md:h-[375px] 
                 rounded-[16px] bg-[#F9F9F9] shadow-lg overflow-hidden 
                 p-8 text-left border-[2px] border-white"
      style={{
        y,
        rotate,
        scale,
        zIndex: index, // stack order: later cards go above
      }}
    >
      <span className="block text-[#2C2C2C] text-[32px] md:text-[48px] mb-2 md:mb-12 relative z-10">
        {card.number}
      </span>
      <h3 className="text-[#2C2C2C] text-[24px] md:text-[32px] mb-1 md:mb-4 relative z-10">
        {card.title}
      </h3>
      <p className="text-[#606060] text-[12px] md:text-[16px] relative z-10">
        {card.subtitle}
      </p>
    </motion.div>
  );
};

const DifferenceSection = () => {
  const cards = [
    {
      number: "01",
      title: "World Class In-House ART Lab",
      subtitle:
        "We offer you more than a procedure. We offer a chance. A chance to hold, to cradle, to begin.",
    },
    {
      number: "02",
      title: "Compassionate Specialists",
      subtitle:
        "Our doctors and staff combine expertise with empathy, walking with you at every step.",
    },
    {
      number: "03",
      title: "Advanced Fertility Treatments",
      subtitle:
        "Cutting-edge techniques with proven success rates, making dreams of parenthood a reality.",
    },
  ];

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <section className="pt-20 md:py-20">
      <div className="md:max-w-4xl mx-auto text-center relative px-4 md:px-[80px]">
        {/* Label */}
        <span className="inline-block text-sm font-medium text-blue-700 bg-blue-100 px-3 py-1 rounded-full mb-6">
          The Progenesis Difference
        </span>

        {/* Heading */}
        <h2 className="mt-6 md:mx-32 text-3xl md:text-5xl font-[Manrope] font-normal leading-[42px] md:leading-[56px] tracking-[-0.96px] text-[#94BA3D] text-center">
          Choosing a fertility clinic means choosing the people <br />
          who’ll walk beside you. <br />
          At Progenesis, expert care meets heartfelt support, every step of the
          way.
        </h2>

        {/* Cards */}
        <div className="relative -mt-36 flex justify-center" ref={ref}>
          <div className="relative min-h-[40vh] flex justify-center">
            {cards.map((card, index) => (
              <Card
                key={index}
                card={card}
                index={index}
                total={cards.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferenceSection;
