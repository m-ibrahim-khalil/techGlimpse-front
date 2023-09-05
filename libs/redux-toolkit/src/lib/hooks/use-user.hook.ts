import { IUpdateProfileFormInput } from '@tech-glimpse-front/types';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  useDeleteUserByUsernameMutation,
  useGetUserByUsernameQuery,
  useUpdatePasswordMutation,
  useUpdateProfileMutation,
} from '../api/userApi';
import { erroHandler } from '../helpers';
import { logout, setCredentials } from '../reducers/auth-slice.reducer';
import { AppDispatch } from '../store/store';
import useDialog from './use-dialog.hook';

export function useUser() {
  const navigate = useNavigate();
  const { openDialog, closeDialog } = useDialog();
  const dispatch: AppDispatch = useDispatch();
  const [deleteUserMutation] = useDeleteUserByUsernameMutation();
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
      return erroHandler(err);
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
        toast.success('Update Password success');
        return 'SUCCESS';
      } catch (err) {
        return erroHandler(err);
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
        toast.success('Update Profile success');
        dispatch(setCredentials(userInfo?.username ?? username));
        return 'SUCCESS';
      } catch (err) {
        return erroHandler(err);
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
          toast.success('Delete User Profile success');
          dispatch(logout());
          navigate('/');
        } catch (err) {
          return erroHandler(err);
        }
        closeDialog();
        return;
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
