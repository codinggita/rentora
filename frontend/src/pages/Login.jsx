import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API_BASE_URL from '../api/config';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Store token
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      // Redirect to home or dashboard
      navigate('/');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-bg-off-white flex flex-col items-center justify-center py-12 px-6">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-8">
        <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        </div>
        <span className="text-2xl font-bold text-text-main tracking-tight">Rentora</span>
      </div>

      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-text-main leading-tight mb-2">Welcome back</h1>
        <p className="text-[#8B7E74]">Sign in to continue your home search</p>
      </div>

      {/* Login Card */}
      <div className="bg-white w-full max-w-[480px] rounded-[32px] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] p-10 md:p-12">
        <form className="space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-50 text-red-500 p-4 rounded-xl text-sm font-medium border border-red-100">
              {error}
            </div>
          )}
          
          {/* Email Field */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-text-main block ml-1">Email</label>
            <div className="relative">
              <span className="absolute left-5 top-1/2 -translate-y-1/2 text-[#A39A92]">
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
                className="w-full bg-brand-sand border-none px-12 py-4 rounded-2xl text-text-main placeholder:text-[#A39A92] focus:ring-2 focus:ring-brand-green/20 outline-none transition-all"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-text-main block ml-1">Password</label>
            <div className="relative">
              <span className="absolute left-5 top-1/2 -translate-y-1/2 text-[#A39A92]">
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
                className="w-full bg-brand-sand border-none px-12 py-4 rounded-2xl text-text-main placeholder:text-[#A39A92] focus:ring-2 focus:ring-brand-green/20 outline-none transition-all"
              />
            </div>
          </div>

          {/* Remember & Forgot */}
          <div className="flex justify-between items-center px-1">
            <div className="flex items-center gap-2">
              <input 
                type="checkbox" 
                id="remember" 
                className="w-4 h-4 rounded bg-brand-forest border-none focus:ring-0 cursor-pointer accent-brand-forest" 
              />
              <label htmlFor="remember" className="text-sm font-medium text-text-main cursor-pointer">Remember me</label>
            </div>
            <button type="button" className="text-sm font-bold text-brand-green hover:underline">Forgot password?</button>
          </div>

          {/* Sign In Button */}
          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-brand-terracotta text-white py-4 rounded-2xl font-bold text-lg hover:shadow-lg hover:opacity-90 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>

          {/* Sign Up Link */}
          <div className="text-center pt-2">
            <p className="text-gray-500">
              Don't have an account? {' '}
              <Link to="/signup" className="text-brand-green font-bold hover:underline">Sign up</Link>
            </p>
          </div>
        </form>
      </div>

      {/* Back to Home */}
      <Link to="/" className="mt-8 flex items-center gap-2 text-gray-500 font-semibold hover:text-text-main transition-colors">
        <span>←</span> Back to home
      </Link>
    </div>
  );
};

export default Login;

