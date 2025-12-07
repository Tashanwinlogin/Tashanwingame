// pages/404.js
'use client';

import Head from 'next/head';
import Link from 'next/link';
import SearchBar from '../components/SearchBar';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 – Page Not Found | Tashan Win Game</title>
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-black via-[#050505] to-[#050008] text-white flex items-center justify-center px-4">
        <div className="max-w-3xl w-full text-center relative">

          {/* Glow background */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#FFD700]/10 blur-3xl rounded-full" />
            <div className="absolute bottom-0 right-10 w-60 h-60 bg-[#FF7A00]/10 blur-3xl rounded-full" />
          </div>

          {/* Main card */}
          <div className="relative border border-[#FFD700]/30 bg-black/70 rounded-3xl px-6 sm:px-10 py-10 sm:py-12 shadow-[0_0_40px_rgba(0,0,0,0.9)] backdrop-blur-md">
            {/* 404 title */}
            <div className="mb-6">
              <div className="text-6xl sm:text-7xl font-extrabold tracking-[0.2em] text-[#FFD700] drop-shadow-[0_0_15px_rgba(255,215,0,0.6)]">
                404
              </div>
              <div className="mt-2 text-lg sm:text-xl font-semibold text-gray-200">
                Page not found
              </div>
              <p className="mt-3 text-sm sm:text-base text-gray-400">
                Looks like this route went AFK. Try searching or jump to a safe spot below.
              </p>
            </div>

            {/* Search */}
            <div className="max-w-xl mx-auto mb-8">
              <SearchBar expanded={true} />
            </div>

            {/* Quick links */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm mb-6">
              <Link
                href="/"
                className="px-3 py-3 rounded-xl border border-[#FFD700]/30 bg-gradient-to-b from-[#111] to-[#050505] hover:border-[#FFD700] hover:from-[#1b1b1b] hover:to-[#080808] transition-all duration-200"
              >
                Home
              </Link>
              <Link
                href="/blog"
                className="px-3 py-3 rounded-xl border border-[#FFD700]/30 bg-gradient-to-b from-[#111] to-[#050505] hover:border-[#FFD700] hover:from-[#1b1b1b] hover:to-[#080808] transition-all duration-200"
              >
                Blog
              </Link>
              <Link
                href="/about"
                className="px-3 py-3 rounded-xl border border-[#FFD700]/30 bg-gradient-to-b from-[#111] to-[#050505] hover:border-[#FFD700] hover:from-[#1b1b1b] hover:to-[#080808] transition-all duration-200"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="px-3 py-3 rounded-xl border border-[#FFD700]/30 bg-gradient-to-b from-[#111] to-[#050505] hover:border-[#FFD700] hover:from-[#1b1b1b] hover:to-[#080808] transition-all duration-200"
              >
                Contact
              </Link>
            </div>

            {/* Big CTA button */}
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-r from-[#FFD700] to-[#FF7A00] text-black font-extrabold tracking-wide shadow-[0_0_25px_rgba(255,215,0,0.5)] hover:shadow-[0_0_35px_rgba(255,215,0,0.8)] transform hover:-translate-y-0.5 transition-all duration-200"
            >
              ⬅ Back to Dashboard
            </Link>
          </div>

          {/* Tiny footer note */}
          <p className="mt-6 text-xs text-gray-500">
            Error code: 404 • Tashan Win Game
          </p>
        </div>
      </div>
    </>
  );
}
