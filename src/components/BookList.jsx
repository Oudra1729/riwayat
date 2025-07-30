import { useState } from "react";
import booksData from "../data/books.json";

const BookList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [genreFilter, setGenreFilter] = useState("");

  const filteredBooks = booksData.filter((book) => {
    const matchesTitle = book.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = genreFilter ? book.genre === genreFilter : true;
    return matchesTitle && matchesGenre;
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">📚 قائمة الروايات</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="🔍 بحث بالعنوان..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded w-full md:w-1/2"
        />

        <select
          value={genreFilter}
          onChange={(e) => setGenreFilter(e.target.value)}
          className="border p-2 rounded w-full md:w-1/2"
        >
          <option value="">All genres</option>
          <option value="غموض">Mystery</option>
          <option value="رومانسي">Romance</option>
          <option value="مغامرة">Adventure</option>
          <option value="دراما">Drama</option>
          <option value="الخيال العلمي">Science Fiction</option>
          <option value="إثارة">Thriller</option>
          <option value="خيال">Fantasy</option>

        </select>
      </div>

      <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {filteredBooks.map((book) => (
          <li key={book.id} className="bg-white rounded-lg shadow p-3">
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-48 object-cover rounded mb-2"
            />
            <h2 className="text-lg font-bold">{book.title}</h2>
            <p className="text-sm text-gray-600">النوع: {book.genre}</p>
          </li>
        ))}

        {filteredBooks.length === 0 && (
          <p className="text-gray-500 col-span-full text-center">
            ما كايناش روايات مطابقة 🤷‍♀️
          </p>
        )}
      </ul>
    </div>
  );
};

export default BookList;