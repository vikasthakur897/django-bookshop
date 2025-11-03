import React, { useState } from "react";
import EditBookModal from "./EditBook";

export default function BookCard({ book, onDelete, onSuccess }) {
  const [editing, setEditing] = useState(false);

  return (
    <>
      <div className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden group">
        <div className="flex flex-col h-full">
          {book.cover ? (
            <img
              src={book.cover}
              alt={book.title}
              className="w-full h-75 object-cover rounded-t-lg"
            />
          ) : (
            <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
              No Image
            </div>
          )}

          <div className="flex-1 p-4 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 truncate">
                {book.title}
              </h3>
              <p className="text-sm text-gray-500 mb-2">By {book.author}</p>
              <p className="text-gray-600 text-sm line-clamp-3">
                {book.description || "No description available."}
              </p>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <span className="font-bold text-blue-600 text-lg">
                ₹{book.price}
              </span>
              <span className="text-sm text-gray-500">
                {book.stock} in stock
              </span>
            </div>

            <div className="mt-4 flex gap-2">
              <button
                onClick={() => setEditing(true)}
                className="flex-1 px-3 py-1 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-100 transition"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(book.id)}
                className="flex-1 px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-md transition"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      {editing && (
        <EditBookModal
          book={book}
          onClose={() => setEditing(false)}
          onSuccess={onSuccess}
        />
      )}
    </>
  );
}
