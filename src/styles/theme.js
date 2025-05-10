import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#232B5E',
      contrastText: '#fff',
    },
    secondary: {
      main: '#D72524',
      contrastText: '#fff',
    },
    warning: {
      main: '#F0AB00',
      contrastText: '#232B5E',
    },
    background: {
      default: '#f9f9fb',
      paper: '#fff',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

export default theme; 