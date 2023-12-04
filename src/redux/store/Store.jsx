// Store.js
import { configureStore } from '@reduxjs/toolkit';
import inputReducer from '../reducer/Input';
import FrColorReducer from '../reducer/QrColor';
import BgColorReducer from '../reducer/BgColor';
import UploadLogo from '../reducer/UploadLogo';

export const Store = configureStore({
  reducer: {
    linkValue: inputReducer,
    frcolor: FrColorReducer,
    Bgcolor: BgColorReducer,
    UploadLogo: UploadLogo,
  },
});