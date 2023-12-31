import {
  Action,
  ThunkAction,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import { blogApiSlice } from '../api/blogApi';
import { userApiSlice } from '../api/userApi';
import { alertReducer } from '../reducers/alert-slice.reducer';
import { authReducer } from '../reducers/auth-slice.reducer';
import { dialogReducer } from '../reducers/dialog-slice.reducer';
import { paginationReducer } from '../reducers/pagination-slice.reducer';
import { themeReducer } from '../reducers/theme-slice.reducer';

const reducers = {
  theme: themeReducer,
  pagination: paginationReducer,
  alert: alertReducer,
  dialog: dialogReducer,
  auth: authReducer,
  [blogApiSlice.reducerPath]: blogApiSlice.reducer,
  [userApiSlice.reducerPath]: userApiSlice.reducer,
};

const rootReducer = combineReducers<typeof reducers>(reducers);

const initialState = {};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (gDM) =>
    gDM({
      serializableCheck: false,
    }).concat([blogApiSlice.middleware, userApiSlice.middleware]),
  devTools: true,
  // process.env['NODE_ENV'] !== 'production',
  preloadedState: initialState,
  enhancers: (defaultEnhancers) => [...defaultEnhancers],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
