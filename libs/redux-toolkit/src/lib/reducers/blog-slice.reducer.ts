import { createEntityAdapter, createSelector } from '@reduxjs/toolkit';
import { Blog } from '@tech-glimpse-front/types';
import { apiSlice } from '../api/apiSlice';

const blogsAdapter = createEntityAdapter<Blog>({
  sortComparer: (a, b) => b.updatedAt.localeCompare(a.updatedAt),
});

const initialState = blogsAdapter.getInitialState();
type BlogsEntityState = typeof initialState;

export const extendedBlogApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBlogs: builder.query<BlogsEntityState, void>({
      query: () => '/stories',
      transformResponse: (responseData: any) => {
        console.log(responseData.data?.message);
        const loadedBlogs = responseData.data?.message?.payload.map(
          (blog: Blog) => {
            return blog;
          }
        );
        return blogsAdapter.setAll(initialState, loadedBlogs);
      },
      providesTags: (result) =>
        result
          ? [
              { type: 'Blogs', id: 'LIST' },
              ...result.ids.map((id) => ({ type: 'Blogs', id } as const)),
            ]
          : [{ type: 'Blogs', id: 'LIST' }],
    }),

    getBlogsByAuthorId: builder.query<BlogsEntityState, void>({
      query: (id) => `/stories/author/${id}`,
      transformResponse: (responseData: any) => {
        const loadedBlogs = responseData.data?.message?.payload.map(
          (blog: Blog) => {
            return blog;
          }
        );
        return blogsAdapter.setAll(initialState, loadedBlogs);
      },
      providesTags: (result) =>
        result
          ? [
              { type: 'Blogs', id: 'LIST' },
              ...result.ids.map((id) => ({ type: 'Blogs', id } as const)),
            ]
          : [{ type: 'Blogs', id: 'LIST' }],
    }),

    addNewBlog: builder.mutation({
      query: (initialPost) => ({
        url: '/stories',
        method: 'POST',
        body: {
          ...initialPost,
        },
      }),
      invalidatesTags: [{ type: 'Blogs', id: 'LIST' }],
    }),

    updateBlog: builder.mutation({
      query: (initialPost) => ({
        url: `/stories/${initialPost.id}`,
        method: 'PUT',
        body: {
          ...initialPost,
        },
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'Blogs', id: arg.id }],
    }),

    deleteBlog: builder.mutation({
      query: ({ id }) => ({
        url: `/stories/${id}`,
        method: 'DELETE',
        body: { id },
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'Blogs', id: arg.id }],
    }),
  }),
});

export const {
  useGetBlogsQuery,
  useGetBlogsByAuthorIdQuery,
  useAddNewBlogMutation,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} = extendedBlogApiSlice;

// returns the query result object
export const selectBlogsResult =
  extendedBlogApiSlice.endpoints.getBlogs.select();

// Creates memoized selector
const selectBlogsData = createSelector(
  selectBlogsResult,
  (blogsResult) => blogsResult.data // normalized state object with ids & entities
);

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectIds: selectPostIds,
  // Pass in a selector that returns the posts slice of state
} = blogsAdapter.getSelectors(
  (state: any) => selectBlogsData(state) ?? initialState
);

// import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
// import { Blog } from '@tech-glimpse-front/types';
// import { fetchBlogs } from '../actions/blog.action';
// import { RootState } from '../store/store';

// const postsAdapter = createEntityAdapter<Blog>({
//   sortComparer: (a, b) => b.updatedAt.localeCompare(a.updatedAt),
// });

// const initialState = postsAdapter.getInitialState({
//   status: 'idle',
//   error: null,
// });

// const blogSlice = createSlice({
//   name: 'blogs',
//   initialState: initialState,
//   reducers: {},
//   extraReducers(builder) {
//     builder
//       .addCase(fetchBlogs.pending, (state, action) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchBlogs.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         // Add any fetched posts to the array
//         // Use the `upsertMany` reducer as a mutating update utility
//         postsAdapter.upsertMany(state, action.payload);
//       })
//       .addCase(fetchBlogs.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// export default blogSlice.reducer;

// // Export the customized selectors for this adapter using `getSelectors`
// export const {
//   selectAll: selectAllBlogs,
//   selectById: selectBlogById,
//   selectIds: selectBlogIds,
//   // Pass in a selector that returns the posts slice of state
// } = postsAdapter.getSelectors((state: RootState) => state.blogs);
