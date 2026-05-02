import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API_BASE_URL from '../api/config';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Mock successful signup
    setTimeout(() => {
      localStorage.setItem('user', JSON.stringify({ username, email }));
      localStorage.setItem('token', 'mock-token');
      setLoading(false);
      navigate('/dashboard');
    }, 800);
  };

  return (
    <div className="min-h-screen bg-bg-off-white flex flex-col items-center justify-center py-10 md:py-12 px-6">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-6 md:mb-8">
        <div className="w-8 h-8 md:w-10 md:h-10 bg-brand-green rounded-full flex items-center justify-center shadow-lg shadow-brand-green/20">
          <svg width="18" height="18" className="md:w-[22px] md:h-[22px]" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        </div>
        <span className="text-xl md:text-2xl font-bold text-text-main tracking-tight">Rentora</span>
      </div>

      {/* Heading */}
      <div className="text-center mb-6 md:mb-8 space-y-1">
        <h1 className="text-2xl md:text-3xl font-bold text-text-main leading-tight tracking-tight">Create an account</h1>
        <p className="text-gray-500 font-medium text-sm md:text-base">Start your journey to finding the perfect home</p>
      </div>

      {/* Signup Card */}
      <div className="bg-white w-full max-w-[480px] rounded-[2rem] md:rounded-[32px] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] p-8 md:p-12">
        <form className="space-y-5 md:space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-50 text-red-500 p-4 rounded-xl text-sm font-medium border border-red-100">
              {error}
            </div>
          )}

          {/* Name Field */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-text-main block ml-1">Username</label>
            <div className="relative">
              <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                </svg>
              </span>
              <input 
                type="text" 
                placeholder="johndoe"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full bg-brand-sand/50 border border-transparent px-12 py-4 rounded-2xl text-text-main placeholder:text-gray-400 focus:ring-2 focus:ring-brand-green/20 focus:bg-white focus:border-brand-green/20 outline-none transition-all text-sm md:text-base"
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-text-main block ml-1">Email</label>
            <div className="relative">
              <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </span>
              <input 
                type="email" 
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-brand-sand/50 border border-transparent px-12 py-4 rounded-2xl text-text-main placeholder:text-gray-400 focus:ring-2 focus:ring-brand-green/20 focus:bg-white focus:border-brand-green/20 outline-none transition-all text-sm md:text-base"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-text-main block ml-1">Password</label>
            <div className="relative">
              <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </span>
              <input 
                type="password" 
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-brand-sand/50 border border-transparent px-12 py-4 rounded-2xl text-text-main placeholder:text-gray-400 focus:ring-2 focus:ring-brand-green/20 focus:bg-white focus:border-brand-green/20 outline-none transition-all text-sm md:text-base"
              />
            </div>
          </div>

          {/* Terms */}
          <div className="flex items-start gap-3 px-1">
            <input 
              type="checkbox" 
              id="terms" 
              required
              className="mt-1 w-4 h-4 rounded bg-brand-forest border-none focus:ring-0 cursor-pointer accent-brand-forest" 
            />
            <label htmlFor="terms" className="text-xs md:text-sm text-gray-500 leading-tight font-medium">
              I agree to the <span className="font-bold text-text-main">Terms of Service</span> and <span className="font-bold text-text-main">Privacy Policy</span>
            </label>
          </div>

          {/* Sign Up Button */}
          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-brand-terracotta text-white py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg hover:shadow-xl shadow-brand-terracotta/20 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed mt-2"
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>

          {/* Login Link */}
          <div className="text-center pt-2">
            <p className="text-gray-500 text-sm md:text-base font-medium">
              Already have an account? {' '}
              <Link to="/login" className="text-brand-green font-bold hover:underline">Sign in</Link>
            </p>
          </div>
        </form>
      </div>

      {/* Back to Home */}
      <Link to="/" className="mt-8 flex items-center gap-2 text-gray-500 font-bold hover:text-text-main transition-colors text-sm md:text-base">
        <span>←</span> Back to home
      </Link>
    </div>
  );
};

export default Signup;
