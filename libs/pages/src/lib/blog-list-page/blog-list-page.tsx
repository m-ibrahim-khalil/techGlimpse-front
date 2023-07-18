import {
  RootState,
  fetchBlogs,
  selectAllBlogs,
  useAppDispatch,
  useAppSelector,
} from '@tech-glimpse-front/redux-toolkit';
import { BlogCard, Error, Spinner } from '@tech-glimpse-front/ui-shared';
import { useEffect } from 'react';

/* eslint-disable-next-line */
export interface BlogListPageProps {}

export function BlogListPage(props: BlogListPageProps) {
  const dispatch = useAppDispatch();
  const blogs = useAppSelector(selectAllBlogs);
  const blogStatus = useAppSelector((state: RootState) => state.blogs.status);
  const error = useAppSelector((state: RootState) => state.blogs.error);

  useEffect(() => {
    if (blogStatus === 'idle') {
      dispatch(fetchBlogs());
    }
  }, [blogStatus, dispatch]);

  if (blogStatus === 'loading') {
    return <Spinner text="Loading..." />;
  } else if (blogStatus === 'failed') {
    return <Error>{error}</Error>;
  }

  return (
    <section className="py-32">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="mb-6 flex items-center justify-center"></div>
        <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
          <h1 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">
            Latest blog posts
          </h1>
          <p className="text-gray-600">
            Blogs that are loved by the community. Updated every hour.
          </p>
        </div>
        <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((items, key) => (
            <li className="w-full mx-auto group sm:max-w-sm" key={key}>
              <BlogCard
                {...items}
                imgUrl="https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default BlogListPage;
