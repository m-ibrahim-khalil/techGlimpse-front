import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  userLogin,
} from '@tech-glimpse-front/redux-state/actions';
import { getAuthUsername, removeCoockie } from '@tech-glimpse-front/util';

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
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.registerError = payload;
      })
      .addCase(userLogin.pending, (state, action) => {
        state.loading = true;
        state.loginError = null;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.authUser = getAuthUsername();
        state.success = true;
      })
      .addCase(userLogin.rejected, (state, { payload }) => {
        state.loading = false;
        state.loginError = payload;
      });
  },
});

export const { logout, setCredentials } = authSlice.actions;
export const authReducer = authSlice.reducer;
