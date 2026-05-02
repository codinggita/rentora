import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const DashboardSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem('user')) || { username: 'Rentora User' };

  const menuItems = [
    { name: 'Overview', path: '/dashboard', icon: 'M4 6h16M4 12h16M4 18h16' },
    { name: 'My Reviews', path: '/my-reviews', icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z' },
    { name: 'Saved Properties', path: '/saved-properties', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
    { name: 'Profile Settings', path: '/settings', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <aside className="lg:col-span-3">
      <div className="bg-white rounded-[2.5rem] p-6 md:p-8 shadow-sm border border-gray-50 flex flex-col items-center lg:sticky lg:top-32">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-green rounded-full flex items-center justify-center text-white text-2xl md:text-3xl font-bold mb-4 shadow-lg shadow-brand-green/20">
          {user.username.substring(0, 2).toUpperCase()}
        </div>
        <h2 className="text-lg md:text-xl font-bold text-text-main">{user.username}</h2>
        <p className="text-gray-400 text-xs md:text-sm font-medium">Guest Session</p>
        
        <div className="w-full h-[1px] bg-gray-100 my-6 md:my-8"></div>
        
        <nav className="w-full flex flex-row lg:flex-col gap-2 overflow-x-auto no-scrollbar lg:overflow-visible pb-2 lg:pb-0">
          {menuItems.map((item) => (
            <button 
              key={item.name}
              onClick={() => navigate(item.path)}
              className={`flex-shrink-0 lg:w-full flex items-center gap-3 md:gap-4 px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl font-bold transition-all whitespace-nowrap ${
                location.pathname === item.path
                ? 'bg-brand-green text-white shadow-lg shadow-brand-green/20' 
                : 'text-gray-400 hover:bg-gray-50'
              }`}
            >
              <svg width="18" height="18" className="md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d={item.icon} />
              </svg>
              <span className="text-sm md:text-base">{item.name}</span>
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
