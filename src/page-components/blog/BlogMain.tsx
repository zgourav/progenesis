import React from "react";
import BlogLanding from './BlogLanding';
import BlogContent from './BlogContent';
import '../about/AboutMain.css'
import ResourceConsultation from "../resources/ResourceConsultation";
import BlogCtaBanner from './BlogCtaBanner';

const BlogMain = () => {
      return (
        <div>
          <BlogLanding /> 
          <BlogContent />
          <BlogCtaBanner />
          <ResourceConsultation />
        </div>
      )
}

export default BlogMain