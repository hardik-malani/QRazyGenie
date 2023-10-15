import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { bgColorReducer } from '../reducer/Reducers';

export const Store = configureStore({
    reducer: {
        bgColor: bgColorReducer,
    },
});