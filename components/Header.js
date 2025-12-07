'use client';

import { useState } from 'react';
import Navigation from './Navigation';
import SearchBar from './SearchBar';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] border-b border-[#FFD700]/20 shadow-2xl">
      {/* Mobile Header */}
      <div className="md:hidden">
        {/* Top Bar: Logo + Buttons + Menu */}
        <div className="flex items-center justify-between px-3 h-16">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
          </a>

          {/* Auth Buttons (Mobile) */}
          <div className="flex items-center space-x-2">
            <a
              href="/login"
              className="px-3 py-1.5 text-xs border border-[#FFD700] text-[#FFD700] font-bold rounded"
            >
              Login
            </a>
            <a
              href="/register"
              className="px-3 py-1.5 text-xs bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-bold rounded"
            >
              Register
            </a>
          </div>

          {/* Hamburger Menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-9 h-9 flex flex-col items-center justify-center space-y-1"
          >
            <span
              className={`w-5 h-0.5 bg-[#FFD700] transition-all ${
                mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            ></span>
            <span
              className={`w-5 h-0.5 bg-[#FFD700] transition-all ${
                mobileMenuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`w-5 h-0.5 bg-[#FFD700] transition-all ${
                mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="bg-[#0f0f0f] border-t border-gray-800 px-4 py-4">
            {/* Search */}
            <div className="mb-4">
              <SearchBar expanded={false} />
            </div>

            {/* Nav Links (no router, just href) */}
            <div className="space-y-1">
              <a
                href="/"
                className="block py-2.5 px-3 rounded transition text-gray-300 hover:text-[#FFD700] hover:bg-[#FFD700]/5"
              >
                Home
              </a>
              <a
                href="/blog"
                className="block py-2.5 px-3 rounded transition text-gray-300 hover:text-[#FFD700] hover:bg-[#FFD700]/5"
              >
                Blog
              </a>
              <a
                href="/about"
                className="block py-2.5 px-3 rounded transition text-gray-300 hover:text-[#FFD700] hover:bg-[#FFD700]/5"
              >
                About
              </a>
              <a
                href="/contact"
                className="block py-2.5 px-3 rounded transition text-gray-300 hover:text-[#FFD700] hover:bg-[#FFD700]/5"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Desktop Header */}
      <div className="hidden md:block">
        <div className="w-full border-b border-gray-800/50">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
            </a>

            {/* Center Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <SearchBar expanded={true} />
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-3">
              <a
                href="/login"
                className="px-6 py-2.5 bg-transparent border-2 border-[#FFD700] text-[#FFD700] font-bold rounded-lg hover:bg-[#FFD700]/10 transition-all duration-300 hover:scale-105"
              >
                Login
              </a>
              <a
                href="/register"
                className="px-6 py-2.5 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-bold rounded-lg hover:shadow-lg hover:shadow-[#FFD700]/50 transition-all duration-300 hover:scale-105"
              >
                Register
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Row: Navigation Menu */}
        <div className="w-full">
          <div className="max-w-7xl mx-auto px-6">
            <Navigation />
          </div>
        </div>
      </div>
    </header>
  );
}
