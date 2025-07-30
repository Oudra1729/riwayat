import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-emerald-600">RIWAYAT</Link>
          </div>

          <div className="flex-1 mx-4 hidden md:flex justify-center">
            <input
              type="text"
              placeholder="Search..."
              className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex space-x-4">
              <Link to="/" className="text-gray-700 hover:text-emerald-600 transition">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-emerald-600 transition">About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-emerald-600 transition">Contact</Link>
            </div>

          <Link
            to="/login"
            className="text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-full text-sm transition">
            Login
          </Link>


            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <Link to="/" className="block text-gray-700 hover:text-emerald-600">Home</Link>
          <Link to="/about" className="block text-gray-700 hover:text-emerald-600">About</Link>
          <Link to="/contact" className="block text-gray-700 hover:text-emerald-600">Contact</Link>
          <Link
            to="/login"
            className="block text-center text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-full text-sm"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
