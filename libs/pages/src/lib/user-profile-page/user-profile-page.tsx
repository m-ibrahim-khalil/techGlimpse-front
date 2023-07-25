import { UserCard, UserDetailsCard } from '@tech-glimpse-front/ui-shared';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import BlogsByAuthor from '../blogs-by-author/blogs-by-author';

/* eslint-disable-next-line */
export interface UserProfilePageProps {}

export function UserProfilePage(props: UserProfilePageProps) {
  const [showBlogs, setShowBlogs] = useState(false);
  const { username } = useParams();
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto my-5 p-5">
        <div className="md:flex no-wrap md:-mx-2 ">
          <div className="w-full md:w-3/12 md:mx-2">
            <div className="bg-white p-3 border-t-4 border-green-400">
              <div className="w-full m-auto mt-12 max-w-screen-sm">
                <UserCard userName={username} showFollowButton={false} />
              </div>
            </div>
          </div>
          <div className="w-full md:w-9/12 mx-2 h-64">
            <UserDetailsCard setShowBlogs={setShowBlogs} />
            <div className="my-4"></div>
            {showBlogs && (
              <div className="bg-white p-3 shadow-sm rounded-sm">
                <BlogsByAuthor author={username ?? ''} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfilePage;
