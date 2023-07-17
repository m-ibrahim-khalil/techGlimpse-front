import { yupResolver } from '@hookform/resolvers/yup';
import { ISignUpFormInput } from '@tech-glimpse-front/types';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Error from '../../common/error/error';
import FormHeader from '../../form-components/form-header/form-header';
import FormInputText from '../../form-components/form-input-text/form-input-text';
import { LoadingIcon } from '../../icons/icons';

const defaultValues: ISignUpFormInput = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

interface SignInFormProps {
  onSubmit: (data: ISignUpFormInput) => void;
  error: { message: string };
  loading?: boolean;
}

const validationSchema = yup.object({
  username: yup
    .string()
    .required('Username is required')
    .min(6, 'Username must be at least 6 characters')
    .max(20, 'Username must not exceed 20 characters'),
  email: yup.string().required('Email is required').email('Email is invalid'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(40, 'Password must not exceed 40 characters'),
  confirmPassword: yup
    .string()
    .required('Confirm Password is required')
    .oneOf([yup.ref('password'), ''], 'Confirm Password does not match'),
});

export function SignUpForm({ onSubmit, error, loading }: SignInFormProps) {
  const methods = useForm<ISignUpFormInput>({
    defaultValues: defaultValues,
    resolver: yupResolver(validationSchema),
    mode: 'onTouched',
  });
  const { handleSubmit, control } = methods;
  console.log('error', error);

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <FormHeader
        heading="Sign Up for new account"
        paragraph="Already have an account? "
        linkName="Sign In"
        linkUrl="/signin"
      />
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          {error && <Error>{error?.message}</Error>}
          <FormInputText
            name="username"
            control={control}
            label="Username"
            placeholder="Enter a Username"
          />
          <FormInputText
            name="email"
            type="email"
            control={control}
            label="Email"
            placeholder="Enter Your Email Addres"
          />
          <FormInputText
            type="password"
            name="password"
            control={control}
            label="Password"
            placeholder="Enter a strong Password"
          />
          <FormInputText
            type="password"
            name="confirmPassword"
            control={control}
            label="Confirm Password"
            placeholder="Confirm Your Password"
          />
          <button type="submit" className="submit">
            {loading ? (
              <>
                <LoadingIcon />
                "Loading..."
              </>
            ) : (
              'Register'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
