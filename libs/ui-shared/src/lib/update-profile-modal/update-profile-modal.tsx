import { User } from '@tech-glimpse-front/types';
import UpdateProfileForm from '../form/update-profile-form/update-profile-form';

export interface UpdateProfileModalProps {
  setShowModal: (value: boolean) => void;
  user: User;
}

export function UpdateProfileModal({
  setShowModal,
  user,
}: UpdateProfileModalProps) {
  return (
    <div className="fixed z-50 w-full overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full backdrop-blur-lg bg-transparent">
      <div className="relative top-20 mx-auto w-full max-w-lg max-h-full">
        <UpdateProfileForm setShowModal={setShowModal} user={user} />
      </div>
    </div>
  );
}

export default UpdateProfileModal;
