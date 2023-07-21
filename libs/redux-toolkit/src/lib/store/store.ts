import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import { authReducer } from '../reducers/auth-slice.reducer';
import { blogReducer } from '../reducers/blog-slice.reducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    blogs: blogReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
