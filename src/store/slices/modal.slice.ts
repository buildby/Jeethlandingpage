import { createSlice } from '@reduxjs/toolkit';

interface ModalState {
  isContactFormOpen: boolean;
  isTryDemoFormOpen: boolean;
}

const initialState: ModalState = {
  isContactFormOpen: false,
  isTryDemoFormOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openContactForm: (state) => {
      state.isContactFormOpen = true;
    },
    closeContactForm: (state) => {
      state.isContactFormOpen = false;
    },
    openTryDemoForm: (state) => {
      state.isTryDemoFormOpen = true;
    },
    closeTryDemoForm: (state) => {
      state.isTryDemoFormOpen = false;
    },
  },
});

export const { openContactForm, closeContactForm, closeTryDemoForm, openTryDemoForm } = modalSlice.actions;

export const selectIsContactFormModalOpen = (state: { modal: ModalState }) => state.modal.isContactFormOpen;
export const selectIsTryDemoFormModalOpen = (state: { modal: ModalState }) => state.modal.isTryDemoFormOpen;

export default modalSlice.reducer;
