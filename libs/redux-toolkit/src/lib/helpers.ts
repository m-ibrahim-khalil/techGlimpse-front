import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { toast } from 'react-toastify';

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

export function erroHandler(errMsg: string) {
  if (errMsg.includes('jwt expired')) {
    toast.dismiss();
    toast.error('Your session has expired, please login again');
    return '/signin';
  } else if (errMsg.includes('UnAuthorized')) {
    toast.dismiss();
    toast.error('You are not authorized to perform this action');
    return;
  } else {
    console.log('errMsg: ', errMsg);
    toast.dismiss();
    toast.error(errMsg);
    return;
  }
}
