import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './slices/modal.slice';
import { contactFormReducer } from './slices/contact-form.slice';

const store = configureStore({
  reducer: {
    modal: modalReducer,
    contactForm: contactFormReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch