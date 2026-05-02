import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Landing = () => {
  return (
    <div className="flex flex-col bg-bg-off-white font-sans overflow-hidden">
      {/* Top Logo Header - Adjusted for mobile */}
      <div className="absolute top-0 left-0 w-full p-6 md:p-8 lg:px-20 flex justify-between items-center z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-brand-green rounded-full flex items-center justify-center shadow-lg shadow-brand-green/20">
            <svg width="18" height="18" className="md:w-[22px] md:h-[22px]" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </div>
          <span className="text-xl md:text-2xl font-bold text-text-main tracking-tight">Rentora</span>
        </div>
        <Link to="/login" className="text-brand-forest font-bold hover:text-brand-green transition-colors text-sm md:text-base">
          Sign In
        </Link>
      </div>

      {/* Hero Section - Vertical on mobile */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 lg:px-20 py-24 md:py-32 lg:py-20 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-[-5%] right-[-5%] md:top-[-10%] md:right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand-green/10 rounded-full blur-[80px] md:blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[-5%] left-[-5%] md:bottom-[-10%] md:left-[-10%] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-brand-terracotta/10 rounded-full blur-[60px] md:blur-[80px]"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column: Text Content */}
            <div className="space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-brand-green/10 text-brand-green px-4 py-2 rounded-full font-bold text-xs md:text-sm tracking-wide uppercase">
                <span className="w-2 h-2 bg-brand-green rounded-full animate-ping"></span>
                The future of rental exploration
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-text-main leading-tight tracking-tight">
                Find your next home with <span className="text-brand-green">confidence.</span>
              </h1>
              
              <p className="text-gray-500 text-lg md:text-xl lg:text-2xl font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Rentora connects you with authentic rental experiences, real neighbor reviews, and transparent property insights. No more hidden issues.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center lg:justify-start">
                <Link to="/signup" className="bg-brand-terracotta text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg hover:shadow-[0_20px_40px_-10px_rgba(224,122,95,0.4)] transition-all transform hover:-translate-y-1 active:scale-95 text-center">
                  Start Your Journey
                </Link>
                <Link to="/login" className="bg-white border-2 border-brand-sand text-text-main px-8 md:px-10 py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg hover:bg-brand-sand/30 transition-all text-center">
                  Sign In
                </Link>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-4 pt-4 md:pt-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <img 
                      key={i}
                      src={`https://i.pravatar.cc/100?img=${i+10}`} 
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white object-cover"
                      alt="User"
                    />
                  ))}
                </div>
                <p className="text-xs md:text-sm text-gray-400 font-medium">
                  <span className="text-text-main font-bold">2,400+</span> people found homes this week
                </p>
              </div>
            </div>

            {/* Right Column: Visual Elements */}
            <div className="relative order-1 lg:order-2 px-4 md:px-0">
              <div className="relative z-10 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl rotate-2 md:rotate-3 transform transition-transform hover:rotate-0 duration-700 max-w-md md:max-w-none mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80" 
                  alt="Modern Home"
                  className="w-full h-full object-cover aspect-[4/5]"
                />
              </div>
              {/* Decorative elements - Small adjustment for mobile */}
              <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-xl z-20 animate-bounce-slow">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-green/20 rounded-xl md:rounded-2xl flex items-center justify-center text-brand-green">
                    <svg width="20" height="20" className="md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-wider">Safety Rating</p>
                    <p className="text-base md:text-lg font-bold text-text-main">4.9 / 5.0</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid - 1 col mobile, 3 col desktop */}
      <section className="py-20 md:py-24 bg-white px-6 lg:px-20">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 md:mb-20 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-main leading-tight">Why choose Rentora?</h2>
            <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">We provide the tools and transparency you need to rent with peace of mind.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                title: 'Authentic Reviews',
                desc: 'Real experiences from actual tenants. We verify every review to ensure you get the truth.',
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
                color: 'bg-brand-green/10 text-brand-green'
              },
              {
                title: 'Property Insights',
                desc: 'Detailed data on maintenance, noise levels, and landlord responsiveness.',
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
                color: 'bg-brand-terracotta/10 text-brand-terracotta'
              },
              {
                title: 'Verified Listings',
                desc: 'Our team manually checks properties to prevent scams and misleading advertisements.',
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 11 12 14 22 4"/></svg>,
                color: 'bg-brand-forest/10 text-brand-forest'
              }
            ].map((feature, idx) => (
              <div key={idx} className="group p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-gray-100 hover:border-brand-green/20 hover:shadow-2xl hover:shadow-brand-green/5 transition-all duration-500">
                <div className={`w-14 h-14 md:w-16 md:h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 md:mb-8 transform group-hover:scale-110 transition-transform duration-500`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-text-main mb-4">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed font-medium text-sm md:text-base">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
