import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Landing = () => {
  return (
    <div className="flex flex-col bg-bg-off-white font-sans overflow-hidden">
      {/* Top Logo Header */}
      <div className="absolute top-0 left-0 w-full p-8 lg:px-20 flex justify-between items-center z-50">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center shadow-lg shadow-brand-green/20">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </div>
          <span className="text-2xl font-bold text-text-main tracking-tight">Rentora</span>
        </div>
        <Link to="/login" className="text-brand-forest font-bold hover:text-brand-green transition-colors">
          Sign In
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 lg:px-20 py-20 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-green/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-brand-terracotta/10 rounded-full blur-[80px]"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column: Text Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-brand-green/10 text-brand-forest px-4 py-2 rounded-full font-bold text-sm tracking-wide uppercase">
                <span className="w-2 h-2 bg-brand-green rounded-full animate-ping"></span>
                The future of rental exploration
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-text-main leading-tight tracking-tight">
                Find your next home with <span className="text-brand-green">confidence.</span>
              </h1>
              
              <p className="text-gray-500 text-xl lg:text-2xl font-medium max-w-2xl leading-relaxed">
                Rentora connects you with authentic rental experiences, real neighbor reviews, and transparent property insights. No more hidden issues.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                <Link to="/signup" className="bg-brand-terracotta text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-[0_20px_40px_-10px_rgba(224,122,95,0.4)] transition-all transform hover:-translate-y-1 active:scale-95 text-center">
                  Start Your Journey
                </Link>
                <Link to="/login" className="bg-white border-2 border-brand-sand text-text-main px-10 py-5 rounded-2xl font-bold text-lg hover:bg-brand-sand/30 transition-all text-center">
                  Sign In
                </Link>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-4 pt-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <img 
                      key={i}
                      src={`https://i.pravatar.cc/100?img=${i+10}`} 
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                      alt="User"
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-400 font-medium">
                  <span className="text-text-main font-bold">2,400+</span> people found homes this week
                </p>
              </div>
            </div>

            {/* Right Column: Visual Elements */}
            <div className="relative">
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl rotate-3 transform transition-transform hover:rotate-0 duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80" 
                  alt="Modern Home"
                  className="w-full h-full object-cover aspect-[4/5]"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-xl z-20 hidden md:block animate-bounce-slow">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-green/20 rounded-2xl flex items-center justify-center text-brand-green">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Safety Rating</p>
                    <p className="text-lg font-bold text-text-main">4.9 / 5.0</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white px-6 lg:px-20">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-text-main">Why choose Rentora?</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">We provide the tools and transparency you need to rent with peace of mind.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
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
              <div key={idx} className="group p-10 rounded-[2.5rem] border border-gray-100 hover:border-brand-green/20 hover:shadow-2xl hover:shadow-brand-green/5 transition-all duration-500">
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-8 transform group-hover:scale-110 transition-transform duration-500`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-text-main mb-4">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed font-medium">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-24 px-6 lg:px-20">
        <div className="container mx-auto max-w-7xl bg-brand-forest rounded-[3rem] p-12 lg:p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-terracotta/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 space-y-10">
            <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">Ready to find your <br /> dream rental?</h2>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link to="/signup" className="bg-brand-terracotta text-white px-12 py-5 rounded-2xl font-bold text-lg hover:shadow-lg transition-all active:scale-95">
                Get Started Now
              </Link>
              <Link to="/about" className="bg-white/10 text-white border border-white/20 px-12 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default Landing;
