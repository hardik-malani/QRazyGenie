// Store.js
import { configureStore } from '@reduxjs/toolkit';
import inputReducer from '../reducer/Input';
import FrColorReducer from '../reducer/QrColor';
import BgColorReducer from '../reducer/BgColor';

export const Store = configureStore({
  reducer: {
    linkValue: inputReducer,
    frcolor: FrColorReducer,
    Bgcolor: BgColorReducer,
  },
});