import { RootState, useUser } from '@tech-glimpse-front/redux-toolkit';
import { IUpdatePasswordFormInput } from '@tech-glimpse-front/types';
import { useSelector } from 'react-redux';
import UpdateUserPasswordForm from '../form/update-user-password-form/update-user-password-form';

export interface UpdateUserPasswordModalProps {
  setShowModal: (value: boolean) => void;
}

export function UpdateUserPasswordModal({
  setShowModal,
}: UpdateUserPasswordModalProps) {
  const { authUser } = useSelector((state: RootState) => state.auth);
  console.log('rendering UpdateUserPasswordModal: ', authUser);
  const {
    updatePasswordByUsername,
    updatePasswordLoading,
    updatePasswordError,
  } = useUser();

  const submitForm = (data: IUpdatePasswordFormInput) => {
    console.log('Submitted: ');
    updatePasswordByUsername(
      authUser ?? '',
      data.oldPassword,
      data.newPassword
    );
  };
  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div className="relative w-full max-w-md max-h-full">
        <UpdateUserPasswordForm
          setShowModal={setShowModal}
          onSubmit={submitForm}
          loading={updatePasswordLoading}
          error={updatePasswordError}
        />
      </div>
    </div>
  );
}

export default UpdateUserPasswordModal;
