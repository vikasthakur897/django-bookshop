import React from 'react';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import './App.css';

function App() {
  const handleNew = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <header className="bg-white/80 backdrop-blur shadow-sm sticky top-0 z-10 border-b border-gray-200">
        <div className="max-w-6xl mx-auto py-4 px-6 flex items-center justify-between">
          <h1 className="text-3xl font-extrabold text-blue-600 tracking-tight">📚 BookShop</h1>
          <p className="text-sm text-gray-500">Manage your bookstore with ease</p>
        </div>
      </header>

      <main className="py-10">
        <div className="max-w-6xl mx-auto px-6 space-y-10">
          <BookForm onSuccess={handleNew} />
          <BookList />
        </div>
      </main>
    </div>
  );
}

export default App;
