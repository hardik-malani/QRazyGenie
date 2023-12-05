import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  uploadedPictures: [],
};

const pictureUploadSlice = createSlice({
  name: 'pictureUpload',
  initialState,
  reducers: {
    setUploadedPicture: (state, action) => {
        state.uploadedPictures = [action.payload];
    },
  },
});

export default pictureUploadSlice.reducer;

export const { setUploadedPicture} = pictureUploadSlice.actions;
