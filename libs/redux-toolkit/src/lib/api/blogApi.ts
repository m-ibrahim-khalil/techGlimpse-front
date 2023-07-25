import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  Blog,
  IBlogFormInput,
  IBlogListResponse,
} from '@tech-glimpse-front/types';

export const blogApiSlice = createApi({
  reducerPath: 'extendedBlogApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'api/v1',
    headers: { Accept: 'application/json' },
  }),
  tagTypes: ['Blogs'],
  endpoints: (builder) => ({
    getBlogs: builder.query<
      IBlogListResponse,
      { page?: number; size?: number }
    >({
      query: ({ page = 1, size = 10 }) =>
        `stories?page=${page - 1}&size=${size}`,
      providesTags: (result) =>
        result
          ? [
              ...result.payload.map(({ id }) => ({
                type: 'Blogs' as const,
                id,
              })),
              { type: 'Blogs', id: 'LIST' },
            ]
          : [{ type: 'Blogs', id: 'LIST' }],
      transformResponse: (results: { message: IBlogListResponse }) => {
        const { payload, ...rest } = results.message;
        return {
          ...rest,
          payload: payload.map((blog) => {
            const { imgUrl, ...rest } = blog;
            return {
              ...rest,
              imgUrl:
                imgUrl ??
                'https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            };
          }),
        };
      },
    }),

    getBlogsByAuthorId: builder.query<
      IBlogListResponse,
      { authorId: string; page?: number; size?: number }
    >({
      query: ({ authorId, page = 1, size = 10 }) =>
        `/stories/author/${authorId}?page=${page - 1}&size=${size}`,
      providesTags: (result) =>
        result
          ? [
              ...result.payload.map(({ id }) => ({
                type: 'Blogs' as const,
                id,
              })),
              { type: 'Blogs', id: 'LIST_AUTHOR' },
            ]
          : [{ type: 'Blogs', id: 'LIST_AUTHOR' }],
      transformResponse: (results: { message: IBlogListResponse }) => {
        const { payload, ...rest } = results.message;
        return {
          ...rest,
          payload: payload.map((blog) => {
            const { imgUrl, ...rest } = blog;
            return {
              ...rest,
              imgUrl:
                imgUrl ??
                'https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            };
          }),
        };
      },
    }),

    getBlog: builder.query<Blog, { id: string }>({
      query: ({ id }) => `/stories/${id}`,
      providesTags: (result, error, arg) => [{ type: 'Blogs', id: arg.id }],
      transformResponse: (result: { message: Blog }) => {
        const blog = result.message;
        const { imgUrl, ...rest } = blog;
        return {
          ...rest,
          imgUrl:
            imgUrl ??
            'https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        };
      },
    }),

    createBlog: builder.mutation<Blog | string, IBlogFormInput>({
      query: (initialPost) => ({
        url: '/stories',
        method: 'POST',
        body: initialPost,
      }),
      invalidatesTags: [{ type: 'Blogs', id: 'LIST' }],
      transformResponse: (result: { message: Blog }) => result.message,
    }),

    updateBlog: builder.mutation<string, { id: string; blog: IBlogFormInput }>({
      query: ({ id, blog }) => ({
        url: `/stories/${id}`,
        method: 'PUT',
        body: blog,
      }),
      invalidatesTags: (result, error, arg) =>
        result
          ? [
              { type: 'Blogs', id: arg.id },
              { type: 'Blogs', id: 'LIST' },
            ]
          : [{ type: 'Blogs', id: 'LIST' }],
      transformResponse: (result: { message: string }) => result.message,
    }),

    deleteBlog: builder.mutation<string, { id: string }>({
      query: ({ id }) => ({
        url: `/stories/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Blogs', id: 'LIST' }],
      transformResponse: (result: { message: string }) => result.message,
    }),
  }),
});

export const {
  useGetBlogsQuery,
  useGetBlogsByAuthorIdQuery,
  useGetBlogQuery,
  useCreateBlogMutation,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} = blogApiSlice;
// Compare this snippet from libs/redux-toolkit/src/lib/reducers/blog.reducer.ts:
