import './App.css'
import React from 'react';
import Navbar from './components/Navbar.jsx';
import BookCard from './components/BookCard.jsx';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <div style={{ display: 'flex', gap: '1rem', margin: '1rem' }}>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
      <BookCard />
    </>
  )
}


export default App
