import Axios from './api/axios';

export async function getBlogs(page = 1, size = 10) {
  const response = await Axios.get(
    `/api/v1/stories?page=${page - 1}&size=${size}`
  );
  return response.data.message;
}

export async function getBlogById(id) {
  const response = await Axios.get(`/api/v1/stories/${id}`);
  console.log('response by id');
  return response.data.message;
}

export async function getBlogsByAuthor(authorId, page = 1, size = 10) {
  const response = await Axios.get(
    `/api/v1/stories/author/${authorId}/?page=${page - 1}&size=${size}`
  );
  return response.data.message;
}

export async function createBlog(newBlog) {
  const response = await Axios.post(`/api/v1/stories/`, newBlog);
  console.log('create blog response: ', response);
  return { status: 'CREATE_SUCCESS', payload: response.data.message };
}

export async function updateBlog(id, blog) {
  const response = await Axios.put(`/api/v1/stories/${id}`, blog);
  return { status: 'UPDATE_SUCCESS', payload: response.data.message };
}

export async function deleteBlog(id) {
  const response = await Axios.delete(`/api/v1/stories/${id}`);
  return { status: 'DELETE_SUCCESS', payload: response.data.message };
}
