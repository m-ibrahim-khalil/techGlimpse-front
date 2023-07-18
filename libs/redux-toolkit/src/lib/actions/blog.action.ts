import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBlogs: any = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    const response = await axios.get('api/v1/stories');
    console.log(response.data.message.payload);
    return response.data.message.payload;
  }
);
