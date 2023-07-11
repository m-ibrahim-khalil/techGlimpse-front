import { Blog } from '@tech-glimpse-front/types';
import { Link } from 'react-router-dom';

export function BlogPage(props: Blog) {
  return (
    <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-800 dark:text-gray-100">
      <div className="flex flex-col max-w-5xl mx-auto overflow-hidden rounded">
        <img
          src={props.imgUrl}
          alt=""
          className="w-full h-60 sm:h-96 dark:bg-gray-500"
        />
        <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-5xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900">
          <div className="max-w-4xl px-6 py-16 mx-auto space-y-12">
            <article className="space-y-8 px-4 dark:bg-gray-800 dark:text-gray-50">
              <div className="space-y-6">
                <h1 className="text-6xl font-bold md:tracki md:text-5xl">
                  {props.title}
                </h1>
                <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-400">
                  <div className="flex items-center md:space-x-2">
                    <img
                      src="https://source.unsplash.com/75x75/?portrait"
                      alt=""
                      className="w-4 h-4 border rounded-full dark:bg-gray-500 dark:border-gray-700"
                    />
                    <p className="text-sm">
                      Leroy Jenkins • {props?.updatedAt}
                    </p>
                  </div>
                  <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
                    4 min read • 1,570 views
                  </p>
                </div>
              </div>
              <div className="dark:text-gray-100">
                <p>{props.desc}</p>
              </div>
            </article>
            <div>
              <div className="flex flex-wrap py-6 space-x-2 border-t border-dashed dark:border-gray-400">
                {props.tags?.map((tag) => (
                  <Link
                    rel="noopener noreferrer"
                    to="#"
                    className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-400 dark:text-gray-900"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-semibold">Related posts</h4>
                <ul className="ml-4 space-y-1 list-disc">
                  <li>
                    <Link
                      rel="noopener noreferrer"
                      to="#"
                      className="hover:underline"
                    >
                      Nunc id magna mollis
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
