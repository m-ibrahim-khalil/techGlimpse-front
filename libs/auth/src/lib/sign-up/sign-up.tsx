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
    // Your implementation
  };

  return (
    <>
      <FormHeader
        heading="Signup to create an account"
        paragraph="Already have an account? "
        linkName="Login"
        linkUrl="/"
      />
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="">
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
        </div>
        <FormAction handleSubmit={handleSubmit} text="Signup" />
      </form>
    </>
  );
}

export default SignUp;
