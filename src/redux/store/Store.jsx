// Store.js
import { configureStore } from '@reduxjs/toolkit';
import inputReducer from '../reducer/Reducers'; // Import the correct reducer

export const Store = configureStore({
  reducer: {
    linkValue: inputReducer,
  },
});
