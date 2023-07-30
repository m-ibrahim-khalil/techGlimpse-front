import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PaginationState {
  page: number;
  size: number;
}

const initialState: PaginationState = {
  page: 1,
  size: 6,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
      console.log('setPage', action.payload, state.page);
    },
    setSize: (state, action: PayloadAction<number>) => {
      state.size = action.payload;
    },
  },
});

export const { setPage, setSize } = paginationSlice.actions;
export const paginationReducer = paginationSlice.reducer;
