import { IUpdateProfileFormInput } from '@tech-glimpse-front/types';
import { showToast } from '@tech-glimpse-front/util';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  useDeleteUserByUsernameMutation,
  useGetUserByUsernameQuery,
  useUpdatePasswordMutation,
  useUpdateProfileMutation,
} from '../api/userApi';
import {
  erroHandler,
  isErrorWithMessage,
  isFetchBaseQueryError,
} from '../helpers';
import { logout, setCredentials } from '../reducers/auth-slice.reducer';
import { AppDispatch } from '../store/store';
import useDialog from './use-dialog.hook';

export function useUser() {
  const navigate = useNavigate();
  const { openDialog, closeDialog } = useDialog();
  const dispatch: AppDispatch = useDispatch();
  const [deleteUserMutation, { isLoading: deleteUserLoading }] =
    useDeleteUserByUsernameMutation();
  const [
    updatePasswordMutation,
    { isLoading: updatePasswordLoading, error: updatePasswordError },
  ] = useUpdatePasswordMutation();
  const [updateProfileMutation, { isLoading: updateProfileLoading }] =
    useUpdateProfileMutation();

  const getUserByUsername = (username: string) => {
    try {
      const { data: user } = useGetUserByUsernameQuery({ username });
      console.log('useUser Hook user: ', user);
      return user;
    } catch (err) {
      let errMsg = '';
      if (isFetchBaseQueryError(err)) errMsg = JSON.stringify(err.data);
      else if (isErrorWithMessage(err)) errMsg = err.message;
      if (errMsg) {
        const nav = erroHandler(errMsg);
        if (nav) return navigate(nav);
      }
    }
  };

  const updatePasswordByUsername = useCallback(
    async (username: string, oldPassword: string, newPassword: string) => {
      try {
        const res = await updatePasswordMutation({
          username,
          oldPassword,
          newPassword,
        }).unwrap();
        console.log('res: ', res);
        showToast('Update Password success', 'success');
        return 'SUCCESS';
      } catch (err) {
        let errMsg = '';
        if (isFetchBaseQueryError(err)) errMsg = JSON.stringify(err.data);
        else if (isErrorWithMessage(err)) errMsg = err.message;
        if (errMsg) {
          const nav = erroHandler(errMsg);
          if (nav) {
            dispatch(logout());

            showToast('Please login again', 'info');
            navigate(nav);
          }
        }
        return errMsg;
      }
    },
    [updatePasswordMutation]
  );

  const updateProfileByUsername = useCallback(
    async (username: string, userInfo: Partial<IUpdateProfileFormInput>) => {
      try {
        const res = await updateProfileMutation({
          username,
          userInfo,
        }).unwrap();
        console.log('res: ', res);
        showToast('Update Profile success', 'success');
        dispatch(setCredentials(userInfo?.username ?? username));
        return 'SUCCESS';
      } catch (err) {
        let errMsg = '';
        if (isFetchBaseQueryError(err)) errMsg = JSON.stringify(err.data);
        else if (isErrorWithMessage(err)) errMsg = err.message;
        if (errMsg) {
          const nav = erroHandler(errMsg);
          if (nav) {
            dispatch(logout());

            showToast('Please login again', 'info');
            navigate(nav);
          }
        }
        return errMsg;
      }
    },
    [updateProfileMutation]
  );

  const deleteUserByUsername = useCallback(
    (username: string) => {
      console.log(username);
      openDialog(async () => {
        try {
          const res = await deleteUserMutation({ username }).unwrap();
          console.log('res: ', res);
          showToast('Delete User Profile success', 'success');
          dispatch(logout());
          navigate('/');
        } catch (err) {
          let errMsg = '';
          if (isFetchBaseQueryError(err)) errMsg = JSON.stringify(err.data);
          else if (isErrorWithMessage(err)) errMsg = err.message;
          if (errMsg) {
            const nav = erroHandler(errMsg);
            if (nav) {
              dispatch(logout());
              showToast('Please login again', 'info');
              navigate(nav);
            }
          }
        }
        closeDialog();
      });
    },
    [deleteUserMutation, closeDialog, openDialog]
  );

  return {
    getUserByUsername,
    updatePasswordByUsername,
    updatePasswordLoading,
    updatePasswordError,
    updateProfileByUsername,
    updateProfileLoading,
    deleteUserByUsername,
  };
}

export default useUser;
