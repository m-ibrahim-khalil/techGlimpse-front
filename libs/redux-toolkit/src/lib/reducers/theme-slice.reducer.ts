import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface themeState {
  theme: string;
}

const initialState: themeState = {
  theme: window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
      console.log('set theme', action.payload, state.theme);
      if (action.payload === 'dark') {
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add('dark');
      }
      if (action.payload === 'light') {
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
      }
    },
  },
});

export const { setTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
