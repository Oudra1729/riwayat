// import { useState } from 'react'

import './App.css'
import React from 'react';
import Navbar from './components/Navbar.jsx';

function App() {


  return (
    <>
      <Navbar/>
      <h1>Welcome to MyApp</h1>
      <p>This is a simple React application.</p>
      <p>Navigate using the links in the navbar.</p>
      <div className="content">
        {/* Content will go here */}
      </div>
      <footer className="footer">
        <p>&copy; 2023 MyApp. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
