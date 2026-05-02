import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brand-forest text-white py-12 md:py-16 px-6 md:px-10 lg:px-20">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
        
        {/* Brand Column */}
        <div className="flex flex-col gap-4 md:gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-green rounded-lg flex items-center justify-center shadow-lg shadow-brand-green/20">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <span className="text-xl md:text-2xl font-bold tracking-tight">Rentora</span>
          </div>
          <p className="text-gray-300 leading-relaxed max-w-[280px] text-sm md:text-base font-medium">
            Find your next home with confidence. Real reviews from real renters.
          </p>
        </div>

        {/* Explore Column */}
        <div className="flex flex-col gap-4 md:gap-6">
          <h3 className="text-lg md:text-xl font-bold tracking-tight">Explore</h3>
          <ul className="flex flex-col gap-3 md:gap-4 text-gray-300 text-sm md:text-base font-medium">
            <li><Link to="/explore" className="hover:text-brand-green transition-colors">Properties</Link></li>
            <li><Link to="/reviews" className="hover:text-brand-green transition-colors">Reviews</Link></li>
            <li><Link to="/neighborhoods" className="hover:text-brand-green transition-colors">Neighborhoods</Link></li>
            <li><Link to="/add-property" className="hover:text-brand-green transition-colors">Add Property</Link></li>
          </ul>
        </div>

        {/* Company Column */}
        <div className="flex flex-col gap-4 md:gap-6">
          <h3 className="text-lg md:text-xl font-bold tracking-tight">Company</h3>
          <ul className="flex flex-col gap-3 md:gap-4 text-gray-300 text-sm md:text-base font-medium">
            <li><Link to="/about" className="hover:text-brand-green transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-brand-green transition-colors">Contact</Link></li>
            <li><Link to="/privacy" className="hover:text-brand-green transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-brand-green transition-colors">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Connect Column */}
        <div className="flex flex-col gap-4 md:gap-6">
          <h3 className="text-lg md:text-xl font-bold tracking-tight">Connect</h3>
          <div className="flex items-center gap-3 md:gap-4">
            <a href="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-brand-green transition-all text-white border border-white/10">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-brand-green transition-all text-white border border-white/10">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-brand-green transition-all text-white border border-white/10">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-brand-green transition-all text-white border border-white/10">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-12 md:mt-16 pt-8 border-t border-white/10 text-center text-gray-400 text-xs md:text-sm font-medium">
        © {new Date().getFullYear()} Rentora. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
