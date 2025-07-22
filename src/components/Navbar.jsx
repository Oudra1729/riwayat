import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Left - Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-emerald-600">RIWAYAT</a>
          </div>

          {/* Center - Search Bar */}
          <div className="flex-1 mx-4 hidden md:flex justify-center">
            <input
              type="text"
              placeholder="Search..."
              className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Right - Links & Login */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex space-x-4">
              <a href="#" className="text-gray-700 hover:text-emerald-600 transition">Home</a>
              <a href="#" className="text-gray-700 hover:text-emerald-600 transition">About</a>
              <a href="#" className="text-gray-700 hover:text-emerald-600 transition">Services</a>
              <a href="#" className="text-gray-700 hover:text-emerald-600 transition">Contact</a>
            </div>
            <a
              href="/login"
              className="text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-full text-sm transition"
            >
              Login
            </a>

            {/* Mobile Menu Toggle */}
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

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <a href="#" className="block text-gray-700 hover:text-emerald-600">Home</a>
          <a href="#" className="block text-gray-700 hover:text-emerald-600">About</a>
          <a href="#" className="block text-gray-700 hover:text-emerald-600">Services</a>
          <a href="#" className="block text-gray-700 hover:text-emerald-600">Contact</a>
          <a
            href="/login"
            className="block text-center text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-full text-sm"
          >
            Login
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
