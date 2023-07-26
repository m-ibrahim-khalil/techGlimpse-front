import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  useDeleteUserByUsernameMutation,
  useGetUserByUsernameQuery,
} from '../api/userApi';
import {
  erroHandler,
  isErrorWithMessage,
  isFetchBaseQueryError,
} from '../helpers';
import { logout } from '../reducers/auth-slice.reducer';
import { AppDispatch } from '../store/store';
import useDialog from './use-dialog.hook';

export function useUser() {
  const navigate = useNavigate();
  const { openDialog, closeDialog } = useDialog();

  const [deleteUserMutation, { isLoading: deleteUserLoading }] =
    useDeleteUserByUsernameMutation();

  const getUserByUsername = (username: string) => {
    try {
      const { data: user } = useGetUserByUsernameQuery({ username });
      console.log('useUser Hook user: ', user);
      return user;
    } catch (err) {
      let errMsg = '';
      if (isFetchBaseQueryError(err))
        errMsg = err.data?.message ?? JSON.stringify(err.data);
      else if (isErrorWithMessage(err)) errMsg = err.message;
      if (errMsg) {
        const nav = erroHandler(errMsg);
        if (nav) return navigate(nav);
      }
    }
  };

  const deleteUserByUsername = useCallback(
    (username: string) => {
      console.log(username);
      openDialog(async () => {
        try {
          const res = await deleteUserMutation({ username }).unwrap();
          console.log('res: ', res);
          toast.success('Delete blog success');
          const dispatch: AppDispatch = useDispatch();
          dispatch(logout());
          navigate('/blogs');
        } catch (err) {
          let errMsg = '';
          if (isFetchBaseQueryError(err))
            errMsg = err.data?.message ?? JSON.stringify(err.data);
          else if (isErrorWithMessage(err)) errMsg = err.message;
          if (errMsg) {
            const nav = erroHandler(errMsg);
            if (nav) navigate(nav);
          }
        }
        closeDialog();
      });
    },
    [deleteUserMutation, closeDialog, openDialog]
  );

  return {
    getUserByUsername,
    deleteUserByUsername,
    deleteUserLoading,
  };
}

export default useUser;
