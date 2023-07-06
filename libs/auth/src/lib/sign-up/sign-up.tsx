import { FormAction, FormHeader, InputField } from '@tech-glimpse-front/ui';
import { ChangeEvent, FormEvent, useState } from 'react';
import { signupFields } from '../form-constants';

interface SignupState {
  [key: string]: string;
}

const fieldsState: SignupState = {};
signupFields.forEach((field) => (fieldsState[field.id] = ''));

export function SignUp() {
  const [signupState, setSignupState] = useState<SignupState>(fieldsState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSignupState({ ...signupState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(signupState);
    createAccount();
  };

  //Handle Login API Integration here
  const createAccount = () => {
    console.log(signupState);
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <FormHeader
        heading="Signup to create an account"
        paragraph="Already have an account? "
        linkName="Sign In"
        linkUrl="/signin"
      />
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          {signupFields.map((field) => (
            <InputField
              key={field.id}
              handleChange={handleChange}
              value={signupState[field.id]}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
            />
          ))}

          <FormAction handleSubmit={handleSubmit} text="Signup" />
        </form>
      </div>
    </div>
  );
}

export default SignUp;
