import React from 'react';

const Hero = () => {
  return (
    <section className="w-full bg-bg-off-white py-16 lg:py-24 px-10 lg:px-20 border-b border-gray-50">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Content */}
        <div className="flex-1 space-y-8 text-center lg:text-left">
          <h1 className="text-5xl lg:text-7xl font-bold text-text-main leading-[1.1]">
            Find your next home <br /> 
            <span className="text-brand-green">with confidence</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Discover rental properties with transparent reviews from real renters. 
            Make informed decisions backed by community insights.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
            <button className="bg-brand-terracotta text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2 hover:shadow-xl hover:-translate-y-1 transition-all">
              Explore Properties
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </button>
            <button className="bg-white text-brand-green border-2 border-brand-green px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-green/5 transition-all">
              Add Review
            </button>
          </div>

          {/* Search Bar Integration */}
          <div className="pt-6 w-full max-w-lg mx-auto lg:mx-0">
            <div className="bg-white p-2 rounded-2xl shadow-xl flex items-center gap-2 border border-gray-100">
              <div className="flex-grow flex items-center gap-3 px-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
                </svg>
                <input 
                  type="text" 
                  placeholder="Enter neighborhood or address..." 
                  className="w-full bg-transparent outline-none text-text-main placeholder:text-gray-400 font-medium"
                />
              </div>
              <button className="bg-brand-green text-white px-6 py-3 rounded-xl font-bold hover:bg-brand-forest transition-all">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Right Content (Visual Placeholders) */}
        <div className="flex-1 relative w-full h-[400px] lg:h-[600px]">
          {/* Main Hero Image Placeholder */}
          <div className="absolute top-0 right-0 w-[85%] h-[90%] bg-brand-sand rounded-3xl overflow-hidden shadow-2xl">
            <div className="w-full h-full bg-gradient-to-br from-brand-green/20 to-brand-forest/10 flex items-center justify-center italic text-brand-forest/40">
              Modern Luxury Interior Image
            </div>
          </div>
          
          {/* Overlapping Card Placeholder */}
          <div className="absolute bottom-4 left-0 w-64 p-4 bg-white rounded-2xl shadow-xl border border-gray-100 transition-transform hover:scale-105">
            <div className="h-32 bg-gray-100 rounded-xl mb-3"></div>
            <h4 className="font-bold text-text-main">Cozy Studio</h4>
            <div className="flex items-center justify-between mt-1">
              <span className="text-sm text-gray-500">Brooklyn, NYC</span>
              <div className="flex items-center gap-1 text-yellow-500">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <span className="text-sm font-bold text-text-main">4.7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
