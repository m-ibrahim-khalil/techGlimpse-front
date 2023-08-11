import { Blog } from '@tech-glimpse-front/types';
import { truncate } from '@tech-glimpse-front/util';
import ReactQuill from 'react-quill';
import { Link } from 'react-router-dom';
import TimeAgo from '../../common/time-ago/time-ago';

export function BlogCard(props: Blog) {
  return (
    <Link to={`/blogs/${props.id}`}>
      <img
        src={props.coverImageURL}
        loading="lazy"
        alt={props.title}
        className="w-full object-cover rounded-lg"
        style={{ height: '16em' }}
      />
      <div className="mt-3 space-y-2">
        <TimeAgo timestamp={props?.updatedAt} />
        <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
          {props.title}
        </h3>
        <ReactQuill
          value={truncate(props.description, 200)}
          readOnly={true}
          theme={'bubble'}
        />
      </div>
    </Link>
  );
}

export default BlogCard;
