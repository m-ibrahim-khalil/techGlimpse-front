import { useUser } from '@tech-glimpse-front/redux-toolkit';
import { IUpdateProfileFormInput, User } from '@tech-glimpse-front/types';
import { useState } from 'react';
import UpdateProfileForm from '../form/update-profile-form/update-profile-form';

export interface UpdateProfileModalProps {
  setShowModal: (value: boolean) => void;
  user: User;
}

export function UpdateProfileModal({
  setShowModal,
  user,
}: UpdateProfileModalProps) {
  const [error, setError] = useState<string | null>(null);
  const { updateProfileByUsername, updateProfileLoading } = useUser();

  const submitForm = async (data: Partial<IUpdateProfileFormInput>) => {
    console.log('Submitted: ', data);
    const res = await updateProfileByUsername(user.username, data);
    console.log('res: ', res);
    if (res === 'SUCCESS') {
      setShowModal(false);
    } else setError(res ?? 'Unknown error');
  };

  return (
    <div className="fixed z-50 w-full overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full backdrop-blur-lg bg-transparent">
      <div className="relative top-20 mx-auto w-full max-w-lg max-h-full">
        <UpdateProfileForm
          onSubmit={submitForm}
          setShowModal={setShowModal}
          user={user}
          loading={updateProfileLoading}
          error={error}
        />
      </div>
    </div>
  );
}

export default UpdateProfileModal;
