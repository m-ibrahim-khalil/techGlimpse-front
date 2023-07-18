import { GenericState, createGenericSlice } from './generic-slice.reducer';

export const wrappedSlice = createGenericSlice({
  name: 'test',
  initialState: { status: 'loading' } as GenericState<string>,
  reducers: {
    magic(state) {
      state.status = 'finished';
      state.data = 'hocus pocus';
    },
  },
});
