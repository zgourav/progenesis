import React from "react";
import '../about/AboutMain.css'

const BlogCtaBanner = () => {
	return (
		<div className="w-full">
			<div className="relative overflow-hidden rounded-[12px] md:rounded-[16px] h-[360px] md:h-[460px] lg:h-[560px]">
				{/* Background image layer */}
				<div className="absolute inset-0" aria-hidden>
					<img
						src="/images/banner1.png"
						alt="Parent holding baby's finger"
						className="w-full h-full object-cover object-center"
					/>
				</div>

				{/* Gradient overlay on top of the image */}
				<div className="absolute inset-0 bg-gradient-to-tr from-[#EAF3EA]/80 via-white/70 to-[#E3ECF7]/80" aria-hidden />

				{/* Centered content */}
				<div className="relative h-full px-6 md:px-8 lg:px-14 flex items-center Blog-Cta">
					<h2 className="font-manrope lg:text-start sm:text-center font-medium text-[32px] leading-[40px] tracking-[-0.02em] text-[#74A333] md:text-[48px] md:leading-[56px]">
                      Your Dream of Parenthood Starts Here — Let’s Take
                      the First Step Together and Turn Hope into a Beautiful Reality.
                    </h2>

				</div>
			</div>
		</div>
	);
};

export default BlogCtaBanner;
