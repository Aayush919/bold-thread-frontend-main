import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPopupOpen: false,
  isProfileOpen: false,
};

const popupSlice = createSlice({
  name: "popupslice",
  initialState,
  reducers: {
    togglePopup: (state) => {
      state.isPopupOpen = !state.isPopupOpen;
    },
    profilePopup: (state) => {
      console.log(state.isProfileOpen, "check this bro");
      state.isProfileOpen = !state.isProfileOpen;
      console.log(state.isProfileOpen, "after check this bro");
    },
  },
});

export const { togglePopup, profilePopup } = popupSlice.actions;

export default popupSlice.reducer;
