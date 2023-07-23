import { useGetBlogQuery } from '@tech-glimpse-front/redux-toolkit';
import { Size, Variant } from '@tech-glimpse-front/types';
import {
  Button,
  DeleteIcon,
  EditIcon,
  UserCard,
} from '@tech-glimpse-front/ui-shared';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
import { Link, useParams } from 'react-router-dom';

export function BlogPage() {
  const params = useParams();
  const blogId = params.blogId ?? '';
  console.log('Blog ID: ', blogId);

  const { isLoading, data: blog } = useGetBlogQuery({
    id: blogId,
  });

  if (!blog) {
    return (
      <section>
        <h2>Blog not found!</h2>
      </section>
    );
  }

  if (isLoading) {
    return <div>Full screen Loader Component Loading...</div>;
  }

  return (
    <main className="max-w-screen-lg mx-auto mt-10">
      <div className="mb-4 md:mb-0 w-full mx-auto relative">
        <div className="px-4 lg:px-0">
          <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
            {blog.title}
          </h2>
          <div className="flex flex-wrap py-6 space-x-2 border-t border-dashed dark:border-gray-400">
            {blog.tags?.map((tag, id) => (
              <Link
                key={id}
                rel="noopener noreferrer"
                to="#"
                className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-400 dark:text-gray-900"
              >
                #{tag}
              </Link>
            ))}
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
          <div className="mb-6 flex items-center justify-center gap-x-6">
            <Link
              to="edit"
              className="focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 text-white bg-blue-700 hover:bg-blue-800"
            >
              <EditIcon /> Edit
            </Link>
            <Button
              variant={Variant.DANGER}
              size={Size.SMALL}
              onClick={() => console.log('Clicked')}
            >
              <span className="flex flex-row">
                <DeleteIcon /> Delete
              </span>
            </Button>
          </div>
        </div>
        <UserCard userName={blog?.author} />
      </div>
    </main>
  );
}

export default BlogPage;
