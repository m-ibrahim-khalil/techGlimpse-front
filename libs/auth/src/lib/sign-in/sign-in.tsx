import {
  FormAction,
  FormExtra,
  FormHeader,
  InputField,
} from '@tech-glimpse-front/ui';
import { ChangeEvent, FormEvent, useState } from 'react';
import { loginFields } from '../form-constants';

interface LoginState {
  [key: string]: string;
}

const fieldsState: LoginState = {};
loginFields.forEach((field) => (fieldsState[field.id] = ''));

export function SignIn() {
  const [loginState, setLoginState] = useState<LoginState>(fieldsState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    authenticateUser();
  };

  //Handle Login API Integration here
  const authenticateUser = () => {
    console.log(loginState);
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <FormHeader
        heading="Sign In to your account"
        paragraph="Don't have an account yet? "
        linkName="Sign Up"
        linkUrl="/signup"
      />
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          {loginFields.map((field) => (
            <InputField
              key={field.id}
              handleChange={handleChange}
              value={loginState[field.id]}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
            />
          ))}

          <FormExtra />
          <FormAction handleSubmit={handleSubmit} text="Sign In" />
        </form>
      </div>
    </div>
  );
}

export default SignIn;
