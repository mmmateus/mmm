import React from 'react';

import Test from '../pages/test';

import { Link } from "react-router-dom";

const Sidebar = (props: any) => {
    return (
      <>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/nothing-here">Nothing Here</Link>
            </li>
          </ul>
        </nav> */}
        <Test/>
      </>
    );
}

export default Sidebar;