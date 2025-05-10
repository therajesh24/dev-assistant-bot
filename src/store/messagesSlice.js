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
    {
      type: 'user',
      message: ",I'm having trouble setting up Docker on my local machine. Can you help me troubleshoot?",
      time: '10:47 AM',
      name: 'User',
    },
    {
      type: 'bot',
      message: `I'd be happy to help with Docker setup! First, let's check if Docker is installed correctly. Run this command in your terminal:`,
      time: '10:48 AM',
    },
    {
      type: 'bot',
      message: 'docker --version && docker-compose --version',
      code: true,
    },
    {
      type: 'bot',
      message: `If you see version numbers, Docker is installed. If not, you'll need to install it. Would you like me to provide installation instructions for your operating system?`,
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