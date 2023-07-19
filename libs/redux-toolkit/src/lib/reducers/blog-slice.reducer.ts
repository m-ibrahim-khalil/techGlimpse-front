import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { Blog } from '@tech-glimpse-front/types';
import { fetchBlogs } from '../actions/blog.action';
import { RootState } from '../store/store';

const postsAdapter = createEntityAdapter<Blog>({
  sortComparer: (a, b) => b.updatedAt.localeCompare(a.updatedAt),
});

const initialState = postsAdapter.getInitialState({
  status: 'idle',
  error: null,
});

const blogSlice = createSlice({
  name: 'blogs',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBlogs.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Add any fetched posts to the array
        // Use the `upsertMany` reducer as a mutating update utility
        postsAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default blogSlice.reducer;

// Export the customized selectors for this adapter using `getSelectors`
export const {
  selectAll: selectAllBlogs,
  selectById: selectBlogById,
  selectIds: selectBlogIds,
  // Pass in a selector that returns the posts slice of state
} = postsAdapter.getSelectors((state: RootState) => state.blogs);
