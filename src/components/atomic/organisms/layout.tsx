import React from 'react';
import Sidebar from './sidebar';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import { Outlet } from "react-router-dom";

const Layout = (props: any) => {
  return (
    <Box sx={{ display: 'flex', overflow: 'auto' }}>
      <CssBaseline />
      <Sidebar />
      <Outlet />
    </Box>
  );
}

export default Layout;