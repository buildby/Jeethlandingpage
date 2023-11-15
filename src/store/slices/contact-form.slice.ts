import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { API_URL } from "../../constants"

export interface ContactFormState {
  name: String
  email: String
  phone: String
  company: String
  state?: String
  city?: String
  message?: String
  found_via?: String
  form_type: ContactFormType
  status?: 'submitted' | 'failed' | 'loading'
}

export enum ContactFormType {
  CONTACT = 'CONTACT',
  TRY_DEMO = 'TRY_DEMO'
}


const initialState: ContactFormState = {
  name: '',
  email: '',
  phone: '',
  company: '',
  state: '',
  city: '',
  message: '',
  found_via: '',
  form_type: ContactFormType.TRY_DEMO
};

export const submitForm = createAsyncThunk('contactForm/submitForm',
  async (data: ContactFormState) => {
    console.log(data);
    await fetch(API_URL + '/contact-form', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    })
  }
)

const contactFormSlice = createSlice({
  name: 'contactForm',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(submitForm.fulfilled, (state, action) => {
      console.log(action.payload);
      state.status = 'submitted'
    }),
    builder.addCase(submitForm.rejected, (state, action) => {
      console.log(action.payload)
      state.status = 'failed'
    }),
    builder.addCase(submitForm.pending, (state, action) => {
      console.log(action.payload)
      state.status = 'loading'
    })
  }
});

export const { } = contactFormSlice.actions
export const contactFormReducer = contactFormSlice.reducer