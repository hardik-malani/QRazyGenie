import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    bgColorReducer:"#FFFFFF",
}

export const bgColorReducer = createReducer(initialState,{
        bgColorChange: (state, action ) => {
            state.bgColor = action.payload;
    },
})