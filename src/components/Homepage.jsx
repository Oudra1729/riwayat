import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";
import BookDetail from "./BookDetail";

const Homepage = () => {
  const [novels, setNovels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);

  const [genreFilter, setGenreFilter] = useState("All Genres");
  const [sortOption, setSortOption] = useState("Latest");
  const [searchTerm, setSearchTerm] = useState("");


  useEffect(() => {
    fetch("/data.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch novels");
        return res.json();
      })
      .then((data) => {
        setNovels(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const filteredNovels = novels.filter((novel) => {
  const matchesGenre =
    genreFilter === "All Genres" || novel.genre === genreFilter;

  const matchesTitle = novel.title
    .toLowerCase()
    .includes(searchTerm.toLowerCase());

  return matchesGenre && matchesTitle;
});

  const sortedNovels = filteredNovels.slice().sort((a, b) => {
    if (sortOption === "Latest") {
      return b.id - a.id; // نرتبو حسب id (من الكبير للصغير)
    }
    if (sortOption === "Most Popular") {
      return (b.popularity || 0) - (a.popularity || 0);
    }
    if (sortOption === "Highest Rated") {
      return (b.rating || 0) - (a.rating || 0);
    }
    return 0;
  });

  return (
    <>
      <div className="bg-gradient-to-r from-green-300 to-red-400 rounded-2xl p-8 mb-8 text-white">
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
        
      <input
    type="text"
    placeholder="🔍 ابحث بالعنوان..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 w-full md:w-1/3"
  />

  <select
    className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
    value={genreFilter}
    onChange={(e) => setGenreFilter(e.target.value)}
  >
    <option>All Genres</option>
    <option>Mystery</option>
    <option>Romance</option>
    <option>Adventure</option>
    <option>Drama</option>
    <option>Science Fiction</option>
    <option>Thriller</option>
    <option>Fantasy</option>

  </select>

  <select
    className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
    value={sortOption}
    onChange={(e) => setSortOption(e.target.value)}
  >
    <option>Latest</option>
    <option>Most Popular</option>
    <option>Highest Rated</option>
  </select>
</div>
        
      

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {loading && <p>Loading novels...</p>}
        {error && <p className="text-red-600">{error}</p>}

        {!loading && !error && sortedNovels.length === 0 && (
          <p className="col-span-full text-center text-gray-500">No novels found.</p>
        )}

        {!loading &&
          !error &&
          sortedNovels.map((novel) => (
            <BookCard
              key={novel._id || novel.id}
              novel={novel}
              onClick={() => setSelectedBook(novel)}
            />
          ))}
      </div>

      {selectedBook && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg max-w-3xl w-full relative">
            <button
              className="absolute top-2 right-2 text-red-600 font-bold text-xl"
              onClick={() => setSelectedBook(null)}
            >
              ×
            </button>
            <BookDetail novel={selectedBook} />
          </div>
        </div>
      )}
    </>
  );
};

export default Homepage;
  