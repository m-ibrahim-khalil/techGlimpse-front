import { createAsyncThunk } from '@reduxjs/toolkit';
import { ISignInFormInput, ISignUpFormInput } from '@tech-glimpse-front/types';
import axios, { AxiosResponse } from 'axios';

const API_URL = 'https://fine-lime-bull-gear.cyclic.app/api/v1';

interface UserData {
  message: any;
}

interface CustomError {
  message: string;
}

export const userLogin = createAsyncThunk<
  any,
  ISignInFormInput,
  { rejectValue: CustomError }
>('user/login', async (loginPayload, { rejectWithValue }) => {
  console.log('login payload', loginPayload);
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data }: AxiosResponse<UserData> = await axios.post(
      `/api/v1/auth/login`,
      loginPayload,
      config
    );
    console.log('got login data');
    // localStorage.setItem('userToken', data.userToken);

    return data;
  } catch (error: any) {
    if (error.response && error.response.data?.message) {
      return rejectWithValue(error.response.data) as ReturnType<
        typeof rejectWithValue
      >;
    } else {
      return rejectWithValue({ message: error.message }) as ReturnType<
        typeof rejectWithValue
      >;
    }
  }
});

export const registerUser = createAsyncThunk<
  void,
  ISignUpFormInput,
  { rejectValue: CustomError }
>('user/register', async (registrationData, { rejectWithValue }) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    await axios.post(`/api/v1/auth/register`, registrationData, config);
  } catch (error: any) {
    if (error.response && error.response.data.message) {
      return rejectWithValue(error.response.data) as ReturnType<
        typeof rejectWithValue
      >;
    } else {
      return rejectWithValue({ message: error.message }) as ReturnType<
        typeof rejectWithValue
      >;
    }
  }
});
