// Reducers.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  shape: 'dots',
};

const inputSlice = createSlice({
  name: 'dots',
  initialState,
  reducers: {
    setShape: (state, action) => {
      state.name = action.payload;
    },
  },
});

export default inputSlice.reducer;

export const {setShape} = inputSlice.actions;