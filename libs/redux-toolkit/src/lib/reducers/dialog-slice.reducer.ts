import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface DialogState {
  open: boolean;
  onConfirm: () => void;
}

const initialState: DialogState = {
  open: false,
  onConfirm: () => {
    console.log('onConfirm');
  },
};

const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    open: (state, action: PayloadAction<() => void>) => {
      state.open = true;
      state.onConfirm = action.payload;
    },
    close: (state) => {
      state.open = false;
    },
  },
});

export const { open, close } = dialogSlice.actions;

export const dialogReducer = dialogSlice.reducer;
