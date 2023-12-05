// Reducers.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  shape: '',
};

const inputSlice = createSlice({
  name: 'shape',
  initialState,
  reducers: {
    setShape: (state, action) => {
      state.name = action.payload;
    },
  },
});

export default inputSlice.reducer;

export const {setShape} = inputSlice.actions;