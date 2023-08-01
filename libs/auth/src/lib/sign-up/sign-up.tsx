import {
  registerUser,
  useAppDispatch,
  useAppSelector,
} from '@tech-glimpse-front/redux-toolkit';
import { ISignUpFormInput } from '@tech-glimpse-front/types';
import { SignUpForm } from '@tech-glimpse-front/ui-shared';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function SignUp() {
  const { loading, authUser, registerError } = useAppSelector(
    (state) => state.auth
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (authUser) navigate(`/users/${authUser}`);
  }, [navigate, authUser]);

  const submitForm = (data: ISignUpFormInput) => {
    console.log('Submitted: ', data);
    if (data.password !== data.confirmPassword) {
      alert('Password mismatch');
    }
    data.email = data.email.toLowerCase();
    console.log('data', data);
    dispatch(registerUser(data));
  };
  return (
    <SignUpForm onSubmit={submitForm} error={registerError} loading={loading} />
  );
}

export default SignUp;
