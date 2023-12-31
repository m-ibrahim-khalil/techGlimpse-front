import { createSlice } from '@reduxjs/toolkit';
import {
  getAuthUsername,
  removeCoockie,
  showToast,
} from '@tech-glimpse-front/util';
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
      showToast('Logout success', 'success');
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
        showToast('Registering user...', 'info');
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.authUser = getAuthUsername();
        state.success = true;
        showToast('User registered successfully', 'success');
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.registerError = payload;
        showToast('Error registering user', 'error');
      })
      .addCase(userLogin.pending, (state, action) => {
        state.loading = true;
        state.loginError = null;
        showToast('Logging in...', 'info');
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.authUser = getAuthUsername();
        state.success = true;
        showToast('Login success', 'success');
      })
      .addCase(userLogin.rejected, (state, { payload }) => {
        state.loading = false;
        state.loginError = payload;
        showToast('Error logging in', 'error');
      });
  },
});

export const { logout, setCredentials } = authSlice.actions;
export const authReducer = authSlice.reducer;
