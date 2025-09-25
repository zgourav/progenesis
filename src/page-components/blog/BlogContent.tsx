import React from "react";

const BlogContent = () => {
  return (
    <div className="section-spacing w-full px-6 md:px-8 lg:px-16 py-12 bg-white">

      {/* Main Content */}
      <div className="relative w-full md:flex md:items-start">
        {/* Social Buttons at left-top of the content container */}
        <div className="hidden md:flex flex-col gap-4 md:mr-6 pr-4">
          <a aria-label="Share on Facebook" href="#" className="w-10 h-10 rounded-full border border-black bg-black text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M22 12.06C22 6.503 17.523 2 12 2S2 6.503 2 12.06C2 17.08 5.656 21.246 10.438 22v-7.03H7.898v-2.91h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.47h-1.26c-1.242 0-1.63.776-1.63 1.572v1.888h2.773l-.443 2.91h-2.33V22C18.344 21.246 22 17.08 22 12.06z"/></svg>
          </a>
          <a aria-label="Share on Instagram" href="#" className="w-10 h-10 rounded-full border border-black bg-black text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2.2a2.8 2.8 0 110 5.6 2.8 2.8 0 010-5.6zM17.8 6.2a1 1 0 100 2 1 1 0 000-2z"/></svg>
          </a>
          <a aria-label="Share on X" href="#" className="w-10 h-10 rounded-full border border-black bg-black text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M17.525 3H20l-6.54 7.47L21.5 21h-5.5l-4.3-5.2L6.7 21H4l7.01-8.01L3 3h5.5l3.9 4.7L17.525 3zm-1.93 16h1.53L8.49 5H6.96l8.635 14z"/></svg>
          </a>
        </div>
        {/* Main Title */}
        <div className="flex-1" >
        <h1 className="text-4xl md:text-5xl font-bold text-[#2C2C2C] mb-8 leading-tight text-start pb-5">
          Every Story Begins with Hope
        </h1>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none text-justify pb-5">
          <p className="text-[#606060] leading-relaxed mb-6 text-lg">
            The dream of parenthood is one of the most profound desires that can fill a person's heart. It's a journey that begins with hope, a tiny spark that ignites the possibility of creating new life, of nurturing a child, of building a family. Yet, for many couples, this journey is not always straightforward. It can be filled with challenges that test both the body and the spirit—medical complexities, emotional roller coasters, financial considerations, and the weight of uncertainty that can sometimes feel overwhelming.
          </p>
          
          <p className="text-[#606060] leading-relaxed mb-6 text-lg">
            At Progenesis, we understand that every couple's path to parenthood is unique. We recognize that behind every consultation, every test, every treatment, there are real people with real dreams, real fears, and real hope. Our mission is not just to provide medical expertise, but to be your partners in this deeply personal journey. We believe that with the right support, the right knowledge, and the right care, every story of hope can become a story of joy.
          </p>
          
          <p className="text-[#606060] leading-relaxed mb-8 text-lg">
            This is more than just fertility treatment—it's about empowering you to write the next chapter of your life with confidence, resilience, and the unwavering belief that your dreams of parenthood are not just possible, but within reach.
          </p>
        </div>

        {/* Knowledge Section */}
        <div className="mb-12 pb-5">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-8 leading-tight pb-5">
            Knowledge Empowers Your Choices
          </h2>
          
          <div className="prose prose-lg max-w-none text-justify pb-5">
            <p className="text-[#606060] leading-relaxed mb-6 text-lg">
              In the world of fertility treatment, knowledge is not just power—it's peace of mind. Every decision you make on this journey should be informed, understood, and aligned with your personal values and circumstances. At Progenesis, we believe that transparency and education are fundamental to your success and well-being.
            </p>
            
            <p className="text-[#606060] leading-relaxed mb-6 text-lg">
              From your initial assessment to the final stages of treatment, we ensure that you understand not just what we're doing, but why we're doing it. Whether it's natural conception support, intrauterine insemination (IUI), in vitro fertilization (IVF), intracytoplasmic sperm injection (ICSI), or advanced genetic testing, we break down complex medical terms and procedures into clear, understandable language.
            </p>
            
            <p className="text-[#606060] leading-relaxed mb-8 text-lg">
              This comprehensive approach to patient education means that you're never left in the dark about your treatment options. You'll understand the success rates, the potential risks, the timeline, and the costs associated with each approach. This knowledge empowers you to make confident decisions and reduces the anxiety that often comes with uncertainty. When you know what to expect, you can focus on what matters most—your journey toward parenthood.
            </p>
          </div>
        </div>

        {/* Heart of Journey Section */}
        <div className="mb-12 pb-5">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-8 leading-tight pb-5">
            The Heart of the Journey
          </h2>
          
          <div className="prose prose-lg max-w-none text-justify pb-5">
            <p className="text-[#606060] leading-relaxed mb-6 text-lg">
              While medical expertise forms the foundation of fertility treatment, we know that emotional support is equally crucial. The journey to parenthood can evoke a complex tapestry of emotions—excitement and anticipation, worry and fear, joy and disappointment, hope and grief. These feelings are not just normal; they're an integral part of your story.
            </p>
            
            <p className="text-[#606060] leading-relaxed mb-6 text-lg">
              Our care team is trained not just in the science of fertility, but in the art of compassionate support. We're here to listen when you need to talk, to encourage when you need strength, and to celebrate with you when you achieve your goals. We understand that every appointment, every test result, every cycle brings its own emotional weight, and we're committed to supporting you through all of it.
            </p>
            
            <p className="text-[#606060] leading-relaxed mb-8 text-lg">
              We also believe in the power of community and shared experiences. Through our support groups and resources, you'll have the opportunity to connect with others who understand your journey. You'll hear real-life success stories, learn from others' experiences, and find comfort in knowing that you're not alone. These connections often become the foundation of lifelong friendships and the source of strength that helps dreams become reality.
            </p>
          </div>
        </div>

        {/* Conclusion Section */}
        <div className="mb-12 pb-5">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-8 leading-tight pb-5">
            Conclusion
          </h2>
          
          <div className="prose prose-lg max-w-none text-justify pb-5">
            <p className="text-[#606060] leading-relaxed mb-6 text-lg">
              The path to parenthood is not just a medical journey—it's a deeply personal story of courage, learning, and hope. It's about making informed decisions, finding emotional support, and believing in the possibility of your dreams. At Progenesis, we're honored to be part of your story, combining the best of science with the warmth of human compassion.
            </p>
            
            <p className="text-[#606060] leading-relaxed mb-6 text-lg">
              From your first consultation to the moment you hold your baby in your arms, we're here to guide you, support you, and celebrate with you. We believe that every story that begins with hope deserves a beautiful ending, and we're committed to helping you write that chapter of your life.
            </p>
            
            <p className="text-[#606060] leading-relaxed mb-8 text-lg">
              Your journey to parenthood is unique, but you don't have to walk it alone. With the right knowledge, the right support, and the right care, your story of hope can become a story of joy, fulfillment, and the beautiful reality of family. Welcome to Progenesis, where every story begins with hope and every dream has the potential to become reality.
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
