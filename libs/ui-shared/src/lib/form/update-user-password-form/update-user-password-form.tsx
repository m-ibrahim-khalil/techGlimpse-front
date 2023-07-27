import { yupResolver } from '@hookform/resolvers/yup';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { IUpdatePasswordFormInput } from '@tech-glimpse-front/types';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Error from '../../common/error/error';
import FormInputText from '../../form-components/form-input-text/form-input-text';

const defaultValues: IUpdatePasswordFormInput = {
  oldPassword: '',
  newPassword: '',
  confirmNewPassword: '',
};

interface UpdateUserPasswordFormProps {
  onSubmit: (data: IUpdatePasswordFormInput) => void;
  setShowModal: (value: boolean) => void;
  error?: FetchBaseQueryError | SerializedError | undefined;
  loading?: boolean;
}

const validationSchema = yup.object({
  oldPassword: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(40, 'Password must not exceed 40 characters'),
  newPassword: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(40, 'Password must not exceed 40 characters'),
  confirmNewPassword: yup
    .string()
    .required('Confirm Password is required')
    .oneOf([yup.ref('newPassword'), ''], 'Confirm Password does not match'),
});

export function UpdateUserPasswordForm({
  onSubmit,
  setShowModal,
  error,
  loading,
}: UpdateUserPasswordFormProps) {
  const methods = useForm<IUpdatePasswordFormInput>({
    defaultValues: defaultValues,
    resolver: yupResolver(validationSchema),
    mode: 'onTouched',
  });
  const { handleSubmit, control } = methods;

  return (
    <div className="flex bg-white min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
        <h3 className="text-3xl font=semibold">Update Your Password</h3>
        <button
          className="bg-transparent border-0 text-black float-right"
          onClick={() => setShowModal(false)}
        >
          <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
            x
          </span>
        </button>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          {error && <Error>{error?.data?.message}</Error>}
          <FormInputText
            type="password"
            name="oldPassword"
            control={control}
            label="Old Password"
            placeholder="Enter a your Old Password"
            required={true}
          />
          <FormInputText
            type="password"
            name="newPassword"
            control={control}
            label="New Password"
            placeholder="Enter a strong New Password"
            required={true}
          />
          <FormInputText
            type="password"
            name="confirmNewPassword"
            control={control}
            label="Confirm New Password"
            placeholder="Confirm Your New Password"
            required={true}
          />
          <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
            <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
              type="button"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
            <button
              className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
              type="submit"
              onClick={() => setShowModal(false)}
            >
              Update Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateUserPasswordForm;
