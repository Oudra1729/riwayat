import React from 'react';
// import { BookOpen, Filter } from 'lucide-react'; // Uncomment if you use Lucide icons

const Homepage = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl p-8 mb-8 text-white">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">Discover New Books Every Day</h1>
          <p className="text-lg mb-6 opacity-90">
            Join our community of book lovers and explore thousands of books with reviews and ratings from readers worldwide
          </p>
          <button className="bg-white text-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Start Exploring
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mb-6 p-4 bg-white rounded-lg shadow-sm">
        <div className="flex items-center gap-2">
          {/* <Filter className="w-5 h-5 text-gray-600" /> */}
          <select className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500">
            <option>All Genres</option>
            <option>Fiction</option>
            <option>Non-fiction</option>
            <option>Romance</option>
          </select>
        </div>

        <select className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500">
          <option>Latest</option>
          <option>Most Popular</option>
          <option>Highest Rated</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-md cursor-pointer">
          <h2 className="text-lg font-semibold mb-2">The Great Gatsby</h2>
          <p className="text-sm text-gray-600">Genre: Fiction</p>
          <p className="text-sm text-gray-500 mt-2">⭐⭐⭐⭐☆ (120 reviews)</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow hover:shadow-md cursor-pointer">
          <h2 className="text-lg font-semibold mb-2">Atomic Habits</h2>
          <p className="text-sm text-gray-600">Genre: Self-help</p>
          <p className="text-sm text-gray-500 mt-2">⭐⭐⭐⭐⭐ (200 reviews)</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow hover:shadow-md cursor-pointer">
          <h2 className="text-lg font-semibold mb-2">1984</h2>
          <p className="text-sm text-gray-600">Genre: Dystopian</p>
          <p className="text-sm text-gray-500 mt-2">⭐⭐⭐⭐☆ (90 reviews)</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow hover:shadow-md cursor-pointer">
          <h2 className="text-lg font-semibold mb-2">Pride and Prejudice</h2>
          <p className="text-sm text-gray-600">Genre: Romance</p>
          <p className="text-sm text-gray-500 mt-2">⭐⭐⭐⭐⭐ (150 reviews)</p>
        </div>
      </div>

      {/* No books fallback - shown as example */}
      {/* Uncomment the below block to simulate "no books found" message */}
      {/*
      <div className="text-center py-12">
        <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-600 mb-2">No books found</h3>
        <p className="text-gray-500">Try adjusting your search criteria</p>
      </div>
      */}
    </>
  );
};

export default Homepage;
