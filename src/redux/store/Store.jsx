// Store.js
import { configureStore } from '@reduxjs/toolkit';
import inputReducer from '../reducer/Input';
import FrColorReducer from '../reducer/QrColor';

export const Store = configureStore({
  reducer: {
    linkValue: inputReducer,
    frcolor: FrColorReducer,
  },
});
