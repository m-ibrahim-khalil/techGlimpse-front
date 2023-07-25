import { Link } from 'react-router-dom';

/* eslint-disable-next-line */
export interface UserCardProps {
  userName?: string;
  showFollowButton?: boolean;
}

export function UserCard({
  userName = 'Unknown',
  showFollowButton = true,
}: UserCardProps) {
  return (
    <div className="p-4 border-t border-b md:border md:rounded">
      <div className="flex py-2">
        <img
          src="https://randomuser.me/api/portraits/men/97.jpg"
          className="h-10 w-10 rounded-full mr-2 object-cover"
        />
        <div>
          <p className="font-semibold text-gray-700 text-sm">{userName}</p>
          <p className="font-semibold text-gray-600 text-xs"> Editor </p>
        </div>
      </div>
      <p className="text-gray-700 py-3">
        Mike writes about technology Yourself required no at thoughts delicate
        landlord it be. Branched dashwood do is whatever it.
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
          <span className="ml-auto">Nov 07, 2016</span>
        </li>
      </ul>
      {showFollowButton && (
        <Link
          to={`/users/${userName}`}
          className="px-2 py-1 text-gray-100 bg-green-700 flex w-full items-center justify-center rounded"
        >
          Visit Profile
        </Link>
      )}
    </div>
  );
}

export default UserCard;
