import { RootState, useUser } from '@tech-glimpse-front/redux-toolkit';
import { IUpdatePasswordFormInput } from '@tech-glimpse-front/types';
import { UpdateUserPasswordForm } from '@tech-glimpse-front/ui-shared';
import { useSelector } from 'react-redux';

export interface UpdateUserPasswordPageProps {
  setShowModal: (value: boolean) => void;
}

export function UpdateUserPasswordPage({
  setShowModal,
}: UpdateUserPasswordPageProps) {
  const { authUser } = useSelector((state: RootState) => state.auth);
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
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
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

export default UpdateUserPasswordPage;
