import {
  Action,
  ThunkAction,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import { blogApiSlice } from '../api/blogApi';
import { authReducer } from '../reducers/auth-slice.reducer';
import { paginationReducer } from '../reducers/pagination-slice.reducer';

const reducers = {
  pagination: paginationReducer,
  auth: authReducer,
  [blogApiSlice.reducerPath]: blogApiSlice.reducer,
};

const rootReducer = combineReducers<typeof reducers>(reducers);

const initialState = {};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (gDM) =>
    gDM({
      serializableCheck: false,
    }).concat([blogApiSlice.middleware]),
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
