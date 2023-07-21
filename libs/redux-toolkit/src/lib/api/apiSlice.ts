import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api', // optional
  baseQuery: fetchBaseQuery({ baseUrl: 'api/v1' }),
  tagTypes: ['Blogs', 'User'],
  endpoints: (builder) => ({}),
});
