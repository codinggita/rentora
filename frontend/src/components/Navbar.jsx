import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false); // Close menu on route change
  }, [location]);

  const navItems = ['Home', 'Explore', 'Dashboard', 'Reviews', 'About'];

  return (
    <nav className="w-full h-20 md:h-24 bg-white flex items-center justify-between px-6 md:px-10 lg:px-24 border-b border-gray-100 sticky top-0 z-[100]">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2.5 group">
        <div className="w-8 h-8 md:w-10 md:h-10 bg-brand-green rounded-lg md:rounded-xl flex items-center justify-center shadow-lg shadow-brand-green/20 group-hover:scale-110 transition-transform">
          <svg width="18" height="18" className="md:w-[22px] md:h-[22px]" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        </div>
        <span className="text-xl md:text-2xl font-bold text-text-main tracking-tight">Rentora</span>
      </Link>

      {/* Nav Links (Desktop) */}
      <div className="hidden lg:flex items-center gap-12">
        {navItems.map((item) => (
          <Link 
            key={item}
            to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} 
            className={`text-base font-bold transition-all hover:text-brand-green ${
              (location.pathname === '/' && item === 'Home') || location.pathname === `/${item.toLowerCase().replace(' ', '-')}`
              ? 'text-brand-green underline underline-offset-8 decoration-4' 
              : 'text-gray-400'
            }`}
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Hamburger Menu Icon (Mobile/Tablet) */}
      <button 
        className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-[110]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`w-6 h-0.5 bg-text-main transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-text-main transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-text-main transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Mobile/Tablet Drawer */}
      <div className={`fixed inset-0 bg-white z-[105] transition-transform duration-300 lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full p-10 pt-32 space-y-8">
          {navItems.map((item) => (
            <Link 
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} 
              className={`text-2xl font-bold ${
                (location.pathname === '/' && item === 'Home') || location.pathname === `/${item.toLowerCase().replace(' ', '-')}`
                ? 'text-brand-green' 
                : 'text-gray-400'
              }`}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
