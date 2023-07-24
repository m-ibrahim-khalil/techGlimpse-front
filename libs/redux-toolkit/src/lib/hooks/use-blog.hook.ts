import { IBlogFormInput } from '@tech-glimpse-front/types';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  useCreateBlogMutation,
  useDeleteBlogMutation,
  useGetBlogsQuery,
  useUpdateBlogMutation,
} from '../api/blogApi';
import { isErrorWithMessage, isFetchBaseQueryError } from '../helpers';
import { useAppSelector } from './use-app-selector.hook';

export function useBlog() {
  const navigate = useNavigate();
  const { page, size } = useAppSelector((state) => state.pagination);

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
    async (blog: IBlogFormInput) => {
      try {
        await createBlogMutation(blog).unwrap();
        toast.success('Create blog success');
        navigate('/');
      } catch (err) {
        if (isFetchBaseQueryError(err)) {
          const errMsg = 'error' in err ? err.error : JSON.stringify(err.data);
          toast.error(errMsg);
        } else if (isErrorWithMessage(err)) {
          toast.error(err.message);
        }
      }
    },
    [createBlogMutation, navigate]
  );

  // const deletePost = useCallback((blog: FormData) => {
  //     openDialog((password) => {
  //         blog = {
  //             ...blog,
  //             password: password.toString()
  //         }
  //         deleteBlogMutation(blog);
  //         closeDialog()
  //     });
  // }, [deleteBlogMutation, closeDialog, openDialog])

  const updateBlog = useCallback(
    async (id: string, blog: IBlogFormInput) => {
      try {
        await updateBlogMutation({ id, blog }).unwrap();
        toast.success('Update blog success');
        navigate('/');
      } catch (err) {
        if (isFetchBaseQueryError(err)) {
          const errMsg = 'error' in err ? err.error : JSON.stringify(err.data);
          toast.error(errMsg);
        } else if (isErrorWithMessage(err)) {
          toast.error(err.message);
        }
      }
    },
    [updateBlogMutation, navigate]
  );

  return { blogList, loading, updateBlog, createBlog };
}

export default useBlog;
