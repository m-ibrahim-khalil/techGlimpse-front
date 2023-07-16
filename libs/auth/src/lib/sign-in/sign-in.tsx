/* eslint-disable @nx/enforce-module-boundaries */
import { LoginData, userLogin } from '@tech-glimpse-front/redux-state/actions';
import { AppDispatch, RootState } from '@tech-glimpse-front/redux-state/store';
import { IFormValues } from '@tech-glimpse-front/types';
import { SigninForm } from '@tech-glimpse-front/ui-shared';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export function SignIn() {
  const { loading, authUser, error, success } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch: AppDispatch = useDispatch();
  const { control, handleSubmit } = useForm<IFormValues>();
  const navigate = useNavigate();

  // redirect authenticated user to profile screen
  useEffect(() => {
    if (authUser) {
      navigate('/user-profile');
    }
  }, [navigate, authUser]);

  const submitForm: SubmitHandler<IFormValues> = (data: LoginData) => {
    console.log(data);
    dispatch(userLogin(data));
  };

  return <SigninForm></SigninForm>;
}

export default SignIn;

// {loginFields.map((field) => (
//   <Input
//     key={field.id}
//     handleChange={handleChange}
//     value={loginState[field.id]}
//     labelText={field.labelText}
//     labelFor={field.labelFor}
//     id={field.id}
//     name={field.name}
//     type={field.type}
//     isRequired={field.isRequired}
//     placeholder={field.placeholder}
//   />
// ))}
