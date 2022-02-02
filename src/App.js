import React from 'react';
import './styles/output.css'

import Navbar from './components/Navbar'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import Home from './components/Home'
import Links from './components/Links'
import Relative from './components/Relativenav'

export default function App() {
  return (
    <main>
      <Navbar />
      <Home />
      <About />
      <Work />
      <Contact />
      <Links />
      <Relative />
    </main>
  );
}
