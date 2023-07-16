import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import FormExtra from '../../form-components/form-extra/form-extra';
import FormHeader from '../../form-components/form-header/form-header';
import FormInputText from '../../form-components/form-input-text/form-input-text';

interface IFormInput {
  username: string;
  password: string;
}

const defaultValues: IFormInput = {
  username: '',
  password: '',
};

const validationSchema = yup.object({
  username: yup
    .string()
    .required('User Name is required')
    .max(10, 'User Name is too long'),
  password: yup.string().required('password is required'),
});

export function SigninForm() {
  const methods = useForm<IFormInput>({
    defaultValues: defaultValues,
    resolver: yupResolver(validationSchema),
    // mode: 'onTouched',
  });
  const { handleSubmit, control } = methods;
  const onSubmit = (data: IFormInput) => console.log(data);

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <FormHeader
        heading="Sign In to your account"
        paragraph="Don't have an account yet? "
        linkName="Sign Up"
        linkUrl="/signup"
      />
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <FormInputText
            name="username"
            control={control}
            label="Username"
            placeholder="Enter Your Username"
          />
          <FormInputText
            type="password"
            name="password"
            control={control}
            label="Password"
            placeholder="Enter Your Password"
          />
          <FormExtra />
          <button type="submit" className="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default SigninForm;
