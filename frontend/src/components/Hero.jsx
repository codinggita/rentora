import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="w-full bg-bg-off-white py-12 md:py-16 lg:py-24 px-6 md:px-10 lg:px-20 border-b border-gray-50">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-10 md:gap-12 lg:gap-20">
        
        {/* Left Content */}
        <div className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-text-main leading-[1.1] tracking-tight">
            Find your next home <br className="hidden md:block" /> 
            <span className="text-brand-green">with confidence</span>
          </h1>
          
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
            Discover rental properties with transparent reviews from real renters. 
            Make informed decisions backed by community insights.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-2 md:pt-4">
            <Link to="/explore" className="w-full sm:w-auto bg-brand-terracotta text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:shadow-xl hover:-translate-y-1 transition-all shadow-lg shadow-brand-terracotta/20">
              Explore Properties
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
            <Link to="/reviews" className="w-full sm:w-auto bg-white text-brand-green border-2 border-brand-green px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-green/5 transition-all text-center">
              Add Review
            </Link>
          </div>

          {/* Search Bar Integration - Responsive design */}
          <div className="pt-4 md:pt-6 w-full max-w-lg mx-auto lg:mx-0">
            <div className="bg-white p-1.5 md:p-2 rounded-2xl shadow-xl flex items-center gap-2 border border-gray-100">
              <div className="flex-grow flex items-center gap-2 md:gap-3 px-2 md:px-4">
                <svg width="18" height="18" className="md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
                </svg>
                <input 
                  type="text" 
                  placeholder="Neighborhood or address..." 
                  className="w-full bg-transparent outline-none text-text-main placeholder:text-gray-400 font-medium text-sm md:text-base"
                />
              </div>
              <button className="bg-brand-green text-white px-4 md:px-6 py-2.5 md:py-3 rounded-xl font-bold hover:bg-brand-forest transition-all text-sm md:text-base">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Right Content (Visual Elements) - Hidden on smallest mobile if needed, but here we just scale it */}
        <div className="flex-1 relative w-full h-[300px] md:h-[400px] lg:h-[600px] order-1 lg:order-2">
          {/* Main Hero Image Placeholder */}
          <div className="absolute top-0 right-0 w-[90%] md:w-[85%] h-[90%] bg-brand-sand rounded-[2rem] md:rounded-3xl overflow-hidden shadow-2xl">
            <div className="w-full h-full bg-gradient-to-br from-brand-green/20 to-brand-forest/10 flex items-center justify-center italic text-brand-forest/40 text-center p-6 text-sm md:text-base">
              Modern Luxury Interior Image
            </div>
          </div>
          
          {/* Overlapping Card Placeholder - Adjusted for mobile */}
          <div className="absolute bottom-0 left-0 w-48 md:w-64 p-3 md:p-4 bg-white rounded-2xl shadow-2xl border border-gray-100 transition-transform hover:scale-105 z-10">
            <div className="h-24 md:h-32 bg-gray-100 rounded-xl mb-2 md:mb-3"></div>
            <h4 className="font-bold text-text-main text-sm md:text-base">Cozy Studio</h4>
            <div className="flex items-center justify-between mt-1">
              <span className="text-[10px] md:text-sm text-gray-500">Brooklyn, NYC</span>
              <div className="flex items-center gap-1 text-yellow-500">
                <svg width="12" height="12" className="md:w-3.5 md:h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <span className="text-[10px] md:text-sm font-bold text-text-main">4.7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
