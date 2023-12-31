import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { showToast } from '@tech-glimpse-front/util';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from './hooks/use-app-dispatch.hook';
import { logout } from './reducers/auth-slice.reducer';

/**
 * Type predicate to narrow an unknown error to `FetchBaseQueryError`
 */
export function isFetchBaseQueryError(
  error: unknown
): error is FetchBaseQueryError {
  console.log('error: ', error, typeof error);
  return typeof error === 'object' && error != null && 'status' in error;
}

/**
 * Type predicate to narrow an unknown error to an object with a string 'message' property
 */
export function isErrorWithMessage(
  error: unknown
): error is { message: string } {
  return (
    typeof error === 'object' &&
    error != null &&
    'message' in error &&
    typeof (error as any).message === 'string'
  );
}

export function getErrorMessage(err: any) {
  let errMsg = '';
  if (isFetchBaseQueryError(err)) errMsg = JSON.stringify(err.data);
  else if (isErrorWithMessage(err)) errMsg = err.message;
  else errMsg = JSON.stringify(err);
  return errMsg;
}

export function erroHandler(err: any) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const errMsg = getErrorMessage(err);
  if (!errMsg) return 'Unknown error';
  if (errMsg.includes('jwt expired')) {
    showToast('Your session has expired, please login again', 'error');
    dispatch(logout());
    navigate('/signin');
  } else if (errMsg.includes('UnAuthorized')) {
    showToast('You are not authorized to perform this action', 'error');
    return;
  } else {
    showToast(errMsg, 'error');
  }
  return errMsg;
}
