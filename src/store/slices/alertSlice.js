import {createSlice} from '@reduxjs/toolkit';

export const alertSlice = createSlice({
    name: 'alert',
    initialState: {
        error: [],
        success: null,
    },
    reducers: {
        resetError: (state) => {
            state.error = [];
        },
        resetSuccess: (state) => {
            state.success = [];
        },
        addError: (state, action) => {
            resetError();
            resetSuccess();
            state.error = action.payload
        },
        addSuccess: (state, action) => {
            resetError();
            resetSuccess();
            state.success = action.payload
        },
    },
});

export const {resetError, resetSuccess, addError, addSuccess} = alertSlice.actions;

export const selectError = (state) => state.alert.error;
export const selectSuccess = (state) => state.alert.success;

export default alertSlice.reducer
