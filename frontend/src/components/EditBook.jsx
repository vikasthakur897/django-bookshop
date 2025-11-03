import React, { useState } from "react";
import api from "../api";

export default function EditBookModal({ book, onClose, onSuccess }) {
  const [form, setForm] = useState({
    title: book.title,
    author: book.author,
    price: book.price,
    stock: book.stock,
    description: book.description,
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await api.put(`/books/${book.id}/`, {
        ...form,
        price: parseFloat(form.price),
        stock: parseInt(form.stock),
      });
      onSuccess && onSuccess();
      onClose();
    } catch (err) {
      console.error(err);
      alert("Failed to update book");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6">
        <h2 className="text-xl font-semibold mb-4">Edit Book</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Title"
            className="w-full p-2 border rounded"
          />
          <input
            name="author"
            value={form.author}
            onChange={handleChange}
            placeholder="Author"
            className="w-full p-2 border rounded"
          />
          <input
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="Price"
            className="w-full p-2 border rounded"
          />
          <input
            name="stock"
            value={form.stock}
            onChange={handleChange}
            placeholder="Stock"
            className="w-full p-2 border rounded"
          />
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full p-2 border rounded"
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded"
            >
              Cancel
            </button>
            <button
              disabled={submitting}
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              {submitting ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
