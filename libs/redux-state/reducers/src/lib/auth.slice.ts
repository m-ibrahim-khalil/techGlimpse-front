import { createSlice } from '@reduxjs/toolkit';
import { registerUser } from '@tech-glimpse-front/redux-state/actions';
import { getAuthUsername, removeCoockie } from '@tech-glimpse-front/util';

const authUser = getAuthUsername();

export interface AuthState {
  loading: boolean;
  authUser: string | null;
  error: any;
  success: boolean;
}

const initialState: AuthState = {
  loading: false,
  authUser,
  error: null,
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
      state.error = null;
    },
    setCredentials: (state, { payload }) => {
      state.authUser = payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(registerUser.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true; // registration successful
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const authReducer = authSlice.reducer;
