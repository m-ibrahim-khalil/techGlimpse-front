import {
  useAppDispatch,
  useAppSelector,
  userLogin,
} from '@tech-glimpse-front/redux-toolkit';
import { ISignInFormInput } from '@tech-glimpse-front/types';
import { SigninForm } from '@tech-glimpse-front/ui-shared';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function SignIn() {
  const { loading, authUser, loginError } = useAppSelector(
    (state) => state.auth
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (authUser) {
      navigate(`/users/${authUser}`);
    }
  }, [navigate, authUser]);

  const submitForm = (data: ISignInFormInput) => {
    console.log('Submitted: ', data);
    return dispatch(userLogin(data));
  };

  return (
    <SigninForm onSubmit={submitForm} error={loginError} loading={loading} />
  );
}

export default SignIn;
