import React from "react";

interface BlogLandingProps {
  title?: string;
  author?: string;
  created?: string;
  image?: string;
  metaDescription?: string;
}

const formatDate = (isoDate?: string) => {
  if (!isoDate) return null;

  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return null;

  return new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
};

const BlogLanding: React.FC<BlogLandingProps> = ({
  title,
  author,
  created,
  image,
  metaDescription,
}) => {
  const formattedDate = formatDate(created);
  const coverImage = image || '/images/Bbanner.png';
  const displayTitle = title || 'Insights for Your Parenthood Journey';
  const description = metaDescription || 'Explore expert insights to inspire, guide, and support you through every step of your parenthood journey with confidence.';

  return (
    <div className="section-spacing w-full px-6 md:px-8 lg:px-16 py-12 text-center bg-white">
      <div className="mb-3">
        <span className="inline-block bg-[#1656A50D] text-[#1656A5] text-sm font-medium px-4 py-2 rounded-[8px]">
          Latest Blog
        </span>
      </div>

      <h1 className="text-[32px] md:text-5xl font-bold text-[#2C2C2C] mb-8 leading-tight pb-4">
        {displayTitle}
      </h1>

      <p className="font-manrope font-normal text-[12.86px] leading-[19.29px] tracking-[-0.02em] text-center text-[#606060] mb-8 md:text-[22px] md:leading-[32px] pb-4">
        {description}
      </p>
    </div>
  );
};

export default BlogLanding;
