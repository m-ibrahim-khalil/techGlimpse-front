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
    // Your implementation
  };

  return (
    <>
      <FormHeader
        heading="Login to your account"
        paragraph="Don't have an account yet? "
        linkName="Signup"
        linkUrl="/signup"
      />
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="-space-y-px">
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
        </div>

        <FormExtra />
        <FormAction handleSubmit={handleSubmit} text="Login" />
      </form>
    </>
  );
}

export default SignIn;
