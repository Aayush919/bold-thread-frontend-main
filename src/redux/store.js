import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "./Slices/PopupSlice.js";
import { baseApi } from "./Api/index.js"; // Assuming this is the slice for API calls

export const store = configureStore({
  reducer: {
    popupReducer: popupReducer,
    [baseApi.reducerPath]: baseApi.reducer, // Add the baseApi reducer here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(baseApi.middleware), // Add the middleware for baseApi
});
