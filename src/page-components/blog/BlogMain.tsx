import React from "react";
import BlogLanding from './BlogLanding';
import BlogContent from './BlogContent';
import '../about/AboutMain.css';
import ResourceConsultation from "../resources/ResourceConsultation";
import BlogCtaBanner from './BlogCtaBanner';
import ResourceGrid from "../resources/ResourceGrid";

interface BlogMainProps {
  data?: any;
  showGridFirst?: boolean;
}

const BlogMain: React.FC<BlogMainProps> = ({ data, showGridFirst = false }) => {
  const hasBlogData = Boolean(data);

  return (
    <div>
      {showGridFirst && (
        <ResourceGrid
          eyebrowLabel="Latest Blog"
          heading="Discover expert-curated stories and insights"
          showHeading={false}
        />
      )}

      {hasBlogData && (
        <>
          <BlogLanding
            title={data.title}
            author={data.author}
            created={data.created}
            image={data.image}
            metaDescription={data.meta_description}
          />
          <BlogContent
            description={data.description}
            contentHtml={data.content}
            author={data.author}
            created={data.created}
          />
        </>
      )}

      <BlogCtaBanner />
      <ResourceConsultation />
    </div>
  );
};

export default BlogMain;