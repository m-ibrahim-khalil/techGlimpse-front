import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth.slice';

export default configureStore({
  reducer: { auth: authReducer },
});
