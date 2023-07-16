import { userLogin } from '@tech-glimpse-front/redux-state/actions';
import { AppDispatch, RootState } from '@tech-glimpse-front/redux-state/store';
import { ISignInFormInput } from '@tech-glimpse-front/types';
import { SigninForm } from '@tech-glimpse-front/ui-shared';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export function SignIn() {
  const { loading, authUser, error, success } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (authUser) {
      navigate('/user-profile');
    }
  }, [navigate, authUser]);

  const submitForm = (data: ISignInFormInput) => {
    console.log('Submitted: ', data);
    dispatch(userLogin(data));
  };

  return <SigninForm onSubmit={submitForm} error={error}></SigninForm>;
}

export default SignIn;
