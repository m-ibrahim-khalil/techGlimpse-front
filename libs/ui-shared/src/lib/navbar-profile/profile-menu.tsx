import { Menu, Transition } from '@headlessui/react';
import { PlusIcon } from '@heroicons/react/24/outline';
import {
  AppDispatch,
  RootState,
  logout,
} from '@tech-glimpse-front/redux-toolkit';
import { Size, Variant } from '@tech-glimpse-front/types';
import { isCookieValid } from '@tech-glimpse-front/util';
import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { twMerge } from 'tailwind-merge';
import Button from '../common/button/button';
import UpdateUserPasswordModal from '../update-user-password-modal/update-user-password-modal';

export function ProfileMenu() {
  const [showModal, setShowModal] = useState(false);
  const { authUser } = useSelector((state: RootState) => state.auth) ?? {
    authUser: 'Guest',
  };
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('Logout');
    dispatch(logout());
    navigate('/blogs');
  };

  const handleChangePassword = () => {
    setShowModal(true);
  };

  const checkCookieValidity = () => {
    console.log('Checking cookie validity', isCookieValid());
    if (!isCookieValid() && authUser) {
      toast.error('Session expired. Please login again.');
      handleLogout();
    }
  };

  const profileMenuItems = authUser
    ? [{ name: 'Your Profile', href: `/users/${authUser}` }]
    : [
        { name: 'Guest User', href: '' },
        { name: 'Sign In', href: '/signin' },
        { name: 'Sign Up', href: '/signup' },
      ];

  useEffect(() => {
    console.log('Setting interval render refresh');
    const intervalId = setInterval(checkCookieValidity, 60000); // Check every 1 minute
    if (!authUser) clearInterval(intervalId);
    return () => {
      clearInterval(intervalId);
    };
  }, [authUser]);

  return (
    <>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-4 sm:pr-0">
        {authUser && (
          <Button
            size={Size.PRIMARY}
            variant={Variant.PRIMARY}
            onClick={() => navigate('/blogs/write')}
            customClass="invisible md:visible"
          >
            <PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
            <span>Write Blogs</span>
          </Button>
        )}

        <Menu as="div" className="relative ml-5">
          <div className="inline-flex item-center justify-center gap-2 lg:gap-4">
            <span className="invisible text-white font-sans md:visible">
              <strong>Welcome</strong> {authUser ?? 'Guest User'}
            </span>
            <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span className="sr-only">Open user menu</span>
              <img
                className="h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </Menu.Button>
          </div>
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
              {profileMenuItems.map((item) => (
                <Menu.Item key={item.name}>
                  {({ active }) => (
                    <Link
                      to={item.href}
                      className={twMerge(
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700'
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                </Menu.Item>
              ))}
              {authUser && (
                <>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => navigate('/blogs/write')}
                        className={twMerge(
                          active ? 'bg-gray-100' : '',
                          'flex px-4 py-2 text-sm text-gray-700 md:hidden'
                        )}
                      >
                        <PlusIcon
                          className="-ml-0.5 mr-1.5 h-5 w-5"
                          aria-hidden="true"
                        />
                        <span>Write Blogs</span>
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={handleChangePassword}
                        className={twMerge(
                          active ? 'bg-gray-100' : '',
                          'block px-4 py-2 text-sm text-gray-700'
                        )}
                      >
                        Change Password
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={handleLogout}
                        className={twMerge(
                          active ? 'bg-gray-100' : '',
                          'block px-4 py-2 text-sm text-gray-700'
                        )}
                      >
                        Logout
                      </button>
                    )}
                  </Menu.Item>
                </>
              )}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      {showModal && <UpdateUserPasswordModal setShowModal={setShowModal} />}
    </>
  );
}

export default ProfileMenu;
