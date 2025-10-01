"use client";
import React, { useRef, useEffect, useState } from "react";
import { Play } from "lucide-react";

const stories = [
    { id: 1, thumbnail: "/StoriesSection/stories1.png", title: "The Mehta Story I with Progenesis I New Beginnings" },
    { id: 2, thumbnail: "/StoriesSection/stories2.png", title: "Our IVF Journey I with Progenesis I Love Finds a Way" },
    { id: 3, thumbnail: "/StoriesSection/stories1.png", title: "Our IVF Journey I with Progenesis I Love Finds a Way" },
];

export default function StoriesSectionNew() {
    const scrollRef = useRef(null);
    const [winWidth, setWinWidth] = useState(
        typeof window !== "undefined" ? window.innerWidth : 1024
    );
    const GAP = 16; // px gap between cards

    useEffect(() => {
        const onResize = () => setWinWidth(window.innerWidth);
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    const getCardStyle = () => {
        if (winWidth < 640) {
            return { minWidth: "calc(100% - 48px)", height: 360 };
        }
        if (winWidth < 1024) {
            return { minWidth: 340, height: 420 };
        }
        return { minWidth: 503, height: 618 };
    };

    const scrollByOne = (dir = 1) => {
        const sc = scrollRef.current;
        if (!sc) return;

        const card = sc.querySelector(".story-card");
        const cardWidth = card ? card.offsetWidth : sc.clientWidth * 0.9;
        const amount = Math.round(cardWidth + GAP) * dir;
        sc.scrollBy({ left: amount, behavior: "smooth" });
    };

    const prevSlide = () => scrollByOne(-1);
    const nextSlide = () => scrollByOne(1);

    const cardStyle = getCardStyle();

    return (
        <section className="bg-white pt-[84px] mx-0 px-4 md:px-[80px] lg:px-[120px] pb-[60px]">
            <div className="mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                    <div>
                        <span className="inline-block text-xs md:text-sm bg-blue-100 text-[#1656A5] px-3 py-1 rounded-full">
                            Real Stories. Real Miracles.
                        </span>
                        <h2 className="mt-4 text-[48px] md:text-4xl font-light text-[#2c2c2c] leading-tight">
                            Inspiring stories of strength & Victories
                        </h2>
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="hidden md:inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                            See all
                        </button>
                    </div>
                </div>

                {/* Carousel */}
                <div
                    ref={scrollRef}
                    className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4"
                    style={{
                        scrollbarWidth: "none", // firefox
                    }}
                >
                    {stories.map((story) => (
                        <div
  key={story.id}
  className="story-card snap-center flex-shrink-0 rounded-xl bg-white shadow-sm overflow-hidden border border-gray-100 flex flex-col"
  style={{
    minWidth: cardStyle.minWidth,
    height: cardStyle.height,
  }}
>
  {/* Thumbnail */}

   <p className="px-[15px] py-[12px] text-[14px] font-manrope font-normal leading-[24px] tracking-[-0.28px] text-[#606060]">
      2k views • 1 month ago
    </p>

  <div className="relative w-full h-2/3 rounded-xl">
    <img
      src={story.thumbnail}
      alt={story.title}
      className="w-full h-full object-cover rounded-xl"
    />

    {/* Play Button */}
    <button
      className="absolute left-4 bottom-4 w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-100"
      aria-label={`Play ${story.title}`}
    >
      <Play className="w-5 h-5 text-blue-600" />
    </button>
  </div>

  {/* Meta + Title */}
  <div className="flex flex-col flex-grow">
    {/* Meta info */}
   

    {/* Title */}
    <h3 className="px-[15px] pb-[12px] text-[#2C2C2C] font-manrope font-normal line-clamp-2
        text-[16px] leading-[22.51px] tracking-[-0.322px]
        md:text-[32px] md:leading-[40px] md:tracking-[-0.64px]">
      {story.title}
    </h3>
  </div>
</div>


                    ))}
                </div>

                {/* Mobile 'See all' button */}
                <div className="mt-4 md:hidden">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg w-28">
                        See all
                    </button>
                </div>
            </div>
        </section>
    );
}
