import { useAppSelector, useUser } from '@tech-glimpse-front/redux-toolkit';
import { IUpdatePasswordFormInput } from '@tech-glimpse-front/types';
import { useState } from 'react';
import UpdateUserPasswordForm from '../form/update-user-password-form/update-user-password-form';

export interface UpdateUserPasswordModalProps {
  setShowModal: (value: boolean) => void;
}

export function UpdateUserPasswordModal({
  setShowModal,
}: UpdateUserPasswordModalProps) {
  const [error, setError] = useState<string | null>(null);
  const { authUser } = useAppSelector((state) => state.auth);
  console.log('rendering UpdateUserPasswordModal: ', authUser);
  const {
    updatePasswordByUsername,
    updatePasswordLoading,
    updatePasswordError,
  } = useUser();

  const submitForm = async (data: IUpdatePasswordFormInput) => {
    console.log('Submitted: ', data);
    const res = await updatePasswordByUsername(
      authUser ?? '',
      data.oldPassword,
      data.newPassword
    );
    console.log('res: ', res);
    if (res === 'SUCCESS') {
      setShowModal(false);
    } else setError(res ?? updatePasswordError?.message ?? 'Unknown error');
  };
  return (
    <div className="fixed z-50 w-full overflow-y-auto md:inset-0 h-[calc(100%-1rem)]  max-h-full backdrop-blur-lg bg-transparent">
      <div className="relative top-20 mx-auto w-full  max-w-md max-h-full">
        <UpdateUserPasswordForm
          setShowModal={setShowModal}
          onSubmit={submitForm}
          loading={updatePasswordLoading}
          error={error}
        />
      </div>
    </div>
  );
}

export default UpdateUserPasswordModal;
