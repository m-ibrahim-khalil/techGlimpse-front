import { createSlice } from '@reduxjs/toolkit';
import { getAuthUsername, removeCoockie } from '@tech-glimpse-front/util';
import { toast } from 'react-toastify';
import { registerUser, userLogin } from '../actions/auth.action';

const authUser = getAuthUsername();

export interface AuthState {
  loading: boolean;
  authUser: string | null;
  loginError?: any;
  registerError?: any;
  success: boolean;
}

const initialState: AuthState = {
  loading: false,
  authUser: authUser,
  loginError: null,
  registerError: null,
  success: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      removeCoockie(); // delete token from storage
      state.loading = false;
      state.authUser = null;
      state.loginError = null;
      state.registerError = null;
      state.success = false;
      toast.dismiss();
      toast.success('Logout success');
    },
    setCredentials: (state, { payload }) => {
      state.authUser = payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(registerUser.pending, (state, action) => {
        state.loading = true;
        state.registerError = null;
        toast.dismiss();
        toast.info('Registering user...');
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.authUser = getAuthUsername();
        state.success = true;
        toast.dismiss();
        toast.success('User registered successfully');
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.registerError = payload;
        toast.dismiss();
        toast.error('Error registering user');
      })
      .addCase(userLogin.pending, (state, action) => {
        state.loading = true;
        state.loginError = null;
        toast.dismiss();
        toast.info('Logging in...');
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.authUser = getAuthUsername();
        state.success = true;
        toast.dismiss();
        toast.success('Login success');
      })
      .addCase(userLogin.rejected, (state, { payload }) => {
        state.loading = false;
        state.loginError = payload;
        toast.dismiss();
        toast.error('Error logging in');
      });
  },
});

export const { logout, setCredentials } = authSlice.actions;
export const authReducer = authSlice.reducer;
