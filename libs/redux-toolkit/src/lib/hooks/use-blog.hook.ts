import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  useCreateBlogMutation,
  useDeleteBlogMutation,
  useGetBlogsQuery,
  useUpdateBlogMutation,
} from '../api/blogApi';
import {
  erroHandler,
  isErrorWithMessage,
  isFetchBaseQueryError,
} from '../helpers';
import { logout } from '../reducers/auth-slice.reducer';
import { AppDispatch } from '../store/store';
import { useAppSelector } from './use-app-selector.hook';
import useDialog from './use-dialog.hook';

export function useBlog() {
  const navigate = useNavigate();
  const { page, size } = useAppSelector((state) => state.pagination);
  const { openDialog, closeDialog } = useDialog();
  const dispatch: AppDispatch = useDispatch();

  const {
    data: blogList = {
      totalItems: 0,
      totalPages: 0,
      payload: [],
      currentPage: 0,
    },
    isLoading: getBlogListLoading,
  } = useGetBlogsQuery({ page, size });

  const [createBlogMutation, { isLoading: createBlogLoading }] =
    useCreateBlogMutation();
  const [deleteBlogMutation, { isLoading: deleteBlogLoading }] =
    useDeleteBlogMutation();
  const [updateBlogMutation, { isLoading: updateBlogLoading }] =
    useUpdateBlogMutation();

  const loading =
    getBlogListLoading ||
    deleteBlogLoading ||
    updateBlogLoading ||
    createBlogLoading;

  const createBlog = useCallback(
    async (blog: FormData) => {
      try {
        await createBlogMutation(blog).unwrap();
        toast.dismiss();
        toast.success('Create blog success');
        navigate('/blogs');
      } catch (err) {
        let errMsg = '';
        if (isFetchBaseQueryError(err)) errMsg = JSON.stringify(err.data);
        else if (isErrorWithMessage(err)) errMsg = err.message;
        if (errMsg) {
          const nav = erroHandler(errMsg);
          if (nav) {
            dispatch(logout());
            toast.dismiss();
            toast.info('Please login again');
            navigate(nav);
          }
        }
      }
    },
    [createBlogMutation, navigate]
  );

  const deleteBlog = useCallback(
    (id: string) => {
      console.log(id);
      openDialog(async () => {
        try {
          const res = await deleteBlogMutation({ id }).unwrap();
          console.log('res: ', res);
          toast.dismiss();
          toast.success('Delete blog success');
          navigate('/blogs');
        } catch (err) {
          let errMsg = '';
          if (isFetchBaseQueryError(err)) errMsg = JSON.stringify(err.data);
          else if (isErrorWithMessage(err)) errMsg = err.message;
          if (errMsg) {
            const nav = erroHandler(errMsg);
            if (nav) {
              dispatch(logout());
              toast.dismiss();
              toast.info('Please login again');
              navigate(nav);
            }
          }
        }
        closeDialog();
      });
    },
    [deleteBlogMutation, closeDialog, openDialog]
  );

  const updateBlog = useCallback(
    async (id: string, blog: FormData) => {
      try {
        await updateBlogMutation({ id, blog }).unwrap();
        toast.dismiss();
        toast.success('Update blog success');
        navigate(-1);
      } catch (err) {
        let errMsg = '';
        if (isFetchBaseQueryError(err)) errMsg = JSON.stringify(err.data);
        else if (isErrorWithMessage(err)) errMsg = err.message;
        if (errMsg) {
          const nav = erroHandler(errMsg);
          if (nav) {
            dispatch(logout());
            toast.dismiss();
            toast.info('Please login again');
            navigate(nav);
          }
        }
      }
    },
    [updateBlogMutation, navigate]
  );

  return {
    blogList,
    loading,
    updateBlog,
    createBlog,
    deleteBlog,
  };
}

export default useBlog;
