import { yupResolver } from '@hookform/resolvers/yup';
import {
  IUpdatePasswordFormInput,
  Size,
  Variant,
} from '@tech-glimpse-front/types';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Button from '../../common/button/button';
import Error from '../../common/error/error';
import FormInputText from '../../form-components/form-input-text/form-input-text';

const defaultValues: IUpdatePasswordFormInput = {
  oldPassword: '',
  newPassword: '',
  confirmNewPassword: '',
};

export interface UpdateUserPasswordFormProps {
  onSubmit: (data: IUpdatePasswordFormInput) => void;
  setShowModal: (value: boolean) => void;
  error?: string | null;
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
  });
  const { handleSubmit, control } = methods;

  return (
    <div className="relative bg-white rounded-lg">
      <button
        className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
        onClick={() => setShowModal(false)}
      >
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
        <span className="sr-only">Close modal</span>
      </button>
      <div className="px-6 py-6 lg:px-8-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <h3 className="mb-8 text-xl font-medium text-gray-900 dark:text-white">
          Update Your Password
        </h3>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {error && <Error>{error}</Error>}
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
          <div className="flex items-center justify-end p-6 gap-2">
            <Button
              size={Size.PRIMARY}
              variant={Variant.SECONDARY}
              type="button"
              onClick={() => setShowModal(false)}
            >
              Close
            </Button>
            <Button size={Size.PRIMARY} variant={Variant.PRIMARY} type="submit">
              Update Password
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateUserPasswordForm;
