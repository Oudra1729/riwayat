import React from "react";

const BookDetail = ({ novel }) => {
  if (!novel) return null;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl w-full">
      {novel.image && (
        <img
          src={novel.image}
          alt={novel.title}
          className="w-full h-64 object-cover rounded mb-6"
        />
      )}
      <h1 className="text-3xl font-bold mb-2">{novel.title}</h1>
      <p className="text-sm text-gray-600 mb-2">
        Genre: {novel.genre || "Unknown"}
      </p>
      <p className="text-gray-700 mb-4">
        {novel.description || "No description available."}
      </p>
      <p className="text-gray-600 mb-2">
        Author: <span className="font-semibold">{novel.author || "Unknown"}</span>
      </p>
      <p className="text-gray-500 mb-2">
        Rating: ⭐ {novel.rating || "Not rated"} ({novel.reviews || "0"} reviews)
      </p>
      <p className="text-gray-400 text-sm mt-4">
        Published:{" "}
        {novel.createdAt
          ? new Date(novel.createdAt).toLocaleDateString()
          : "N/A"}
      </p>
    </div>
  );
};

export default BookDetail;
