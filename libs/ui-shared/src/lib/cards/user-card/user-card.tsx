import { User } from '@tech-glimpse-front/types';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

export interface UserCardProps {
  showFollowButton?: boolean;
  user: User | void;
}

export function UserCard({ showFollowButton = true, user }: UserCardProps) {
  if (!user) return null;
  return (
    <div className="p-4 border-t border-b md:border md:rounded">
      <div className="flex py-2">
        <img
          src="https://randomuser.me/api/portraits/men/97.jpg"
          className="h-10 w-10 rounded-full mr-2 object-cover"
          alt="Avatar of Jonathan Reinink"
        />
        <div>
          <p className="font-semibold text-gray-700 text-sm">
            {user?.username}
          </p>
          <p className="font-semibold text-gray-600 text-xs"> Author </p>
        </div>
      </div>
      <p className="text-gray-700 py-3">
        {user?.bio ?? 'This user has no bio'}
      </p>
      <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
        <li className="flex items-center py-3">
          <span>Status</span>
          <span className="ml-auto">
            <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
              Active
            </span>
          </span>
        </li>
        <li className="flex items-center py-3">
          <span>Member since</span>
          <span className="ml-auto">
            {user.createdAt && format(new Date(user.createdAt), 'dd MMM yyyy')}
          </span>
        </li>
      </ul>
      {showFollowButton && (
        <Link
          to={`/users/${user?.username}`}
          className="px-2 py-1 text-gray-100 bg-green-700 flex w-full items-center justify-center rounded"
        >
          Visit Profile
        </Link>
      )}
    </div>
  );
}

export default UserCard;
