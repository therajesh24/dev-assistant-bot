import { configureStore } from '@reduxjs/toolkit';
import messagesReducer from './store/messagesSlice';

export const store = configureStore({
  reducer: {
    messages: messagesReducer,
  },
}); 