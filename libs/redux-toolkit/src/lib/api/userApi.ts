import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUpdateProfileFormInput, User } from '@tech-glimpse-front/types';

export const userApiSlice = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'api/v1',
    headers: { Accept: 'application/json' },
  }),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    getUserByUsername: builder.query<User, { username: string }>({
      query: ({ username }) => `/users/${username}`,
      providesTags: (result, error, arg) => [
        { type: 'Users', id: arg.username },
      ],
      transformResponse: (result: { message: User }) => {
        console.log('Transforming result: ', result);
        const user = result.message;
        const { imgUrl, ...rest } = user;
        return {
          ...rest,
          imgUrl:
            imgUrl ??
            'https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        };
      },
    }),

    updatePassword: builder.mutation<
      string,
      { username: string; oldPassword: string; newPassword: string }
    >({
      query: ({ username, oldPassword, newPassword }) => ({
        url: `/users/${username}`,
        method: 'PUT',
        body: { oldPassword, newPassword },
      }),
      invalidatesTags: [{ type: 'Users', id: 'LIST' }],
      transformResponse: (result: { message: string }) => result.message,
    }),

    updateProfile: builder.mutation<
      string,
      { username: string; userInfo: Partial<IUpdateProfileFormInput> }
    >({
      query: ({ username, userInfo }) => ({
        url: `/users/${username}/info`,
        method: 'PUT',
        body: userInfo,
      }),
      invalidatesTags: [{ type: 'Users', id: 'LIST' }],
      transformResponse: (result: { message: string }) => result.message,
    }),

    deleteUserByUsername: builder.mutation<string, { username: string }>({
      query: ({ username }) => ({
        url: `/users/${username}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Users', id: 'LIST' }],
      transformResponse: (result: { message: string }) => result.message,
    }),
  }),
});

export const {
  useGetUserByUsernameQuery,
  useUpdatePasswordMutation,
  useUpdateProfileMutation,
  useDeleteUserByUsernameMutation,
} = userApiSlice;
