import {
  RootState,
  useAppSelector,
  useBlog,
  useGetBlogQuery,
  useUser,
} from '@tech-glimpse-front/redux-toolkit';
import { Size, Variant } from '@tech-glimpse-front/types';
import {
  Button,
  DeleteIcon,
  EditIcon,
  PageLoader,
  TimeAgo,
  UserCard,
} from '@tech-glimpse-front/ui-shared';
import { useCallback } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
import { Link, useParams } from 'react-router-dom';

export function BlogPage() {
  const { blogId } = useParams();
  console.log('Checking: ', blogId, useParams());
  const { deleteBlog } = useBlog();
  const { getUserByUsername } = useUser();
  const { authUser } = useAppSelector((state: RootState) => state.auth);
  const { isLoading, data: blog } = useGetBlogQuery({
    id: blogId ?? '',
  });

  const user = getUserByUsername(blog?.author ?? '');

  const onDeleteBlog = useCallback(
    (e: any) => {
      e.stopPropagation();
      deleteBlog(blogId ?? '');
    },
    [deleteBlog, blogId]
  );

  if (!blog) {
    return (
      <section>
        <h2>Blog not found!</h2>
      </section>
    );
  }

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <main className="max-w-screen-lg mx-auto my-10">
      <div className="mb-4 md:mb-0 w-full mx-auto relative">
        <div className="px-4 lg:px-0">
          <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
            {blog.title}
          </h2>
          <div className="my-3 flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-400">
            <div className="flex items-center md:space-x-2">
              <p className="inline-flex text-sm">
                Posted By {blog.author} •{' '}
                {blog.updatedAt && <TimeAgo timestamp={blog.updatedAt} />}
              </p>
            </div>
            <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
              4 min read • 1,570 views
            </p>
          </div>
        </div>
        <img
          src={blog.imgUrl}
          alt=""
          className="w-full object-cover lg:rounded"
          style={{ height: '28em' }}
        />
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-12">
        <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
          <ReactQuill
            value={blog.description}
            readOnly={true}
            theme={'bubble'}
          />
          <div className="py-6 space-x-2 border-t border-dashed dark:border-gray-400">
            {blog.tags
              ? blog.tags?.map((tag, id) => (
                  <Link
                    key={id}
                    to="#"
                    className="px-3 py-1 rounded-sm hover:underline bg-violet-400  text-gray-900"
                  >
                    #{tag}
                  </Link>
                ))
              : ['Tag 1', 'Tag 2', 'Tag 3'].map((tag, id) => (
                  <Link
                    key={id}
                    to="#"
                    className="px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900"
                  >
                    #{tag}
                  </Link>
                ))}
          </div>
          {authUser === blog.author && (
            <div className="flex items-center justify-center gap-x-8 m-6 ">
              <Link
                to="edit"
                className="inline-flex text-center items-center bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-md text-sm px-3 py-2 focus:outline"
              >
                <EditIcon /> Edit
              </Link>
              <Button
                variant={Variant.WARNING}
                size={Size.PRIMARY}
                onClick={(e) => onDeleteBlog(e)}
              >
                <DeleteIcon /> Delete
              </Button>
            </div>
          )}
        </div>
        <div className="w-full lg:w-1/4 m-auto m-12 max-w-screen-sm">
          <UserCard user={user} />
        </div>
      </div>
    </main>
  );
}

export default BlogPage;
