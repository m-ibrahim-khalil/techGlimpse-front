import { Blog } from '@tech-glimpse-front/types';
import {
  Button,
  DeleteIcon,
  EditIcon,
  UserCard,
} from '@tech-glimpse-front/ui-shared';
import { Link } from 'react-router-dom';

export function BlogPage(props: Blog) {
  return (
    <main className="max-w-screen-lg mx-auto mt-10">
      <div className="mb-4 md:mb-0 w-full mx-auto relative">
        <div className="px-4 lg:px-0">
          <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
            {props.title}
          </h2>
          <div className="flex flex-wrap py-6 space-x-2 border-t border-dashed dark:border-gray-400">
            {props.tags?.map((tag, id) => (
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
          src={props.imgUrl}
          alt=""
          className="w-full object-cover lg:rounded"
          style={{ height: '28em' }}
        />
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-12">
        <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
          <p className="pb-6">{props.desc}</p>
          <div className="mb-6 flex items-center justify-center gap-x-6">
            <Link
              to="edit"
              className="focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 text-white bg-blue-700 hover:bg-blue-800"
            >
              <EditIcon /> Edit
            </Link>
            <Button
              text="Delete"
              icon={<DeleteIcon />}
              bgColor="red"
              onClick={() => console.log('Clicked')}
            />
          </div>
        </div>
        <UserCard />
      </div>
    </main>
  );
}

export default BlogPage;
