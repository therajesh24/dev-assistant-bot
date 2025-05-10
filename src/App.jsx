import React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from './store';
import Header from './components/Header';
import Chatbot from './components/Chatbot';
import ResourcesPanel from './components/ResourcesPanel';
import ConversationsPanel from './components/ConversationsPanel';
import theme from './styles/theme';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
          <Header />
          <Box sx={{ flexGrow: 1, overflow: 'hidden', height: '10vh', display: 'flex', gap: 4, justifyContent: 'center', px: { xs: 0, md: 4 }, py: 3, bgcolor: '#F4F6FB'}}>
            <Box sx={{ minWidth: 220, maxWidth: 260, width: '100%', display: { xs: 'none', md: 'block' }, height: '100%' }}>
              <ConversationsPanel />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Chatbot />
            </Box>
            <Box sx={{ minWidth: 320, maxWidth: 340, width: '100%', display: 'flex', height: '100%' }}>
              <ResourcesPanel />
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
