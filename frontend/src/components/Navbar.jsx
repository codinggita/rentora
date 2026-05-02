import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [user, setUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem('user');
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error('Error parsing stored user:', error);
      return null;
    }
  });
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      } else {
        setUser(null);
      }
    } catch (error) {
      setUser(null);
    }
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
  };

  return (
    <nav className="w-full h-24 bg-white flex items-center justify-between px-10 lg:px-24 border-b border-gray-100 sticky top-0 z-[100]">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2.5 group">
        <div className="w-10 h-10 bg-brand-green rounded-xl flex items-center justify-center shadow-lg shadow-brand-green/20 group-hover:scale-110 transition-transform">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        </div>
        <span className="text-2xl font-bold text-text-main tracking-tight">Rentora</span>
      </Link>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-12">
        {['Home', 'Explore', 'Reviews', 'About'].map((item) => (
          <Link 
            key={item}
            to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
            className={`text-base font-bold transition-all hover:text-brand-green ${
              (location.pathname === '/' && item === 'Home') || location.pathname === `/${item.toLowerCase()}`
              ? 'text-brand-green underline underline-offset-8 decoration-4' 
              : 'text-gray-400'
            }`}
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-8">
        {user ? (
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-end">
              <span className="text-gray-400 text-xs font-bold uppercase tracking-wider">Logged in as</span>
              <span className="text-text-main font-bold">{user.username}</span>
            </div>
            <button 
              onClick={handleLogout}
              className="bg-brand-terracotta/10 text-brand-terracotta px-6 py-3 rounded-2xl font-bold hover:bg-brand-terracotta hover:text-white transition-all active:scale-95 shadow-sm"
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <Link to="/login" className="flex items-center gap-2 text-text-main font-bold hover:text-brand-green transition-colors text-lg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                <polyline points="10 17 15 12 10 7" />
                <line x1="15" y1="12" x2="3" y2="12" />
              </svg>
              Login
            </Link>
            <Link to="/signup" className="bg-brand-terracotta text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl hover:shadow-brand-terracotta/20 transition-all transform hover:-translate-y-1 active:scale-95">
              Get Started
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
