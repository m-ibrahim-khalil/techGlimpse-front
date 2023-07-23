import { IBlogFormInput } from '@tech-glimpse-front/types';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  useCreateBlogMutation,
  useDeleteBlogMutation,
  useGetBlogsQuery,
  useUpdateBlogMutation,
} from '../api/blogApi';
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
      const data = await createBlogMutation(blog).unwrap();
      if (data != null) {
        console.log('Create blog success');
        navigate('/');
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
      const data = await updateBlogMutation({ id, blog }).unwrap();
      if (data != null) {
        console.log('Update blog success');
        navigate('/');
      }
    },
    [updateBlogMutation, navigate]
  );

  return { blogList, loading, updateBlog, createBlog };
}

export default useBlog;
