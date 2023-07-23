import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PaginationState {
  page: number;
  size: number;
}

const initialState: PaginationState = {
  page: 0,
  size: 10,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setSize: (state, action: PayloadAction<number>) => {
      state.size = action.payload;
    },
  },
});

export const { setPage, setSize } = paginationSlice.actions;
export const paginationReducer = paginationSlice.reducer;
