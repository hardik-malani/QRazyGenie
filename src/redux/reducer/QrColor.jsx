import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  FrColor: '#FFFFFF',
};

const inputSlice = createSlice({
  name: 'FrColor',
  initialState,
  reducers: {
    setFrColor: (state, action) => {
      state.name = action.payload;
    },
  },
});

export default inputSlice.reducer;

export const {setFrColor} = inputSlice.actions;