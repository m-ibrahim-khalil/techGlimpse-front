import { yupResolver } from '@hookform/resolvers/yup';
import { ISignInFormInput } from '@tech-glimpse-front/types';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Error from '../../common/error/error';
import FormExtra from '../../form-components/form-extra/form-extra';
import FormHeader from '../../form-components/form-header/form-header';
import FormInputText from '../../form-components/form-input-text/form-input-text';
import { LoadingIcon } from '../../icons/icons';

const defaultValues: ISignInFormInput = {
  username: '',
  password: '',
};

export interface SignInFormProps {
  onSubmit: (data: ISignInFormInput) => void;
  error?: { message: string };
  loading?: boolean;
}

const validationSchema = yup.object({
  username: yup
    .string()
    .required('User Name is required')
    .min(6, 'Username must be at least 6 characters')
    .max(20, 'Username must not exceed 20 characters'),
  password: yup.string().required('password is required'),
});

export function SigninForm({ onSubmit, error, loading }: SignInFormProps) {
  const methods = useForm<ISignInFormInput>({
    defaultValues: defaultValues,
    resolver: yupResolver(validationSchema),
  });
  const { handleSubmit, control } = methods;
  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-6 lg:px-8">
      <FormHeader
        heading="Sign In to your account"
        paragraph="Don't have an account yet? "
        linkName="Sign Up"
        linkUrl="/signup"
      />
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          {error && <Error>{error?.message}</Error>}
          <FormInputText
            name="username"
            required={true}
            control={control}
            label="Username"
            placeholder="Enter Your Username"
          />
          <FormInputText
            type="password"
            name="password"
            required={true}
            control={control}
            label="Password"
            placeholder="Enter Your Password"
          />
          <FormExtra />
          <button type="submit" className="submit" disabled={loading}>
            {loading ? (
              <>
                <LoadingIcon />
                "Loading..."
              </>
            ) : (
              'Sign In'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default SigninForm;
