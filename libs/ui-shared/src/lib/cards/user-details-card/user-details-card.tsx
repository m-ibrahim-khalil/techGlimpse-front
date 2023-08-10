import { Menu, Transition } from '@headlessui/react';
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import {
  RootState,
  useAppSelector,
  useUser,
} from '@tech-glimpse-front/redux-toolkit';
import { User } from '@tech-glimpse-front/types';
import { Fragment } from 'react';
import { twMerge } from 'tailwind-merge';
import UpdateProfileModal from '../../update-profile-modal/update-profile-modal';

export interface UserDetailsCardProps {
  showBlogs: boolean;
  setShowBlogs: (value: boolean) => void;
  user: User;
  showUpdateProfileForm: boolean;
  setShowUpdateProfileForm: (value: boolean) => void;
}

export function UserDetailsCard({
  showUpdateProfileForm,
  setShowUpdateProfileForm,
  user,
  showBlogs,
  setShowBlogs,
}: UserDetailsCardProps) {
  const { deleteUserByUsername } = useUser();
  const { authUser } = useAppSelector((state: RootState) => state.auth);

  const onDeleteProfile = () => {
    deleteUserByUsername(user.username);
  };

  return (
    <div className="bg-white p-3 shadow-sm rounded-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
          <span className="text-green-500">
            <svg
              className="h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </span>
          <span className="tracking-wide">About</span>
        </div>
        {authUser === user.username && (
          <Menu as="div" className="relative ml-5">
            <Menu.Button>
              <EllipsisVerticalIcon className="h-5" />
            </Menu.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => setShowUpdateProfileForm(true)}
                      className={twMerge(
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700'
                      )}
                    >
                      Edit Profile
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={onDeleteProfile}
                      className={twMerge(
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700'
                      )}
                    >
                      Delete Profile
                    </button>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        )}
      </div>
      {showUpdateProfileForm && (
        <UpdateProfileModal
          setShowModal={setShowUpdateProfileForm}
          user={user}
        />
      )}
      <div className="text-gray-700">
        <div className="grid lg:grid-cols-2 text-sm">
          <div className="grid grid-cols-2">
            <div className="px-4 py-2 font-semibold">First Name</div>
            <div className="py-2">{user.firstName ?? 'Ibrahim'}</div>
          </div>
          <div className="grid grid-cols-2">
            <div className="px-4 py-2 font-semibold">Last Name</div>
            <div className="py-2">{user.lastName ?? 'Khalil'}</div>
          </div>
          <div className="grid grid-cols-2">
            <div className="px-4 py-2 font-semibold">Gender</div>
            <div className="py-2">{user.gender ?? 'Male'}</div>
          </div>
          <div className="grid grid-cols-2">
            <div className="px-4 py-2 font-semibold">Age</div>
            <div className="py-2">{user.age ?? '25'}</div>
          </div>

          <div className="grid grid-cols-2">
            <div className="px-4 py-2 font-semibold">Email.</div>
            <div className="py-2">
              <a className="text-blue-800" href="mailto:jane@example.com">
                {user.email ?? 'ibrahimkhalil@gmail.com'}
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="px-4 py-2 font-semibold">Username</div>
            <div className="py-2">{user.username}</div>
          </div>
        </div>
      </div>
      <button
        onClick={() => setShowBlogs(!showBlogs)}
        className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
      >
        {showBlogs ? 'Hide' : 'Show'} Blogs
      </button>
    </div>
  );
}

export default UserDetailsCard;
