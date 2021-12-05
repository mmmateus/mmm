import React from 'react';
import Sidebar from './sidebar';

import { Outlet } from "react-router-dom";

const Layout = (props: any) => {
    return (
      <>
        <Sidebar />
        <Outlet />
      </>
    );
}

export default Layout;