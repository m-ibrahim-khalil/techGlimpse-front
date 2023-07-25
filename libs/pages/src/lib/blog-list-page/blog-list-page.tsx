import { useBlog } from '@tech-glimpse-front/redux-toolkit';
import { BlogCard, PageLoader } from '@tech-glimpse-front/ui-shared';
import { useNavigate } from 'react-router-dom';

export function BlogListPage() {
  const { blogList, loading: isLoading } = useBlog();
  const { payload: blogs } = blogList;
  const navigate = useNavigate();

  if (isLoading) return <PageLoader />;

  return (
    <section className="py-20">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
          {isLoading && <PageLoader />}
          <h1 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">
            Latest blog posts
          </h1>
          <p className="text-gray-600">
            Blogs that are loved by the community. Updated every hour.
          </p>
        </div>
        <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {blogs &&
            blogs.map((items, key) => (
              <li className="w-full mx-auto group sm:max-w-sm" key={key}>
                <BlogCard {...items} />
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}

export default BlogListPage;
