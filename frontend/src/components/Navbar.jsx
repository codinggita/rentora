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
  const [isOpen, setIsOpen] = useState(false);
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
    setIsOpen(false); // Close menu on route change
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
  };

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
        {['Home', 'Explore', 'Dashboard', 'Reviews', 'About'].filter(item => {
          if (item === 'Dashboard' || item === 'Reviews') return !!user;
          return true;
        }).map((item) => (
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

      {/* Right Side (Desktop) */}
      <div className="hidden lg:flex items-center gap-8">
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
          {['Home', 'Explore', 'Dashboard', 'Reviews', 'About'].filter(item => {
            if (item === 'Dashboard' || item === 'Reviews') return !!user;
            return true;
          }).map((item) => (
            <Link 
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
              className={`text-2xl font-bold ${
                (location.pathname === '/' && item === 'Home') || location.pathname === `/${item.toLowerCase()}`
                ? 'text-brand-green' 
                : 'text-gray-400'
              }`}
            >
              {item}
            </Link>
          ))}
          <div className="pt-10 border-t border-gray-100 space-y-6">
            {user ? (
              <div className="space-y-6">
                <div className="flex flex-col">
                  <span className="text-gray-400 text-sm font-bold uppercase tracking-wider">Logged in as</span>
                  <span className="text-text-main text-2xl font-bold">{user.username}</span>
                </div>
                <button 
                  onClick={handleLogout}
                  className="w-full bg-brand-terracotta text-white py-5 rounded-2xl font-bold text-xl shadow-lg"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link to="/login" className="flex items-center gap-3 text-text-main font-bold text-2xl">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                    <polyline points="10 17 15 12 10 7" />
                    <line x1="15" y1="12" x2="3" y2="12" />
                  </svg>
                  Login
                </Link>
                <Link to="/signup" className="block w-full bg-brand-terracotta text-white py-5 rounded-2xl font-bold text-xl text-center shadow-lg shadow-brand-terracotta/20">
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
