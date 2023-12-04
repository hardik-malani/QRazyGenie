// Reducers.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  inputValue: '',
};

const inputSlice = createSlice({
  name: 'inputValue',
  initialState,
  reducers: {
    setInputValue: (state, action) => {
      state.name = action.payload;
    },
  },
});

export default inputSlice.reducer;

export const {setInputValue} = inputSlice.actions;