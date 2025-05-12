import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: [
    {
      type: 'welcome',
      title: 'Welcome to the Developer Assistant! 👋',
      description: `I'm here to help you with your onboarding process and answer any questions you might have about our development environment and projects.`,
      buttons: [],
    },
    {
      type: 'bot',
      message: 'What would you like help with today? I can assist with local environment setup, codebase navigation, or common development tasks.',
      time: '10:45 AM',
    },
  ],
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    setMessages: (state, action) => {
      state.messages = action.payload;
    },
    clearMessages: (state) => {
      state.messages = state.messages.filter(m => m.type === 'welcome');
    },
  },
});

export const { addMessage, setMessages, clearMessages } = messagesSlice.actions;
export default messagesSlice.reducer; 