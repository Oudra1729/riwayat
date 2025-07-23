import React, { useEffect, useState } from "react";

const Homepage = () => {
  const [novels, setNovels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [genreFilter, setGenreFilter] = useState("All Genres");
  const [sortOption, setSortOption] = useState("Latest");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/novels")
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

  const filteredNovels =
    genreFilter === "All Genres"
      ? novels
      : novels.filter((novel) =>
          novel.genre ? novel.genre === genreFilter : false
        );

  const sortedNovels = filteredNovels.slice().sort((a, b) => {
    if (sortOption === "Latest") {
      return new Date(b.createdAt) - new Date(a.createdAt);
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
        <div className="flex items-center gap-2">
          <select
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={genreFilter}
            onChange={(e) => setGenreFilter(e.target.value)}
          >
            <option>All Genres</option>
            <option>Fiction</option>
            <option>Non-fiction</option>
            <option>Romance</option>
          </select>
        </div>

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
            <div
              key={novel._id || novel.id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-md cursor-pointer"
            >
              {novel.image && (
                <img
                  src={novel.image}
                  alt={novel.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
              )}
              <h2 className="text-lg font-semibold mb-2">{novel.title}</h2>
              <p className="text-sm text-gray-600">
                Genre: {novel.genre || "Unknown"}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                ⭐⭐⭐⭐☆ (120 reviews)
              </p>
            </div>
          ))}
      </div>
    </>
  );
};

export default Homepage;
