'use client';

import { useState, useEffect, useRef } from 'react';
import Fuse from 'fuse.js';

let fuse = null;

export default function SearchBar({ expanded = true, className = '' }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  // Load search index on mount
  useEffect(() => {
    if (!fuse) {
      fetch('/search-index.json')
        .then((res) => res.json())
        .then((data) => {
          fuse = new Fuse(data, {
            keys: ['title', 'excerpt', 'content', 'tags'],
            threshold: 0.3,
            ignoreLocation: true,
          });
        })
        .catch((err) => console.error('Search index load failed:', err));
    }
  }, []);

  // Search on query change
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setLoading(false);
      return;
    }
    if (!fuse) {
      setLoading(true);
      return;
    }

    const matches = fuse.search(query).slice(0, 5);
    setResults(matches.map((m) => m.item));
    setLoading(false);
  }, [query]);

  // Auto-focus when expanded (desktop header)
  useEffect(() => {
    if (expanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [expanded]);

  return (
    <div className={`relative w-full ${className}`}>
      {/* Search Input */}
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
          🔍
        </div>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Live search..."
          className="w-full h-12 bg-gray-900 border border-gray-700 rounded-full text-white pl-12 pr-4 focus:outline-none focus:border-[var(--gold)] transition-all"
        />
      </div>

      {/* Results Dropdown */}
      {query && results.length > 0 && (
        <ul className="absolute top-full left-0 right-0 mt-2 bg-gray-900 border border-gray-700 rounded-xl shadow-2xl overflow-hidden z-50 max-h-96 overflow-y-auto">
          {results.map((item) => (
            <li key={`${item.type || 'item'}-${item.slug}`}>
              <a
                href={item.url || '#'}
                className="block px-6 py-4 hover:bg-gray-800 border-b border-gray-800 last:border-0 transition-colors"
              >
                <div className="font-bold text-[var(--gold)] mb-1">
                  {item.title}
                </div>
                <div className="text-sm text-gray-400 line-clamp-2">
                  {item.excerpt}
                </div>
              </a>
            </li>
          ))}
        </ul>
      )}

      {/* No Results */}
      {query && !loading && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-gray-900 border border-gray-700 rounded-xl p-4 text-center text-gray-500">
          No results found for "{query}"
        </div>
      )}

      {/* Loading */}
      {loading && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-gray-900 border border-gray-700 rounded-xl p-4 text-center text-gray-500">
          Loading...
        </div>
      )}
    </div>
  );
}
