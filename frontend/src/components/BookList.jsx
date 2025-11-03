import React, { useEffect, useState } from "react";
import api from "../api";
import BookCard from "./BookCard";

export default function BookList() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const res = await api.get("/books/");
      setBooks(res.data.results ?? res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Delete this book?")) return;
    try {
      await api.delete(`/books/${id}/`);
      setBooks((prev) => prev.filter((b) => b.id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete");
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-2">
        📖 Available Books
      </h1>
      {loading ? (
        <div className="text-center py-10 text-gray-500 animate-pulse">Loading...</div>
      ) : books.length === 0 ? (
        <p className="text-center text-gray-500">No books available. Add some!</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((b) => (
            <BookCard key={b.id} book={b} onDelete={handleDelete} onSuccess={fetchBooks} />
          ))}
        </div>
      )}
    </div>
  );
}
