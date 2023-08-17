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
    // console.log(
    //   'blog list page: blogs render',
    //   blogs,
    //   page,
    //   size,
    //   totalItems,
    //   totalPages
    // );
  }, [page, size, blogs]);

  if (isLoading) return <PageLoader />;

  return (
    <main className="relative py-28 dark:bg-gray-900 text-content">
      <div className="mb-10 py-5">
        <section className="py-10">
          <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
              {isLoading && <PageLoader />}
              <h1 className="text-3xl font-extrabold sm:text-4xl">
                Latest blog posts
              </h1>
              <p>Blogs that are loved by the community. Updated every hour.</p>
            </div>
            <ul
              className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3"
              data-testid="blogList"
            >
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
      <div
        className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
        style={{
          background:
            'linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)',
        }}
      ></div>
    </main>
  );
}

export default BlogListPage;
