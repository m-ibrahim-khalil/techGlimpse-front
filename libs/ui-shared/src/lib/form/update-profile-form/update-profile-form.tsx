import {
  IUpdateProfileFormInput,
  Size,
  User,
  Variant,
} from '@tech-glimpse-front/types';
import { Controller, useForm } from 'react-hook-form';
import Button from '../../common/button/button';
import Error from '../../common/error/error';
import FormInputText from '../../form-components/form-input-text/form-input-text';
import { CloseIcon } from '../../icons/icons';

export interface UpdateProfileFormProps {
  onSubmit: (data: Partial<IUpdateProfileFormInput>) => void;
  setShowModal: (value: boolean) => void;
  user: User;
  error?: string | null;
  loading?: boolean;
}

export function UpdateProfileForm({
  onSubmit,
  setShowModal,
  user,
  error,
  loading,
}: UpdateProfileFormProps) {
  const defaultValues: Partial<IUpdateProfileFormInput> = {
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    bio: user.bio,
    gender: user.gender,
  };

  const { handleSubmit, control } = useForm<Partial<IUpdateProfileFormInput>>({
    defaultValues: defaultValues,
  });

  return (
    <div className="relative bg-white rounded-lg ">
      <Button
        onClick={() => setShowModal(false)}
        customClass="absolute top-3 right-2.5 text-gray-400 bg-red hover:bg-gray-200 hover:text-gray-900 text-sm w-8 h-8 ml-auto dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <CloseIcon />
        <span className="sr-only">Close modal</span>
      </Button>
      <div className="px-1 py-2 lg:px-4-5 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-6 mt-3">
            <div className="border-b border-gray-900/10 pb-5">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Update Your Public Profile
              </h2>
              {error && <Error>{error}</Error>}

              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-4">
                <div className="sm:col-span-4">
                  <FormInputText
                    name="username"
                    control={control}
                    label="Username"
                    placeholder={user.username}
                    required={true}
                    customClass=""
                  />
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="bio"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Bio
                  </label>
                  <div className="mt-2">
                    <Controller
                      name="bio"
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <textarea
                          id="bio"
                          rows={3}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          defaultValue={user?.bio}
                          onChange={onChange}
                          value={value}
                        />
                      )}
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    Write a few sentences about yourself.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-900/10 pb-5">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Personal Information
              </h2>

              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <FormInputText
                    name="firstName"
                    control={control}
                    label="First Name"
                    placeholder={user.firstName}
                    customClass=""
                  />
                </div>

                <div className="sm:col-span-3">
                  <FormInputText
                    name="lastName"
                    control={control}
                    label="Last Name"
                    placeholder={user.lastName}
                    customClass=""
                  />
                </div>

                <div className="sm:col-span-4">
                  <FormInputText
                    name="email"
                    control={control}
                    label="Email"
                    placeholder={user.email}
                    customClass=""
                  />
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Gender
                  </label>
                  <div className="mt-2">
                    <Controller
                      name="gender"
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <select
                          id="gender"
                          autoComplete="gender"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                          defaultValue={user.gender}
                          onChange={onChange}
                          value={value}
                        >
                          <option>Male</option>
                          <option>Female</option>
                        </select>
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-end gap-x-6">
            <Button
              type="button"
              variant={Variant.SECONDARY}
              size={Size.PRIMARY}
              className="text-sm font-semibold leading-6 text-gray-900"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant={Variant.PRIMARY}
              size={Size.PRIMARY}
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateProfileForm;
