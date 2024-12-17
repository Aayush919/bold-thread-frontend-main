// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import popupReducer from './Slices/PopupSlice.js'


export const store = configureStore({
  reducer: {
    popupReducer:popupReducer,
  },
});
