'use client';

import { useState, useEffect, useRef } from 'react';
import Fuse from 'fuse.js';
import Link from 'next/link';
import Image from 'next/image';

let fuse = null;
let cachedIndex = null;

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false); // controls dropdown
  const inputRef = useRef(null);

  // Load index once
  useEffect(() => {
    if (cachedIndex) return;
    setLoading(true);
    fetch('/search-index.json')
      .then((r) => r.json())
      .then((data) => {
        cachedIndex = data;
        fuse = new Fuse(data, {
          keys: ['title', 'excerpt', 'content', 'tags'],
          threshold: 0.25,
          includeScore: true,
          ignoreLocation: true,
        });
      })
      .finally(() => setLoading(false));
  }, []);

  // Live search
  useEffect(() => {
    if (!query.trim() || !fuse) {
      setResults([]);
      setOpen(false);
      return;
    }
    const matches = fuse.search(query).slice(0, 8);
    setResults(matches.map((m) => m.item));
    setOpen(true);
  }, [query]);

  const clearAll = () => {
    setQuery('');
    setResults([]);
    setOpen(false);
    inputRef.current?.blur();
  };

  return (
    <div className="w-full max-w-3xl mx-auto relative">
      {/* BAR */}
      <div
        className={`relative flex items-stretch bg-black/80 backdrop-blur-xl rounded-3xl overflow-hidden border-2 
        ${open ? 'border-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.5)]' : 'border-gray-800 shadow-xl'}`}
      >
        <div className="w-14 flex items-center justify-center bg-gradient-to-b from-emerald-500/15 to-purple-600/15 border-r border-emerald-500/40">
          <svg
            className="w-6 h-6 text-emerald-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.8}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="⚡ Instant search games, guides, posts..."
          className="flex-1 bg-transparent px-5 py-3 text-base sm:text-lg font-semibold text-white 
                     placeholder:text-gray-500/80 outline-none border-none focus:outline-none
                     focus:ring-0 focus-visible:ring-0"
        />

        {query && (
          <button
            type="button"
            onClick={clearAll}
            className="px-4 text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-colors"
          >
            ✕
          </button>
        )}
      </div>

      {/* RESULTS */}
      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-full max-w-3xl bg-black/95 border border-emerald-500/40 rounded-2xl shadow-2xl overflow-hidden z-40">
          {loading && !cachedIndex && (
            <div className="px-4 py-3 text-sm text-emerald-300">Searching…</div>
          )}

          {!loading && results.length === 0 && (
            <div className="px-4 py-3 text-sm text-gray-400">No results found.</div>
          )}

          {!loading && results.length > 0 && (
            <ul className="divide-y divide-gray-800">
              {results.map((item) => (
                <li key={item.slug || item.url}>
                  <Link
                    href={item.url || '#'}
                    // Mobile-safe: let navigation start, then close bar
                    onClick={() => {
                      setTimeout(() => {
                        clearAll();
                      }, 150);
                    }}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-emerald-500/10 transition-colors"
                  >
                    {/* IMAGE THUMBNAIL */}
                    {item.image ? (
                      <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden bg-gray-800 border border-emerald-500/30">
                        <Image
                          src={item.image}
                          alt={item.title || 'Post image'}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                          unoptimized
                        />
                      </div>
                    ) : (
                      <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg bg-gradient-to-br from-emerald-500/20 to-purple-600/20 border border-emerald-500/30 flex items-center justify-center">
                        <svg className="w-8 h-8 text-emerald-400/50" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z" />
                        </svg>
                      </div>
                    )}

                    {/* TEXT */}
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-white truncate">
                        {item.title}
                      </div>
                      {item.excerpt && (
                        <div className="mt-1 text-xs text-gray-400 line-clamp-2">
                          {item.excerpt}
                        </div>
                      )}
                      {item.tags && item.tags.length > 0 && (
                        <div className="mt-1 text-[11px] text-emerald-300">
                          {item.tags.slice(0, 3).join(' • ')}
                        </div>
                      )}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
