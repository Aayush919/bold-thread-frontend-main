import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isPopupOpen: false, 
};

const popupSlice = createSlice({
  name: 'popupslice',
  initialState,
  reducers: {
    togglePopup: (state) => {
      state.isPopupOpen = !state.isPopupOpen; 
    },
  },
});

export const { togglePopup } = popupSlice.actions;

export default popupSlice.reducer;
