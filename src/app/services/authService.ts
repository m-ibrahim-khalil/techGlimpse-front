import Axios from './api/axios';

export async function register(userData: any) {
  const response = await Axios.post(`/api/v1/auth/register`, userData);
  console.log('register response: ', response);
  return response.data;
}

export async function login(userData: any) {
  const response = await Axios.post(`/api/v1/auth/login`, userData);
  console.log('login response: ', response);
  return response.data;
}
