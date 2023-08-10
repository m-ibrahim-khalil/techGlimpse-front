import { useUser } from '@tech-glimpse-front/redux-toolkit';
import { UserCard, UserDetailsCard } from '@tech-glimpse-front/ui-shared';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import BlogsByAuthor from '../blogs-by-author/blogs-by-author';

export function UserProfilePage() {
  const [showBlogs, setShowBlogs] = useState(false);
  const [showUpdateProfileForm, setShowUpdateProfileForm] = useState(false);
  const { username } = useParams();
  const { getUserByUsername } = useUser();
  const user = getUserByUsername(username ?? '');

  if (!user)
    return (
      <div className="bg-gray-100">
        <div className="container mx-auto my-5 p-5">
          <h2 className=" w-60 h-60 ">User Not Exist</h2>
        </div>
      </div>
    );

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto my-5 p-5">
        <div className="md:flex no-wrap md:-mx-2 ">
          <div className="w-full md:w-3/12 md:mx-2">
            <div className="bg-white p-3 border-t-4 border-green-400">
              <div className="w-full m-auto mt-12 max-w-screen-sm">
                <UserCard showFollowButton={false} user={user} />
              </div>
            </div>
          </div>
          <div className="w-full md:w-9/12 mx-2">
            <UserDetailsCard
              showBlogs={showBlogs}
              setShowBlogs={setShowBlogs}
              user={user}
              showUpdateProfileForm={showUpdateProfileForm}
              setShowUpdateProfileForm={setShowUpdateProfileForm}
            />
            <div className="my-4"></div>
            {showBlogs && (
              <div className="bg-white p-3 shadow-sm rounded-sm">
                <BlogsByAuthor authorId={user?.id ?? ''} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfilePage;
