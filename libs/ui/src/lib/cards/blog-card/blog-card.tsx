import { Blog } from '@tech-glimpse-front/types';
import { Link } from 'react-router-dom';
export function BlogCard(props: Blog) {
  return (
    <Link to={props.id}>
      <img
        src={props.imgUrl}
        loading="lazy"
        alt={props.title}
        className="w-full rounded-lg"
      />
      <div className="mt-3 space-y-2">
        <span className="block text-indigo-600 text-sm">{props.updatedAt}</span>
        <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
          {props.title}
        </h3>
        <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
          {props.desc}
        </p>
      </div>
    </Link>
  );
}

export default BlogCard;
