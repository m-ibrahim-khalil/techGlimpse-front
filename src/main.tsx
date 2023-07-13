import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import {
  AUTH_REDUCER_FEATURE_KEY,
  authReducerReducer,
} from './app/src/redux/auth-reducer.slice';

import { AUTH_FEATURE_KEY, authReducer } from './app/redux/features/auth.slice';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = configureStore({
  reducer: {
    [AUTH_FEATURE_KEY]: authReducer,
    [AUTH_REDUCER_FEATURE_KEY]: authReducerReducer,
  },
  // Additional middleware can be passed to this array
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
  // Optional Redux store enhancers
  enhancers: [],
});

root.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
