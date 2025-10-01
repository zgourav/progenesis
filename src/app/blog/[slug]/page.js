import BlogMain from '@/page-components/blog/BlogMain';
import { notFound } from 'next/navigation';

const revalidate = 60 * 60 * 24; // 24 hours

const fetchBlogBySlug = async (slug) => {
  const res = await fetch(`${process.env.API_DOMAIN}/api/blogs/${slug}`, {
    next: { revalidate },
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
};

export const generateMetadata = async ({ params }) => {
  const { slug } = await params;
  const blog = await fetchBlogBySlug(slug);

  if (!blog) {
    return {};
  }

  return {
    title: blog.meta_title || blog.title,
    description: blog.meta_description || blog.description,
    openGraph: {
      title: blog.meta_title || blog.title,
      description: blog.meta_description || blog.description,
      images: blog.image ? [blog.image] : undefined,
      url: blog.absolute_url,
      type: 'article',
    },
  };
};

const Page = async ({ params }) => {
  const { slug } = await params;
  const blogData = await fetchBlogBySlug(slug);

  if (!blogData) {
    notFound();
  }

  return <BlogMain data={blogData} />;
};

export default Page;
