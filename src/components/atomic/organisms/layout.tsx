import React from 'react';
import Sidebar from './sidebar';

import { Outlet } from "react-router-dom";

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

// import '../../../App.css';

import { ThemeProvider, createTheme } from '@mui/material/styles';
declare module '@mui/material/styles' {
  interface Palette {
    brand: Palette['primary'];
  }
  interface PaletteOptions {
    brand: PaletteOptions['primary'];
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#78dcd2',
      light: '#afe1e1',
      dark: '#35857D',
      contrastText: '#141e50'
    },
    secondary: {
      main: '#ff7378',
      light: '#ffb4aa',
      dark: '#B6464A',
      contrastText: '#d2d2d2'
    },
    brand: {
      main: '#141e50',
      light: '#003c6e',
      dark: '#0B102D',
      contrastText: '#d2d2d2'
    },
  },
  
  typography: {
    fontFamily: [
      'Ubuntu',
      'sans-seriff',
    ].join(','),
  }
});

const Layout = (props: any) => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', overflow: 'auto' }}>
        <CssBaseline />
        <Sidebar theme={theme}/>
        <Outlet />
      </Box>
    // </ThemeProvider>
  );
}

export default Layout;