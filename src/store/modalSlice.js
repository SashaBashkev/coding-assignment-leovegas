import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
    modalData: null,
  },
  reducers: {
    onModalOpen: (state, action) => {
      if (action.payload) {
        state.modalData = action.payload;
      }
      state.isOpen = true;
    },
    onModalClose: (state) => {
      state.isOpen = false;
    },
  },
});

export default modalSlice;

