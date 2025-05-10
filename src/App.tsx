import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import MainLayout from './layouts/MainLayout';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainLayout>
        <h1>Welcome to My React App</h1>
      </MainLayout>
    </ThemeProvider>
  );
}

export default App; 