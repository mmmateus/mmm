import React from 'react';

import { Routes, Route, BrowserRouter as Router, } from "react-router-dom";

import Layout from './components/atomic/organisms/layout';
import Home from './components/atomic/pages/home';
import About from './components/atomic/pages/about';
import Work from './components/atomic/pages/work';
import Contact from './components/atomic/pages/contact';
import NoMatch from './components/atomic/pages/noMatch';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Layout /> } >
          <Route index element={ <Home /> } />
          <Route path="about" element={ <About /> } />
          <Route path="work" element={<Work />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
