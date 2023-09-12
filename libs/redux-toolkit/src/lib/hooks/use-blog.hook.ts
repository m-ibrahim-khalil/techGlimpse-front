import { showToast } from '@tech-glimpse-front/util';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  useCreateBlogMutation,
  useDeleteBlogMutation,
  useGetBlogsQuery,
  useUpdateBlogMutation,
} from '../api/blogApi';
import { erroHandler } from '../helpers';
import { useAppSelector } from './use-app-selector.hook';
import useDialog from './use-dialog.hook';

export function useBlog() {
  const navigate = useNavigate();
  const { page, size } = useAppSelector((state) => state.pagination);
  const { openDialog, closeDialog } = useDialog();

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
        showToast('Create blog success', 'success');
        return navigate('/blogs');
      } catch (err) {
        return erroHandler(err);
      }
    },
    [createBlogMutation, navigate]
  );

  const deleteBlog = useCallback(
    (id: string) => {
      openDialog(async () => {
        try {
          const res = await deleteBlogMutation({ id }).unwrap();
          showToast('Delete blog success', 'success');
          navigate('/blogs');
        } catch (err) {
          return erroHandler(err);
        }
        closeDialog();
        return;
      });
    },
    [deleteBlogMutation, closeDialog, openDialog]
  );

  const updateBlog = useCallback(
    async (id: string, blog: FormData) => {
      try {
        await updateBlogMutation({ id, blog }).unwrap();
        showToast('Update blog success', 'success');
        return navigate(-1);
      } catch (err) {
        return erroHandler(err);
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
