import { registerUser } from '@tech-glimpse-front/redux-state/actions';
import { AppDispatch, RootState } from '@tech-glimpse-front/redux-state/store';
import { ISignUpFormInput } from '@tech-glimpse-front/types';
import { SignUpForm } from '@tech-glimpse-front/ui-shared';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export function SignUp() {
  const { loading, authUser, error, success } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (success) navigate('/login');
    if (authUser) navigate('/users/' + authUser);
  }, [navigate, authUser, success]);

  const submitForm = (data: ISignUpFormInput) => {
    console.log('Submitted: ', data);
    if (data.password !== data.confirmPassword) {
      alert('Password mismatch');
    }
    data.email = data.email.toLowerCase();
    console.log('data', data);
    dispatch(registerUser(data));
  };
  return <SignUpForm onSubmit={submitForm} error={error} />;
}

export default SignUp;
