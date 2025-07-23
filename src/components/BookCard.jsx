import React from "react";

const BookCard = ({ novel, onClick }) => {
  return (
    <div
      onClick={onClick}
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
      <p className="text-sm text-gray-500 mt-2">⭐⭐⭐⭐☆ (120 reviews)</p>
    </div>
  );
};

export default BookCard;
