import Axios from './api/axios';

export async function getUsers() {
  const response = await Axios.get(`/api/v1/users/`);
  return { status: 'SUCCESS Users Fetch', payload: response.data.message };
}

export async function getUserByUsername(username) {
  const response = await Axios.get(`/api/v1/users/${username}`);
  return { status: 'SUCCESS User Fetch', payload: response.data.message };
}

export async function updateUserByUsername(username, data) {
  const response = await Axios.put(`/api/v1/users/${username}`, data);
  return {
    status: 'UPDATE User Password SUCCESS',
    payload: response.data.message,
  };
}

export async function deleteUserByUsername(username) {
  const response = await Axios.delete(`/api/v1/users/${username}`);
  return { status: 'DELETE User SUCCESS', payload: response.data.message };
}
