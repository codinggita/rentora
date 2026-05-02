import React, { useState } from 'react';
import DashboardSidebar from '../components/DashboardSidebar';
import SEO from '../components/SEO';
import Footer from '../components/Footer';

const ProfileSettings = () => {
  const [formData, setFormData] = useState({
    fullName: 'Rentora User',
    email: 'guest@rentora-tawny.vercel.app',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Mock update logic
    setTimeout(() => {
      setLoading(false);
      setMessage({ type: 'success', text: 'Profile updated successfully!' });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF9] font-sans">
      <SEO 
        title="Profile Settings" 
        description="Update your personal information and account settings on Rentora."
      />
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-24 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          <DashboardSidebar />

          {/* Main Content */}
          <main className="lg:col-span-9 space-y-8 md:space-y-10">
            <h1 className="text-3xl md:text-4xl font-bold text-text-main">Profile Settings</h1>
            
            <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-gray-50">
              <form onSubmit={handleSubmit} className="space-y-10">
                
                {/* Profile Picture Section */}
                <div className="flex flex-col md:flex-row items-center gap-8 pb-10 border-b border-gray-100">
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-brand-green rounded-full flex items-center justify-center text-white text-4xl md:text-5xl font-bold shadow-xl shadow-brand-green/20 relative">
                    RT
                    <button type="button" className="absolute bottom-0 right-0 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-brand-green hover:scale-110 transition-transform border border-gray-100">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>
                      </svg>
                    </button>
                  </div>
                  <div className="space-y-2 text-center md:text-left">
                    <h3 className="text-xl font-bold text-text-main">Profile Photo</h3>
                    <p className="text-gray-400 font-medium">Update your profile picture to help people recognize you.</p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
                      <button type="button" className="bg-brand-green text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:shadow-lg transition-all">Upload New</button>
                      <button type="button" className="text-gray-400 font-bold text-sm hover:text-brand-terracotta">Remove</button>
                    </div>
                  </div>
                </div>

                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-gray-400 uppercase tracking-widest px-1">Full Name</label>
                    <input 
                      type="text" 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full bg-[#fcfaf7] border border-gray-100 px-6 py-4 rounded-2xl font-bold text-text-main focus:outline-none focus:border-brand-green focus:ring-4 focus:ring-brand-green/5 transition-all"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-gray-400 uppercase tracking-widest px-1">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#fcfaf7] border border-gray-100 px-6 py-4 rounded-2xl font-bold text-text-main focus:outline-none focus:border-brand-green focus:ring-4 focus:ring-brand-green/5 transition-all"
                    />
                  </div>
                </div>

                <div className="w-full h-[1px] bg-gray-100"></div>

                {/* Password Change */}
                <div className="space-y-8">
                  <h3 className="text-xl font-bold text-text-main">Change Password</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-gray-400 uppercase tracking-widest px-1">Current Password</label>
                      <input 
                        type="password" 
                        name="currentPassword"
                        value={formData.currentPassword}
                        onChange={handleChange}
                        className="w-full bg-[#fcfaf7] border border-gray-100 px-6 py-4 rounded-2xl font-bold text-text-main focus:outline-none focus:border-brand-green focus:ring-4 focus:ring-brand-green/5 transition-all"
                        placeholder="••••••••"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-gray-400 uppercase tracking-widest px-1">New Password</label>
                      <input 
                        type="password" 
                        name="newPassword"
                        value={formData.newPassword}
                        onChange={handleChange}
                        className="w-full bg-[#fcfaf7] border border-gray-100 px-6 py-4 rounded-2xl font-bold text-text-main focus:outline-none focus:border-brand-green focus:ring-4 focus:ring-brand-green/5 transition-all"
                        placeholder="••••••••"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-gray-400 uppercase tracking-widest px-1">Confirm New Password</label>
                      <input 
                        type="password" 
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="w-full bg-[#fcfaf7] border border-gray-100 px-6 py-4 rounded-2xl font-bold text-text-main focus:outline-none focus:border-brand-green focus:ring-4 focus:ring-brand-green/5 transition-all"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>
                </div>

                {/* Feedback Message */}
                {message.text && (
                  <div className={`p-4 rounded-2xl font-bold text-sm ${message.type === 'success' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                    {message.text}
                  </div>
                )}

                {/* Submit Button */}
                <div className="flex justify-end pt-4">
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="bg-brand-green text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-xl hover:shadow-brand-green/20 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Saving Changes...
                      </>
                    ) : 'Update Settings'}
                  </button>
                </div>
              </form>
            </div>
          </main>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfileSettings;
