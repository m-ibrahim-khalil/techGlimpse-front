import { useEffect, useRef, useState } from 'react';

/* eslint-disable-next-line */
export interface ProfileProps {
  class?: string;
}

// Profile Dropdown
const ProfileDropDown = (props: ProfileProps) => {
  const [state, setState] = useState<boolean>(false);
  const profileRef = useRef<HTMLButtonElement>(null);

  const navigation = [
    { title: 'Dashboard', path: '/' },
    { title: 'Settings', path: '/' },
    { title: 'Log out', path: '/' },
  ];

  useEffect(() => {
    const handleDropDown = (e: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(e.target as Node)
      ) {
        setState(false);
      }
    };
    document.addEventListener('click', handleDropDown);
    return () => {
      document.removeEventListener('click', handleDropDown);
    };
  }, []);

  return (
    <div className={`relative ${props.class}`}>
      <div className="flex items-center space-x-4">
        <button
          ref={profileRef}
          className="w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 ring-2 lg:focus:ring-indigo-600"
          onClick={() => setState(!state)}
        >
          <img
            src="https://randomuser.me/api/portraits/men/46.jpg"
            className="w-full h-full rounded-full"
          />
        </button>
        <div className="lg:hidden">
          <span className="block">Micheal John</span>
          <span className="block text-sm text-gray-500">john@gmail.com</span>
        </div>
      </div>
      <ul
        className={`bg-white top-12 right-0 mt-5 space-y-5 lg:absolute lg:border lg:rounded-md lg:text-sm lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${
          state ? '' : 'lg:hidden'
        }`}
      >
        {navigation.map((item, idx) => (
          <li>
            <a
              key={idx}
              className="block text-gray-600 lg:hover:bg-gray-50 lg:p-2.5"
              href={item.path}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileDropDown;
