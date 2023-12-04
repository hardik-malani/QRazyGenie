import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  BgColor: '',
};

const inputSlice = createSlice({
  name: 'BgColor',
  initialState,
  reducers: {
    setBgColor: (state, action) => {
      state.name = action.payload;
    },
  },
});

export default inputSlice.reducer;

export const {setBgColor} = inputSlice.actions;