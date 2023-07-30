import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Variant } from '@tech-glimpse-front/types';

export interface AlertState {
  open: boolean;
  type: Variant;
  message: string;
}

const initialState: AlertState = {
  open: false,
  type: Variant.INFO,
  message: '',
};

const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    open: (state, action: PayloadAction<AlertState>) => {
      state.open = true;
      state.type = action.payload.type;
      state.message = action.payload.message;
    },
    close: (state) => {
      state.open = false;
    },
  },
});

export const { open, close } = alertSlice.actions;
export const alertReducer = alertSlice.reducer;
