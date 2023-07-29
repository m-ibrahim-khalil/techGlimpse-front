import { useAppSelector, useBlog } from '@tech-glimpse-front/redux-toolkit';
import {
  BlogCard,
  PageLoader,
  PaginationButtons,
} from '@tech-glimpse-front/ui-shared';
import { useEffect } from 'react';

export function BlogListPage() {
  const { blogList, loading: isLoading } = useBlog();
  const { page, size } = useAppSelector((state) => state.pagination);
  const { payload: blogs, totalItems, totalPages } = blogList;

  useEffect(() => {
    console.log('blog list page: blogs render', blogs);
  }, [page, size, blogs]);

  if (isLoading) return <PageLoader />;

  return (
    <div className="mb-10 py-5">
      <section className="py-10">
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
      <PaginationButtons
        currentPage={page}
        totalPages={totalPages}
        totalItems={totalItems}
        size={size}
      />
    </div>
  );
}

export default BlogListPage;
