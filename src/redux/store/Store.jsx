// Store.js
import { configureStore } from '@reduxjs/toolkit';
import inputReducer from '../reducer/Input';
import FrColorReducer from '../reducer/QrColor';
import BgColorReducer from '../reducer/BgColor';
import UploadLogoReducer from '../reducer/UploadLogo';
import ShapeReducer from "../reducer/shape"

export const Store = configureStore({
  reducer: {
    linkValue: inputReducer,
    frcolor: FrColorReducer,
    Bgcolor: BgColorReducer,
    UploadLogo: UploadLogoReducer,
    shape: ShapeReducer,
  },
});