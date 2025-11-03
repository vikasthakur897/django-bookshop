import React, { useState } from "react";
import api from "../api";

export default function BookForm({ onSuccess }) {
  const [form, setForm] = useState({
    title: "",
    author: "",
    price: "",
    stock: 0,
    description: "",
    cover: null,
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value);
      });

      await api.post("/books/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setForm({ title: "", author: "", price: "", stock: 0, description: "", cover: null });
      onSuccess && onSuccess();
    } catch (err) {
      console.error(err);
      alert("Error creating book");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6 space-y-3">
      <h2 className="text-xl font-semibold text-gray-800">➕ Add a Book</h2>
      <div className="grid sm:grid-cols-2 gap-3">
        <input name="title" value={form.title} onChange={handleChange} placeholder="Title" className="p-2 border rounded" required />
        <input name="author" value={form.author} onChange={handleChange} placeholder="Author" className="p-2 border rounded" required />
        <input name="price" value={form.price} onChange={handleChange} placeholder="Price" className="p-2 border rounded" />
        <input name="stock" value={form.stock} onChange={handleChange} placeholder="Stock" className="p-2 border rounded" />
      </div>
      <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" className="p-2 border rounded w-full" />
      <input type="file" name="cover" accept="image/*" onChange={handleChange} className="p-2 border rounded w-full" />
      <div className="flex justify-end">
        <button disabled={submitting} className="px-4 py-2 bg-blue-600 text-white rounded">
          {submitting ? "Uploading..." : "Save"}
        </button>
      </div>
    </form>
  );
}
