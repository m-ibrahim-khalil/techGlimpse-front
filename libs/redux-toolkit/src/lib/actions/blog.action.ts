import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import exp = require('constants');

export const fetchBlogs: any = createAsyncThunk(
  'blogs/fetchBlogs',
  async () => {
    const response = await axios.get('api/v1/stories');
    console.log(response.data.message.payload);
    return response.data.message.payload;
  }
);

export const fetchBlogById: any = createAsyncThunk(
  'blogs/fetchBlogById',
  async (id: string) => {
    const response = await axios.get(`api/v1/stories/${id}`);
    console.log(response.data.message.payload);
    return response.data.message.payload;
  }
);

export const fetchBlogsByAuthorId: any = createAsyncThunk(
  'blogs/fetchBlogsByAuthorId',
  async (id: string) => {
    const response = await axios.get(`api/v1/stories/author/${id}`);
    console.log(response.data.message.payload);
    return response.data.message.payload;
  }
);

export const createNewBlog: any = createAsyncThunk(
  'blogs/createNewBlog',
  async (blog: any) => {
    const response = await axios.post('api/v1/stories', blog);
    console.log(response.data.message.payload);
    return response.data.message.payload;
  }
);

export const updateBlogById: any = createAsyncThunk(
  'blogs/updateBlogById',
  async (id: string, blog: any) => {
    const response = await axios.put(`api/v1/stories/${id}`, blog);
    console.log(response.data.message.payload);
    return response.data.message.payload;
  }
);

export const deleteBlogById: any = createAsyncThunk(
  'blogs/deleteBlogById',
  async (id: string) => {
    const response = await axios.delete(`api/v1/stories/${id}`);
    console.log(response.data.message.payload);
    return response.data.message.payload;
  }
);
