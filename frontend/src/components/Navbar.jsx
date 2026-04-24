import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full h-20 bg-bg-off-white flex items-center justify-between px-10 lg:px-20 border-b border-gray-100">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-brand-green rounded-full flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        </div>
        <span className="text-2xl font-bold text-text-main tracking-tight">Rentora</span>
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-10">
        <Link to="/" className="text-text-main font-medium hover:text-brand-green transition-colors">Home</Link>
        <Link to="/explore" className="text-text-main font-medium hover:text-brand-green transition-colors">Explore</Link>
        <Link to="/reviews" className="text-text-main font-medium hover:text-brand-green transition-colors">Reviews</Link>
        <Link to="/about" className="text-text-main font-medium hover:text-brand-green transition-colors">About</Link>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">
        <button className="flex items-center gap-2 text-text-main font-medium hover:opacity-80 transition-opacity">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
            <polyline points="10 17 15 12 10 7" />
            <line x1="15" y1="12" x2="3" y2="12" />
          </svg>
          Login
        </button>
        <button className="bg-brand-terracotta text-white px-6 py-2.5 rounded-xl font-semibold hover:shadow-lg transition-all active:scale-95">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
